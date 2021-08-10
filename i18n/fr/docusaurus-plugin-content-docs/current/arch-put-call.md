---
id: arch-put-call
title: Appel vs Put
sidebar_label: Appel vs Put
slug: /architecture/call-put
---

Les deux types de contrats d'options (pas les styles) sont les Appels et les Puts. Une option d'achat donne au détenteur de l'option le droit mais pas l'obligation d'acheter l'actif sous-jacent à un prix spécifié, par ou à une certaine date. Une option de vente donne au détenteur de l'option le droit mais pas l'obligation de vendre l'actif sous-jacent à un prix spécifié, par ou à une certaine date.

Les positions des options PsyOption sont entièrement collateralisées, ce qui signifie que seuls les appels couverts et les mises sécurisées sont pris en charge. Pour écrire une option d'appel, le créateur d'options verrouille l'actif sous-jacent. De même, pour écrire un Put, le rédacteur de l'option verrouille l'actif de cotation.

### Sous la capuche
Au niveau du protocole, il n'y a pas de concept de Call vs Put. Le lecteur astucieux reconnaîtra que si vous paramétrez l'actif sous-jacent et cote pour les options, la fonction de l'appel et de la mise a une relation inverse avec les actifs. Plus clairement, le protocole n'a pas d'instruction pour toucher un Put, seulement une instruction pour passer un appel.

Le Put est créé en utilisant la paire d'actifs réciproques. Donc, un Put for SOL/USDC serait tout simplement un appel à USDC/SOL.