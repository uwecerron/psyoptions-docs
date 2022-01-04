---
id: american-how-it-works
title: American Protocol V1 How It Works
sidebar_label: How It Works
slug: /american-v1/how-it-works
---

To truly understand how the protocol and platform works, one needs to understand what's 
happening under the hood. Here we will do our best to break down each interaction an entity
may make with the protocol and what's happening.

## Initialize new options market
![initialize market](/img/how-it-works/initialize_market_page.png)

The protocol is designed to be a primitive, so it makes very little assumptions about options,
how they should be traded, priced, etc. The protocol itself also makes no assumptions on what
assets should have options and which should not. It has been built with various use cases in 
mind, like writing contracts on NFTs, tokenized property deeds, tokenized stocks...anything 
that can be represented as an SPL Token can have an option market. Will there be liquidity 
on those markets is a topic for another discussion ;).

Option markets themselves are completely open and permissionless. If there are a pair of assets
you want to write options on, you can create that market! To do so you need to use the 
`InitializeMarket` instruction. Each market is governed by specific parameters that determine its fungibility. Those parameters include:

````Rust
pub struct OptionMarket {
  ...
    /// The SPL Token Address that is held in the program's pool when an option is written
    pub underlying_asset_mint: Pubkey,
    /// The SPL Token Address that denominates the strike price
    pub quote_asset_mint: Pubkey,
    /// The amount of the **underlying asset** that derives a single option
    pub underlying_amount_per_contract: u64,
    /// The amount of **quote asset** that must be transfered when an option is exercised
    pub quote_amount_per_contract: u64,
    /// The Unix timestamp **in seconds** at which the contracts in this market expire
    pub expiration_unix_timestamp: UnixTimestamp,
  ...
}
````

It is important to note that the protocol uses deterministic addressing of markets, based on 
the unique parameters, so there can never be two of the exact same market. This was a conscious
decision of V1 to reduce the chance of fragmented liquidity. 

Creating a new market is extremely cheap and easy! When a new market is initialized a few things
happen. The most important are the creation of the **Underlying Asset Pool** and the 
**Quote Asset Pool** for that market. These pools are unique to and owned by each individual 
market. When someone mints an option contract, their collateral is stored in these pools, more 
on that next.

## Minting an option
<!-- TODO show image of mint component -->

Without a doubt, the most important and widely used instruction of the protocol. When you want to 
mint a contract for a given market you need the `MintCoveredCall` instruction. It is 
**extremely important to note** that although this instruction contains the phrase _Covered Call_
in the V1 protocol, all contracts can be considered covered calls. PUTs are simply the reciprocal 
of a CALL, and all of V1's markets require 100% collateral upfront. More can be read 
[here](./arch-put-call.md).

To mint a contract, the contract writer must put up 100% of the `underlying_amount_per_contract` 
plus a 5bps minting fee. This small fee will go to the PsyOptions treasury and will be adjustable (or removable) via 
governance. So the total underlying assets required to mint 1 contract is:

`underlying_assets_required = underlying_amount_per_contract + (underlying_amount_per_contract * 0.0005)`

These underlying assets are then stored in the option markets' _Underlying Asset Pool_. If 
the transfer to the pool succeeds (i.e. enough underlying was posted), then the protocol 
mints the user 2 tokens, the **OptionToken** and the **WriterToken**. 

The **OptionToken is the actual contract**, which gives the holder _the right but not 
the obligation to swap the quote assets for the underlying assets at the agreed upon 
strike price_. The OptionToken is an SPL Token, so it can be transferred or traded on
any venue that has SPL Token support. 

The **WriterToken** denotes the holder is short the option or wrote the contract. Lets
break that statement down into more logical terms. Given this is an American style contract
the OptionToken holder can exercise at any point in time prior to expiration. So at any point
(pre or post expiration) the WriterToken gives the holder the ability to claim the 
`quote_amount_per_contract` should anyone exercise and the Quote Asset Pool contains 
enough of a balance. Post expiration, the WriterToken gives the holder the ability to 
claim the `underlying_amount_per_contract` back from the Underlying Asset Pool.

So to generate yield from writing a contract, you would sell the OptionToken. 
That could be done OTC and transferred, on a Serum market, or any other venue that creates
and exchange for a market's SPLs. 

## Exercising a contract
<!-- TODO image of the exercise row -->

With the OptionToken we have the ability to exercise the contract with the use of the 
`ExerciseCoveredCall` instruction. To exercise we must post the OptionToken held and
the `quote_amount_per_contract` plus a 5bps fee. This small fee will got to the PsyOptions 
treasury and will be adjustable (or removable) via governance. So the total quote 
asset that must be posted is 

`quote_assets_required = quote_amount_per_contract + (quote_amount_per_contract * 0.0005)`

With the correct amount posted, the protocol burns the OptionToken, transfers 
`quote_amount_per_contract` to the market's Quote Asset Pool, and transfers 
`underlying_amount_per_contract` to the exerciser's address. 


Now that someone has exercised, we'll cover how a contract writer can claim those assets.

## Extracting assets from an exercised contract
<!-- TODO image of a imbalanced pools -->

Economic theories have proven that it is not beneficial to exercise a contract early, but
this is not TradFi. The composability of PsyOptions American V1 provides many use cases 
outside of pure volatility trading, portfolio hedging, etc. where exercising early will
most certainly happen. Let's take protocol XYZ that is running a liquidity mining program
that incentivized new liquidity providers with At The Money (ATM) contracts that expire
in 10 years. As long as project XYZ continues to grow, these contract holders will most
certainly exercise early. 

Now when that early exercise occurs, the contract writer is able to claim the quote assets 
as soon as they are available. To do so, the contract writer must use the 
`ExchangeWriterTokenForQuote` instruction. The user must post the WriterToken. The 
protocol will burn the WriterToken and transfer the `quote_amount_per_contract` to the
writer's wallet. 

A few items to note. First, this instruction can be called at any point in time, so long
as there are enough quote assets in the Quote Asset Pool. Second, this instruction acts 
on a **first come, first serve basis**. All OptionTokens and WriterTokens for a given 
market are respectively fungible (i.e. Any OptionToken is the same as another for the 
given market. The same is true for the WriterToken.). So as soon as someone exercises an 
OptionContract **anyone holding a WriterToken for that market has a claim on the quote assets**.

## Getting your underlying back after expiration
<!-- TODO image of full underlying asset pool, no quote -->

After expiration, a contract writer has a claim on their original underlying assets that they 
posted to write the contract. **Only after expiration** can a WriterToken sent to the protocol
be burned in exchange for the `underlying_amount_per_contract`. This is done through the 
`ClosePostExpiration` instruction.

## Closing a position pre-expiration

What happens if you wrote too many contracts at once? Or your exposure has changed and you need 
to close your position? This is where the `ClosePosition` instruction comes in. This instruction 
**requires you to have both the OptionToken and the WriterToken**. At anypoint (pre or post 
expiration) if a wallet calls this instruction with the correct token pair preset, it will 
receive the `underlying_amount_per_contract`. The protocol checks and burns both tokens and then transfers the underlying assets from the pool to the wallet. 






