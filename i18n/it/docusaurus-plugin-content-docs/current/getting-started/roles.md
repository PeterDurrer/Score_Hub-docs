---
title: Ruoli e autorizzazioni
---

# Ruoli e autorizzazioni

Score_Hub verifica le autorizzazioni a più livelli. Un ruolo assegnato per una società non equivale automaticamente a un ruolo per ogni singola competizione.

| Livello | Ruolo | Scopo tipico |
| --- | --- | --- |
| Sistema | `admin` | Gestione a livello di sistema e accesso alle pagine di amministrazione |
| Sistema | `user` | Accesso regolare dopo l'autenticazione; gli altri diritti dipendono dai ruoli della società e della competizione |
| Società | `clubAdmin` | Gestire i dati e gli utenti della società |
| Società | `clubCompetitionAdmin` | Gestire le competizioni della società |
| Società | `clubResultScorer` | Inserire risultati nell'ambito delle autorizzazioni della società |
| Competizione | `competitionAdmin` | Impostazioni e gestione di una competizione |
| Competizione | `competitionResultScorer` | Inserire risultati per una competizione |
| Competizione | `competitionViewer` | Consultare le informazioni della competizione |

Le azioni effettivamente disponibili dipendono anche dalla configurazione della società e della competizione. In particolare, chi inserisce i risultati può essere limitato alla propria società.

## Se manca un'azione

La [panoramica dei ruoli per il tracciamento dei fogli di stand](../competitions/data-sheet-tracking.md#ruoli-e-responsabilità) distingue tra chi crea la competizione, l'amministrazione della competizione e chi inserisce i risultati, con o senza limitazione alla società. Invio, restituzione e modalità di tracciamento sono gestiti dall'amministrazione; l'assegnazione del numero a un risultato e le segnalazioni di foglio compilato male o mancante spettano a chi è autorizzato a inserire i risultati. Consulta anche la nota sull'assegnazione dei ruoli meno recente durante la creazione della competizione.

1. Verifica di lavorare nella società e nella competizione corrette.
2. Chiedi all'amministrazione della società quale ruolo è assegnato al tuo account.
3. Per un ruolo all'interno di una singola competizione, contatta l'amministrazione della competizione.
4. Solo l'amministrazione di sistema può gestire i ruoli di sistema.

Le denominazioni dei ruoli possono apparire diverse nell'interfaccia tradotta; i codici nella tabella corrispondono ai ruoli interni.
