---
id: american-how-it-works
title: 美国议定书 V1 如何工作
sidebar_label: 如何工作
slug: /american-v1/how-it-works
---

为了真正了解协议和平台的运作方式，人们需要了解场地下 发生了什么。 在这里，我们将尽最大努力打破一个 可能与协议和发生什么的实体之间的每一次交互。

## 初始化新选项市场
![初始化市场](/img/how-it-works/initialize_market_page.png)

协议旨在成为一个原始协议，所以它对选项、 它们应该如何交易、定价等几乎没有什么假设。 协议本身也没有假定 资产应该有哪些选择，而哪些不应该有选择。 它是在 的心灵中用不同的案例构建的，如在NFT上编写合同、令牌化属性契约、令牌化库存。 。可以表示为 SPL Token 的 可以有一个选项市场。 这些市场上会有流动资金 是另一个讨论的主题；)。

选择市场本身是完全开放和没有许可的。 如果有一对素材 你想要写选项，你可以创建这个市场！ 要做到这一点，您需要使用 `初始化Market` 说明。 每个市场都以决定 其可互换性的特定参数为目标。 这些参数包括：

````Rust
pub struct OptionMarket
...
    /// 当一个选项被写入
    pub 下方时在程序池中持有的 SPL 令牌地址：Pubkey,
    /// 标注攻击价格的SPL 令牌地址
    pub quote_asset_mint: Pubkey,
    /// 产生单一选项的 **基础资产** 的金额
    下面的 pub 金额：u64。
    /// 行使选项时必须转移的 **引用资产** 的金额
    pub quote_amount_per_contract: u64,
    /// Unix timestamp **以秒为单位** 该市场中的合同到期
    pub expiration_unix_timestamp: UnixTimestamp,
...
}
````

必须指出的是，议定书使用了市场决定性的解决方法。 基于 的独特参数，所以永远不会有两个完全相同的市场。 This was a concious decision of V1 to reduce the chance of fragmented liquidity.

创建一个新的市场非常便宜和容易！ 当一个新市场初始化几件事时 发生。 最重要的是为该市场创建 **个基础资产池** 和 **报价资产池** 这些集合是每个人 市场独特和拥有的。 当有人打破选项合约时，他们的抵押品被存储在这些池中，下次会有更多的 。

## 正在输入选项
<!-- TODO show image of mint component -->

毫无疑问，议定书中最重要和最广泛使用的指示。 当您想要 为特定市场创建一个合约时，您需要 `MintCoveredCall` 指令。 **极其重要的注意** 虽然这个说明包含了V1协议中的短语 _覆盖调用_ 。 所有合同都可以被视为有担保的电话。 PUT完全是CALL的 累犯，V1的所有市场都需要100%的前期抵押。 更多信息可以在这里阅读 [](./arch-put-call.md)

要想创建一个合同，合同作者必须拿起 `低于下限的金额_per_contract` 加上5bps 采矿费。 这笔小笔费用将会付给PsyOptions 金库，并且可以通过 施政来调整(或可移除)。 因此设定1项合同所需的基本资产总额是：

`underlying_assets_required = underlying_amount_per_contract + (underlying_amount_per_contract * 0.0005)`

这些未支配资产然后存储在选项市场的 _基础资产库_ 中。 如果 转移到资源库成功(即) 已经发布了足够的底层，然后协议 将用户2标记, **可选令牌** 和 **作者令牌**

The **OptionToken is the actual contract**, which gives the holder _the right but not the obligation to swap the quote assets for the underlying assets at the agreed upon strike price_. OptionToken 是一个 SPL Token，所以它可以在 上被转移或交易任何支持SPL Token 的地点。

**作者令牌** 表示持有人是短暂的选项或写了合同。 让 将该语句分解成更符合逻辑的术语。 如果这是美国风格的合同 ，任选令牌持有人可以在到期前的任何时间进行练习。 So at any point (pre or post expiration) the WriterToken gives the holder the ability to claim the `quote_amount_per_contract` should anyone exercise and the Quote Asset Pool contains enough of a balance. 后期失效，作家令牌让持有者能够从 从底层资产池返回 `underlying_amount_per_contract`

为了从写入合同中生成收益，您会出售OptionToken。 这可以在Seurm市场或任何其他能够产生 和交换市场苏人解的地点做到的。

## 履行合同
<!-- TODO image of the exercise row -->

使用 OptionToken 我们可以使用 `ExerecuiseCoveredCall` 指令来执行合同。 To exercise we must post the OptionToken held and the `quote_amount_per_contract` plus a 5bps fee. 这个小笔费用将会付给PsyOptions 金库，并且可以通过管理进行调整(或可移除)。 所以必须发布的总报价 资产总额是

`quote_assets_required = quote_amount_per_contract + (quote_amount_per_contract * 0.0005)`

使用正确的金额，协议烧毁了选项令牌，将 `quote_amount_per_contract` 转到市场的报价资产池， 和转账 `转入练习者地址的底层金额`


既然有人已经练习了，我们会讨论合同作者如何能够要求这些资产。

## 从行使合同中提取资产
<!-- TODO image of a imbalanced pools -->

经济理论已经证明，提早履行合同是无益的。 但 这不是交易法。 美国V1心理选项的可混成性提供了许多使用案例 不包括纯易挥发性交易、组合套期保值等。 在那里执行早期的意愿 肯定会发生。 Lets take protocol XYZ that is running a liquidity mining program that incentivized new liquidity providers with At The Money (ATM) contracts that expire in 10 years. As long as project XYZ continues to grow, these contract holders will most cetainly exercise early.

现在，在这种早期练习发生后，合同撰写人能够一旦获得报价资产 。 要这样做，合同写作者必须使用 `ExchangeWriterTokenForQuote` 指令。 用户最多发布作家令牌。 协议将烧毁作家令牌并将 `quote_amount_per_contract` 转到 作家的钱包。

有几个项目需要注意。 First, this instruction can be called at any point in time, so long as there are enough quote assets in the Quote Asset Pool. Second, this instruction acts on a **first come, first serve basis**. 给定的 市场的所有可选令牌和作家令牌都是可互换的 (即) 任何可选代币与 给定市场的另一个代币相同。 作家令牌的情况也是一样的。 一旦有人练习 可选合同 **，任何持有该市场的作家令牌的人都会在报价资产上拥有索偿权**

## 在过期后返回您的背包
<!-- TODO image of full underlying asset pool, no quote -->

合同写作者在合同到期后对原来的基本资产提出了要求，即 张贴以写入合同。 **只有在过期了** 之后，作家令牌才能发送协议 以换取 `下游_amount_per_contract`。 这是通过 `ClosePostexpiration` 说明完成的。

## 关闭预到期的仓位

如果您同时写了太多的合约，会发生什么情况？ 或者您的曝光已经改变，您需要 来关闭您的位置？ 这是 `关闭位置` 指令的所在地。 此指令 **要求您同时拥有可选令牌和作家令牌**。 At anypoint (pre or post expiration) if a wallet calls this instruction with the correct token pair preset, it will receive the `underlying_amount_per_contract`. 协议检查并烧毁令牌，然后 将基础资产从池转移到钱包。

如果您出售了可选令牌并想要关闭您的位置， 您必须去一个交易/销售正确的选项令牌和 的地点 




