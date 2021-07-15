---
id: faq
title: FAQ
sidebar_label: FAQ
slug: /faq
---

- [What are options?](#what-are-options)
- [Why did PsyOptions choose to build on Solana?](#why-did-psyoptions-choose-to-build-on-solana)
- [How will PsyOptions fit within the Solana Ecosystem?](#how-will-psyoptions-fit-within-the-solana-ecosystem)
- [Does PsyOptions offer American or European style options?](#does-psyoptions-offer-american-or-european-style-options)
- [Will there be an airdrop?](#will-there-be-an-airdrop)
- [Does PsyOptions offer leverage?](#does-psyoptions-offer-leverage)
- [What type of assets does PsyOptions support?](#what-type-of-assets-does-psyoptions-support)
- [Can I create my own markets on PsyOptions?](#can-i-create-my-own-markets-on-psyoptions)
- [How are options priced on PsyOptions?](#how-are-options-priced-on-psyoptions)
- [Why does the option writer receive two separate tokens? Isn’t the written contract tied to the option?](#why-does-the-option-writer-receive-two-separate-tokens-isnt-the-written-contract-tied-to-the-option)
- [How is PsyOptions different from the other options protocols out there?](#how-is-psyoptions-different-from-the-other-options-protocols-out-there)

### What are options?

Options are financial derivatives that give the buyer the right, but not the obligation, to buy or sell an underlying asset at an agreed upon price and date. More information can be found here: https://www.investopedia.com/terms/o/option.asp

### Why did PsyOptions choose to build on Solana?

PsyOptions began with the goal to bring a TradFi feel to DeFi. With the launch of Serum, trading options on an orderbook was an actual possibility. The fast block times reduces time until settlement and allows traders to have orders placed, filled, or killed in a speed closest to that of a traditional exchange.

### How will PsyOptions fit within the Solana Ecosystem?

PsyOptions V1 is the clearing and settlement layer for Options on Solana. With no external dependencies (i.e. oracles), options can be created for any SPL token over any duration in a completely trustless manner. This allows future protocols to integrate options into their programs in any manner they see fit.

We're open to helping any team looking to integrate options in their protocol or [use options to incentivize participation](https://medium.com/psyoptions/the-options-are-limitless-58dddbd28cb4).

### Does PsyOptions offer American or European style options?

PsyOptions offers American style option contracts.

### Will there be an airdrop?

There is no airdrop planned at the moment. However, we have and will continue to update our community incentive programs.

### Does PsyOptions offer leverage?

PsyOptions V1 does not offer leverage as the options are 100% collateralized when written. There may be external ways to get leverage in the future by composing with a lending protocol.

### What type of assets does PsyOptions support?

PsyOptions supports any and all SPL tokens!

### Can I create my own markets on PsyOptions?

Yes! Anyone can create new markets on the PsyOptions protocol.

### How are options priced on PsyOptions?

PsyOptions makes no assumptions on price, and allows users to price how they want. Market makers on Serum will price options as they see fit.

### Why does the option writer receive two separate tokens? Isn’t the written contract tied to the option?

The writer will receive one token that represents the option. This token allows the holder to exercise prior to the expiration and thus can be sold for a premium.

The second token is the writer token. In TradFi a clearing house may keep track of who wrote a specific option. In a sense, these options would be nonfungible as they're tied to a specific person. The options must be fungible in order to compose with Serum order books, AMMs, and other protocols that require a quantity greater than one to be functional. So they're not tied to the option in any way.

The writer token being fungible as well allows for some other interesting possibilities. It could allow a lending market to accept writer tokens as collateral for loans or an AMM could create pools with writer tokens so user's may sell their claim on the underlying asset.

### How is PsyOptions different from the other options protocols out there?

PsyOptions is the “option factory” and settlement layer. The protocol makes no assumptions on price, allowing users to price how they want. The protocol also makes no assumptions on the size of option contracts. This makes PsyOptions flexible, composable, and allows others to build on top of it.
