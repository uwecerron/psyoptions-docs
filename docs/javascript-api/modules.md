---
id: "modules"
title: "@mithraic-labs/psy-american"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [instructions](namespaces/instructions)
- [serumInstructions](namespaces/serumInstructions)
- [serumUtils](namespaces/serumUtils)

## Enumerations

- [ClusterName](enums/ClusterName)
- [ProgramVersions](enums/ProgramVersions)

## Type aliases

### NetworkInfo

Ƭ **NetworkInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feeOwnerKey` | `PublicKey` |
| `serumReferrerId` | `PublicKey` |

#### Defined in

[types.ts:12](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/types.ts#L12)

___

### OptionMarket

Ƭ **OptionMarket**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bumpSeed` | `number` |
| `exerciseFeeAccount` | `PublicKey` |
| `expirationUnixTimestamp` | `anchor.BN` |
| `expired` | `boolean` |
| `mintFeeAccount` | `PublicKey` |
| `optionMint` | `PublicKey` |
| `quoteAmountPerContract` | `anchor.BN` |
| `quoteAssetMint` | `PublicKey` |
| `quoteAssetPool` | `PublicKey` |
| `underlyingAmountPerContract` | `anchor.BN` |
| `underlyingAssetMint` | `PublicKey` |
| `underlyingAssetPool` | `PublicKey` |
| `writerTokenMint` | `PublicKey` |

#### Defined in

[types.ts:17](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/types.ts#L17)

___

### OptionMarketWithKey

Ƭ **OptionMarketWithKey**: [`OptionMarket`](modules#optionmarket) & { `key`: `PublicKey`  }

#### Defined in

[types.ts:33](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/types.ts#L33)

___

### OrderParamsWithFeeRate

Ƭ **OrderParamsWithFeeRate**<`T`\>: `OrderParams`<`T`\> & { `feeRate?`: `number`  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types.ts:37](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/types.ts#L37)

## Variables

### FEE\_OWNER\_KEY

• **FEE\_OWNER\_KEY**: `PublicKey`

The fee owner key for the Psy American program

#### Defined in

[fees.ts:6](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/fees.ts#L6)

___

### NFT\_MINT\_LAMPORTS

• **NFT\_MINT\_LAMPORTS**: `number`

The number of lamports the protocol takes as a fee when minting or
exercising an option on an asset that cannot take a 5bps fee. E.g a minting
a call option on an NFT

#### Defined in

[fees.ts:13](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/fees.ts#L13)

___

### PSY\_AMERICAN\_PROGRAM\_IDS

• **PSY\_AMERICAN\_PROGRAM\_IDS**: `Object`

All prior Psy American programIds for all networks so clients that require
backwards compatability can maintain it.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `3KAqLcLAY8W7ZxGT1MJcFPDMNJKJsXaE1m9i1JPahfmH` | [`ProgramVersions`](enums/ProgramVersions) |
| `AAcHauRu6eUDePN3hDDAUTbgyRq5xFbRZJCLsUdpBCJb` | [`ProgramVersions`](enums/ProgramVersions) |
| `GDvqQy3FkDB2wyNwgZGp5YkmRMUmWbhNNWDMYKbLSZ5N` | [`ProgramVersions`](enums/ProgramVersions) |

#### Defined in

[programIds.ts:7](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/programIds.ts#L7)

___

### PsyAmericanIdl

• **PsyAmericanIdl**: `Idl`

The Anchor IDL for the Psy American program. Used when creating an Anchor Program.

````typescript
const program = new Program(PsyAmericanIdl, psyAmericanProgramId, provider);
````

#### Defined in

[index.ts:25](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/index.ts#L25)

## Functions

### chunkArray

▸ `Const` **chunkArray**(`myArray`, `chunkSize`): `any`[][]

Returns an array with arrays of the given size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `myArray` | `any`[] | Array to split |
| `chunkSize` | `number` | Size of every group |

#### Returns

`any`[][]

#### Defined in

[utils/chunkArray.ts:7](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/utils/chunkArray.ts#L7)

___

### deriveOptionKeyFromParams

▸ `Const` **deriveOptionKeyFromParams**(`__namedParameters`): `Promise`<[`PublicKey`, `number`]\>

Get the deterministic address for an Option based on its properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | `Object` | - |
| `__namedParameters.expirationUnixTimestamp` | `BN` | The OptionMarket expiration timestamp in seconds |
| `__namedParameters.programId` | `PublicKey` | The Psy American program ID |
| `__namedParameters.quoteAmountPerContract` | `BN` | The quote asset amount per option contract |
| `__namedParameters.quoteMint` | `PublicKey` | The quote asset mint address |
| `__namedParameters.underlyingAmountPerContract` | `BN` | The underlying asset amount per option contract |
| `__namedParameters.underlyingMint` | `PublicKey` | The underlying asset mint address |

#### Returns

`Promise`<[`PublicKey`, `number`]\>

#### Defined in

[utils/deriveOptionKeyFromParams.ts:8](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/utils/deriveOptionKeyFromParams.ts#L8)

___

### feeAmountPerContract

▸ `Const` **feeAmountPerContract**(`assetQuantity`): `BN`

Get the protocol's fee amount when minting or exercising. When minting this
should be the underlingAmountPerContract. When exercising this should be
the quoteAmountPerContract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetQuantity` | `BN` | Quantity of the asset being used to mint or exercise |

#### Returns

`BN`

#### Defined in

[fees.ts:23](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/fees.ts#L23)

___

### getAllOptionAccounts

▸ `Const` **getAllOptionAccounts**(`program`): `Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)[]\>

Load all OptionMarkets owned by the given program from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American program |

#### Returns

`Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)[]\>

#### Defined in

[OptionMarket.ts:10](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/OptionMarket.ts#L10)

___

### getOptionByKey

▸ `Const` **getOptionByKey**(`program`, `key`): `Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |
| `key` | `PublicKey` |

#### Returns

`Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)\>

#### Defined in

[utils/getOptionByKey.ts:5](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/utils/getOptionByKey.ts#L5)

___

### getOrAddAssociatedTokenAccountTx

▸ `Const` **getOrAddAssociatedTokenAccountTx**(`associatedAddress`, `mintKey`, `provider`, `owner?`): `Promise`<`TransactionInstruction`\>

Returns a TransactionInstruction for creating the associated token account
if one deos not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `associatedAddress` | `PublicKey` | The associated token account address |
| `mintKey` | `PublicKey` | The SPL token mint address |
| `provider` | `default` | The Anchor provider that has the wallet |
| `owner` | `PublicKey` | The user's address that owns the associated token account |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[utils/getOrAddAssociatedTokenAccountTx.ts:20](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/utils/getOrAddAssociatedTokenAccountTx.ts#L20)

___

### getVaultOwnerAndNonce

▸ `Const` **getVaultOwnerAndNonce**(`marketPublicKey`, `dexProgramId`): `Promise`<(`BN` \| `PublicKey`)[]\>

This is needed for the permissioned serum markets.

TODO can we replace this with PublicKey.findProgramAddress

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketPublicKey` | `PublicKey` |
| `dexProgramId` | `PublicKey` |

#### Returns

`Promise`<(`BN` \| `PublicKey`)[]\>

#### Defined in

[utils/getVaultOwnerAndNonce.ts:13](https://github.com/mithraiclabs/psyoptions-ts/blob/55ee307/packages/psy-american/src/utils/getVaultOwnerAndNonce.ts#L13)
