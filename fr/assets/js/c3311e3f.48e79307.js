(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{147:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/PsyOrderbook-2202f4ebd11df4bb4c5f64811776b2d4.png"},148:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/PsyOpenPositions-057a8a22104130e84785ec2484dbeda3.png"},149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tempsnip_1-f571a69586ef3eec7315b5fa9e8a8fbb.png"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tempsnip_2-84b93ebc9f5f8dd4022da945248530ce.png"},151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tempsnip_3-0f5f7335659f1ea69518af3dd4ac7424.png"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),o=(n(0),n(96)),a={id:"devnet-beta-testing",title:"B\xeata-test",sidebar_label:"B\xeata-test",slug:"/devnet-testing/beta-testing"},s={unversionedId:"devnet-beta-testing",id:"devnet-beta-testing",isDocsHomePage:!1,title:"B\xeata-test",description:"PsyOptions est un protocole d'options vanilla construit sur la blockchain Solana. Les principes qui ont guid\xe9 l'architecture et le d\xe9veloppement du protocole principal sont la flexibilit\xe9 et la composabilit\xe9. Elle est totalement sans confiance. Le protocole principal ne fait aucune hypoth\xe8se quant \xe0 la mani\xe8re dont les options doivent \xeatre n\xe9goci\xe9es ou tarifi\xe9es. Les options sont repr\xe9sent\xe9es en tant que jetons SPL, ce qui signifie qu'elles peuvent \xeatre \xe9chang\xe9es sur n'importe quel DEX qui supporte les jetons SPL.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/beta-testing.mdx",slug:"/devnet-testing/beta-testing",permalink:"/fr/devnet-testing/beta-testing",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/beta-testing.mdx",version:"current",sidebar_label:"B\xeata-test",sidebar:"someSidebar",previous:{title:"Quoi tester",permalink:"/fr/devnet-testing/what-to-test"},next:{title:"Jeton PSY",permalink:"/fr/psy-token"}},l=[{value:"Options de trading",id:"options-de-trading",children:[{value:"Acheter pour ouvrir",id:"acheter-pour-ouvrir",children:[]},{value:"Vendre pour ouvrir",id:"vendre-pour-ouvrir",children:[]},{value:"Types de commande",id:"types-de-commande",children:[]}]},{value:"V\xe9rification des positions ouvertes",id:"v\xe9rification-des-positions-ouvertes",children:[{value:"Exercice",id:"exercice",children:[]}]},{value:"Initialisation des march\xe9s",id:"initialisation-des-march\xe9s",children:[{value:"Comment initialiser un march\xe9 :",id:"comment-initialiser-un-march\xe9-",children:[]}]}],c={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"PsyOptions est un protocole d'options vanilla construit sur la blockchain Solana. Les principes qui ont guid\xe9 l'architecture et le d\xe9veloppement du protocole principal sont la flexibilit\xe9 et la composabilit\xe9. Elle est totalement sans confiance. Le protocole principal ne fait aucune hypoth\xe8se quant \xe0 la mani\xe8re dont les options doivent \xeatre n\xe9goci\xe9es ou tarifi\xe9es. Les options sont repr\xe9sent\xe9es en tant que jetons SPL, ce qui signifie qu'elles peuvent \xeatre \xe9chang\xe9es sur n'importe quel DEX qui supporte les jetons SPL."),Object(o.b)("p",null,"V1 soutiendra 100 % garantis, le r\xe8glement d\u2019actifs, les appels couverts et les mises en vente s\xe9curis\xe9es."),Object(o.b)("h2",{id:"options-de-trading"},"Options de trading"),Object(o.b)("p",null,"Pour acheter ou vendre une option, s\xe9lectionnez ",Object(o.b)("inlineCode",{parentName:"p"},"March\xe9s")," dans la barre de navigation. Vous pouvez ajuster la date d'expiration et l'actif sous-jacent. L'\xe9quipe recommande d'utiliser les march\xe9s d'options BTC/USDC du 28 mai 2021."),Object(o.b)("p",null,"Apr\xe8s avoir s\xe9lectionn\xe9 les param\xe8tres, la page sera remplie de donn\xe9es de S\xe9rum s'il y a un carnet de commandes pour le march\xe9 indivual. Notez que chaque ligne repr\xe9sente un march\xe9 d'options diff\xe9rent et donc un march\xe9 s\xe9rum diff\xe9rent."),Object(o.b)("p",null,Object(o.b)("img",{alt:"PsyOrderbook",src:n(147).default})),Object(o.b)("h3",{id:"acheter-pour-ouvrir"},"Acheter pour ouvrir"),Object(o.b)("p",null,"L'achat d'une option (appel/put) ne n\xe9cessite aucune garantie. Il s'agit simplement d'une transaction sur le carnet de commandes de S\xe9rum pour acheter une option sur le march\xe9 ouvert."),Object(o.b)("h3",{id:"vendre-pour-ouvrir"},"Vendre pour ouvrir"),Object(o.b)("p",null,"Vendre une option est un peu plus complexe car une option peut devoir \xeatre modifi\xe9e. Si le portefeuille connect\xe9 n'a pas assez d'options \xe0 vendre, alors les options seront \xe9crites avant de vendre."),Object(o.b)("p",null,"Lorsque les options sont \xe9crites, le portefeuille aura son actif sous-jacent d\xe9duit lorsqu'il sera envoy\xe9 au programme pour modifier les options. Le montant d\xe9duit est la taille ",Object(o.b)("inlineCode",{parentName:"p"},"du contrat"),", qui peut diff\xe9rer selon les param\xe8tres s\xe9lectionn\xe9s."),Object(o.b)("h3",{id:"types-de-commande"},"Types de commande"),Object(o.b)("p",null,"Le march\xe9 et les ordres \xe0 dur\xe9e limit\xe9e sont pris en charge."),Object(o.b)("h2",{id:"v\xe9rification-des-positions-ouvertes"},"V\xe9rification des positions ouvertes"),Object(o.b)("p",null,'Cliquez sur l\'option "Ouvrir les positions" en haut \xe0 gauche pour afficher toutes les positions actuelles sur le march\xe9 des options.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Positions ouvertes",src:n(148).default})),Object(o.b)("h3",{id:"exercice"},"Exercice"),Object(o.b)("p",null,"Si l'option n'a pas expir\xe9, cliquer sur le bouton ",Object(o.b)("inlineCode",{parentName:"p"},"Exercice")," vous demandera une transaction pour exercer l'option."),Object(o.b)("p",null,"Le portefeuille propri\xe9taire doit avoir assez de l'actif de cotation (",Object(o.b)("inlineCode",{parentName:"p"},"taille du contrat * prix de lev\xe9e"),") pour pouvoir exercer avec succ\xe8s."),Object(o.b)("h2",{id:"initialisation-des-march\xe9s"},"Initialisation des march\xe9s"),Object(o.b)("p",null,"Pour cr\xe9er des jetons SPL d'option fongibles pour le trading sur les march\xe9s d'options, il faudra initialiser un march\xe9 en fournissant les valeurs suivantes :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ressource sous-jacente"),Object(o.b)("li",{parentName:"ul"},"Actif de devis"),Object(o.b)("li",{parentName:"ul"},"Taille du contrat"),Object(o.b)("li",{parentName:"ul"},"Prix de gr\xe8ve"),Object(o.b)("li",{parentName:"ul"},"Expiration")),Object(o.b)("h3",{id:"comment-initialiser-un-march\xe9-"},"Comment initialiser un march\xe9 :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Cliquez sur Initialiser")),Object(o.b)("p",null,Object(o.b)("img",{alt:"tempsnip_1",src:n(149).default})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"S\xe9lectionnez les param\xe8tres suivants : Date d'expiration (selon l'expiration de l'option), Ressource sous-jacente (\xe0 \xe9changer dans l'option), Actif de devis (\xe0 fournir dans la n\xe9gociation), Taille du contrat (taille de l'option), Prix de base (prix d'option)")),Object(o.b)("p",null,Object(o.b)("img",{alt:"format@@0 tempsnip_2",src:n(150).default})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},'S\xe9lectionnez "Multi Strikes" si vous souhaitez lister plusieurs contrats \xe0 intervalles de prix de lev\xe9e d\xe9sign\xe9s')),Object(o.b)("p",null,Object(o.b)("img",{alt:"format@@0 tempsnip_3",src:n(151).default})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Cliquez sur "Initialiser le march\xe9"')))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);