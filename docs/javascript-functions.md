---
id: javascript-functions
title: Javascript
sidebar_label: Javascript
slug: /client-integration/javascript
---

### Functions

- [initializeMarketInstruction](#initializemarketinstruction)
- [mintCoveredCallInstruction](#mintcoveredcallinstruction)
- [exerciseCoveredCallInstruction](#exercisecoveredcallinstruction)
- [exchangeWriterTokenForQuoteInstruction](#exchangewritertokenforquoteinstruction)
- [closePositionInstruction](#closepositioninstruction)
- [closePostExpirationCoveredCallInstruction](#closepostexpirationcoveredcallinstruction)

## Functions

---

### initializeMarketInstruction

▸ **initializeMarketInstruction**(`object`: { `expirationUnixTimestamp`: _number_ ; `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `quoteAmountPerContract`: _number_ ; `quoteAssetMintKey`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `underlyingAmountPerContract`: _number_ ; `underlyingAssetMintKey`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `InitializeMarket`

Instruction to initialize a new option market. Strike price is determined by
`quote amount per contract / underlying amount per contract`

#### Parameters:

| Name                                 | Type        | Description                                                                                |
| :----------------------------------- | :---------- | :----------------------------------------------------------------------------------------- |
| `object`                             | _object_    | -                                                                                          |
| `object.expirationUnixTimestamp`     | _number_    | unix timestamp when the option market expires                                              |
| `object.optionMarketKey`             | _PublicKey_ | key for a new Account that will store the data for the options market                      |
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

▸ **mintCoveredCallInstruction**(`object`: { `authorityPubkey`: _PublicKey_ ; `mintedOptionDestKey`: _PublicKey_ ; `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `underlyingAssetSrcKey`: _PublicKey_ ; `writerTokenDestKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `MintCoveredCall`

Mints an Option Token and Writer Token after successfully transfering
underlying asset to the option market's pool.

#### Parameters:

| Name                            | Type        | Description                                                                                   |
| :------------------------------ | :---------- | :-------------------------------------------------------------------------------------------- |
| `object`                        | _object_    | -                                                                                             |
| `object.authorityPubkey`        | _PublicKey_ | onwer of the underlyingAssetSrcKey, likely the wallet making the transaction                  |
| `object.mintedOptionDestKey`    | _PublicKey_ | public key where the option will be minted to                                                 |
| `object.optionMarketKey`        | _PublicKey_ | public key for the opton market                                                               |
| `object.optionMintKey`          | _PublicKey_ | public key of the option token mint for the option market                                     |
| `object.programId`              | _PublicKey_ | the public key for the PsyOptions program                                                     |
| `object.underlyingAssetPoolKey` | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered to |
| `object.underlyingAssetSrcKey`  | _PublicKey_ | account the underlying asset will be transfered from                                          |
| `object.writerTokenDestKey`     | _PublicKey_ | public key where the Writer Token will be minted to                                           |
| `object.writerTokenMintKey`     | _PublicKey_ | public key of the Writer Token mint for the option market                                     |

**Returns:** _Promise_<TransactionInstruction\>

---

### exerciseCoveredCallInstruction

▸ **exerciseCoveredCallInstruction**(`object`: { `exerciserQuoteAssetAuthorityKey`: _PublicKey_ ; `exerciserQuoteAssetKey`: _PublicKey_ ; `exerciserUnderlyingAssetKey`: _PublicKey_ ; `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `optionTokenAuthorityKey`: _PublicKey_ ; `optionTokenKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

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
| `object.optionMarketKey`                 | _PublicKey_ | public key for the opton market                                                                 |
| `object.optionMintKey`                   | _PublicKey_ | public key of the option token mint for the option market                                       |
| `object.optionTokenAuthorityKey`         | _PublicKey_ | onwer of the optionTokenKey, likely the wallet making the transaction                           |
| `object.optionTokenKey`                  | _PublicKey_ | public key of the account where the Option Token will be burned from                            |
| `object.programId`                       | _PublicKey_ | the public key for the PsyOptions program                                                       |
| `object.quoteAssetPoolKey`               | _PublicKey_ | public key of the quote asset pool for the market, where the asset will be transfered to        |
| `object.underlyingAssetPoolKey`          | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered from |

**Returns:** _Promise_<TransactionInstruction\>

---

### closePositionInstruction

▸ **closePositionInstruction**(`object`: { `optionMarketKey`: _PublicKey_ ; `optionMintKey`: _PublicKey_ ; `optionTokenSrcAuthKey`: _PublicKey_ ; `optionTokenSrcKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `underlyingAssetDestKey`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ ; `writerTokenSourceAuthorityKey`: _PublicKey_ ; `writerTokenSourceKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

Generate the instruction for `ClosePosition`.

This instruction will burn a Writer Token and an Option Token. Upon burning
these tokens, the program will transfer the locked underlying asset to the specified
public key. The amount of underlying asset transfered depends on the underlying amount
per contract, aka `contract size`.

#### Parameters:

| Name                                   | Type        | Description                                                                                     |
| :------------------------------------- | :---------- | :---------------------------------------------------------------------------------------------- |
| `object.optionMarketKey`               | _PublicKey_ | public key for the opton market                                                                 |
| `object.optionMintKey`                 | _PublicKey_ | public key of the option token mint for the option market                                       |
| `object.optionTokenSrcAuthKey`         | _PublicKey_ | Onwer of the optionTokenSrcKey, likely the wallet that owns the account                         |
| `object.optionTokenSrcKey`             | _PublicKey_ | public key of the account where the Option Token will be burned from                            |
| `object.programId`                     | _PublicKey_ | the public key for the PsyOptions program                                                       |
| `object.underlyingAssetDestKey`        | _PublicKey_ | public key of the account to send the underlying asset to                                       |
| `object.underlyingAssetPoolKey`        | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered from |
| `object.writerTokenMintKey`            | _PublicKey_ | public key of the writer token mint for the option market                                       |
| `object.writerTokenSourceAuthorityKey` | _PublicKey_ | owner of the writerTokenSourceKey, likely the wallet that owns the account                      |
| `object.writerTokenSourceKey`          | _PublicKey_ | public key of the account where the Writer Token will be burned from                            |

**Returns:** _Promise_<TransactionInstruction\>

---

### exchangeWriterTokenForQuoteInstruction

▸ **exchangeWriterTokenForQuoteInstruction**(`object`: { `optionMarketKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `quoteAssetDestKey`: _PublicKey_ ; `quoteAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ ; `writerTokenSourceAuthorityKey`: _PublicKey_ ; `writerTokenSourceKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

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
| `object.writerTokenMintKey`            | _PublicKey_ | public key of the writer token mint for the option market                                  |
| `object.writerTokenSourceAuthorityKey` | _PublicKey_ | owner of the writerTokenSourceKey, likely the wallet making the transaction                |
| `object.writerTokenSourceKey`          | _PublicKey_ | public key of the account where the Writer Token will be burned from                       |

**Returns:** _Promise_<TransactionInstruction\>

---

### closePostExpirationCoveredCallInstruction

▸ **closePostExpirationCoveredCallInstruction**(`object`: { `optionMarketKey`: _PublicKey_ ; `programId`: _PublicKey_ ; `underlyingAssetDestKey`: _PublicKey_ ; `underlyingAssetPoolKey`: _PublicKey_ ; `writerTokenMintKey`: _PublicKey_ ; `writerTokenSourceAuthorityKey`: _PublicKey_ ; `writerTokenSourceKey`: _PublicKey_ }): _Promise_<TransactionInstruction\>

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
| `object.underlyingAssetDestKey`        | _PublicKey_ | public key of the account to send the underlying asset to                                       |
| `object.underlyingAssetPoolKey`        | _PublicKey_ | public key of the underlying asset pool for the market, where the asset will be transfered from |
| `object.writerTokenMintKey`            | _PublicKey_ | public key of the writer token mint for the option market                                       |
| `object.writerTokenSourceAuthorityKey` | _PublicKey_ | owner of the writerTokenSourceKey, likely the wallet making the transaction                     |
| `object.writerTokenSourceKey`          | _PublicKey_ | public key of the account where the Writer Token will be burned from                            |

**Returns:** _Promise_<TransactionInstruction\>
