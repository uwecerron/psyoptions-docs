---
id: glossary
title: Glossary
sidebar_label: Glossary
slug: /glossary
---

#### Option
Un [appel](#call) ou un [put](#put), une option est un contrat qui donne au propriétaire le droit d'acheter (dans le cas d'un appel) ou de vendre (dans le cas d'un place) un nombre de [actifs sous-jacents](#underlying-asset) à un prix prédéterminé ([prix d'exercice](#strike-price)) au plus tard à une date d'expiration fixe.

#### Appel
Les acheteurs d'options d'achat attendent généralement que l'actif [sous-jacent](#underlying-asset) augmente de la valeur, alors que les vendeurs d'appels s'attendent à une baisse de la valeur ou restent les mêmes.

Acheter un appel vous donne le droit, mais pas l'obligation, pour acheter la [taille du contrat](#contract-size) du montant de l'actif sous-jacent au prix de levée de l'option. Le prix de l'option d'achat devrait augmenter à mesure que le prix de l'actif sous-jacent augmente.

Écrire une option d’appel couvert vous permet de percevoir la prime tout en vous obligeant à vendre un montant de l’actif sous-jacent au propriétaire au prix de levée convenu si le propriétaire du contrat choisit d’exercer le contrat.

#### Mettre en place
Les acheteurs d'options de mise attendent généralement que [l'actif sous-jacent](#underlying-asset) diminue en valeur, alors que les vendeurs de ventes s'attendent à une augmentation de la valeur ou restent les mêmes.

Acheter un put vous donne le droit, mais pas l'obligation, de vendre la taille de [contrat](#contract-size) du montant de l'actif sous-jacent au prix de levée de l'option. Le prix de l’option de vente devrait augmenter à mesure que le prix de l’actif sous-jacent diminue.

Écrire une option de vente sécurisée vous permet de percevoir la prime tout en vous obligeant à acheter un montant de l’actif sous-jacent au propriétaire au prix de levée convenu si le propriétaire du contrat choisit d’exercer le contrat.

#### Appel couvert
Une stratégie d'option composée d'une option d'appel court et longue le même [actif sous-jacent](#underlying-asset), généralement utilisé si vous vous attendez à ce que le cours de l'actif sous-jacent reste relativement plat ou augmente modérément. Par exemple, vous feriez un appel SOL/USDC pendant que vous verrouillez 100 SOL en tant que garantie pour les appels de [taille de contrat](#contract-size) de 100.

#### Placement sécurisé
Une stratégie d'option composée d'une option de mise courte et courte le même [actif sous-jacent](#underlying-asset), généralement utilisé si vous vous attendez à ce que le cours de l'actif sous-jacent reste relativement plat ou augmente modérément. Par exemple, vous seriez en train de vendre 1 SOL/USDC mis en verrouillant 4000 (taille du contrat du prix de levée * *) USDC en tant que garantie pour des mises à [prix de levée](#strike-price) de 40 et [taille du contrat](#contract-size) de 100.

#### Ressource sous-jacente
L'actif à verrouiller lors de l'écriture d'un appel couvert ou reçu lors de l'exercice d'un appel couvert.

#### Actif de devis
L'actif utilisé pour évaluer l'actif sous-jacent.

#### Taille du contrat
Combien d’actifs sous-jacents le détenteur de l’option peut-il exercer. Ou en d'autres termes, combien d'actifs sous-jacents doivent être verrouillés lors de l'écriture d'un appel couvert.

#### Bid
Le prix auquel un acheteur est prêt à acheter une option, c'est-à-dire le prix auquel un vendeur peut immédiatement vendre une option.

#### Demander
Le prix auquel un vendeur est prêt à vendre une option, c'est-à-dire le prix auquel un acheteur peut immédiatement acheter une option.

#### Prix de grève
Le prix dans lequel l'exercice peut échanger l'actif de cotation pour l'actif [sous-jacent](#underlying-asset) verrouillé.

#### Expiration
La dernière date où l'option peut être exercée.

#### Exercice
L'exercice signifie mettre en vigueur le droit d'acheter ou de vendre l'actif [sous-jacent](#underlying-asset) spécifié dans un contrat d'options. Lorsqu'un propriétaire d'option d'appel exerce son contrat, ils achèteront les actifs sous-jacents au vendeur d'options au prix de levée [convenu](#strike-price). Lorsqu'un propriétaire d'option de vente exerce son contrat, il vend l'actif sous-jacent au vendeur d'options au prix de levée convenu.

#### IV
La volatilité implicite (IV) est une estimation de la volatilité de l'actif sous-jacent qui est dérivée de la valeur marchande d'une option. Il s'agit essentiellement des prévisions du marché d'un mouvement probable du prix d'un actif sous-jacent
