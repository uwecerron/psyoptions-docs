(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(96)),a={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"PsyOptions est un protocole d'options de style am\xe9ricain construit sur la blockchain Solana. Les principes qui ont guid\xe9 l'architecture et le d\xe9veloppement du protocole principal sont la flexibilit\xe9 et la composabilit\xe9. Elle est totalement sans confiance. Le protocole principal ne fait aucune hypoth\xe8se quant \xe0 la mani\xe8re dont les options doivent \xeatre n\xe9goci\xe9es ou tarifi\xe9es. Les options sont repr\xe9sent\xe9es en tant que jetons SPL, ce qui signifie qu'elles peuvent \xeatre \xe9chang\xe9es sur n'importe quel DEX qui supporte les jetons SPL.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/intro.md",slug:"/",permalink:"/fr/",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Mission",permalink:"/fr/mission"}},l=[{value:"Architecture",id:"architecture",children:[]},{value:"Comment \xe7a marche",id:"comment-\xe7a-marche",children:[{value:"\xc9crire une option",id:"\xe9crire-une-option",children:[]},{value:"Exercice d&#39;une option",id:"exercice-dune-option",children:[]}]}],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"PsyOptions est un protocole d'options de style am\xe9ricain construit sur la blockchain Solana. Les principes qui ont guid\xe9 l'architecture et le d\xe9veloppement du protocole principal sont la flexibilit\xe9 et la composabilit\xe9. Elle est totalement sans confiance. Le protocole principal ne fait aucune hypoth\xe8se quant \xe0 la mani\xe8re dont les options doivent \xeatre n\xe9goci\xe9es ou tarifi\xe9es. Les options sont repr\xe9sent\xe9es en tant que jetons SPL, ce qui signifie qu'elles peuvent \xeatre \xe9chang\xe9es sur n'importe quel DEX qui supporte les jetons SPL."),Object(o.b)("p",null,"V1 soutiendra 100 % garantis, le r\xe8glement d\u2019actifs, les appels couverts et les mises en vente s\xe9curis\xe9es."),Object(o.b)("h2",{id:"architecture"},"Architecture"),Object(o.b)("p",null,"Le protocole utilise cinq param\xe8tres principaux lorsqu'il interagit avec les march\xe9s d'options."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ressource sous-jacente"),Object(o.b)("li",{parentName:"ul"},"Actif de devis"),Object(o.b)("li",{parentName:"ul"},"Taille du contrat"),Object(o.b)("li",{parentName:"ul"},"Prix de gr\xe8ve"),Object(o.b)("li",{parentName:"ul"},"Expiration")),Object(o.b)("p",null,"Tout utilisateur peut initialiser un march\xe9 en fournissant ces valeurs comme arguments. La fonctionnalit\xe9 des options SPL Tokens est d\xe9termin\xe9e par l'unicit\xe9 de ces param\xe8tres."),Object(o.b)("h2",{id:"comment-\xe7a-marche"},"Comment \xe7a marche"),Object(o.b)("h3",{id:"\xe9crire-une-option"},"\xc9crire une option"),Object(o.b)("p",null,"Pour \xe9crire une option, il faut verrouiller l'actif sous-jacent dans le montant sp\xe9cifi\xe9 par le march\xe9 des options. Pour une option SOL/USDC d'une taille d'actif sous-jacente de 100, 100 SOL seraient verrouill\xe9s afin de toucher le jeton d'option. Le lecteur d'option recevra deux jetons SPL. On repr\xe9sente l'option que l'utilisateur peut vendre pour g\xe9n\xe9rer un rendement. L\u2019autre repr\xe9sente le contrat \xe9crit (le titre de l\u2019actif sous-jacent) et peut \xeatre \xe9chang\xe9 contre l\u2019actif sous-jacent apr\xe8s expiration."),Object(o.b)("h3",{id:"exercice-dune-option"},"Exercice d'une option"),Object(o.b)("p",null,"Maintenir un jeton d'option avant expiration donne \xe0 l'utilisateur la possibilit\xe9 d'exercer en \xe9changeant l'actif de cotation pour l'actif sous-jacent. Si l'option est dans l'argent ou hors de l'argent, elle est enti\xe8rement \xe0 la charge du d\xe9tenteur du jeton s'il faut ou non exercer. Lors de l'exercice, l'entrepreneur verrouille ","[le prix de lev\xe9e * la taille de l'actif sous-jacent]"," d'une valeur de cotation, br\xfble le jeton d'option et re\xe7oit l'actif sous-jacent."))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);