---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

PsyOptions est un protocole d'options de style américain construit sur la blockchain Solana. Les principes qui ont guidé l'architecture et le développement du protocole principal sont la flexibilité et la composabilité. Elle est totalement sans confiance. Le protocole principal ne fait aucune hypothèse quant à la manière dont les options doivent être négociées ou tarifiées. Les options sont représentées en tant que jetons SPL, ce qui signifie qu'elles peuvent être échangées sur n'importe quel DEX qui supporte les jetons SPL.

V1 soutiendra 100 % garantis, le règlement d’actifs, les appels couverts et les mises en vente sécurisées.

## Architecture {#architecture}

Le protocole utilise cinq paramètres principaux lorsqu'il interagit avec les marchés d'options.

- Ressource sous-jacente
- Actif de devis
- Taille du contrat
- Prix de grève
- Expiration

Tout utilisateur peut initialiser un marché en fournissant ces valeurs comme arguments. La fonctionnalité des options SPL Tokens est déterminée par l'unicité de ces paramètres.

## Comment ça marche

### Écrire une option

Pour écrire une option, il faut verrouiller l'actif sous-jacent dans le montant spécifié par le marché des options. Pour une option SOL/USDC d'une taille d'actif sous-jacente de 100, 100 SOL seraient verrouillés afin de toucher le jeton d'option. Le lecteur d'option recevra deux jetons SPL. On représente l'option que l'utilisateur peut vendre pour générer un rendement. L’autre représente le contrat écrit (le titre de l’actif sous-jacent) et peut être échangé contre l’actif sous-jacent après expiration.

### Exercice d'une option

Maintenir un jeton d'option avant expiration donne à l'utilisateur la possibilité d'exercer en échangeant l'actif de cotation pour l'actif sous-jacent. Si l'option est dans l'argent ou hors de l'argent, elle est entièrement à la charge du détenteur du jeton s'il faut ou non exercer. Lors de l'exercice, l'entrepreneur verrouille [le prix de levée * la taille de l'actif sous-jacent] d'une valeur de cotation, brûle le jeton d'option et reçoit l'actif sous-jacent.
