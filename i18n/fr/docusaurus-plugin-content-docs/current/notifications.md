---
title: Notifications et e-mails administrateur
---

# Notifications et e-mails administrateur

Score_Hub envoie des e-mails automatiques lors de certains événements liés aux comptes et aux concours. L’administration système peut configurer les événements, les rôles destinataires et les textes. Une boîte de dialogue distincte permet également d’envoyer des communications manuelles.

![Modèle d’événement avec repères sur l’activation, les destinataires, le texte et l’enregistrement](../../../../screenshots/fr/notifications-settings.png)

*1 active ou désactive l’événement, 2 définit les rôles destinataires, 3 repère l’objet et le contenu HTML, et 4 enregistre le modèle.*

## Événements, déclencheurs et destinataires

Le tableau indique les événements et les rôles destinataires activés par défaut. Les rôles se configurent pour chaque événement dans **Textes des e-mails**. Les destinataires doivent être des utilisateurs actifs ayant le rôle sélectionné dans le club ou le concours concerné.

| Événement | Déclenchement | Destinataires par défaut |
| --- | --- | --- |
| Bienvenue | Lors de l’inscription ou de la création d’un compte utilisateur | Le nouvel utilisateur |
| Club : utilisateur ajouté | Lorsqu’un utilisateur est associé à un club | L’utilisateur ajouté |
| Club : rôle supprimé | Lorsqu’une attribution de rôle de club est supprimée | L’utilisateur concerné |
| Concours : utilisateur ajouté | Lorsqu’un utilisateur est associé à un concours | L’utilisateur ajouté |
| Concours : rôle modifié | Lorsque le rôle du créateur passe à celui d’administrateur du concours lors de la reprise des utilisateurs depuis un modèle | L’utilisateur concerné |
| Ouverture de la saisie des résultats | À la **date de début de saisie** du concours, si l’avis d’ouverture est activé dans le concours | Administration système, administration du club organisateur, administration du concours, personnes chargées de saisir les résultats et personnes autorisées à consulter le concours |
| Fin prochaine de la période de saisie | Sept jours avant la **date limite de saisie** du concours, si le rappel est activé dans le concours | Administration système, administration du club organisateur et administration du concours |

Les deux dernières dates correspondent à la **date de début de saisie** et à la **date limite de saisie**, et non aux dates de début et de fin du concours. Chaque avis doit être activé à deux endroits : l’événement dans **Textes des e-mails** et l’option correspondante dans l’onglet **Général** de la configuration du concours. Le rappel de fin ne s’applique que si une date limite est définie.

Les notifications d’attribution de compte ou de rôle sont adressées au compte concerné. Pour ces notifications personnelles, les règles de destinataire déterminent si elles sont activées pour l’utilisateur. Les règles de destinataires des rappels de saisie se configurent indépendamment.

## Configurer les événements automatiques

1. Connectez-vous en tant qu’administrateur système et ouvrez **Administration → Textes des e-mails**.
2. Recherchez l’événement. **Événement activé** active ou désactive cet événement pour tout le système.
3. Sous **Destinataires**, sélectionnez les rôles auxquels envoyer le message.
4. Choisissez **de**, **fr** et **it**, puis renseignez l’objet et le contenu HTML pour chaque langue. Le modèle utilisé dépend de la langue préférée du destinataire.
5. Utilisez les boutons de variables pour insérer des valeurs telles que `{{User.FirstName}}` ou `{{Competition.Name}}` à la position du curseur.
6. Contrôlez le modèle avec **Aperçu**, puis enregistrez les modifications de l’événement.

Un événement désactivé ne met aucun nouveau message en file. Les modifications de modèle concernent les futurs messages ; les messages déjà préparés pour l’envoi conservent leur contenu rendu.

### Heure d’envoi des événements liés à une date

Le réglage **Heure d’envoi des événements liés à une date** définit une heure et un fuseau d’envoi communs au système. La valeur par défaut est **09:00 / Europe/Zurich**. Le Timer vérifie toutes les cinq minutes et met en file les avis d’ouverture et de fin à partir de l’heure choisie, le jour de l’événement. Le jour de l’événement dépend du fuseau du concours ; l’heure dépend du fuseau d’envoi sélectionné ici. Modifier l’heure ou le fuseau ne renvoie pas les événements déjà mis en file.

![Heure d’envoi et activation globale des e-mails avec repères numérotés](../../../../screenshots/fr/notifications-schedule.png)

*1 met en pause ou active tous les envois d’e-mails, 2 définit l’heure et le fuseau, et 3 enregistre les réglages.*

Les messages de bienvenue et d’attribution ainsi que les e-mails administrateur manuels ne dépendent pas de cette heure quotidienne. La file d’attente ou le fournisseur peut retarder la livraison effective.

