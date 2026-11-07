---
title: Rôles et autorisations
---

# Rôles et autorisations

Score_Hub vérifie les autorisations à plusieurs niveaux. Un rôle attribué pour un club n’est pas automatiquement valable pour chaque concours.

| Niveau | Rôle | Utilisation habituelle |
| --- | --- | --- |
| Système | `admin` | Gestion à l’échelle du système et accès aux pages d’administration |
| Système | `user` | Accès standard après connexion ; les droits supplémentaires découlent des rôles attribués pour les clubs et les concours |
| Club | `clubAdmin` | Gestion des données et des utilisateurs du club |
| Club | `clubCompetitionAdmin` | Gestion des concours du club |
| Club | `clubResultScorer` | Saisie des résultats dans le cadre des autorisations du club |
| Concours | `competitionAdmin` | Paramètres et gestion d’un concours |
| Concours | `competitionResultScorer` | Saisie des résultats pour un concours |
| Concours | `competitionViewer` | Consultation des informations d’un concours |

Les actions réellement disponibles dépendent également de la configuration du club et du concours. En particulier, les personnes chargées de saisir les résultats peuvent être limitées à leur propre club.

## Si une action est absente

Le [récapitulatif des rôles pour les feuilles de stand](../competitions/data-sheet-tracking.md#rollen-und-zuständigkeiten) distingue le créateur du concours, l’administration du concours et les personnes chargées de saisir les résultats, avec ou sans restriction de club. Le suivi, les envois et les retours relèvent de la gestion ; l’association d’un numéro à un résultat et le signalement des feuilles mal remplies ou manquantes relèvent de la saisie autorisée des résultats. Consultez également l’avertissement concernant l’attribution d’un ancien rôle lors de la création d’un concours.

1. Vérifiez que vous travaillez dans le bon club et le bon concours.
2. Demandez à l’administration du club quel rôle est attribué à votre compte.
3. Pour un rôle propre à un concours, contactez l’administration de ce concours.
4. Seule l’administration système peut gérer les rôles à l’échelle du système.

Les noms des rôles peuvent différer dans l’interface traduite ; les identifiants du tableau correspondent aux rôles internes.
