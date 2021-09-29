---
id: "serumInstructions"
title: "Namespace: serumInstructions"
sidebar_label: "serumInstructions"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### cancelOrderByClientId

▸ `Const` **cancelOrderByClientId**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `order`, `marketAuthorityBump?`): `Promise`<`TransactionInstruction`\>

Generate a `TransactionInstruction` for canceling an open order by the set clientId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for Psy American |
| `optionMarketKey` | `PublicKey` | The address of the OptionMarket for the option in the Seurm Market |
| `dexProgramId` | `PublicKey` | The PublicKey of the DEX program |
| `serumMarketKey` | `PublicKey` | The PublicKey of the Serum market |
| `order` | `Order` | The Serum Order to cancel |
| `marketAuthorityBump` | `number` | Optional: bump seed for the Serum market |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[serumInstructions/cancelOrder.ts:51](https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/cancelOrder.ts#L51)

___

### cancelOrderInstructionV2

▸ `Const` **cancelOrderInstructionV2**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `order`, `marketAuthorityBump?`): `Promise`<`TransactionInstruction`\>

Create a TransactionInstruction for canceling a specific _order_

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for Psy American |
| `optionMarketKey` | `PublicKey` | The address of the OptionMarket for the option in the Seurm Market |
| `dexProgramId` | `PublicKey` | The PublicKey of the DEX program |
| `serumMarketKey` | `PublicKey` | The PublicKey of the Serum market |
| `order` | `Order` | The Serum Order to cancel |
| `marketAuthorityBump` | `number` | Optional: bump seed for the Serum market |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[serumInstructions/cancelOrder.ts:18](https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/cancelOrder.ts#L18)

___

### initOpenOrdersInstruction

▸ `Const` **initOpenOrdersInstruction**(`program`, `owner`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `marketAuthorityBump`): `Promise`<`Object`\>

Create a proxied InitOpenOrdersInstruction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American program |
| `owner` | `PublicKey` | The user's wallet address |
| `optionMarketKey` | `PublicKey` | The OptionMarket address key |
| `dexProgramId` | `PublicKey` | Serum DEX id |
| `serumMarketKey` | `PublicKey` | The Serum market address |
| `marketAuthorityBump` | `number` | OPTIONAL: pass in the market authority bump seed |

#### Returns

`Promise`<`Object`\>

#### Defined in

[serumInstructions/initOpenOrders.ts:17](https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/initOpenOrders.ts#L17)

___

### newOrderInstruction

▸ `Const` **newOrderInstruction**(`program`, `optionMarketKey`, `dexProgramId`, `marketKey`, `orderArguments`, `marketAuthorityBump?`): `Promise`<`Transaction`\>

Create a new order proxied through the Psy American Protocol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American program |
| `optionMarketKey` | `PublicKey` | The OptionMarket address |
| `dexProgramId` | `PublicKey` | The Serum DEX program ID |
| `marketKey` | `PublicKey` | The Serum market address |
| `orderArguments` | `OrderParams`<`PublicKey`\> | The Serum OrderParams |
| `marketAuthorityBump` | `number` | OPTIONAL: pass in the market authority bump seed |

#### Returns

`Promise`<`Transaction`\>

#### Defined in

[serumInstructions/newOrder.ts:21](https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/newOrder.ts#L21)

___

### settleFundsInstruction

▸ `Const` **settleFundsInstruction**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `baseWallet`, `quoteWallet`, `serumReferralKey`, `openOrdersKey`, `marketAuthorityBump`): `Promise`<`TransactionInstruction`\>

Create a TransactionInstruction for the settleFunds instruction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American Program |
| `optionMarketKey` | `PublicKey` | The OptionMarket address |
| `dexProgramId` | `PublicKey` | The Serum DEX program ID |
| `serumMarketKey` | `PublicKey` | The Serum market address |
| `baseWallet` | `PublicKey` | The wallet address that contains the user's base asset tokens |
| `quoteWallet` | `PublicKey` | The wallet address that contains the user's quote asset tokens |
| `serumReferralKey` | `PublicKey` | The Psy American referral address for the quote asset |
| `openOrdersKey` | `PublicKey` | The open orders keys |
| `marketAuthorityBump` | `number` | OPTIONAL: pass in the market authority bump seed |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[serumInstructions/settleFunds.ts:20](https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/settleFunds.ts#L20)
