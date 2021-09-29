"use strict";(self.webpackChunkpsyoptions_docs=self.webpackChunkpsyoptions_docs||[]).push([[291],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,y=c["".concat(l,".").concat(d)]||c[d]||u[d]||n;return a?r.createElement(y,o(o({ref:t},h),{},{components:a})):r.createElement(y,o({ref:t},h))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5309:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=a(8782),i=a(1251),n=(a(7294),a(3905)),o={id:"glossary",title:"Glossary",sidebar_label:"Glossary",slug:"/glossary"},s=void 0,l={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Option",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/glossary",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary",sidebar_label:"Glossary",slug:"/glossary"},sidebar:"someSidebar",previous:{title:"Mission",permalink:"/mission"},next:{title:"Options Strategies",permalink:"/options-strategies"}},p=[{value:"The Greeks",id:"the-greeks",children:[]},{value:"Options Strategies",id:"options-strategies",children:[]}],h={toc:p};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"option"},"Option"),(0,n.kt)("p",null,"An option is a contract that gives the owner the right to buy (in the case of a ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call"),") or sell (in the case of a ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put"),") a number of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," at a predetermined price (",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),") on or before a fixed ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date."),(0,n.kt)("h4",{id:"call"},"Call"),(0,n.kt)("p",null,"Buyers of call options generally expect the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to increase in value, whereas sellers of calls expect a decrease in value or for the value to remain the same."),(0,n.kt)("p",null,"Buying a call gives you the right, but not the obligation, to buy the ",(0,n.kt)("a",{parentName:"p",href:"#contract-size"},"contract size")," amount of the underlying asset at the option's ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),". The value of a call option should increase as the price of the underlying asset increases."),(0,n.kt)("p",null,"Writing a ",(0,n.kt)("a",{parentName:"p",href:"#covered-call"},"covered call")," option allows you to collect the premium while obligating you to sell the contract size amount of the underlying asset to the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract."),(0,n.kt)("h4",{id:"put"},"Put"),(0,n.kt)("p",null,"Buyers of put options generally expect the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to decrease in value, whereas sellers of puts expect an increase in value or for the value to remain the same."),(0,n.kt)("p",null,"Buying a put gives you the right, but not the obligation, to sell the ",(0,n.kt)("a",{parentName:"p",href:"#contract-size"},"contract size")," amount of underlying asset at the option's strike price. The value of the put option should increase as the price of the underlying asset decreases."),(0,n.kt)("p",null,"Writing a ",(0,n.kt)("a",{parentName:"p",href:"#secured-put"},"secured put")," option allows you to collect the premium while obligating you to buy a contract size amount of the underlying asset from the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract."),(0,n.kt)("h4",{id:"covered-call"},"Covered Call"),(0,n.kt)("p",null,"An option strategy executed by selling a call option while holding the same ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),". This strategy is generally used if you expect the underlying asset price to stay relatively flat or increase moderately. For example, you would mint/sell 1 SOL/USDC call while locking up 100 SOL as collateral for calls with ",(0,n.kt)("a",{parentName:"p",href:"#contract-size"},"contract size")," of 100. "),(0,n.kt)("h4",{id:"secured-put"},"Secured Put"),(0,n.kt)("p",null,"An option strategy composed of selling a ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," option while retaining enough cash to purchase the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," if the option contract is executed by it's buyer. This strategy is generally used if you are bearish on an asset short term, but bullish long term. For example, you would mint/sell 1 SOL/USDC put while locking up 4000 (strike price * contract size) USDC as collateral for puts at ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price")," of 40 and ",(0,n.kt)("a",{parentName:"p",href:"#contract-size"},"contract size")," of 100."),(0,n.kt)("h4",{id:"underlying-asset"},"Underlying asset"),(0,n.kt)("p",null,"The asset to be locked when writing a covered call, or received when exercising a covered call."),(0,n.kt)("h4",{id:"quote-asset"},"Quote asset"),(0,n.kt)("p",null,"The asset used to price the underlying asset."),(0,n.kt)("h4",{id:"contract-size"},"Contract size"),(0,n.kt)("p",null,"How many of the underlying asset can the option holder exercise for.\nOr in other words, how many underlying asset need to be locked when writing a covered call."),(0,n.kt)("h4",{id:"bid"},"Bid"),(0,n.kt)("p",null,"The price at which a buyer is willing to buy an option, meaning the price at which a seller can immediately sell an option."),(0,n.kt)("h4",{id:"ask"},"Ask"),(0,n.kt)("p",null,"The price at which a seller is willing to sell an option, meaning the price at which a buyer can immediately purchase an option. "),(0,n.kt)("h4",{id:"strike-price"},"Strike price"),(0,n.kt)("p",null,"The price in which the exerciser may exchange quote asset for the locked ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),"."),(0,n.kt)("h4",{id:"expiration"},"Expiration"),(0,n.kt)("p",null,"The last date where the option may be exercised."),(0,n.kt)("h4",{id:"exercise"},"Exercise"),(0,n.kt)("p",null,"Exercise means to put into effect the right to buy or sell the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," specified in an options contract. When a call option owner exercises their contract, they will buy the underlying assets from the option writer at the agreed upon ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),". When a put option owner exercises their contract, they will sell the underlying asset to the option writer at the agreed upon strike price."),(0,n.kt)("h4",{id:"iv"},"IV"),(0,n.kt)("p",null,"Implied Volatility(IV) is an estimate of the volatility of the underlying asset that is derived from the market value of an option. It is essentially the market's forecast of a likely movement in an underlying asset's price."),(0,n.kt)("h4",{id:"in-the-money"},"In the Money"),(0,n.kt)("p",null,"An In the Money(ITM) option is one with a ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price")," that has already been surpassed by the price of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),"."),(0,n.kt)("h4",{id:"out-of-the-money"},"Out of the Money"),(0,n.kt)("p",null,"An Out of the Money(OTM) option is one with a ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price")," that the price of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," has yet to reach. "),(0,n.kt)("h4",{id:"at-the-money"},"At the Money"),(0,n.kt)("p",null,"An At the Money(ATM) option is one with a ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price")," that is equal to the current price of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),"."),(0,n.kt)("h3",{id:"the-greeks"},"The Greeks"),(0,n.kt)("h4",{id:"beta"},"Beta"),(0,n.kt)("p",null,"Beta is a measure of the volatility of an asset compared to the overall market. In addition to being a measure of the volatility of an asset compared to the overall market, beta can also be used to assess the risk of a coin in comparison to a benchmark. "),(0,n.kt)("p",null,"Example: If you took the entire crypto market and compared it against itself you would get a beta value of 1. However, if you take a specific coin such as SOL and compare it against the crypto market, you will likely get a beta value that is higher or lower than 1."),(0,n.kt)("p",null,"Beta values higher than 1 indicate that a coin is more volatile than the overall market while also being correlated to the overall market. On the other hand, beta values lower than 1 indicate that a coin is less volatile in comparison to the market, or that it is not correlated to the market."),(0,n.kt)("h4",{id:"delta"},"Delta"),(0,n.kt)("p",null,"Delta measures an option's sensitivity to a change in price of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),". Delta is measuring the rate of change between the option\u2019s price and a $1 change in the underlying asset's price. "),(0,n.kt)("p",null,"Example: A delta of 0.40 means that in theory, the option's price will move $0.40 for every $1 move in the underlying asset's price."),(0,n.kt)("p",null,"Delta can be a number between -1 and 1, depending on the type of contract. ",(0,n.kt)("a",{parentName:"p",href:"#call"},"Call")," options can range from 0 to 1, while ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," options can range from -1 to 0."),(0,n.kt)("h4",{id:"gamma"},"Gamma"),(0,n.kt)("p",null,"Gamma is the rate of change in an option's ",(0,n.kt)("a",{parentName:"p",href:"#delta"},"delta")," per 1 point move in the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," price. When an option's price is deep ",(0,n.kt)("a",{parentName:"p",href:"#in-the-money"},"ITM")," or ",(0,n.kt)("a",{parentName:"p",href:"#out-of-the-money"},"OTM"),", it's gamma is near zero. When the option's price is ",(0,n.kt)("a",{parentName:"p",href:"#at-the-money"},"ATM"),", it's gamma is large. All long options have a positive gamma, while all short options have a negative gamma. "),(0,n.kt)("h4",{id:"vega"},"Vega"),(0,n.kt)("p",null,"Vega measures an options sensitivity to ",(0,n.kt)("a",{parentName:"p",href:"#iv"},"implied volatility"),"."),(0,n.kt)("p",null,"Example: The value of an option is 5.00, implied volatility is at 20, and the option has a vega of .12. If implied volatility moved to 21.5, the option's price would increase by 1.5 x .12 = .18 making the new value 5.18."),(0,n.kt)("h4",{id:"theta"},"Theta"),(0,n.kt)("p",null,"Theta, also known as time decay, is an option's sensitivity to time. It is the amount your option's value decreases as it gets closer to it's ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date. Theta is typically represented as a negative number because once you purchase an option and time starts to move towards the expiration date, the potential for the option to be profitable begins to decrease. "),(0,n.kt)("p",null,'However, when you sell an option, theta usually increases. This is because as a seller of an option, it is typically more beneficial to you if the option expires without being exercised. This is why selling options are often referred to as "postive theta trades".'),(0,n.kt)("h3",{id:"options-strategies"},"Options Strategies"),(0,n.kt)("h4",{id:"bull-call-spread"},"Bull Call Spread"),(0,n.kt)("p",null,"A Bull Call Spread is an option strategy that you can utilize if you think the price of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," will go up, but not by much. To execute this strategy, you use two call options to form a price range with a lower and higher ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),". "),(0,n.kt)("p",null,"To start, purchase a ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," with a ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price")," that is higher than the current market price of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),". Then, sell a ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," with a ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price")," that is even higher than the strike price of the call you purchased with the same ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date. Selling this ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," helps offset the cost of purchasing the original call. "),(0,n.kt)("p",null,"When executing this strategy, your losses are limited to the net cost of creating the spread, but this also limits your potential gains. Typically this strategy is executed during times of high market volatility."),(0,n.kt)("h4",{id:"bear-put-spread"},"Bear Put Spread"),(0,n.kt)("p",null,"The Bear Put Spread can be used when you are expecting a moderate to significant drop in an asset\u2019s price, and you want to reduce the cost and risk associated with your trade. Similar to the ",(0,n.kt)("a",{parentName:"p",href:"#bull-call-spread"},"Bull Call Spread"),", this strategy is achieved by using two separate ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," options."),(0,n.kt)("p",null,"To execute this trade, you would purchase a ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," option while also selling a put option with the same ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date at a lower ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),". Selling the ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," option with the lower ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price")," helps cover some of the premium you paid when purchasing the initial put. You\u2019re also greatly reducing your risk as the risk is limited to the cost of setting up the spread."),(0,n.kt)("p",null,"This strategy allows you to profit from the price of the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," going down while not exposing you to the theoretically unlimited loss that can occur when short selling."),(0,n.kt)("h4",{id:"protective-collar"},"Protective Collar"),(0,n.kt)("p",null,"When market volatility picks up drastically, and you\u2019re not sure what\u2019s going to happen, you can utilize this strategy. With this strategy you can protect yourself from short term downside losses, while also retaining the ability to make money if price goes up. "),(0,n.kt)("p",null,"If you hold the ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),", and want to protect this position from a potentially drastic sell off, you would first purchase an ",(0,n.kt)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put"),". Then, you would sell an ",(0,n.kt)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," with the same ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date as the ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," you purchased. "),(0,n.kt)("p",null,"Writing the ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," option essentially pays for the ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put"),", and in theory you could even end up with a net gain using this strategy. This sound like a no brainer way to protect your position, but there is one major drawback. If price doesn\u2019t go down, and instead surges upwards past the written call's ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),", you\u2019ll be forced to sell your ",(0,n.kt)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to the purchaser of the ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," option."),(0,n.kt)("h4",{id:"long-straddle"},"Long Straddle"),(0,n.kt)("p",null,"This strategy is typically used when traders expect a news event to move the price of a particular asset. To execute this strategy, you would purchase both a ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," and a ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," with the same ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date and ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),". Since the strike price is ",(0,n.kt)("a",{parentName:"p",href:"#at-the-money"},"ATM")," or close to it, small moves in either direction are essentially canceled out."),(0,n.kt)("p",null,"While this strategy can be a useful way to prepare yourself for a potentially large move in price, it does have downsides. The market may not react to this event at all, and also, you are not the only person aware of this event. Options sellers will increase their premiums because of this event, making this an expensive strategy to execute. "),(0,n.kt)("p",null,"Due to the expensive nature of this strategy, it is cheaper and arguably better to simply bet on one direction. This decision is of course up to the trader. Considering that the potential profit is unlimited, and the potential loss is limited, it may be worth it."),(0,n.kt)("h4",{id:"long-strangle"},"Long Strangle"),(0,n.kt)("p",null,"This strategy is nearly identical to the ",(0,n.kt)("a",{parentName:"p",href:"#long-straddle"},"Long Straddle")," strategy except for two key differences. Rather than purchasing an ",(0,n.kt)("a",{parentName:"p",href:"#at-the-money"},"ATM")," ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," and an ATM ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put"),", you would purchase an ",(0,n.kt)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," call and an OTM put. Also, rather than having the same ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike price"),", the call and put you purchase for this strategy will have different strike prices. They will still have the same ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date."),(0,n.kt)("p",null,"Purchasing an ",(0,n.kt)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," and an OTM ",(0,n.kt)("a",{parentName:"p",href:"#put"},"put")," makes this strategy cheaper to execute than a Long Straddle, however, it is considered riskier because price will have to be an even larger amount to be profitable. "),(0,n.kt)("h4",{id:"long-call-butterfly-spread"},"Long Call Butterfly Spread"),(0,n.kt)("p",null,"In general, Butterfly Spreads are strategies that utilize both bull spreads and bear spreads to generate a market neutral strategy with fixed risk and profit. These strategies utilize four option contracts that all have the same ",(0,n.kt)("a",{parentName:"p",href:"#expiration"},"expiration")," date, with three equidistant ",(0,n.kt)("a",{parentName:"p",href:"#strike-price"},"strike prices"),". The Long Call Butterfly Spread is essentially a combination of a ",(0,n.kt)("a",{parentName:"p",href:"#bull-call-spread"},"bull call spread")," and a bear call spread. "),(0,n.kt)("p",null,"To set up a Long Call Butterfly spread, first you would buy a ",(0,n.kt)("a",{parentName:"p",href:"#call"},"call")," at strike price A. Then sell two calls at strike price B. Finally, you would purchase one last call at strike price C."),(0,n.kt)("p",null,"The sweet spot for this set up is if the asset is at strike B upon expiration. This makes your max potential profit from this strategy strike B minus strike A minus the net debit paid. Your max potential loss is simply the cost to set up the spread. Your two break even points are at strike price A plus the net debit paid, and strike price C minus the net debit paid. "),(0,n.kt)("p",null,"Since you are managing four separate contracts with three different strike prices, we would only recommend this strategy once you are a more seasoned options trader."))}u.isMDXComponent=!0}}]);