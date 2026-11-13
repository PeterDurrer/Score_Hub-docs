---
title: Suivi des feuilles de stand
---

# Suivi des feuilles de stand

Lorsque le suivi est activé, chaque feuille de stand papier est suivie à l’aide de son numéro, depuis son envoi à un club jusqu’à la saisie du résultat et à son retour. La consommation et le retour effectif sont deux informations distinctes : la saisie d’un résultat ne confirme pas le retour du document papier.

## Portée du suivi et groupes de manches

Dans l’onglet **Décompte**, le réglage **Suivi des feuilles de tir** détermine si un numéro est suivi et sur quelles manches :

| Réglage | Fonctionnement |
| --- | --- |
| Désactivé | Aucun numéro n’est suivi par résultat ; la saisie habituelle des quantités reste disponible. |
| Par manche | Un numéro est saisi séparément pour chaque manche, tireur et catégorie. |
| Par concours | Le même numéro est utilisé pour toutes les manches du concours, pour un même tireur et une même catégorie. |
| Par groupe de manches | Le même numéro est utilisé pour les manches rattachées au même groupe de feuilles de stand, pour un même tireur et une même catégorie. |

Pour choisir **Par groupe de manches**, ouvrez **Manches** dans la configuration du concours et saisissez le même nom dans le champ **Groupe de cartes de tir** pour chaque manche à réunir. Une manche sans nom de groupe reste indépendante. Lorsque la portée regroupe plusieurs manches (**Par concours** ou **Par groupe de manches**), saisissez d’abord, pour chaque tireur et catégorie, le résultat de la première manche ; son numéro sera repris pour les suivantes. Les étapes détaillées d’envoi, de saisie des résultats et de retour sont présentées ci-dessous.

## Où effectuer chaque opération ?

| Tâche | Emplacement dans l’application | Responsable |
| --- | --- | --- |
| Activer ou désactiver le suivi | **Club → Concours → Configuration → Décompte**, section Gestion des feuilles de stand | Administration du concours ou administration autorisée du club organisateur |
| Attribuer des numéros à un club | Même section, nouvelle écriture **Envoi** | Administration du concours |
| Associer une feuille de stand à un résultat | **Concours → concours souhaité → Résultats**, boîte de dialogue de saisie ou de modification | Personne autorisée à saisir les résultats ou administration du concours |
| Signaler une feuille comme mal remplie ou manquante | Page **Résultats**, formulaire distinct de gestion du statut des feuilles de stand | Personne autorisée à saisir les résultats ou administration du concours |
| Enregistrer un retour | **Club → Concours → Configuration → Décompte**, écriture **Retour** | Administration du concours, après vérification des feuilles reçues |
| Contrôler les numéros en attente | **Concours → concours souhaité → Statistiques**, statistiques des feuilles de stand | Administration autorisée du concours ou personne chargée de la saisie, selon ses droits |

Les libellés des champs peuvent varier selon la langue de l’interface. Les feuilles de stand sont les feuilles papier numérotées, et non la liste des tireurs ni le classement.

## Rôles et responsabilités {#rollen-und-zuständigkeiten}

Le tableau ci-dessous décrit les rôles indiqués sans autorisations supplémentaires. Pour les rôles du club, il est important de savoir s’ils s’appliquent au **club organisateur** ; un rôle dans un club participant ne confère pas automatiquement des droits d’administration du concours.

| Rôle | Gérer le suivi et les envois/retours | Saisir des résultats avec numéro | Signaler une feuille mal remplie ou manquante | Inventaire des numéros |
| --- | --- | --- | --- | --- |
| Administration système (`admin`) | Oui | Oui, tous clubs confondus | Oui | Tous les clubs |
| Créateur du concours qui conserve l’administration du concours | Oui | Oui, tous clubs confondus | Oui | Tous les clubs |
| Administration du concours (`competitionAdmin`) | Oui | Oui, tous clubs confondus | Oui | Tous les clubs |
| Administration ou gestion des concours du club organisateur (`clubAdmin`, `clubCompetitionAdmin`) | Oui | Selon les autorisations de saisie des résultats | Selon les autorisations de saisie des résultats | Accès administratif ; un rôle supplémentaire de saisie limité peut restreindre l’accès aux numéros |
| Saisie des résultats du concours sans restriction de club (`competitionResultScorer`) | Non | Oui, pour les tireurs de plusieurs clubs | Oui, pour plusieurs clubs | Tous les clubs |
| Saisie des résultats du concours avec restriction de club (`competitionResultScorer`) | Non | Uniquement pour les tireurs du club actuellement sélectionné auquel appartient l’utilisateur | Uniquement les numéros de ce club | Ce club uniquement |
| Accès en lecture seule au concours (`competitionViewer`) | Non | Non | Non | Aucun accès propre à l’inventaire du suivi par le seul rôle de lecture |

