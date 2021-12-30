---
id: arch-option-types
title: Option types
sidebar_label: Option types
slug: /american-v1/option-types
---

There are two primary types of vanilla option contracts, American and European. This section is intended to break down the pros and cons of each and explain a bit of the thinking behind our existing architecture.

*Primer*
```
American Options give the holder the right, but not the obligation to exercise up until the expiration date.

European Options give the holder the right, but not the obligation to exercise at the time of expiration.
```

When discussing how options could work on Solana, we evaluated these two types. Due to the differences of when one may exercise, there are various technical trade offs as well as financial engineering trade offs.

### Option style trade offs

##### American
American style options offer flexibility to the option holder as they may exercise the option at any point up until the expiration date. This is beneficial for retail investors that may be purchasing options to speculate. While the flexibility for the option holder is great, this makes it much more **difficult to price an option**. Institutions and market makers have been the first to suggest switching to European as the more standard price formulas can make market making more straightforward.

Settlement of American style options is very straightforward from an on-chain settlement perspective. If the option has not expired, the holder may exercise.

##### European
European options lack the flexibility of American style, but are easier to price as the option holder can only exercise on the expiration date. It may be safe to assume that the easier the options are to price, the more likely institutions and market makers are to write options. In an ideal world, the program would be able to exercise at the time of expiration if the option is in the money. However, we're working on-chain where there are no background processes to handle such functionality. So this makes the settlement of European options a bit more tricky.

An option holder cannot exercise until the expiration date, but at some point we must let the option writer collect their underlying asset (i.e contracts were not exercised) or receive the quote asset (i.e. contracts were exercised). This means there must be some window of time in which the option holder may exercise, but the option writer may not claim their assets. For clarity, if the option writer was able to claim their asset at the same time, then a scenario is introduced where no option holder could exercise when all of the option writers claimed their underlying assets. So the program likely needs a window long enough to allow all option holders a fair chance to exercise, but short enough that option writers do not have their assets locked to the point the opportunity cost to write an option is too high. 

In traditional US Equities, options settle in 1 day. If we were to translate that on-chain, there would be a 24 hour window where contract holders would have to exercise their contracts. In theory, after that settlement period, those tokens denoting a contract would be completely worthless.

The window is non obvious to our team at the moment, which is partly why we began with American style options. As we continue to collect feedback, we'd love to hear the community's thoughts around this subject.