---
id: american-how-it-works
title: Protocole américain V1 Comment ça marche
sidebar_label: Comment ça marche
slug: /american-v1/how-it-works
---

Pour vraiment comprendre comment fonctionne le protocole et la plate-forme, il faut comprendre ce qui se passe sous le capot. Ici, nous ferons de notre mieux pour décomposer chaque interaction qu'une entité peut faire avec le protocole et ce qui se passe.

## Initialiser le marché des nouvelles options
![initialiser le marché](/img/how-it-works/initialize_market_page.png)

Le protocole est conçu pour être une primitive, donc il fait très peu d'hypothèses sur les options, comment elles doivent être échangées, tarifiées, etc. Le protocole lui-même, ne fait pas non plus d'hypothèses sur les actifs qui devraient avoir des options et lesquelles ne devraient pas. Il a été construit avec divers cas d'utilisation dans l'esprit de , comme écrire des contrats sur des NFTs, des actions tokenisées de propriété, des actions jetées. .anything qui peut être représenté comme un jeton SPL peut avoir un marché d'options. Y aura-t-il de la liquidité sur ces marchés est un sujet pour une autre discussion ;).

Les marchés d'options eux-mêmes sont totalement ouverts et sans permission. S'il y a une paire d'actifs que vous voulez écrire des options une, vous pouvez créer ce marché ! Pour ce faire, vous devez utiliser les instructions `InitializeMarket`. Chaque marché est gouverné par des paramètres spécifiques qui déterminent sa fongibilité. Ces paramètres incluent:

````Rust
Pub struct OptionMarket {
...
    /// L'adresse du jeton SPL qui se trouve dans la réserve du programme quand une option est écrite
    pub underlying_asset_mint: Pubkey,
    /// L'adresse du jeton SPL qui dénomme le prix de levée
    quote_asset_ment: Pubkey,
    /// Le montant de l'**actif sous-jacent** qui dérive une seule option
    pub underlying_amount_per_contract : u64,
    /// Le montant de **quote-actif** qui doit être transféré lorsqu'une option est exercée
    guillemet pub : u64,
    /// L'horodatage Unix **en secondes** où les contrats sur ce marché expirent
    expiration_unix_timestamp: UnixTimestamp,
...
}
````

Il est important de noter que le protocole utilise une approche déterministe des marchés, basé sur les paramètres uniques, donc il ne peut jamais y avoir deux du même marché exact. Il s'agissait d'une décision maladroite de V1 de réduire les risques de fragmentation des liquidités.

Créer un nouveau marché est extrêmement bon marché et facile ! Lorsqu'un nouveau marché est initialisé, quelques choses se produisent. Les plus importants sont la création du **pool d'actifs sous-jacents** et du pool d'actifs de **cote** pour ce marché. Ces piscines sont uniques à chaque marché individuel et sont la propriété de chacun. Quand quelqu'un frappe un contrat d'option, ses garanties sont stockées dans ces bassins, plus de à ce moment-là.

## Mémoriser une option
<!-- TODO show image of mint component -->

Il ne fait aucun doute que l'instruction la plus importante et la plus largement utilisée du protocole. Lorsque vous voulez toucher un contrat pour un marché donné, vous avez besoin de l'instruction `MintCoveredCall`. Il est **extrêmement important de noter** que bien que cette instruction contienne la phrase _Appel couvert_ dans le protocole V1, tous les contrats peuvent être considérés comme des appels couverts. Les PUTs sont simplement les receveurs d'un CALL, et tous les marchés de V1 requièrent 100% de garantie à l'avance. Plus d'informations peuvent être lues [ici](./arch-put-call.md).

Pour toucher un contrat, le contractant doit mettre à 100 % du `underlying_amount_per_contract` plus des frais de 5 bps. Ce petit montant sera versé au trésor de PsyOptions et sera ajustable (ou amovible) via la gouvernance . Le total des actifs sous-jacents requis pour conclure un contrat est donc :

`underlying_assets_required = underlying_amount_per_contract + (underlying_amount_per_contract * 0.0005)`

Ces actifs unserlying sont ensuite stockés dans le _pool d'actifs sous-jacents_ des marchés d'options. Si le transfert vers le pool réussit (i.e. assez de sous-jacent a été publié), puis le protocole met à jour l'utilisateur 2 jetons, le **OptionToken** et le **WriterToken**.

Le **OptionToken est le contrat réel**, qui donne au détenteur _le droit mais pas l'obligation de swap les actifs cotés pour les actifs sous-jacents au prix d'exercice convenu_. Le OptionToken est un jeton SPL, donc il peut être transféré ou échangé sur n'importe quel lieu qui a le support du jeton SPL.