**Le créateur du concours ne dispose pas d’un rôle spécial supplémentaire et permanent.** Les actions ultérieures dépendent des droits actuellement attribués. Si le rôle change, la nouvelle autorisation s’applique. Après la création, vérifiez l’attribution dans l’onglet **Utilisateurs** : le parcours de création actuel attribue encore l’ancienne valeur de rôle `admin`, alors que l’interface des feuilles de stand et la vérification des rôles du concours utilisent `competitionAdmin`. Ne vous fiez donc pas uniquement à la création du concours ; faites attribuer ou corriger le rôle d’administration valide si les actions de gestion ne sont pas disponibles.

Un rôle de saisie des résultats au niveau du club ne donne pas à lui seul les droits de gestion du concours. Pour travailler sur un concours externe, demandez l’attribution du rôle approprié pour ce concours. La restriction au club de l’utilisateur se définit dans l’onglet **Utilisateurs** pour chaque personne du concours, et non comme un paramètre global pour l’ensemble des personnes chargées de la saisie.

Même les administrateurs et les personnes sans restriction de saisie ne peuvent sélectionner pour un résultat **que des numéros du club auquel le tireur appartient dans la liste des tireurs de ce concours**. Le stand sélectionné ou le club de la personne chargée de la saisie ne modifie pas cette affectation. L’administration système et celle du concours conservent leurs autorisations pour l’ensemble des clubs, même si un rôle supplémentaire de saisie restreinte leur est attribué.

## 1. Préparer et activer le suivi

**Condition préalable :** l’extension de suivi des feuilles de stand doit être disponible pour l’installation. Activez le suivi de préférence avant le premier envoi et impérativement avant la saisie des résultats.

1. Ouvrez la configuration du concours sous **Club → Concours**.
2. Sélectionnez **Décompte**, puis la section de gestion des feuilles de stand.
3. Dans **Suivi des feuilles de tir**, choisissez une portée autre que **Désactivé**.
4. Vérifiez le message de confirmation avant de saisir des écritures.
5. Dans **Utilisateurs**, attribuez les rôles nécessaires pour le concours et, le cas échéant, la restriction au club de l’utilisateur.

**Résultat :** les envois et les retours nécessitent des numéros précis ; la saisie des résultats demande un numéro selon la portée choisie. Pour les manches regroupées, le numéro est repris dans les manches suivantes.

En présence d’écritures existantes, l’application vérifie les numéros, les quantités et les chevauchements. Des écritures sans numéros valides, une consommation enregistrée manuellement ou des résultats déjà existants peuvent empêcher l’activation. Les résultats existants ne sont pas automatiquement complétés avec des numéros inventés ; contactez l’administration pour organiser une reprise.

La désactivation est bloquée tant qu’il existe un inventaire de numéros ou des résultats associés à des numéros. Sans suivi, la saisie des quantités existante reste disponible et aucun numéro de résultat n’est obligatoire.

## 2. Enregistrer un envoi et des plages de numéros

**Responsable :** l’administration du concours, et non les personnes chargées uniquement de saisir les résultats.

1. Dans l’onglet **Décompte**, créez une nouvelle écriture de feuille de stand.
2. Choisissez le type d’écriture **Envoi** et le club destinataire.
3. Saisissez des numéros individuels, des plages ou une combinaison, par exemple `1001-1050, 1060`.
4. Vérifiez la quantité calculée automatiquement : cet exemple comprend **51 feuilles de stand**.
5. Saisissez la date et, si nécessaire, une note, puis enregistrez.

