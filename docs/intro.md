---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

PsyOptions is an American style options protocol built on the Solana blockchain.
The principles that have guided the architecture and development of the core protocol are flexibility and composability.
It is completely trustless. The core protocol makes no assumptions on how the options should be traded or priced.
Options are represented as SPL Tokens, which means they can be traded on any DEX that supports SPL Tokens.

V1 will support 100% collateralized, asset settled, covered calls and secured puts.

## Architecture

There are five main parameters that the protocol uses when interacting with options markets.

- Underlying asset
- Quote asset
- Contract size
- Strike price
- Expiration

Any user may initialize a market by supplying these values as arguments. 
Fungibility of option SPL Tokens are determined by the uniqueness of these parameters.

## How it works

### Writing an option

To write an option, one must lock the underlying asset in the amount specified by the option market.
For a SOL/USDC option with underlying asset size of 100, 100 SOL would be locked in order to mint the option token.
The option writer will receive two SPL Tokens. 
One represents the option, which the user may sell to generate yield.
The other represents the written contract (the claim on the underlying asset) and can be exchanged for the underlying asset post expiration.

### Exercising an option

Holding an option token pre expiration gives the user the ability to exercise by swapping quote asset for underlying asset.
Whether the option is in the money or out of the money, its completely up to the token holder whether or not to exercise.
When exercising, the exerciser locks [strike price * underlying asset size] worth of quote asset, burns the option token, and receives the underlying asset.