**Condition d’exploitation :** le Timer doit fonctionner dans une Azure Function App séparée. L’API gérée d’Azure Static Web Apps ne prend pas en charge les timers. Le réglage de l’heure ne déploie pas le worker.

### Mettre globalement l’envoi en pause

La case **Activer l’envoi d’e-mails**, dans le réglage de l’heure d’envoi, permet à l’administration système d’activer ou de désactiver toutes les sorties d’e-mail. Lorsque l’envoi est désactivé, aucune nouvelle notification n’est mise en file et les messages en attente ne sont pas distribués. La file est conservée ; après réactivation, les messages en attente peuvent être traités. L’aperçu et la vérification des destinataires restent disponibles pour les e-mails administrateur, mais leur envoi est bloqué.

## Variables des modèles

Chaque événement propose des variables adaptées ; la liste affichée au-dessus du contenu indique les valeurs disponibles. Il peut s’agir, par exemple, du nom et des liens du concours, du prénom de l’utilisateur ou de liens vers l’application et la documentation. Cliquez sur une variable pour l’insérer dans le contenu HTML.

La section **Variables SQL et URL dynamiques** permet de définir des valeurs supplémentaires :

- **Champ :** lit un champ d’une table proposée.
- **Nombre (COUNT) :** compte les enregistrements correspondants ; une sélection vide retourne `0`.
- **URL dynamique :** crée un lien à partir de la base de l’application ou de la documentation, d’un chemin relatif et éventuellement d’une ancre.

Chaque requête SQL nécessite au moins un filtre de contexte, par exemple `createdBy = ID du destinataire` ou `competitionID = ID du concours`. Un champ unique doit correspondre à un seul enregistrement. Les champs sensibles ne sont pas proposés. Vérifiez l’objet et le contenu avec les valeurs réelles de l’événement avant d’enregistrer le modèle.

## Envoyer un e-mail administrateur

![Boîte de dialogue d’e-mail administrateur avec repères sur les publics, les utilisateurs, les modèles linguistiques et la vérification](../../../../screenshots/fr/admin-mail.png)

*1 repère les types d’utilisateurs et les rôles, 2 la sélection individuelle, 3 le choix de la langue, 4 l’objet et le contenu, 5 la vérification des destinataires et variables, et 6 la mise en file. L’envoi reste bloqué sans aperçu valide.*

1. Dans **Administration → Textes des e-mails**, ouvrez la section **Envoyer directement aux utilisateurs**.
2. Sélectionnez au moins un public : utilisateurs précis, types d’utilisateurs du système, rôles de club ou de concours, et éventuellement un concours ou un ID de club.
3. Renseignez l’objet et le contenu en allemand, français et italien. Le modèle de la langue préférée de chaque destinataire sera utilisé.
4. Ajoutez les variables nécessaires et choisissez **Vérifier les destinataires et les variables**.
5. Vérifiez l’aperçu généré pour chaque destinataire. Une variable manquante, vide ou ambiguë bloque l’envoi.
6. Choisissez **Envoyer maintenant**. Les destinataires et le contenu rendu sont placés dans la file d’envoi.

Les différents filtres se combinent (ET) ; plusieurs valeurs d’un même filtre sont alternatives (OU). Si aucun utilisateur n’est sélectionné individuellement, tous les utilisateurs actifs correspondant aux autres filtres sélectionnés sont inclus. Un envoi est limité à 200 destinataires et nécessite au moins un filtre de public.

Les e-mails administrateur sont des communications manuelles, et non des événements automatiques. Leur aperçu et leur mise en file ne dépendent pas de l’heure quotidienne, mais l’envoi effectif nécessite que le commutateur global soit activé. Le message de confirmation indique la mise en file, pas la livraison.

## Préférences personnelles et fuseaux horaires

Les préférences individuelles par événement sont prises en compte lors de la sélection des destinataires. Toutefois, l’interface utilisateur ne propose actuellement aucune page de profil permettant de modifier ces préférences. L’administration système gère donc les rôles destinataires des événements automatiques.

Le fuseau horaire du profil détermine l’affichage des instants. Pour les notifications liées à une date, le jour du concours dans son fuseau horaire fait foi ; l’heure quotidienne d’envoi utilise le fuseau d’envoi distinct défini à l’échelle du système. Les dates limites de saisie sont inclusives et vérifiées selon le fuseau du concours. Les personnes chargées de saisir les résultats peuvent créer, modifier et supprimer des résultats pendant cette période. Une limite absente laisse la période ouverte ; les concours terminés ou annulés restent verrouillés.

Suite : [Rôles et autorisations](getting-started/roles.md) · [Configurer un concours](competitions/competition-settings.md)