Le **WriterToken** indique que le titulaire est abrégé de l'option ou a écrit le contrat. Laisse séparer cette déclaration en termes plus logiques. Étant donné qu'il s'agit d'un contrat de style américain le titulaire de OptionToken peut exercer à tout moment avant l'expiration. Donc, à n'importe quel moment (avant ou après l'expiration) le WriterToken donne au détenteur la possibilité de réclamer le `quote_amount_per_contract` si n'importe qui exerce et que le pool d'actifs de cotation contient assez de solde. Après l'expiration du poste, le WriterToken donne au détenteur la possibilité de revendiquer le `sous-jacent_amount_per_contract` du sous-groupe d'actifs.

Ainsi, pour générer des rendements à partir de la rédaction d'un contrat, vous vendriez le OptionToken. Cela pourrait être fait en OTC et transféré, sur un marché Seurm, ou sur tout autre lieu qui crée et qui échange contre les SPL d'un marché.

## Exercer un contrat
<!-- TODO image of the exercise row -->

Avec le OptionToken, nous avons la possibilité d’exercer le contrat avec l’utilisation de l’instruction `ExerciseCoveredCall`. Pour exercer nous devons poster le OptionToken tenu et le `quote_amount_per_contract` plus un frais de 5bps. Cette petite somme sera versée au Trésor de PsyOptions et sera ajustable (ou amovible) par la gouvernance. Donc l'actif du devis total qui doit être publié est

`quote_assets_required = quote_amount_per_contract + (quote_amount_per_contract * 0.0005)`

Avec le montant correct affiché, le protocole brûle le OptionToken, transfère `quote_amount_per_contract` au pool d'actifs de cotation du marché, et transfère `underlying_amount_per_contract` à l'adresse de l'exercice.


Maintenant que quelqu'un a exercé, nous allons voir comment un auteur de contrat peut réclamer ces actifs.

## Extraction d'actifs à partir d'un contrat exercé
<!-- TODO image of a imbalanced pools -->

Les théories économiques ont prouvé qu’il n’est pas avantageux d’exercer un contrat plus tôt. Mais ce n'est pas TradFi. La composabilité de PsyOptions American V1 fournit de nombreux cas d'utilisation en dehors du trading de la pure volatilité, de la couverture de portefeuille, etc. où l'exercice précoce arrivera très certainement . Prenons le protocole XYZ qui exécute un programme d'extraction de liquidités qui a encouragé de nouveaux fournisseurs de liquidités avec des contrats At The Money (ATM) qui expirent dans 10 ans. Tant que le projet XYZ continue de croître, les détenteurs de ce contrat s'exerceront très tôt.

Maintenant, lorsque cet exercice se produit, le rédacteur du contrat est en mesure de réclamer les actifs de cotation dès qu'ils sont disponibles. Pour ce faire, le contractant doit utiliser les instructions `ExchangeWriterTokenForQuote`. L'utilisateur le plus publie le WriterToken. le protocole va graver le WriterToken et transférer le `quote_amount_per_contract` au portefeuille de l'écrivain.

Quelques éléments à noter. Tout d'abord, cette instruction peut être appelée à tout moment dans le temps, tant que il y a suffisamment d'actifs de cotation dans le pool d'actifs de cotation. Deuxièmement, cette instruction agit sur un **premier arrivé, premier servi, base**. Tous les OptionTokens et WriterTokens pour un marché donné sont respectivement fongibles (i.e. N'importe quel OptionToken est le même qu'un autre pour le marché donné. Il en va de même pour le WriterToken.). Dès que quelqu'un exerce un contrat d'option **toute personne détenant un jeton sur ce marché a une réclamation sur les actifs de cotation**.

## Récupération de votre dos sous-jacent après expiration
<!-- TODO image of full underlying asset pool, no quote -->

Après l'expiration d'un contrat, un auteur de contrat a une réclamation sur ses actifs sous-jacents d'origine qu'il a postée pour écrire le contrat. **Seulement aprčs l'expiration** un WriterToken peut envoyer le protocole ŕ brûler en échange du `souslying_amount_per_contract`. Ceci est fait par le biais de l'instruction `ClosePostExpiration`.

## Fermeture d'une pré-expiration de position

Que se passe-t-il si vous avez écrit trop de contrats à la fois? Ou votre exposition a changé et vous avez besoin de pour fermer votre position ? C'est là que vient l'instruction `ClosePosition`. Cette instruction **nécessite que vous ayez à la fois le OptionToken et le WriterToken**. À tout moment (avant ou après l'expiration de ) si un portefeuille appelle cette instruction avec le préréglage de la paire de jetons correcte, il recevra le `sous-traitant_amount_per_contract`. Le protocole vérifie et brûle à la fois les jetons et puis transfère les actifs sous-jacents du pool vers le portefeuille.

Si vous avez vendu le OptionToken et souhaitez fermer votre position, vous devrez aller à un lieu qui négocie / vend le bon OptionToken et 




