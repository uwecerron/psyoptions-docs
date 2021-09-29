"use strict";(self.webpackChunkpsyoptions_docs=self.webpackChunkpsyoptions_docs||[]).push([[778],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=o(n),N=r,u=s["".concat(d,".").concat(N)]||s[N]||k[N]||i;return n?a.createElement(u,l(l({ref:e},m),{},{components:n})):a.createElement(u,l({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7386:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return o},default:function(){return k}});var a=n(8782),r=n(1251),i=(n(7294),n(3905)),l={id:"serumInstructions",title:"Namespace: serumInstructions",sidebar_label:"serumInstructions",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"javascript-api/namespaces/serumInstructions",id:"javascript-api/namespaces/serumInstructions",isDocsHomePage:!1,title:"Namespace: serumInstructions",description:"Functions",source:"@site/docs/javascript-api/namespaces/serumInstructions.md",sourceDirName:"javascript-api/namespaces",slug:"/javascript-api/namespaces/serumInstructions",permalink:"/javascript-api/namespaces/serumInstructions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"serumInstructions",title:"Namespace: serumInstructions",sidebar_label:"serumInstructions",sidebar_position:0,custom_edit_url:null},sidebar:"someSidebar",previous:{title:"instructions",permalink:"/javascript-api/namespaces/instructions"},next:{title:"serumUtils",permalink:"/javascript-api/namespaces/serumUtils"}},o=[{value:"Functions",id:"functions",children:[{value:"cancelOrderByClientId",id:"cancelorderbyclientid",children:[]},{value:"cancelOrderInstructionV2",id:"cancelorderinstructionv2",children:[]},{value:"initOpenOrdersInstruction",id:"initopenordersinstruction",children:[]},{value:"newOrderInstruction",id:"neworderinstruction",children:[]},{value:"settleFundsInstruction",id:"settlefundsinstruction",children:[]}]}],m={toc:o};function k(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"cancelorderbyclientid"},"cancelOrderByClientId"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"cancelOrderByClientId"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction")," for canceling an open order by the set clientId"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Program for Psy American")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of the OptionMarket for the option in the Seurm Market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the DEX program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the Serum market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"order")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Order")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum Order to cancel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional: bump seed for the Serum market")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/cancelOrder.ts#L51"},"serumInstructions/cancelOrder.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cancelorderinstructionv2"},"cancelOrderInstructionV2"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"cancelOrderInstructionV2"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Create a TransactionInstruction for canceling a specific ",(0,i.kt)("em",{parentName:"p"},"order")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Program for Psy American")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of the OptionMarket for the option in the Seurm Market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the DEX program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the Serum market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"order")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Order")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum Order to cancel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional: bump seed for the Serum market")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/cancelOrder.ts#L18"},"serumInstructions/cancelOrder.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initopenordersinstruction"},"initOpenOrdersInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"initOpenOrdersInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"Create a proxied InitOpenOrdersInstruction"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The user's wallet address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serum DEX id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in the market authority bump seed")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/initOpenOrders.ts#L17"},"serumInstructions/initOpenOrders.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"neworderinstruction"},"newOrderInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"newOrderInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"orderArguments"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction"),">"),(0,i.kt)("p",null,"Create a new order proxied through the Psy American Protocol"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum DEX program ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"orderArguments")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"OrderParams"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum OrderParams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in the market authority bump seed")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/newOrder.ts#L21"},"serumInstructions/newOrder.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settlefundsinstruction"},"settleFundsInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"settleFundsInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baseWallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteWallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumReferralKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"openOrdersKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Create a TransactionInstruction for the settleFunds instruction"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American Program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum DEX program ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"baseWallet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The wallet address that contains the user's base asset tokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"quoteWallet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The wallet address that contains the user's quote asset tokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumReferralKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Psy American referral address for the quote asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"openOrdersKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The open orders keys")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in the market authority bump seed")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/2ad4978/packages/psy-american/src/serumInstructions/settleFunds.ts#L20"},"serumInstructions/settleFunds.ts:20")))}k.isMDXComponent=!0}}]);