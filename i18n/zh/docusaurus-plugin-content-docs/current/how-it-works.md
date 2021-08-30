---
id: american-how-it-works
title: 美式期權 v1 - 運作方式
sidebar_label: 運作方式
slug: /american-v1/how-it-works
---

要真正了解協議和平台的運作原理，需要先了解其背後的本質。 在這裡我們會盡量分解個體與協議的每一個互動的步驟和正在發生的事情

## 初始化新的期權市場
![initialize market](/img/how-it-works/initialize_market_page.png)

協議被設計為一種原始協議，因此它對期權、應該如何交易和定價等做出的假設很少。 協議本身也沒有假設哪些資產應該有期權，哪些不應該有期權。 它是以各種使用例子為前提去開發的，比如在 NFT 上寫合約、代幣化的財產契約、代幣化的股票…任何東西可以用 SPL 代幣代表的都可以有一個期權市場。 這些市場是否有流動性則又是另一個討論的話題；）。

期權市場本身是完全開放且無許可的。 If there are a pair of assets you want to write options on, you can create that market! 為此，你需要使用 `初始化市場(InitializeMarket)` 指令。 每個市場都由決定其可替代性的特定參數控制。 這些參數包括：

````Rust
pub struct OptionMarket {
  ...
    /// 寫入期權合約時保存在程式池中的 SPL Token 地址
    pub underlying_asset_mint: Pubkey,
    /// 指定執行價格的 SPL 代幣地址
    pub quote_asset_mint: Pubkey,
    /// 衍生單一期權的**標的資產**數量
    pub underlying_amount_per_contract: u64,
    /// 期權行權時必須轉移的**引用資產**數量
    pub quote_amount_per_contract: u64,
    /// 該市場合約到期的 Unix 時間戳記**以秒為單位**
    pub expiration_unix_timestamp: UnixTimestamp,
  ...
}
````

值得注意的是協議使用市場決定性的解決方法，根據特別的參數，所以永遠不可能有兩個完全相同的市場。 這是一個有目的性的V1 決定以減少流動性分散的機會。

創建一個新市場非常便宜和容易！ 當一個新市場被初始化時，會發生一些事情。 最重要的是為該市場創建**標的資產池**和**引用資產池**。 這些池都是獨特的並歸於每個個體市場。 當有人創建期權合約時，他們的抵押品會儲存到這些池中，接下來會詳細介紹

## 鑄造期權
<!-- TODO show image of mint component -->

毫無疑問是協議中最重要和最廣泛使用的指令。 當你想要為給定市場創建合約，你需要 `MintCoveredCall(鑄造掩護性看漲期權)` 指令。 **非常重要的注意事項**，儘管此說明包含_掩護性看漲期權_ 的術語在 V1 協議中，所有合約都可以視為掩護性看漲期權。 看跌(Put) 只是 看漲(Call) 的相反，V1 的所有市場都預先需要 100% 的抵押品。 可以在[這裡](./arch-put-call.md)閱讀更多。

要創建合約，合約作者必須提供 100% 的 `underlying_amount_per_contract(標的資產)`加上 5bps 的鑄幣費。 This small fee will go to the PsyOptions treasury and will be adjustable (or removable) via governance. 因此鑄造 1 個合約所需的總標的資產為：

`underlying_assets_required(需要的標的資產) = underlying_amount_per_contract(標的資產) + (underlying_amount_per_contract(標的資產) * 0.0005)`

然後這些標的資產將被存在期權市場的_標的資產池_中。 如果轉移到礦池成功（例如: 存了足夠多的標的資產），協議則會 鑄造2 個代幣給用戶 ，**期權代幣** 和 **賣家代幣**。

**期權代幣是實際合約**，它賦予持有者_在約定的執行價格將引用資產換成標的資產的權利但沒有義務 _。 期權代幣是一種 SPL 代幣，因此可以在任何支持 SPL 代幣的場所進行轉讓或交易。

