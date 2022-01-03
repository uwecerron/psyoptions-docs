---
id: glossary
title: Glossary
sidebar_label: Glossary
slug: /glossary
---

#### Option
An option is a contract that gives the owner the right to buy (in the case of a [call](#call)) or sell (in the case of a [put](#put)) a number of the [underlying asset](#underlying-asset) at a predetermined price ([strike price](#strike-price)) on or before a fixed [expiration](#expiration) date.

#### Call
Buyers of call options generally expect the [underlying asset](#underlying-asset) to increase in value, whereas sellers of calls expect a decrease in value or for the value to remain the same.

Buying a call gives you the right, but not the obligation, to buy the [contract size](#contract-size) amount of the underlying asset at the option's [strike price](#strike-price). The value of a call option should increase as the price of the underlying asset increases.

Writing a [covered call](#covered-call) option allows you to collect the premium while obligating you to sell the contract size amount of the underlying asset to the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract.

#### Put
Buyers of put options generally expect the [underlying asset](#underlying-asset) to decrease in value, whereas sellers of puts expect an increase in value or for the value to remain the same.

Buying a put gives you the right, but not the obligation, to sell the [contract size](#contract-size) amount of underlying asset at the option's strike price. The value of the put option should increase as the price of the underlying asset decreases.

Writing a [secured put](#secured-put) option allows you to collect the premium while obligating you to buy a contract size amount of the underlying asset from the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract.

#### Covered Call
An option strategy executed by selling a call option while holding the same [underlying asset](#underlying-asset). This strategy is generally used if you expect the underlying asset price to stay relatively flat or increase moderately. For example, you would mint/sell 1 SOL/USDC call while locking up 100 SOL as collateral for calls with [contract size](#contract-size) of 100. 

#### Secured Put
An option strategy composed of selling a [put](#put) option while retaining enough cash to purchase the [underlying asset](#underlying-asset) if the option contract is executed by it's buyer. This strategy is generally used if you are bearish on an asset short term, but bullish long term. For example, you would mint/sell 1 SOL/USDC put while locking up 4000 (strike price * contract size) USDC as collateral for puts at [strike price](#strike-price) of 40 and [contract size](#contract-size) of 100.

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
Implied Volatility(IV) is an estimate of the volatility of the underlying asset that is derived from the market value of an option. It is essentially the market's forecast of a likely movement in an underlying asset's price.

#### In the Money
An In the Money(ITM) option is one with a [strike price](#strike-price) that has already been surpassed by the price of the [underlying asset](#underlying-asset).

#### Out of the Money
An Out of the Money(OTM) option is one with a [strike price](#strike-price) that the price of the [underlying asset](#underlying-asset) has yet to reach. 

#### At the Money
An At the Money(ATM) option is one with a [strike price](#strike-price) that is equal to the current price of the [underlying asset](#underlying-asset).

### The Greeks

#### Beta
Beta is a measure of the volatility of an asset compared to the overall market. In addition to being a measure of the volatility of an asset compared to the overall market, beta can also be used to assess the risk of a coin in comparison to a benchmark. 

Example: If you took the entire crypto market and compared it against itself you would get a beta value of 1. However, if you take a specific coin such as SOL and compare it against the crypto market, you will likely get a beta value that is higher or lower than 1.

Beta values higher than 1 indicate that a coin is more volatile than the overall market while also being correlated to the overall market. On the other hand, beta values lower than 1 indicate that a coin is less volatile in comparison to the market, or that it is not correlated to the market.

#### Delta
Delta measures an option's sensitivity to a change in price of the [underlying asset](#underlying-asset). Delta is measuring the rate of change between the option’s price and a $1 change in the underlying asset's price. 

Example: A delta of 0.40 means that in theory, the option's price will move $0.40 for every $1 move in the underlying asset's price.

Delta can be a number between -1 and 1, depending on the type of contract. [Call](#call) options can range from 0 to 1, while [put](#put) options can range from -1 to 0.

#### Gamma
Gamma is the rate of change in an option's [delta](#delta) per 1 point move in the [underlying asset](#underlying-asset) price. When an option's price is deep [ITM](#in-the-money) or [OTM](#out-of-the-money), it's gamma is near zero. When the option's price is [ATM](#at-the-money), it's gamma is large. All long options have a positive gamma, while all short options have a negative gamma. 

#### Vega
Vega measures an options sensitivity to [implied volatility](#iv).

Example: The value of an option is 5.00, implied volatility is at 20, and the option has a vega of .12. If implied volatility moved to 21.5, the option's price would increase by 1.5 x .12 = .18 making the new value 5.18.

#### Theta
Theta, also known as time decay, is an option's sensitivity to time. It is the amount your option's value decreases as it gets closer to it's [expiration](#expiration) date. Theta is typically represented as a negative number because once you purchase an option and time starts to move towards the expiration date, the potential for the option to be profitable begins to decrease. 

However, when you sell an option, theta usually increases. This is because as a seller of an option, it is typically more beneficial to you if the option expires without being exercised. This is why selling options are often referred to as "postive theta trades".

### Options Strategies

#### Bull Call Spread
A Bull Call Spread is an option strategy that you can utilize if you think the price of the [underlying asset](#underlying-asset) will go up, but not by much. To execute this strategy, you use two call options to form a price range with a lower and higher [strike price](#strike-price). 

To start, purchase a [call](#call) with a [strike price](#strike-price) that is higher than the current market price of the [underlying asset](#underlying-asset). Then, sell a [call](#call) with a [strike price](#strike-price) that is even higher than the strike price of the call you purchased with the same [expiration](#expiration) date. Selling this [call](#call) helps offset the cost of purchasing the original call. 

When executing this strategy, your losses are limited to the net cost of creating the spread, but this also limits your potential gains. Typically this strategy is executed during times of high market volatility.

#### Bear Put Spread
The Bear Put Spread can be used when you are expecting a moderate to significant drop in an asset’s price, and you want to reduce the cost and risk associated with your trade. Similar to the [Bull Call Spread](#bull-call-spread), this strategy is achieved by using two separate [put](#put) options.

To execute this trade, you would purchase a [put](#put) option while also selling a put option with the same [expiration](#expiration) date at a lower [strike price](#strike-price). Selling the [put](#put) option with the lower [strike price](#strike-price) helps cover some of the premium you paid when purchasing the initial put. You’re also greatly reducing your risk as the risk is limited to the cost of setting up the spread.

This strategy allows you to profit from the price of the [underlying asset](#underlying-asset) going down while not exposing you to the theoretically unlimited loss that can occur when short selling.

#### Protective Collar
When market volatility picks up drastically, and you’re not sure what’s going to happen, you can utilize this strategy. With this strategy you can protect yourself from short term downside losses, while also retaining the ability to make money if price goes up. 

If you hold the [underlying asset](#underlying-asset), and want to protect this position from a potentially drastic sell off, you would first purchase an [OTM](#out-of-the-money) [put](#put). Then, you would sell an [OTM](#out-of-the-money) [call](#call) with the same [expiration](#expiration) date as the [put](#put) you purchased. 

Writing the [call](#call) option essentially pays for the [put](#put), and in theory you could even end up with a net gain using this strategy. This sound like a no brainer way to protect your position, but there is one major drawback. If price doesn’t go down, and instead surges upwards past the written call's [strike price](#strike-price), you’ll be forced to sell your [underlying asset](#underlying-asset) to the purchaser of the [call](#call) option.

#### Long Straddle
This strategy is typically used when traders expect a news event to move the price of a particular asset. To execute this strategy, you would purchase both a [call](#call) and a [put](#put) with the same [expiration](#expiration) date and [strike price](#strike-price). Since the strike price is [ATM](#at-the-money) or close to it, small moves in either direction are essentially canceled out.

While this strategy can be a useful way to prepare yourself for a potentially large move in price, it does have downsides. The market may not react to this event at all, and also, you are not the only person aware of this event. Options sellers will increase their premiums because of this event, making this an expensive strategy to execute. 

Due to the expensive nature of this strategy, it is cheaper and arguably better to simply bet on one direction. This decision is of course up to the trader. Considering that the potential profit is unlimited, and the potential loss is limited, it may be worth it.

#### Long Strangle
This strategy is nearly identical to the [Long Straddle](#long-straddle) strategy except for two key differences. Rather than purchasing an [ATM](#at-the-money) [call](#call) and an ATM [put](#put), you would purchase an [OTM](#out-of-the-money) call and an OTM put. Also, rather than having the same [strike price](#strike-price), the call and put you purchase for this strategy will have different strike prices. They will still have the same [expiration](#expiration) date.

Purchasing an [OTM](#out-of-the-money) [call](#call) and an OTM [put](#put) makes this strategy cheaper to execute than a Long Straddle, however, it is considered riskier because price will have to be an even larger amount to be profitable. 

#### Long Call Butterfly Spread
In general, Butterfly Spreads are strategies that utilize both bull spreads and bear spreads to generate a market neutral strategy with fixed risk and profit. These strategies utilize four option contracts that all have the same [expiration](#expiration) date, with three equidistant [strike prices](#strike-price). The Long Call Butterfly Spread is essentially a combination of a [bull call spread](#bull-call-spread) and a bear call spread. 

To set up a Long Call Butterfly spread, first you would buy a [call](#call) at strike price A. Then sell two calls at strike price B. Finally, you would purchase one last call at strike price C.

The sweet spot for this set up is if the asset is at strike B upon expiration. This makes your max potential profit from this strategy strike B minus strike A minus the net debit paid. Your max potential loss is simply the cost to set up the spread. Your two break even points are at strike price A plus the net debit paid, and strike price C minus the net debit paid. 

Since you are managing four separate contracts with three different strike prices, we would only recommend this strategy once you are a more seasoned options trader.
