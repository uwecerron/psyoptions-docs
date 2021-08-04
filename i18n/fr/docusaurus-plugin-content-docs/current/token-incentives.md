---
id: token-incentives
title: PSY Token
sidebar_label: token-incentives
slug: /psy-token
---

_**NOTE: NO PSY TOKEN HAS BEEN MINTED OR IS CIRCULATING AT THE MOMENT. ANY TOKEN CURRENTLY CLAIMING TO BE PSY IS A SCAM**_

_**THE INFORMATION LAID OUT HERE ARE TENTATIVE PLANS FOR A FUTURE TOKEN**_

This document does its best to explain where PsyOptions needs community contributors and how those contributions are rewarded.

PsyOptions aims to foster an engaging and collaboritive community, join our [discord](https://discord.com/invite/MgDdJKgZJc) or [telegram](https://t.me/psyoptions) to get involved in the conversations! Note: The core contributors are most active in Discord.

## Developer Contributions
Contribute code, get PSY!

### Grants
If you have an idea for some sort of protocol, UI Component, or anything else that is useful for the PsyOptions ecosystem please reach out to developers@psyoptions.io. PsyOptions is actively looking to partner and reward developers that want to build with us.

#### Examples

##### Structured Products
Any sort of structured product that leverages the PsyOptions protocol.

##### AMM
An AMM that uses contracts from PsyOptions.

### Bounties
Below is a list of bounties PsyOptions is offering for developers in our community to help out. If you're interested in working on, have completed one, etc. please reachout to developers@psyoptions.io so the list can update accordingly!

| Bounty Title                       | Short Description                                                                                                                         | More Info                   | PSY Allocated |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |:-------------:|
| Borrow on the Writer Token         | A borrow lending protocol could allow the Writer Token to be used as collateral, so option writers can get back some of their underlying. | Detailed ticket coming soon |      TBD      |
| Multi-legged strategy UI component | A react component that leverages the PsyOptions bindings to display payoffs and execute multi-legged strategies                           | Detailed ticket coming soon |      TBD      |

## DeFi Thought Leaders
The core contributors are incredible engineers, but are all retail traders. There are ideas on where PsyOptions should go, but this is a community led project. PsyOptions leans on the community to contribute feedback, ideas, and incredible visions about what the next iteration of PsyOptions should be.

If you want to get involved and help improve PsyOptions, please join the [discord](https://discord.com/invite/MgDdJKgZJc) and express your interest in becoming a PsyOptions _DeFi Thought Leader_. If you spur some great converstaions you could land yourself in a private channel with other leaders!

## Liquidity Mining
The PsyOptions liquidity mining program is focused on incentivizing market makers to provide liquidity on Serum’s order books at the best possible prices. Those that price well and have orders filled will receive PSY tokens.

PsyOptions is a complimentary protocol to Serum, so it has no hooks into Serum transactions. Beacuse of that, the PsyOptions Market Tracker will be used to monitor all Serum markets where the base currency is minted from the PsyOptions protocol (i.e. a PsyOptions option contract trading on Serum).

### Phase 1
Duration: about 12 months (1 year) after mainnet beta launch<br /> Total Supply: TBD (PSY)<br /> Weekly Reward Pool: TBD (PSY)<br />

At the end of every week a snapshot will be taken from the PsyOptions Market Tracker. It will detail all contracts that traded on Serum within the week and attrbiute them to the address that posted the order. The tracker will aggregate the contract premiums each address sold and use that aggregate over the total premiums for all addresses that week to determine an addresses share of the _Weekly Reward Pool_.

For Example:

| Address   | Total Premiums | Share of Reward Pool |
| --------- | -------------- | -------------------- |
| address_1 | USDC 500,000   | 66.6%                |
| address_2 | USDC 230,000   | 30.666%              |
| address_3 | USDC 10,000    | 1.33%                |
| address_4 | USDC 1,000     | 0.13%                |
| address_5 | USDC 9,000     | 1.2%                 |
| Total     | USDC 750,000   | 100%                 |

## Marketing

Pay attention to our [Twitter](https://twitter.com/PsyOptions). We will be running campaigns where you can get rewarded in PSY.
