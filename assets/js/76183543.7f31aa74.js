"use strict";(self.webpackChunkpsyoptions_docs=self.webpackChunkpsyoptions_docs||[]).push([[727],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var o=n(8782),r=n(1251),a=(n(7294),n(3905)),i={id:"american-how-it-works",title:"American Protocol V1 How It Works",sidebar_label:"How It Works",slug:"/american-v1/how-it-works"},s=void 0,c={unversionedId:"american-how-it-works",id:"american-how-it-works",isDocsHomePage:!1,title:"American Protocol V1 How It Works",description:"To truly understand how the protocol and platform works, one needs to understand what's",source:"@site/docs/how-it-works.md",sourceDirName:".",slug:"/american-v1/how-it-works",permalink:"/american-v1/how-it-works",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/how-it-works.md",tags:[],version:"current",frontMatter:{id:"american-how-it-works",title:"American Protocol V1 How It Works",sidebar_label:"How It Works",slug:"/american-v1/how-it-works"},sidebar:"someSidebar",previous:{title:"Call vs Put",permalink:"/american-v1/call-put"},next:{title:"How It Works",permalink:"/european-v1/how-it-works"}},l=[{value:"Initialize new options market",id:"initialize-new-options-market",children:[]},{value:"Minting an option",id:"minting-an-option",children:[]},{value:"Exercising a contract",id:"exercising-a-contract",children:[]},{value:"Extracting assets from an exercised contract",id:"extracting-assets-from-an-exercised-contract",children:[]},{value:"Getting your underlying back after expiration",id:"getting-your-underlying-back-after-expiration",children:[]},{value:"Closing a position pre-expiration",id:"closing-a-position-pre-expiration",children:[]}],p={toc:l};function h(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To truly understand how the protocol and platform works, one needs to understand what's\nhappening under the hood. Here we will do our best to break down each interaction an entity\nmay make with the protocol and what's happening."),(0,a.kt)("h2",{id:"initialize-new-options-market"},"Initialize new options market"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"initialize market",src:n(6558).Z})),(0,a.kt)("p",null,"The protocol is designed to be a primitive, so it makes very little assumptions about options,\nhow they should be traded, priced, etc. The protocol itself also makes no assumptions on what\nassets should have options and which should not. It has been built with various use cases in\nmind, like writing contracts on NFTs, tokenized property deeds, tokenized stocks...anything\nthat can be represented as an SPL Token can have an option market. Will there be liquidity\non those markets is a topic for another discussion ;)."),(0,a.kt)("p",null,"Option markets themselves are completely open and permissionless. If there are a pair of assets\nyou want to write options on, you can create that market! To do so you need to use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"InitializeMarket")," instruction. Each market is governed by specific parameters that determine its fungibility. Those parameters include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Rust"},"pub struct OptionMarket {\n  ...\n    /// The SPL Token Address that is held in the program's pool when an option is written\n    pub underlying_asset_mint: Pubkey,\n    /// The SPL Token Address that denominates the strike price\n    pub quote_asset_mint: Pubkey,\n    /// The amount of the **underlying asset** that derives a single option\n    pub underlying_amount_per_contract: u64,\n    /// The amount of **quote asset** that must be transfered when an option is exercised\n    pub quote_amount_per_contract: u64,\n    /// The Unix timestamp **in seconds** at which the contracts in this market expire\n    pub expiration_unix_timestamp: UnixTimestamp,\n  ...\n}\n")),(0,a.kt)("p",null,"It is important to note that the protocol uses deterministic addressing of markets, based on\nthe unique parameters, so there can never be two of the exact same market. This was a conscious\ndecision of V1 to reduce the chance of fragmented liquidity. "),(0,a.kt)("p",null,"Creating a new market is extremely cheap and easy! When a new market is initialized a few things\nhappen. The most important are the creation of the ",(0,a.kt)("strong",{parentName:"p"},"Underlying Asset Pool")," and the\n",(0,a.kt)("strong",{parentName:"p"},"Quote Asset Pool")," for that market. These pools are unique to and owned by each individual\nmarket. When someone mints an option contract, their collateral is stored in these pools, more\non that next."),(0,a.kt)("h2",{id:"minting-an-option"},"Minting an option"),(0,a.kt)("p",null,"Without a doubt, the most important and widely used instruction of the protocol. When you want to\nmint a contract for a given market you need the ",(0,a.kt)("inlineCode",{parentName:"p"},"MintCoveredCall")," instruction. It is\n",(0,a.kt)("strong",{parentName:"p"},"extremely important to note")," that although this instruction contains the phrase ",(0,a.kt)("em",{parentName:"p"},"Covered Call"),"\nin the V1 protocol, all contracts can be considered covered calls. PUTs are simply the reciprocal\nof a CALL, and all of V1's markets require 100% collateral upfront. More can be read\n",(0,a.kt)("a",{parentName:"p",href:"/american-v1/call-put"},"here"),"."),(0,a.kt)("p",null,"To mint a contract, the contract writer must put up 100% of the ",(0,a.kt)("inlineCode",{parentName:"p"},"underlying_amount_per_contract"),"\nplus a 5bps minting fee. This small fee will go to the PsyOptions treasury and will be adjustable (or removable) via\ngovernance. So the total underlying assets required to mint 1 contract is:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"underlying_assets_required = underlying_amount_per_contract + (underlying_amount_per_contract * 0.0005)")),(0,a.kt)("p",null,"These underlying assets are then stored in the option markets' ",(0,a.kt)("em",{parentName:"p"},"Underlying Asset Pool"),". If\nthe transfer to the pool succeeds (i.e. enough underlying was posted), then the protocol\nmints the user 2 tokens, the ",(0,a.kt)("strong",{parentName:"p"},"OptionToken")," and the ",(0,a.kt)("strong",{parentName:"p"},"WriterToken"),". "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"OptionToken is the actual contract"),", which gives the holder ",(0,a.kt)("em",{parentName:"p"},"the right but not\nthe obligation to swap the quote assets for the underlying assets at the agreed upon\nstrike price"),". The OptionToken is an SPL Token, so it can be transferred or traded on\nany venue that has SPL Token support. "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"WriterToken")," denotes the holder is short the option or wrote the contract. Lets\nbreak that statement down into more logical terms. Given this is an American style contract\nthe OptionToken holder can exercise at any point in time prior to expiration. So at any point\n(pre or post expiration) the WriterToken gives the holder the ability to claim the\n",(0,a.kt)("inlineCode",{parentName:"p"},"quote_amount_per_contract")," should anyone exercise and the Quote Asset Pool contains\nenough of a balance. Post expiration, the WriterToken gives the holder the ability to\nclaim the ",(0,a.kt)("inlineCode",{parentName:"p"},"underlying_amount_per_contract")," back from the Underlying Asset Pool."),(0,a.kt)("p",null,"So to generate yield from writing a contract, you would sell the OptionToken.\nThat could be done OTC and transferred, on a Serum market, or any other venue that creates\nand exchange for a market's SPLs. "),(0,a.kt)("h2",{id:"exercising-a-contract"},"Exercising a contract"),(0,a.kt)("p",null,"With the OptionToken we have the ability to exercise the contract with the use of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ExerciseCoveredCall")," instruction. To exercise we must post the OptionToken held and\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"quote_amount_per_contract")," plus a 5bps fee. This small fee will got to the PsyOptions\ntreasury and will be adjustable (or removable) via governance. So the total quote\nasset that must be posted is "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"quote_assets_required = quote_amount_per_contract + (quote_amount_per_contract * 0.0005)")),(0,a.kt)("p",null,"With the correct amount posted, the protocol burns the OptionToken, transfers\n",(0,a.kt)("inlineCode",{parentName:"p"},"quote_amount_per_contract")," to the market's Quote Asset Pool, and transfers\n",(0,a.kt)("inlineCode",{parentName:"p"},"underlying_amount_per_contract")," to the exerciser's address. "),(0,a.kt)("p",null,"Now that someone has exercised, we'll cover how a contract writer can claim those assets."),(0,a.kt)("h2",{id:"extracting-assets-from-an-exercised-contract"},"Extracting assets from an exercised contract"),(0,a.kt)("p",null,"Economic theories have proven that it is not beneficial to exercise a contract early, but\nthis is not TradFi. The composability of PsyOptions American V1 provides many use cases\noutside of pure volatility trading, portfolio hedging, etc. where exercising early will\nmost certainly happen. Let's take protocol XYZ that is running a liquidity mining program\nthat incentivized new liquidity providers with At The Money (ATM) contracts that expire\nin 10 years. As long as project XYZ continues to grow, these contract holders will most\ncertainly exercise early. "),(0,a.kt)("p",null,"Now when that early exercise occurs, the contract writer is able to claim the quote assets\nas soon as they are available. To do so, the contract writer must use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ExchangeWriterTokenForQuote")," instruction. The user must post the WriterToken. The\nprotocol will burn the WriterToken and transfer the ",(0,a.kt)("inlineCode",{parentName:"p"},"quote_amount_per_contract")," to the\nwriter's wallet. "),(0,a.kt)("p",null,"A few items to note. First, this instruction can be called at any point in time, so long\nas there are enough quote assets in the Quote Asset Pool. Second, this instruction acts\non a ",(0,a.kt)("strong",{parentName:"p"},"first come, first serve basis"),". All OptionTokens and WriterTokens for a given\nmarket are respectively fungible (i.e. Any OptionToken is the same as another for the\ngiven market. The same is true for the WriterToken.). So as soon as someone exercises an\nOptionContract ",(0,a.kt)("strong",{parentName:"p"},"anyone holding a WriterToken for that market has a claim on the quote assets"),"."),(0,a.kt)("h2",{id:"getting-your-underlying-back-after-expiration"},"Getting your underlying back after expiration"),(0,a.kt)("p",null,"After expiration, a contract writer has a claim on their original underlying assets that they\nposted to write the contract. ",(0,a.kt)("strong",{parentName:"p"},"Only after expiration")," can a WriterToken sent the protocol\nto be burned in exchange for the ",(0,a.kt)("inlineCode",{parentName:"p"},"underlying_amount_per_contract"),". This is done through the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ClosePostExpiration")," instruction."),(0,a.kt)("h2",{id:"closing-a-position-pre-expiration"},"Closing a position pre-expiration"),(0,a.kt)("p",null,"What happens if you wrote too many contracts at once? Or your exposure has changed and you need\nto close your position? This is where the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClosePosition")," instruction comes in. This instruction\n",(0,a.kt)("strong",{parentName:"p"},"requires you to have both the OptionToken and the WriterToken"),". At anypoint (pre or post\nexpiration) if a wallet calls this instruction with the correct token pair preset, it will\nreceive the ",(0,a.kt)("inlineCode",{parentName:"p"},"underlying_amount_per_contract"),". The protocol checks and burns both tokens and then transfers the underlying assets from the pool to the wallet."))}h.isMDXComponent=!0},6558:function(e,t,n){t.Z=n.p+"assets/images/initialize_market_page-856da4b58eade2e35e691ca0804c7f2a.png"}}]);