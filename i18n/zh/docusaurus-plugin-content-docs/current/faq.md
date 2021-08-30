---
id: faq
title: FAQ
sidebar_label: FAQ
slug: /faq
---

- [什麼是期權？](#what-are-options)
- [為什麼 PsyOptions 選擇在 Solana 上開發？](#why-did-psyoptions-choose-to-build-on-solana)
- [PsyOptions 會如何融入 Solana 生態系？](#how-will-psyoptions-fit-within-the-solana-ecosystem)
- [PsyOptions 是提供美式期權還是歐式期權？](#does-psyoptions-offer-american-or-european-style-options)
- [會有空投獎勵嗎?](#will-there-be-an-airdrop)
- [PsyOptions 提供槓桿操作嗎？](#does-psyoptions-offer-leverage)
- [PsyOptions 支持什麼類型的資產？](#what-type-of-assets-does-psyoptions-support)
- [我可以在 PsyOptions 上創建自己的市場嗎？](#can-i-create-my-own-markets-on-psyoptions)
- [PsyOptions 上的期權是如何定價的？](#how-are-options-priced-on-psyoptions)
- [為什麼期權賣家會收到兩個個別的代幣？ 書面合約不是和期權掛鉤的嗎？](#why-does-the-option-writer-receive-two-separate-tokens-isnt-the-written-contract-tied-to-the-option)
- [PsyOptions 與其他期權協議有何不同？](#how-is-psyoptions-different-from-the-other-options-protocols-out-there)

### 什麼是期權？

期權是金融衍生品，賦予買方以約定的價格和日期買賣標的資產的權利，但沒有義務。 更多資訊可以在這裡找到：https://www.investopedia.com/terms/o/option.asp

### 為什麼 PsyOptions 選擇在 Solana 上開發？

PsyOptions 的目標是為 去中心金融 帶來 傳統金融 的感覺。 隨著 Serum 的推出，訂單簿上的交易期權變成了現實。 快速的出塊時間減少了結算前的時間，並允許交易者以最接近傳統交易所的速度下單、執行或終止訂單。

### PsyOptions 會如何融入 Solana 生態系？

PsyOptions V1 是 Solana 上期權的清算和結算層。 在沒有外部依賴（例如: 預言機）的情況下，可以在任何時間內以完全去信任的方式為任何 SPL 代幣創建期權。 這使得未來的協議以他們認為合適的任何方式將期權整合到他們的程式中。

我們願意幫助任何希望在其協議中整合期權或 [使用期權來獎勵參與者的團隊](https://medium.com/psyoptions/the-options-are-limitless-58dddbd28cb4).

### PsyOptions 是提供美式期權還是歐式期權？

PsyOptions 提供美式期權合約。

### 會有空投獎勵嗎?

目前沒有空投的計劃。 但是我們已經並將持續更新我們的社群有關獎勵機制的計劃。

### PsyOptions 提供槓桿操作嗎？

PsyOptions V1 不提供槓桿，因為期權在寫入時是 100% 抵押的。 未來可能有外部方式通過編寫借貸協議來獲得槓桿作用。

### PsyOptions 支持什麼類型的資產？

PsyOptions 支持任何和所有 SPL 代幣！

### 我可以在 PsyOptions 上創建自己的市場嗎？

可以! 任何人都可以在 PsyOptions 協議上開新市場。

### PsyOptions 上的期權是如何定價的？

PsyOptions 不對價格做任何假設，並允許用戶按照自己的意願定價。 Serum 的做市商將按照他們認為合適的方式為期權定價。

### 為什麼期權賣家會收到兩個個別的代幣？ 書面合約不是和期權掛鉤的嗎？

賣家將收到一個代表該期權的代幣。 該代幣允許持有人在到期前行權，因此可以以溢價出售。

第二個代幣是賣家代幣。 在傳統金融中，結算所可能會紀錄誰編寫了特定的期權。 從某種意義上來說，這些期權是不可替代的，因為它們與特定的人綁定。 期權必須是可替代的，以便與 Serum 訂單簿、AMM 和其他需要數量大於 1 才能起作用的協議組合。 因此它們不會以任何方式與期權綁定。

可替代的賣家代幣也促使其他有趣的可能性。 它可以允許借貸市場接受賣家代幣作為貸款抵押品，或者 AMM 可以使用賣家代幣創建池，以便用戶可以出售他們對標的資產的債權。

### PsyOptions 與其他期權協議有何不同？

PsyOptions 是“期權工廠”和結算層。 協議不對價格做任何假設，允許用戶按照自己的意願定價。 協議也沒有對期權合約的規模做出任何假設。 這讓 PsyOptions 保持靈活、可組合，並允許其他人在它之上開發。
