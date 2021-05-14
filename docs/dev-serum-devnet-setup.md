---
id: dev-serum-devnet-setup
title: Serum setup
sidebar_label: Serum setup
slug: /devnet/serum-setup
---

Currently, Serum does not have devnet support. This article will help share how we have gotten around this to work in a more collaberative manner with the Solana development community.

#### Deployed DEX program
Our friends at [Mango Markets](https://mango.markets/) have deployed the Serum DEX program at the address `DESVgJVGajEgKGXhb6XmqDHGz3VjdgP7rEVESBgxmroY`

It's important to note that this is a forked DEX program that has been modified to use a devnet create SRM and MSRM.

#### UI
Unfortunately the Serum DEX UI doesn't work out of the box with devnet. So during development, you'll either need to fork and modify the Serum DEX UI or write your own version.

#### Reading errors
There are two different types or error messages.

The first is a `DexError`, which is an error typically related to the overall program state. This error will print the number value of the related to the `DexError` enum.

The other is an assertion from the macro `declare_check_assert_macros`. These errors are a bit more revealing as they have a hex string that represents the sourc file as well as the line number where the assertion failed.