**Résultat :** dans le cadre de ce concours, chaque numéro indiqué appartient à un seul club destinataire. Les numéros en double, les plages qui se chevauchent et les numéros déjà attribués sont refusés.

Les limites des plages sont incluses. `1001-1003` correspond à `1001, 1002, 1003`. Utilisez des entiers positifs et des plages croissantes. Chaque saisie est limitée à 10 000 numéros et 100 caractères. Si nécessaire, répartissez les longues listes comportant de nombreuses interruptions sur plusieurs écritures.

Lorsque le suivi est activé, aucune écriture de consommation ne peut être effectuée manuellement : la consommation est générée par l’enregistrement d’un résultat.

## 3. Saisir un résultat avec un numéro de feuille de stand

1. Dans le concours concerné, ouvrez **Résultats**.
2. Effectuez les présélections nécessaires et ouvrez la saisie pour le bon tireur.
3. Dans le champ **Numéro de feuille de stand**, sélectionnez le numéro figurant sur la feuille. La recherche par numéro permet de limiter les choix.
4. Saisissez la manche, la catégorie et les autres champs de résultat obligatoires.
5. Enregistrez le résultat.

**Résultat :** le numéro est marqué comme consommé et ne peut pas être utilisé pour un deuxième résultat. Lors de la modification, le numéro déjà associé est conservé tant que vous ne le changez pas.

Pour un nouveau résultat, seuls les numéros disponibles et non encore retournés du club du tireur sont proposés. Les numéros déjà consommés, signalés comme mal remplis ou manquants, ou déjà retournés ne peuvent pas être sélectionnés à nouveau. Lors d’une modification, le numéro déjà associé peut être conservé même si la feuille a entre-temps été retournée.

**Exemple :** le club A reçoit `1001-1050` et le club B reçoit `2001-2050`. Pour un tireur du club A, même l’administration du concours ne peut pas choisir un numéro de la plage `2001-2050`.

Si aucun numéro ne s’affiche, vérifiez que l’envoi a été enregistré pour le bon club et que l’affectation du club dans la liste des tireurs du concours est correcte. N’utilisez pas un numéro appartenant à un autre club en remplacement. Si l’inventaire ne se charge pas, il faut d’abord le recharger.

## 4. Signaler une feuille mal remplie ou manquante

Ce formulaire fonctionne sans sélectionner de tireur et sans saisir de résultat.

1. Ouvrez la page **Résultats**, puis la gestion du statut des feuilles de stand.
2. Sélectionnez le club. Les personnes dont la saisie est restreinte ne peuvent sélectionner que leur propre club.
3. Saisissez les numéros concernés ou les plages.
4. Sélectionnez **Mal remplie** ou **Manquante**, puis enregistrez le statut.

| Statut | Signification |
| --- | --- |
| Disponible | Pas encore associée à un résultat ; les feuilles mal remplies ou manquantes peuvent être remises à l’état disponible si une correction est autorisée |
| Consommée | Associée à un résultat enregistré ; ce statut est défini lors de la saisie du résultat |
| Mal remplie | La feuille a été remplie de manière incorrecte et ne doit pas servir à un nouveau résultat |
| Manquante | Un numéro attribué précisément est explicitement signalé comme manquant |

En mode de correction, seuls les numéros non retournés portant le statut **Mal remplie** ou **Manquante** peuvent être remis à l’état **Disponible**. Les numéros déjà disponibles n’ont pas besoin d’être corrigés ; ce formulaire ne permet pas de modifier les feuilles consommées ou retournées. Pour corriger une association erronée à un résultat, modifiez le résultat plutôt que le statut. Si le numéro du résultat est modifié ou si le résultat est supprimé, le numéro précédemment attribué est libéré ; un retour déjà enregistré est conservé.

## 5. Vérifier et enregistrer les retours

**Responsable :** l’administration du concours, après réception et vérification des feuilles papier. Les personnes chargées de la saisie signalent les feuilles mal remplies ou manquantes, mais n’enregistrent pas elles-mêmes les retours.

