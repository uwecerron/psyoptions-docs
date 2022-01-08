---
id: "serumInstructions"
title: "Namespace: serumInstructions"
sidebar_label: "serumInstructions"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [Validation](../classes/serumInstructions.Validation)

## Functions

### cancelAllOpenOrders

▸ `Const` **cancelAllOpenOrders**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`): `Promise`<`TransactionInstruction`[]\>

Create an array of TransactionInstructions to cancel all of the wallet's orders for a given
OptionMarket and SerumMarket.

NOTE: Current implementation does not account for Transaction packet size limitations. It
is on the client to slice the instructions to be within the limits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Program for Psy American |
| `optionMarketKey` | `PublicKey` | The address of the OptionMarket for the option in the Seurm Market |
| `dexProgramId` | `PublicKey` | The PublicKey of the DEX program |
| `serumMarketKey` | `PublicKey` | The PublicKey of the Serum market |

#### Returns

`Promise`<`TransactionInstruction`[]\>

#### Defined in

[serumInstructions/cancelOrder.ts:108](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/cancelOrder.ts#L108)

___

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

[serumInstructions/cancelOrder.ts:62](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/cancelOrder.ts#L62)

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

[serumInstructions/cancelOrder.ts:21](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/cancelOrder.ts#L21)

___

### closeOpenOrdersInstruction

▸ `Const` **closeOpenOrdersInstruction**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `openOrdersKey`, `marketAuthorityBump`, `solWallet?`): `Promise`<`TransactionInstruction`\>

Create instruction to close OpenOrders account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American Program |
| `optionMarketKey` | `PublicKey` | The OptionMarket address |
| `dexProgramId` | `PublicKey` | The Serum DEX program ID |
| `serumMarketKey` | `PublicKey` | The Serum market address |
| `openOrdersKey` | `PublicKey` | The open orders key for the account we're closing |
| `marketAuthorityBump` | `number` | OPTIONAL: pass in the market authority bump seed |
| `solWallet?` | `PublicKey` | OPTIONAL: pass in a different address to send the unlocked Sol to |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[serumInstructions/closeOpenOrders.ts:18](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/closeOpenOrders.ts#L18)

___

### initOpenOrdersInstruction

▸ `Const` **initOpenOrdersInstruction**(`program`, `owner`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `marketAuthorityBump?`): `Promise`<`Object`\>

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

[serumInstructions/initOpenOrders.ts:17](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/initOpenOrders.ts#L17)

___

### marketLoader

▸ `Const` **marketLoader**(`program`, `optionMarketKey`, `marketAuthorityBump`, `dexProgramId`, `marketKey`, `opts?`): `Promise`<`MarketProxy`\>

Create a MarketProxy for the Psy American V 1.1 program

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American program |
| `optionMarketKey` | `PublicKey` | The OptionMarket address |
| `marketAuthorityBump` | `number` | The marketAuthority bump seed |
| `dexProgramId` | `PublicKey` | The Serum DEX program id |
| `marketKey` | `PublicKey` | The Serum market address |
| `opts` | `Object` | - |
| `opts.enableLogger` | `boolean` | - |

#### Returns

`Promise`<`MarketProxy`\>

#### Defined in

[serumInstructions/marketLoader.ts:15](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/marketLoader.ts#L15)

___

### newOrderInstruction

▸ `Const` **newOrderInstruction**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `orderArguments`, `marketAuthorityBump?`): `Promise`<`Object`\>

Create a new order proxied through the Psy American Protocol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American program |
| `optionMarketKey` | `PublicKey` | The OptionMarket address |
| `dexProgramId` | `PublicKey` | The Serum DEX program ID |
| `serumMarketKey` | `PublicKey` | The Serum market address |
| `orderArguments` | [`OrderParamsWithFeeRate`](../modules#orderparamswithfeerate)<`PublicKey`\> | The Serum OrderParams |
| `marketAuthorityBump` | `number` | OPTIONAL: pass in the market authority bump seed |

#### Returns

`Promise`<`Object`\>

#### Defined in

[serumInstructions/newOrder.ts:21](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/newOrder.ts#L21)

___

### settleFundsInstruction

▸ `Const` **settleFundsInstruction**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarketKey`, `baseWallet`, `quoteWallet`, `serumReferralKey`, `openOrdersKey`, `marketAuthorityBump?`): `Promise`<`TransactionInstruction`\>

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

[serumInstructions/settleFunds.ts:23](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/settleFunds.ts#L23)

___

### settleMarketFundsInstruction

▸ `Const` **settleMarketFundsInstruction**(`program`, `optionMarketKey`, `dexProgramId`, `serumMarket`, `baseWallet`, `quoteWallet`, `openOrdersKey`): `Promise`<`TransactionInstruction`\>

Create a TransactionInstruction for the settleFunds instruction

Note: this API abstracts the complexity of the serumReferralKey away.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program` | Anchor Psy American Program |
| `optionMarketKey` | `PublicKey` | The OptionMarket address |
| `dexProgramId` | `PublicKey` | The Serum DEX program ID |
| `serumMarket` | `Market` | The Serum market |
| `baseWallet` | `PublicKey` | The wallet address that contains the user's base asset tokens |
| `quoteWallet` | `PublicKey` | The wallet address that contains the user's quote asset tokens |
| `openOrdersKey` | `PublicKey` | The open orders keys |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[serumInstructions/settleFunds.ts:73](https://github.com/mithraiclabs/psyoptions-ts/blob/e5fa046/packages/psy-american/src/serumInstructions/settleFunds.ts#L73)
