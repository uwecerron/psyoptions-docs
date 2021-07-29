---
id: javascript-api
title: Javascript API
sidebar_label: API
slug: /client-integration/javascript
---

### Getting Started

```sh
yarn add @mithraic-labs/psyoptions
```

More docs will be coming soon on how to use the following instructions.

### Functions

- [initializeAccountsForMarket](#initializeaccountsformarket)
- [initializeMarketInstruction](#initializemarketinstruction)
- [mintCoveredCallInstruction](#mintcoveredcallinstruction)
- [exerciseCoveredCallInstruction](#exercisecoveredcallinstruction)
- [exchangeWriterTokenForQuoteInstruction](#exchangewritertokenforquoteinstruction)
- [closePositionInstruction](#closepositioninstruction)
- [closePostExpirationCoveredCallInstruction](#closepostexpirationcoveredcallinstruction)

## Functions

---

### initializeAccountsForMarket

▸ **initializeAccountsForMarket**(`object`: { `connection`: _Connection_ ; `payer`: _Account_ ; `programId`: _string_ \| _PublicKey_ }): _Promise_<{ `optionMintKey`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `signers`: _Account_[] ; `transaction`: _Transaction_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ }\>

Generate and initialize the Accounts to be used for the new option market.

#### Parameters:

| Name                | Type                    | Description                                           |
| :------------------ | :---------------------- | :---------------------------------------------------- |
| `object`            | _object_                | -                                                     |
| `object.connection` | _Connection_            |                                                       |
| `object.payer`      | _Account_               | Account to pay for the creation of these new accounts |
| `object.programId`  | _string_ \| _PublicKey_ | the public key for the PsyOptions program             |

**Returns:** _Promise_<{ `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `signers`: _Account_[] ; `transaction`: _Transaction_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ }\>

### initializeMarketInstruction

▸ **initializeMarketInstruction**(`object`: { `expirationUnixTimestamp`: _number_ ; `fundingAccountKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `quoteAmountPerContract`: _number_ ; `quoteAssetMintKey`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `underlyingAmountPerContract`: _number_ ; `underlyingAssetMintKey`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `InitializeMarket`

Instruction to initialize a new option market. Strike price is determined by
`quote amount per contract / underlying amount per contract`

#### Parameters:

| Name                                 | Type        | Description                                                                                |
| :----------------------------------- | :---------- | :----------------------------------------------------------------------------------------- |
| `object`                             | _object_    | -                                                                                          |
| `object.expirationUnixTimestamp`     | _number_    | unix timestamp when the option market expires                                              |
| `object.fundingAccountKey`           | _PublicKey_ | The payer account that is funding the SOL for the TX                                       |
| `object.optionMintKey`               | _PublicKey_ | uninitialized SPL Token mint to be used as the Option Token mint for the new option market |
| `object.programId`                   | _PublicKey_ | the public key for the PsyOptions program                                                  |
| `object.quoteAmountPerContract`      | _number_    | amount of quote needed to exercise the option                                              |
| `object.quoteAssetMintKey`           | _PublicKey_ | SPL Token mint of the quote asset                                                          |
| `object.quoteAssetPoolKey`           | _PublicKey_ | unintitialized SPL Token account to store locked quote asset                               |
| `object.underlyingAmountPerContract` | _number_    | amount of underlying asset needed to mint an Option Token                                  |
| `object.underlyingAssetMintKey`      | _PublicKey_ | SPL Token mint of the underlying asset                                                     |
| `object.underlyingAssetPoolKey`      | _PublicKey_ | unintitialized SPL Token account to store locked underlying asset                          |
| `object.writerTokenMintKey`          | _PublicKey_ | uninitialized SPL Token mint to be used as the Writer Token mint for the new option market |

**Returns:** _Promise_<TransactionInstruction\>

---

### mintCoveredCallInstruction

▸ **mintCoveredCallInstruction**(`object`: { `authorityPubkey`: _PublicKey_ ; `fundingAccountKey`: _PublicKey_ ; `mintedOptionDestKey`: _PublicKey_ ; `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `size`: _BN_; `underlyingAssetPoolKey`: _PublicKey_ ; `underlyingAssetSrcKey`: _PublicKey_ ; `underlyingMintKey`: _PublicKey_ ; `writerTokenDestKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `MintCoveredCall`

Mints an Option Token and Writer Token after successfully transfering
underlying asset to the option market's pool.

#### Parameters:

| Name                            | Type        | Description                                                                                   |
| :------------------------------ | :---------- | :-------------------------------------------------------------------------------------------- |
| `object`                        | _object_    | -                                                                                             |
| `object.authorityPubkey`        | _PublicKey_ | onwer of the underlyingAssetSrcKey, likely the wallet making the transaction                  |
| `object.fundingAccountKey`      | _PublicKey_ | The payer account that is funding the SOL for the TX                                          |
| `object.mintedOptionDestKey`    | _PublicKey_ | public key where the option will be minted to                                                 |
| `object.optionMarketKey`        | _PublicKey_ | public key for the opton market                                                               |
| `object.optionMintKey`          | _PublicKey_ | public key of the option token mint for the option market                                     |
| `object.programId`              | _PublicKey_ | the public key for the PsyOptions program                                                     |
| `object.size`                   | _BN_        | number of option contracts to mint. Defaults to 1                                             |
| `object.underlyingAssetPoolKey` | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered to |
| `object.underlyingAssetSrcKey`  | _PublicKey_ | account the underlying asset will be transfered from                                          |
| `object.underlyingMintKey`      | _PublicKey_ | public key of the underlying asset mint                                                       |
| `object.writerTokenDestKey`     | _PublicKey_ | public key where the Writer Token will be minted to                                           |
| `object.writerTokenMintKey`     | _PublicKey_ | public key of the Writer Token mint for the option market                                     |

**Returns:** _Promise_<TransactionInstruction\>

---

### exerciseCoveredCallInstruction

▸ **exerciseCoveredCallInstruction**(`object`: { `exerciserQuoteAssetAuthorityKey`: _PublicKey_ ; `exerciserQuoteAssetKey`: _PublicKey_ ; `exerciserUnderlyingAssetKey`: _PublicKey_ ; `fundingAccountKey`: _PublicKey_ ; `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `optionTokenAuthorityKey`: _PublicKey_ ; `optionTokenKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `quoteAssetMintKey`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `size`: _BN_; `underlyingAssetPoolKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `ExerciseCoveredCall`.

This instruction will burn an Option Token, transfer quote asset
to the quote asset pool, and transfer underlying asset from the
underlying asset pool to the specified account. The amount of underlying asset
transfered depends on the underlying amount per contract, aka `contract size`.
The amount of quote asset transfered depends on the quote amount
per contract, aka `contract size * price`.

**Note this instruction may only be called prior to the option market expiration**

#### Parameters:

| Name                                     | Type        | Description                                                                                     |
| :--------------------------------------- | :---------- | :---------------------------------------------------------------------------------------------- |
| `object`                                 | _object_    | -                                                                                               |
| `object.exerciserQuoteAssetAuthorityKey` | _PublicKey_ | owner of the exerciserQuoteAssetKey, likely the wallet                                          |
| `object.exerciserQuoteAssetKey`          | _PublicKey_ | public key where the quote asset will be transfered from                                        |
| `object.exerciserUnderlyingAssetKey`     | _PublicKey_ | public key where the underlying asset will be transfered to                                     |
| `object.fundingAccountKey`               | _PublicKey_ | The payer account that is funding the SOL for the TX making the transaction                     |
| `object.optionMarketKey`                 | _PublicKey_ | public key for the opton market                                                                 |
| `object.optionMintKey`                   | _PublicKey_ | public key of the option token mint for the option market                                       |
| `object.optionTokenAuthorityKey`         | _PublicKey_ | onwer of the optionTokenKey, likely the wallet                                                  |
| `object.optionTokenKey`                  | _PublicKey_ | public key of the account where the Option Token will be burned from                            |
| `object.programId`                       | _PublicKey_ | the public key for the PsyOptions program                                                       |
| `object.quoteAssetMintKey`               | _PublicKey_ | public key for the quote asset mint                                                             |
| `object.quoteAssetPoolKey`               | _PublicKey_ | public key of the quote asset pool for the market, where the asset will be transfered to        |
| `object.size`                            | _BN_        | number of options to exercise. Defaults to 1                                                    |
| `object.underlyingAssetPoolKey`          | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered from |

**Returns:** _Promise_<TransactionInstruction\>

---

### closePositionInstruction

▸ **closePositionInstruction**(`object`: { `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `optionTokenSrcAuthKey`: _PublicKey_ ; `optionTokenSrcKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `size`: _BN_; `underlyingAssetDestKey`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ ; `writerTokenSourceAuthorityKey`: _PublicKey_ ; `writerTokenSourceKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `ClosePosition`.

This instruction will burn a Writer Token and an Option Token. Upon burning
these tokens, the program will transfer the locked underlying asset to the specified
public key. The amount of underlying asset transfered depends on the underlying amount
per contract, aka `contract size`.

#### Parameters:

| Name                                   | Type        | Description                                                                                     |
| :------------------------------------- | :---------- | :---------------------------------------------------------------------------------------------- |
| `object`                               | _object_    | -                                                                                               |
| `object.optionMarketKey`               | _PublicKey_ | public key for the opton market                                                                 |
| `object.optionMintKey`                 | _PublicKey_ | public key of the option token mint for the option market                                       |
| `object.optionTokenSrcAuthKey`         | _PublicKey_ | Onwer of the optionTokenSrcKey, likely the wallet that owns the account                         |
| `object.optionTokenSrcKey`             | _PublicKey_ | public key of the account where the Option Token will be burned from                            |
| `object.programId`                     | _PublicKey_ | the public key for the PsyOptions program                                                       |
| `object.size`                          | _BN_        | number of option & writer tokens to burn to unlock underlying. Defaults to 1                    |
| `object.underlyingAssetDestKey`        | _PublicKey_ | public key of the account to send the underlying asset to                                       |
| `object.underlyingAssetPoolKey`        | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered from |
| `object.writerTokenMintKey`            | _PublicKey_ | public key of the writer token mint for the option market                                       |
| `object.writerTokenSourceAuthorityKey` | _PublicKey_ | owner of the writerTokenSourceKey, likely the wallet making the transaction                     |
| `object.writerTokenSourceKey`          | _PublicKey_ | public key of the account where the Writer Token will be burned from                            |

**Returns:** _Promise_<TransactionInstruction\>

---

### exchangeWriterTokenForQuoteInstruction

▸ **exchangeWriterTokenForQuoteInstruction**(`object`: { `optionMarketKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `quoteAssetDestKey`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `size`: _BN_; `writerTokenMintKey`: _PublicKey_ ; `writerTokenSourceAuthorityKey`: _PublicKey_ ; `writerTokenSourceKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `ExchangeWriterTokenForQuote`

This instruction will burn a Writer Token and transfer quote asset to the
specified account. The amount of quote asset transfered depends on the quote
amount per contract, aka `contract size * price`.

**Note this instruction can only be called after an option has been exercised**

#### Parameters:

| Name                                   | Type        | Description                                                                                |
| :------------------------------------- | :---------- | :----------------------------------------------------------------------------------------- |
| `object`                               | _object_    | -                                                                                          |
| `object.optionMarketKey`               | _PublicKey_ | public key for the opton market                                                            |
| `object.programId`                     | _PublicKey_ | the public key for the PsyOptions program                                                  |
| `object.quoteAssetDestKey`             | _PublicKey_ | public key of the account to send the quote asset to                                       |
| `object.quoteAssetPoolKey`             | _PublicKey_ | public key of the quote asset pool for the market, where the asset will be transfered from |
| `object.size`                          | _BN_        | number of writer tokens to burn to claim for quote asset. Defaults to 1                    |
| `object.writerTokenMintKey`            | _PublicKey_ | public key of the writer token mint for the option market                                  |
| `object.writerTokenSourceAuthorityKey` | _PublicKey_ | owner of the writerTokenSourceKey, likely the wallet making the transaction                |
| `object.writerTokenSourceKey`          | _PublicKey_ | public key of the account where the Writer Token will be burned from                       |

**Returns:** _Promise_<TransactionInstruction\>

---

### closePostExpirationCoveredCallInstruction

▸ **closePostExpirationCoveredCallInstruction**(`object`: { `optionMarketKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `size`: _BN_; `underlyingAssetDestKey`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ ; `writerTokenSourceAuthorityKey`: _PublicKey_ ; `writerTokenSourceKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `ClosePostExpiration`

This instruction will burn a Writer Token and transfer underlying asset back to the
specified account. The amount of underlying asset transfered depends on the underlying
amount per contract, aka `contract size`.

**Note this instruction can only be called after the option market has expired**

#### Parameters:

| Name                                   | Type        | Description                                                                                     |
| :------------------------------------- | :---------- | :---------------------------------------------------------------------------------------------- |
| `object`                               | _object_    | -                                                                                               |
| `object.optionMarketKey`               | _PublicKey_ | public key for the opton market                                                                 |
| `object.programId`                     | _PublicKey_ | the public key for the PsyOptions program                                                       |
| `object.size`                          | _BN_        | number of positions to close (writer tokens to burn). Defaults to 1                             |
| `object.underlyingAssetDestKey`        | _PublicKey_ | public key of the account to send the underlying asset to                                       |
| `object.underlyingAssetPoolKey`        | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered from |
| `object.writerTokenMintKey`            | _PublicKey_ | public key of the writer token mint for the option market                                       |
| `object.writerTokenSourceAuthorityKey` | _PublicKey_ | owner of the writerTokenSourceKey, likely the wallet making the transaction                     |
| `object.writerTokenSourceKey`          | _PublicKey_ | public key of the account where the Writer Token will be burned from                            |

**Returns:** _Promise_<TransactionInstruction\>