1. Ouvrez **Club → Concours → Configuration → Décompte**.
2. Créez une écriture de feuille de stand de type **Retour**.
3. Sélectionnez le club qui a renvoyé les feuilles.
4. Indiquez les numéros ou les plages effectivement reçus.
5. Vérifiez la quantité calculée automatiquement, ainsi que la date et la note, puis enregistrez.

**Résultat :** le retour est enregistré pour ces numéros précis. Les feuilles consommées ou mal remplies peuvent également être retournées. Les doubles retours et le retour d’un numéro appartenant à un autre club sont refusés.

Les feuilles consommées ou mal remplies ne sont pas automatiquement considérées comme retournées. Enregistrez également leurs numéros si elles ont été reçues physiquement. Il est préférable d’enregistrer le retour des feuilles utilisées après la saisie du résultat, car les numéros déjà retournés ne peuvent pas être sélectionnés pour un nouveau résultat.

Les écritures d’envoi contenant des numéros consommés, mal remplis, manquants ou retournés, ainsi que les écritures de retour enregistrées, ne peuvent plus être modifiées ni supprimées. En cas d’erreur dans une écriture protégée, contactez l’administration ; ne créez pas de contre-écriture avec des numéros appartenant à un autre club.

## 6. Statistiques et vérification finale

1. Ouvrez **Statistiques** dans le concours.
2. Vérifiez les nombres de feuilles de stand et dépliez les listes de numéros.
3. Si nécessaire, sélectionnez le **filtre du club**. Il filtre également les listes de numéros et les nombres de feuilles de stand.
4. Vérifiez en particulier les **Numéros manquants** et les **Numéros pas encore retournés**.
5. Comparez les numéros en attente avec les feuilles papier et faites clarifier les retours manquants.

| Statistique | Éléments comptés ou répertoriés |
| --- | --- |
| Reçues | Tous les numéros attribués aux clubs sélectionnés |
| Consommées | Numéros associés à un résultat enregistré |
| Mal remplies | Numéros signalés comme mal remplis |
| Vides / inutilisées | Numéros disponibles, y compris les feuilles retournées vierges |
| Manquantes | Numéros explicitement signalés comme manquants |
| Pas encore retournées | Tous les numéros sans retour enregistré, quel que soit leur statut de consommation |

La liste des retours en attente **ne constitue pas une catégorie de consommation supplémentaire**. Un numéro consommé peut ne pas avoir encore été retourné. Un numéro disponible déjà retourné reste compté comme vide, mais n’est plus compté comme un retour en attente. N’ajoutez donc pas le nombre de retours en attente aux nombres par statut.

Les statistiques des numéros s’affichent même si aucun résultat n’a encore été saisi. Le filtre du club propose également les clubs qui ont reçu des feuilles sans avoir saisi de résultats. Les autres filtres de résultats, tels que la manche ou le jour de tir, n’associent pas rétroactivement les feuilles inutilisées à une manche ou à une date.

Si **Décompte au format PDF** est activé pour le concours, le document reprend les quantités de feuilles de stand de l’inventaire filtré par club. Il comprend **uniquement des quantités, pas les listes de numéros**. Les listes nécessaires aux vérifications restent consultables dans l’application. L’action PDF est activée séparément dans la configuration **Décompte**.

## Questions fréquentes

- **Le rôle est attribué, mais une action est absente :** vérifiez le club sélectionné et le concours concerné. Demandez à l’administration du concours de vérifier l’attribution réelle et la restriction au club.
- **Un numéro a déjà été utilisé :** vérifiez le résultat existant. Un numéro ne peut pas être utilisé pour plusieurs résultats dans le même concours.
- **Le tireur est rattaché au mauvais club :** corrigez d’abord la liste des tireurs. Le changement de club peut être bloqué tant que des résultats utilisent des numéros attribués à l’ancien club.
- **La feuille papier est là, mais son retour est toujours en attente :** la saisie d’un résultat ou un changement de statut ne remplace pas l’écriture de retour. Demandez à l’administration du concours d’enregistrer le retour effectif.

Suite : [Configurer un concours](competition-settings.md) · [Rôles et autorisations](../getting-started/roles.md) · [Saisir les résultats](../results/entering-results.md) · [Statistiques](../rankings/statistics.md)