**賣家代幣** 表示持有者做空期權或寫了合約。 讓我們將這句話分解為更符合邏輯的說法。 由於這是一份美式合約 期權代幣 持有者可以在到期前的任何時間點行權。 因此在任何時候（到期前或到期後），賣家代幣 都使持有者能夠認領`quote_amount_per_contract(引用資產)` 如果任何人行權並且引用資產池有足夠的資金。 到期後，賣家代幣 使持有者能夠從標的資產池中領回 `underlying_amount_per_contract(標的資產)`。

因此要通過編寫合約產生收益，你可以出售 期權代幣。 這可以在場外交易和轉移，在Serum市場或任何其他創造和交換市場 SPL 的場所。

## 行使期權
<!-- TODO image of the exercise row -->

通過 期權代幣，我們可以使用 `ExerciseCoveredCall(行使期權)
` 指令來執行合約。 要行使我們必須發布持有的 期權代幣 和 `quote_amount_per_contract(引用資產)` 加上 5bps 的費用。 這筆小額費用將進入 PsyOptions 金庫，並可通過治理進行調整（或移除）。 所以必須發布的總引用資產是

`quote_assets_required(需要的引用資產) = quote_amount_per_contract(引用資產) + (quote_amount_per_contract(引用資產) * 0.0005)`

發布正確的金額後，協議會銷毀 期權代幣，轉移 `quote_amount_per_contract(引用資產)` 到市場的引用資產池，並轉帳 `underlying_amount_per_contract(標的資產)` 到行權者的地址。


既然有人已經行權了，我們將介紹合約作者如何認領這些資產。

## 從已行權的合約中提取資產
<!-- TODO image of a imbalanced pools -->

經濟理論已經證明過早行使合約是沒有好處的。 但這不是傳統金融。 PsyOptions 美式V1 的可組合性提供了純波動率交易、投資組合對沖等之外的許多使用例子，在這些例子中，儘早行權肯定會發生。 讓我們以運行流動性挖掘程式的協議 XYZ 為例，該程式通過 10 年後到期的 價平 (At The Money) 合約獎勵新的流動性提供者。 只要 XYZ 項目繼續成長，這些合約持有者肯定會提早行權。

當提早行權發生時，合約作者能夠在引用資產可用時立即領取。 To do so, the contract writer must use the `ExchangeWriterTokenForQuote` instruction. The user must post the WriterToken. 協議將燒毀 賣家代幣 並將 `quote_amount_per_contract(引用資產)` 轉移到合約作者的錢包。

需要注意的幾個事項。 首先，這指令可以隨時調用，只要引用資產池中有足夠的引用資產即可。 其次，這指令是採用**先到先得**。 All OptionTokens and WriterTokens for a given market are respectively fungible (i.e. Any OptionToken is the same as another for the given market. The same is true for the WriterToken.). So as soon as someone exercises an OptionContract **anyone holding a WriterToken for that market has a claim on the quote assets**.

## Getting your underlying back after expiration
<!-- TODO image of full underlying asset pool, no quote -->

After expiration, a contract writer has a claim on their original underlying assets that they posted to write the contract. **Only after expiration** can a WriterToken sent the protocol to be burned in exchange for the `underlying_amount_per_contract`. This is done through the `ClosePostExpiration` instruction.

## 到期前平倉

如果你一次寫了太多合約會怎樣？ 或者你的資產分配方式已經改變了而你需要平倉？ 這就是 `ClosePosition(平倉)` 指令的使用之處。 此說明**要求你同時擁有 期權代幣 和 賣家代幣**。 At anypoint (pre or post expiration) if a wallet calls this instruction with the correct token pair preset, it will receive the `underlying_amount_per_contract`. The protocol checks and burns both tokens and then transfersthe underlying assets from the pool to the wallet.

If you sold the OptionToken and would like to close your position, you will have to go to a venue that trades/sells the correct OptionToken and purchase one there.
