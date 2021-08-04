---
id: arch-put-call
title: Call vs Put
sidebar_label: Call vs Put
slug: /architecture/call-put
---

The two option contract types (not styles) are Calls and Puts. A call option gives the option holder the right but not the obligation to buy the underlying asset at a specified price by, or at, a certain date. A put option gives the option holder the right but not the obligation to sell the underlying asset at a specified price by, or at, a certain date.

PsyOption option positions are fully collateralized meaning only covered calls and secured puts are supported. To write a Call option, the option writer locks up the underlying asset. Similarly, to write a Put, the option writer locks up the quote asset.

### Under the hood
At the protocol level, there is no concept of Call vs Put. The astute reader will recognize that if you parameterize the underlying and quote asset for options, the function of the Call and Put has an inverse relationship to the assets. More plainly, the protocol does not have an instruction to mint a Put, only an instruction to mint a Call.

The Put is created by using the reciprocal asset pair. So a Put for SOL/USDC would simply be a call for USDC/SOL.