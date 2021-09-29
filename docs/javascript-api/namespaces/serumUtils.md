---
id: "serumUtils"
title: "Namespace: serumUtils"
sidebar_label: "serumUtils"
sidebar_position: 0
custom_edit_url: null
---

## Functions

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

[serumUtils.ts:16](https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumUtils.ts#L16)
