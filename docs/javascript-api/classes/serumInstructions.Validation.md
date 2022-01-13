---
id: "serumInstructions.Validation"
title: "Class: Validation"
sidebar_label: "serumInstructions.Validation"
custom_edit_url: null
---

[serumInstructions](../namespaces/serumInstructions).Validation

## Implements

- `Middleware`

## Constructors

### constructor

• **new Validation**(`optionMarketKey`, `marketAuthorityBump`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionMarketKey` | `PublicKey` |
| `marketAuthorityBump` | `number` |

#### Defined in

[serumInstructions/marketLoader.ts:52](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L52)

## Properties

### marketAuthorityBump

• **marketAuthorityBump**: `number`

#### Defined in

[serumInstructions/marketLoader.ts:50](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L50)

___

### optionMarketKey

• **optionMarketKey**: `PublicKey`

#### Defined in

[serumInstructions/marketLoader.ts:49](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L49)

## Methods

### cancelOrderByClientIdV2

▸ **cancelOrderByClientIdV2**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.cancelOrderByClientIdV2

#### Defined in

[serumInstructions/marketLoader.ts:65](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L65)

___

### cancelOrderV2

▸ **cancelOrderV2**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.cancelOrderV2

#### Defined in

[serumInstructions/marketLoader.ts:62](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L62)

___

### closeOpenOrders

▸ **closeOpenOrders**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.closeOpenOrders

#### Defined in

[serumInstructions/marketLoader.ts:71](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L71)

___

### initOpenOrders

▸ **initOpenOrders**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.initOpenOrders

#### Defined in

[serumInstructions/marketLoader.ts:56](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L56)

___

### newOrderV3

▸ **newOrderV3**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.newOrderV3

#### Defined in

[serumInstructions/marketLoader.ts:59](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L59)

___

### prune

▸ **prune**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.prune

#### Defined in

[serumInstructions/marketLoader.ts:74](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L74)

___

### settleFunds

▸ **settleFunds**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.settleFunds

#### Defined in

[serumInstructions/marketLoader.ts:68](https://github.com/mithraiclabs/psyoptions-ts/blob/0830124/packages/psy-american/src/serumInstructions/marketLoader.ts#L68)
