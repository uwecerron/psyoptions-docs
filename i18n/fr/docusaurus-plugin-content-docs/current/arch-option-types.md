---
id: arch-option-types
title: Types d'options
sidebar_label: Types d'options
slug: /architecture/option-types
---

Il existe deux principaux types de contrats d'options de vanille, américains et européens. Cette section a pour but de décomposer les avantages et les inconvénients de chacun et d'expliquer un peu la pensée qui sous-tend notre architecture existante.

*Prêtre*
```
Les options américaines donnent au hodler le droit, mais pas l'obligation de s'exercer jusqu'à la date d'expiration.

Les options européennes donnent le droit, mais pas l’obligation d’exercer au moment de l’expiration.
```

Lorsque nous avons discuté de la manière dont les options pourraient fonctionner sur Solana, nous avons évalué ces deux types. En raison des différences entre le moment où on peut faire de l'exercice, il y a plusieurs délocalisations techniques ainsi que des délocalisations de l'ingénierie financière.

### Échanges de style d'option

##### Américain
Les options de style américain offrent une flexibilité à l'option hodler car elles peuvent exercer l'option à n'importe quel moment jusqu'à la date d'expiration. C'est bénéfique pour les investisseurs de détail qui peuvent acheter des options de spéculation. Alors que la flexibilité pour l'option hodler est excellente, il est beaucoup plus **difficile de fixer le prix d'une option**. Les institutions et les acteurs du marché ont été les premiers à suggérer le passage à l'Europe, car plus les formules de prix standard peuvent rendre le marché plus immédiat.

Le règlement des options de style américain est très direct du point de vue du règlement en chaîne. Si l'option n'a pas expiré, le hodler peut faire de l'exercice.

##### Européen
Les options européennes ne disposent pas de la flexibilité du style américain, mais sont plus faciles à prix car l'option hodler ne peut s'exercer qu'à la date d'expiration. Il peut être sûr de supposer que plus les options sont faciles à évaluer, plus les institutions et les acteurs du marché sont susceptibles d'écrire des options. Dans un monde idéal, le programme pourrait être exercé au moment de l'expiration si l'option est dans l'argent. Cependant, nous travaillons sur une chaîne où il n'y a pas de processus en arrière-plan pour gérer de telles fonctionnalités. Cela rend le règlement des options européennes un peu plus délicat.

Un hodler d'option ne peut pas faire d'exercice jusqu'à la date d'expiration, mais à un moment donné, nous devons laisser le vendeur d'option collecter leur actif sous-jacent (i. les contrats n'ont pas été exercés) ou reçoivent un actif de cotation (c'est-à-dire que les contrats ont été exercés). Cela signifie qu'il doit y avoir une certaine fenêtre de temps pendant laquelle l'option hodler peut s'exercer, mais le rédacteur de l'option ne peut pas y revendiquer des actifs. Pour plus de clarté, si le wrtier d'option a pu revendiquer son actif en même temps, alors un scénario est introduit où aucune option hodler ne pourrait exercer lorsque tous les auteurs d'options ont revendiqué leurs actifs sous-jacents. Le programme a donc probablement besoin d'une fenêtre suffisamment longue pour permettre à tous les hodlers d'options de faire de l'exercice, mais assez court que les auteurs d'options n'ont pas leurs actifs bloqués au point où le coût d'écriture d'une option est trop élevé.

Dans la tradition des actions américaines, les options s'installent en un jour. Si nous traduisions cela en chaîne, il y aurait une fenêtre de 24 heures si les détenteurs de contrats devaient exercer leurs contrats. En théorie, après cette période de règlementation, les jetons désignant un contrat seraient totalement inutiles.

La fenêtre n'est pas évidente pour notre équipe pour le moment, ce qui explique en partie pourquoi nous avons commencé avec des options de style américain. Alors que nous continuons à recueillir des commentaires, nous aimerions entendre les réflexions de la communauté sur ce sujet.
