---
id: glossary
title: Glossary
sidebar_label: Glossary
slug: /glossary
---

#### Option
A [call](#call) or a [put](#put), an option is a contract that gives the owner the right to buy (in the case of a call) or sell (in the case of a put) a number of the [underlying asset](#underlying-asset) at a predetermined price ([strike price](#strike-price)) on or before a fixed expiration date.

#### Call
Buyers of call options generally expect the [underlying asset](#underlying-asset) to increase in value, whereas sellers of calls expect a decrease in value or remain the same.

Buying a call gives you the right, but not the obligation, to buy the [contract size](#contract-size) amount of underlying asset at the option's strike price. Price of the call option should increase as the price of the underlying asset increases.

Writing a covered call option allows you to collect the premium while obligating you to sell a contract size amount of the underlying asset to the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract.

#### Put
Buyers of put options generally expect the [underlying asset](#underlying-asset) to decrease in value, whereas sellers of puts expect an increase in value or remain the same.

Buying a put gives you the right, but not the obligation, to sell the [contract size](#contract-size) amount of underlying asset at the option's strike price. Price of the put option should increase as the price of the underlying asset decreases.

Writing a secured put option allows you to collect the premium while obligating you to buy a contract size amount of the underlying asset from the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract.

#### Covered Call
An option strategy composed of a short call option and long the same [underlying asset](#underlying-asset), generally used if you expect the underlying asset price to stay relatively flat or increase moderately. For example, you would mint/sell 1 SOL/USDC call while locking up 100 SOL as collateral for calls with [contract size](#contract-size) of 100.

#### Secured Put
An option strategy composed of a short put option and short the same [underlying asset](#underlying-asset), generally used if you expect the underlying asset price to stay relatively flat or increase moderately. For example, you would mint/sell 1 SOL/USDC put while locking up 4000 (strike price * contract size) USDC as collateral for puts at [strike price](#strike-price) of 40 and [contract size](#contract-size) of 100.

#### Underlying asset
The asset to be locked when writing a covered call, or received when exercising a covered call.

#### Quote asset
The asset used to price the underlying asset.

#### Contract size
How many of the underlying asset can the option holder exercise for.
Or in other words, how many underlying asset need to be locked when writing a covered call.

#### Bid
The price at which a buyer is willing to buy an option, meaning the price at which a seller can immediately sell an option.

#### Ask
The price at which a seller is willing to sell an option, meaning the price at which a buyer can immediately purchase an option. 

#### Strike price
The price in which the exerciser may exchange quote asset for the locked [underlying asset](#underlying-asset).

#### Expiration
The last date where the option may be exercised.

#### Exercise
Exercise means to put into effect the right to buy or sell the [underlying asset](#underlying-asset) specified in an options contract. When a call option owner exercises their contract, they will buy the underlying assets from the option writer at the agreed upon [strike price](#strike-price). When a put option owner exercises their contract, they will sell the underlying asset to the option writer at the agreed upon strike price.

#### IV
Implied Volatility(IV) is an estimate of the volatility of the underlying asset that is derived from the market value of an option. It is essentially the market's forecast of a likely movement in an underlying asset's price
