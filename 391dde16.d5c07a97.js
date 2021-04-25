(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var n=o(3),r=o(7),i=(o(0),o(86)),a={id:"arch-option-types",title:"Option types",sidebar_label:"Option types",slug:"/architecture/option-types"},s={unversionedId:"arch-option-types",id:"arch-option-types",isDocsHomePage:!1,title:"Option types",description:"There are two primary types of vanilla option contracts, American and European. This section is intended to break down the pros and cons of each and explain a bit of the thinking behind our existing architecture.",source:"@site/docs/arch-option-types.md",slug:"/architecture/option-types",permalink:"/architecture/option-types",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/arch-option-types.md",version:"current",sidebar_label:"Option types",sidebar:"someSidebar",previous:{title:"Glossary",permalink:"/glossary"},next:{title:"Program Integration",permalink:"/program-integration/quick-start"}},c=[{value:"Option style trade offs",id:"option-style-trade-offs",children:[]}],p={toc:c};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two primary types of vanilla option contracts, American and European. This section is intended to break down the pros and cons of each and explain a bit of the thinking behind our existing architecture."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Primer")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"American Options give the hodler the right, but not the obligation to exercise up until the expiration date.\n\nEuropean Options give the hodler the right, but not the obligation to exercise at the time of expiration.\n")),Object(i.b)("p",null,"When discussing how options could work on Solana, we evaluated these two types. Due to the differences of when one may exercise, there are various technical trade offs as well as financial engineering trade offs."),Object(i.b)("h3",{id:"option-style-trade-offs"},"Option style trade offs"),Object(i.b)("h5",{id:"american"},"American"),Object(i.b)("p",null,"American style options offer flexibility to the option hodler as they may exercise the option at any point up until the expiration date. This is beneficial for retail investors that may be purchasing options to speculate. While the flexibility for the option hodler is great, this makes it much more ",Object(i.b)("strong",{parentName:"p"},"difficult to price an option"),". Institutions and market makers have been the first to suggest switching to European as the more standard price formulas can make market making more straight forward."),Object(i.b)("p",null,"Settlement of American style options is very straightfoward from an on chain settlement perspective. If the option has not expired, the hodler may exercise."),Object(i.b)("h5",{id:"european"},"European"),Object(i.b)("p",null,"European options lack the flexibility of American style, but are easier to price as the option hodler can only exercise on the expiration date. It may be safe to assume that the easier the options are to price, the more likely institutions and market makers are to write options. In an ideal world, the program would be able to exercise at the time of expiration if the option is in the money. However, we're working on chain where there are not background processes to handle such functionality. So this makes the settlement of European options a bit more tricky."),Object(i.b)("p",null,"An option hodler cannot exercise until the expiration date, but at some point we must let the option writer collect their underlying asset (i.e contracts were not exercised) or receive quote asset (i.e. contracts were exercised). This means there must be some window of time in which the option hodler may exercise, but the option writer may not claim there assets. For clarity, if the option wrtier was able to claim their asset at the same time, then a scenario is introduced where no option hodler could exercise when all of the option writers claimed their underlying assets. So the program likely needs a window long enough to allow all option hodlers a fair chance to exercise, but short enough that option writers do not have their assets locked to the point the opportunity cost to write an option is too high. "),Object(i.b)("p",null,"In tradition US Equities, options settle in 1 day. If we were to translate that on chain, there would be a 24 hour window were contract holders would have to exercise their contracts. In theory,after that settlement period, those tokens denoting a contract would be completely worthless."),Object(i.b)("p",null,"The window is non obvious to our team at the moment, which is partly why we began with American style options. As we continue to collect feedback, we'd love to hear the community's thoughts around this subject."))}l.isMDXComponent=!0},86:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(o),d=n,m=h["".concat(a,".").concat(d)]||h[d]||u[d]||i;return o?r.a.createElement(m,s(s({ref:t},p),{},{components:o})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);