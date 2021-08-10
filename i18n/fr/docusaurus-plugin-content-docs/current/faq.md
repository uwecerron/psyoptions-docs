---
id: faq
title: Foire Aux Questions
sidebar_label: Foire Aux Questions
slug: /faq
---

- [Que sont les options?](#what-are-options)
- [Pourquoi PsyOptions a-t-elle choisi de construire sur Solana?](#why-did-psyoptions-choose-to-build-on-solana)
- [Comment les PsyOptions s'intègreront-elles à l'écosystème Solana?](#how-will-psyoptions-fit-within-the-solana-ecosystem)
- [PsyOptions offre-t-elle des options de style américain ou européen?](#does-psyoptions-offer-american-or-european-style-options)
- [Y aura-t-il un parachutage?](#will-there-be-an-airdrop)
- [PsyOptions offre-t-elle un effet de levier ?](#does-psyoptions-offer-leverage)
- [Quel type d'actifs la PsyOptions supporte-t-elle?](#what-type-of-assets-does-psyoptions-support)
- [Puis-je créer mes propres marchés sur PsyOptions ?](#can-i-create-my-own-markets-on-psyoptions)
- [Comment les options sont-elles tarifées sur PsyOptions?](#how-are-options-priced-on-psyoptions)
- [Pourquoi le rédacteur de l'option reçoit-il deux jetons séparés? Le contrat écrit n’est-il pas lié à l’option?](#why-does-the-option-writer-receive-two-separate-tokens-isnt-the-written-contract-tied-to-the-option)
- [En quoi PsyOptions diffère-t-elle des autres protocoles d'options ?](#how-is-psyoptions-different-from-the-other-options-protocols-out-there)

### Que sont les options?

Les options sont des dérivés financiers qui donnent le droit à l'acheteur, mais pas l'obligation, acheter ou vendre un actif sous-jacent à un prix et une date convenus. Plus d'informations peuvent être trouvées ici : https://www.investopedia.com/terms/o/option.asp

### Pourquoi PsyOptions a-t-elle choisi de construire sur Solana?

PsyOptions a commencé avec l'objectif d'apporter une sensation de TradFi à DeFi. Avec le lancement de Sérum, les options de trading sur un carnet de commandes étaient une possibilité réelle. Les temps de blocage rapides réduisent le temps jusqu'à la liquidation et permettent aux traders d'avoir des ordres placés, rempli, ou tué dans une vitesse la plus proche de celle d'un échange traditionnel.

### Comment les PsyOptions s'intègreront-elles à l'écosystème Solana?

PsyOptions V1 est la couche de compensation et de règlement des options sur Solana. Sans dépendances externes (c'est-à-dire oracles), des options peuvent être créées pour n'importe quel jeton SPL sur n'importe quelle durée de manière totalement fiable. Cela permet aux protocoles futurs d'intégrer des options dans leurs programmes de la manière qu'ils jugent appropriée.

Nous sommes ouverts à toute équipe cherchant à intégrer des options dans leur protocole ou [utiliser des options pour encourager la participation](https://medium.com/psyoptions/the-options-are-limitless-58dddbd28cb4).

### PsyOptions offre-t-elle des options de style américain ou européen?

PsyOptions propose des contrats d'options de style américain.

### Y aura-t-il un parachutage?

Il n'y a pas de parachute prévue pour le moment. Cependant, nous avons et continuerons de mettre à jour nos programmes d’incitation à la collectivité.

### PsyOptions offre-t-elle un effet de levier ?

PsyOptions V1 n’offre pas d’effet de levier car les options sont 100% collatéralisées lorsqu’elles sont écrites. Il peut y avoir des moyens externes pour obtenir un effet de levier à l'avenir en composant avec un protocole de prêt.

### Quel type d'actifs la PsyOptions supporte-t-elle?

PsyOptions prend en charge tous les jetons SPL!

### Puis-je créer mes propres marchés sur PsyOptions ?

Oui ! Tout le monde peut créer de nouveaux marchés dans le protocole PsyOptions.

### Comment les options sont-elles tarifées sur PsyOptions?

PsyOptions ne fait aucune hypothèse sur le prix, et permet aux utilisateurs de choisir le prix qu'ils veulent. Les acteurs du marché du sérum chercheront les options comme bon leur semble.

### Pourquoi le rédacteur de l'option reçoit-il deux jetons séparés? Le contrat écrit n’est-il pas lié à l’option?

L'auteur recevra un jeton qui représente l'option. Ce jeton permet au détenteur d'exercer avant l'expiration et peut donc être vendu pour une prime.

Le deuxième jeton est le jeton de l'écrivain. Dans TradFi, une chambre de compensation peut garder la trace de qui a écrit une option spécifique. En un sens, ces options ne sont pas foncibles, car elles sont liées à une personne en particulier. Les options doivent être fongibles afin de composer avec des carnets de commandes Sérum, AMMs, et d'autres protocoles qui nécessitent une quantité supérieure à un pour être fonctionnel. Ils ne sont donc en aucun cas liés à cette option.

Le jeton de l'écrivain étant fungible aussi permet d'autres possibilités intéressantes. Cela pourrait permettre à un marché de prêt d'accepter des jetons d'écrivain comme garantie pour des prêts ou un AMM pourrait créer des pools avec des jetons d'écrivain afin que l'utilisateur puisse vendre sa réclamation sur l'actif sous-jacent.

### En quoi PsyOptions diffère-t-elle des autres protocoles d'options ?

PsyOptions est la « usine d'options » et la couche de règlement. Le protocole ne fait aucune hypothèse sur le prix, permettant aux utilisateurs de choisir le prix qu'ils veulent. Le protocole ne fait pas non plus d'hypothèses sur la taille des contrats d'options. Cela rend les PsyOptions flexibles, composables et permet aux autres de construire par-dessus elle.
