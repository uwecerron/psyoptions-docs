---
id: "instructions"
title: "Namespace: instructions"
sidebar_label: "instructions"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### burnWriterForQuote

▸ `Const` **burnWriterForQuote**(`program`, `size`, `optionMarket`, `writerTokenSrc`, `writerQuoteDest`): `TransactionInstruction`

Burn WriterTokens to get the `size * OptionMarket.quoteAmountPerContract` from the
OptionMarket's quote asset pool. This instruction will fail if no one has exercised
or the quote assets in the pool have already been claimed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for Psy American |
| `size` | `BN` | The amount of WriterTokens to burn and retrieve the quote assets for |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The deserialized OptionMarket data |
| `writerTokenSrc` | `PublicKey` | The SPL Token account that holds the WriterTokens |
| `writerQuoteDest` | `PublicKey` | SPL Token account that is the destination for the quote assets |

#### Returns

`TransactionInstruction`

#### Defined in

[instructions/burnWriterForQuote.ts:17](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/burnWriterForQuote.ts#L17)

___

### closePositionInstruction

▸ `Const` **closePositionInstruction**(`program`, `size`, `optionMarket`, `writerTokenSrc`, `optionTokenSrc`, `underlyingAssetDest`): `TransactionInstruction`

Close _size_ option positions by burning the OptionTokens and WriterTokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for Psy American |
| `size` | `BN` | The amount of OptionTokens and WriterTokens to burn |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket the OptionTokens and WriterTokens belong to |
| `writerTokenSrc` | `PublicKey` | The SPL Token address that holds the WriterTokens |
| `optionTokenSrc` | `PublicKey` | The SPL Token address that holds the OptionTokens |
| `underlyingAssetDest` | `PublicKey` | The SPL Token address destination for the returned underlying assets |

#### Returns

`TransactionInstruction`

#### Defined in

[instructions/closePosition.ts:16](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/closePosition.ts#L16)

___

### closePostExpirationInstruction

▸ `Const` **closePostExpirationInstruction**(`program`, `size`, `optionMarket`, `writerTokenSrc`, `underlyingAssetDest`): `TransactionInstruction`

After a market has expired, burn WriterTokens to get the underlying assets back from
the contract(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for Psy American |
| `size` | `BN` | The amount of options to exercise |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data from the chain for the options to exercise |
| `writerTokenSrc` | `PublicKey` | The SPL Token address holding the WriterTokens |
| `underlyingAssetDest` | `PublicKey` | The SPL Token address where the underlying assets will be sent |

#### Returns

`TransactionInstruction`

#### Defined in

[instructions/closePostExpiration.ts:16](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/closePostExpiration.ts#L16)

___

### exerciseOptionsInstruction

▸ `Const` **exerciseOptionsInstruction**(`program`, `size`, `optionMarket`, `exerciserOptionTokenSrc`, `underlyingAssetDest`, `quoteAssetSrc`, `opts?`): `Promise`<`TransactionInstruction`\>

Exercise OptionTokens you're holding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for Psy American |
| `size` | `BN` | The amount of options to exercise |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data from the chain for the options to exercise |
| `exerciserOptionTokenSrc` | `PublicKey` | The SPL Token address holding the OptionTokens |
| `underlyingAssetDest` | `PublicKey` | The SPL Token address where the underlying assets will be sent |
| `quoteAssetSrc` | `PublicKey` | The SPL Token address holding the quote asset used to exercise |
| `opts` | `Object` |  |
| `opts.optionAuthority?` | `PublicKey` | The authority account that owns the options |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[instructions/exerciseOptions.ts:20](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/exerciseOptions.ts#L20)

___

### initializeMarket

▸ `Const` **initializeMarket**(`program`, `__namedParameters`): `Promise`<`Object`\>

Initialize a new OptionMarket

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | The Psy American program |
| `__namedParameters` | `Object` | - |
| `__namedParameters.expirationUnixTimestamp` | `BN` | The option market expiration timestamp in seconds |
| `__namedParameters.quoteAmountPerContract` | `BN` | The quote amount per contract for the OptionMarket Strike price is derived from underlyingAmountPerContract & quoteAmountPerContract |
| `__namedParameters.quoteMint` | `PublicKey` | The quote asset mint |
| `__namedParameters.underlyingAmountPerContract` | `BN` | The underlying amount per contract for the OptionMarket. * Strike price is derived from underlyingAmountPerContract & quoteAmountPerContract |
| `__namedParameters.underlyingMint` | `PublicKey` | The underlying mint address |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/initializeMarket.ts:29](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/initializeMarket.ts#L29)

___

### initializeSerumMarket

▸ `Const` **initializeSerumMarket**(`program`, `__namedParameters`): `Promise`<`Object`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American Program |
| `__namedParameters` | `Object` | - |
| `__namedParameters.asks?` | `PublicKey` | The address for the new Serum market's asks |
| `__namedParameters.bids?` | `PublicKey` | The address for the new Serum market's bids |
| `__namedParameters.eventQueue?` | `PublicKey` | The address for the new Serum market's eventual Event Queue |
| `__namedParameters.optionMarketKey` | `PublicKey` | The OptionMarket address that owns the OptionToken mint |
| `__namedParameters.optionMint` | `PublicKey` | The OptionToken's Mint address. This is the base token for the Serum market |
| `__namedParameters.pcDustThreshold` | `BN` | Serum market's dust threshold for the price currency |
| `__namedParameters.pcLotSize` | `BN` | Serum market's price currency lot size |
| `__namedParameters.pcMint` | `PublicKey` | The Serum's price currency mint |
| `__namedParameters.serumProgramKey` | `PublicKey` | The Serum DEX program ID |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/initializeSerumMarket.ts:23](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/initializeSerumMarket.ts#L23)

___

### mintOptionInstruction

▸ `Const` **mintOptionInstruction**(`program`, `minterOptionAcct`, `minterWriterAcct`, `minterUnderlyingAccount`, `size`, `optionMarket`): `Promise`<`Object`\>

Create a TransactionInstruction for minting _size_ option contracts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for the PsyAmerican program and the minter as the provider wallet |
| `minterOptionAcct` | `PublicKey` | Where the OptionTokens will be sent |
| `minterWriterAcct` | `PublicKey` | Where the WriterTokens will be sent |
| `minterUnderlyingAccount` | `PublicKey` | Where the underlying asset tokens come from |
| `size` | `BN` | The amount of contracts to mint |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/mintOptions.ts:79](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/mintOptions.ts#L79)

___

### mintOptionsTx

▸ `Const` **mintOptionsTx**(`program`, `minterOptionAcct`, `minterWriterAcct`, `minterUnderlyingAccount`, `size`, `optionMarket`): `Promise`<`Object`\>

Execute a transaction to mint _size_ options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for the PsyAmerican program and the minter as the provider wallet |
| `minterOptionAcct` | `PublicKey` | Where the OptionTokens will be sent |
| `minterWriterAcct` | `PublicKey` | Where the WriterTokens will be sent |
| `minterUnderlyingAccount` | `PublicKey` | Where the underlying asset tokens come from |
| `size` | `BN` | The amount of contracts to mint |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/mintOptions.ts:17](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/instructions/mintOptions.ts#L17)
