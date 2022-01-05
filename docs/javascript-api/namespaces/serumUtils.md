---
id: "serumUtils"
title: "Namespace: serumUtils"
sidebar_label: "serumUtils"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### deriveCoinVault

▸ `Const` **deriveCoinVault**(`program`, `optionMarketKey`, `priceCurrencyKey`): `Promise`<[`PublicKey`, `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |
| `optionMarketKey` | `PublicKey` |
| `priceCurrencyKey` | `PublicKey` |

#### Returns

`Promise`<[`PublicKey`, `number`]\>

#### Defined in

[serumUtils.ts:200](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L200)

___

### deriveMarketAuthority

▸ `Const` **deriveMarketAuthority**(`program`, `dexProgramId`, `serumMarketKey`): `Promise`<[`PublicKey`, `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |
| `dexProgramId` | `PublicKey` |
| `serumMarketKey` | `PublicKey` |

#### Returns

`Promise`<[`PublicKey`, `number`]\>

#### Defined in

[serumUtils.ts:176](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L176)

___

### derivePCVault

▸ `Const` **derivePCVault**(`program`, `optionMarketKey`, `priceCurrencyKey`): `Promise`<[`PublicKey`, `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |
| `optionMarketKey` | `PublicKey` |
| `priceCurrencyKey` | `PublicKey` |

#### Returns

`Promise`<[`PublicKey`, `number`]\>

#### Defined in

[serumUtils.ts:214](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L214)

___

### deriveRequestQueue

▸ `Const` **deriveRequestQueue**(`program`, `optionMarketKey`, `priceCurrencyKey`): `Promise`<[`PublicKey`, `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |
| `optionMarketKey` | `PublicKey` |
| `priceCurrencyKey` | `PublicKey` |

#### Returns

`Promise`<[`PublicKey`, `number`]\>

#### Defined in

[serumUtils.ts:186](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L186)

___

### deriveSerumMarketAddress

▸ `Const` **deriveSerumMarketAddress**(`program`, `optionMarketKey`, `priceCurrencyKey`): `Promise`<[`PublicKey`, `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |
| `optionMarketKey` | `PublicKey` |
| `priceCurrencyKey` | `PublicKey` |

#### Returns

`Promise`<[`PublicKey`, `number`]\>

#### Defined in

[serumUtils.ts:161](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L161)

___

### findOpenOrdersAccountsForOwner

▸ `Const` **findOpenOrdersAccountsForOwner**(`program`, `dexProgramId`, `serumMarketAddress`): `Promise`<`OpenOrders`[]\>

Load the open orders for a user based on the Serum DEX and Serum Market
address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American program |
| `dexProgramId` | `PublicKey` | Serum DEX program id |
| `serumMarketAddress` | `PublicKey` | Serum market address |

#### Returns

`Promise`<`OpenOrders`[]\>

#### Defined in

[serumUtils.ts:18](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L18)

___

### findOpenOrdersForOptionMarkets

▸ `Const` **findOpenOrdersForOptionMarkets**(`program`, `serumProgramId`, `optionMarketKeys`, `priceCurrencyKey`, `optionMetaList?`): `Promise`<`Record`<`string`, `OpenOrders`\>\>

Load all the open orders for a user based on the Serum DEX and the option market keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American program |
| `serumProgramId` | `PublicKey` | Serum DEX program id |
| `optionMarketKeys` | `PublicKey`[] | Keys for the Psy American OptionMarket's to load the open orders from |
| `priceCurrencyKey` | `PublicKey` | Key of the pc (aka quote currency) from the serum markets |
| `optionMetaList?` | { `expiration`: `number` ; `optionContractMintAddress`: `string` ; `optionMarketAddress`: `string` ; `optionWriterTokenMintAddress`: `string` ; `psyOptionsProgramId`: `string` ; `quoteAssetMint`: `string` ; `quoteAssetPerContract`: `string` ; `quoteAssetPoolAddress`: `string` ; `serumMarketAddress`: `string` ; `serumProgramId`: `string` ; `underlyingAssetMint`: `string` ; `underlyingAssetPerContract`: `string` ; `underlyingAssetPoolAddress`: `string`  }[] | Optional list of option meta data to pull serum market data from instead of deriving the address. This is for backwards compatibility |

#### Returns

`Promise`<`Record`<`string`, `OpenOrders`\>\>

#### Defined in

[serumUtils.ts:73](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L73)

___

### getMarketAndAuthorityInfo

▸ `Const` **getMarketAndAuthorityInfo**(`program`, `optionMarketKey`, `dexProgramId`, `priceCurrencyKey`): `Promise`<`Object`\>

Given an OptionMarket address and DEX program, generate the Serum market key,
market authority, and authority bump seed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | PsyOptions American V1 Anchor program |
| `optionMarketKey` | `PublicKey` | The key for the OptionMarket |
| `dexProgramId` | `PublicKey` | Serum DEX public key |
| `priceCurrencyKey` | `PublicKey` | - |

#### Returns

`Promise`<`Object`\>

#### Defined in

[serumUtils.ts:236](https://github.com/mithraiclabs/psyoptions-ts/blob/369ef93/packages/psy-american/src/serumUtils.ts#L236)
