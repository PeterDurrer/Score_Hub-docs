---
title: Creare una competizione
---

# Creare una competizione

Le competizioni si gestiscono nella sezione della società. Per crearle o modificarle è necessario disporre delle autorizzazioni appropriate della società o di sistema.

![Creazione di una competizione con modello selezionato, disciplina, opzioni di copia e categorie di licenza](../../../../../screenshots/it/competitions.png)


## Creare una nuova competizione

1. Apri **Società → Competizioni**.
2. Seleziona l'azione per creare una competizione.
3. Inserisci i dati di base richiesti. In particolare, nome, nome abbreviato, descrizione, tipo, stato, disciplina e date di inizio e fine.
4. **Riprendere la configurazione** si trova subito dopo **Descrizione**. Facoltativamente scegli una competizione della stessa società come modello; l'elenco mostra nome e disciplina. Il modello completa i valori non impostati di tipo, disciplina, autorizzazione di nuovi tiratori e logo. Verifica questi valori e scegli le altre opzioni singolarmente.
5. Salva dopo il caricamento del modello e delle categorie di licenza. La competizione compare nell'elenco della società. Nome, nome abbreviato, descrizione, stato e date restano i tuoi dati; non vengono copiati dal modello.
6. Apri la configurazione della competizione per controllare e, se necessario, modificare categorie, campi risultato, riconoscimenti, contabilità, turni, classifiche e utenti della competizione.

I campi obbligatori sono contrassegnati nel modulo. Pubblica la competizione o modifica il suo stato solo dopo aver verificato che la configurazione sia corretta per la procedura prevista.

## Cosa si può riprendere dal modello?

I dati generali già impostati **non vengono sovrascritti**. Il tipo visualizzato inizialmente e la casella dei nuovi tiratori non ancora modificata sono considerati non impostati. Una scelta esplicita viene mantenuta anche se l'autorizzazione di nuovi tiratori è disattivata. Cambiando modello, restano invariati anche i valori già completati. Puoi scegliere un'altra disciplina; la selezione delle categorie di licenza viene quindi ricaricata e azzerata.

| Opzione | Requisiti e contenuto |
| --- | --- |
| Categorie (con limiti dei riconoscimenti) | Disciplina di destinazione scelta. Copia categorie, equipaggiamenti compatibili, esclusioni di categorie d'età e limiti. I riconoscimenti necessari per i limiti vengono creati e i riferimenti riassegnati. |
| Turni | Disciplina di destinazione scelta. Copia nomi, numeri e restrizioni di partecipazione. Senza classifiche copiate, le restrizioni basate sulle classifiche vengono reimpostate su **tutti**. |
| Programma di tiro | Solo con i turni. Copia il numero di colpi per turno. |
| Matrice dei riconoscimenti | Solo con categorie e turni. Copia riconoscimenti e soglie per categorie, turni ed equipaggiamenti compatibili copiati. |
| Prezzi e regole per le munizioni | Solo con categorie e turni. Copia prezzi compatibili, regole generali e regole per le munizioni dei calibri disponibili. |
| Classifiche | Copia definizioni, campi risultato aggiuntivi, ordinamento e colonne. Gli indici dei campi restano invariati. I collegamenti ai turni vengono creati solo se vengono copiati anche i turni. |
| Categorie di licenza del modello | Sono proposte singolarmente solo le categorie assegnate al modello e alla disciplina di destinazione. Nella destinazione restano **solo le categorie selezionate compatibili del modello**; le assegnazioni automatiche e non selezionate vengono rimosse. Senza selezione non viene assegnata alcuna categoria di licenza. Senza modello restano le consuete assegnazioni automatiche della disciplina. |
| Utenti attivi della competizione | Facoltativo. Copia solo gli utenti attivi al momento della copia con i loro ruoli e restrizioni di accesso. Il creatore rimane sempre amministratore della destinazione, anche se nel modello ha un ruolo diverso. Gli utenti già assegnati alla destinazione non vengono duplicati né sovrascritti. Questa opzione richiede i diritti di modifica sul modello e sulla destinazione. |

## Discipline diverse: dove si creano lacune?

La disciplina del modello non è obbligatoria. Se la tua disciplina di destinazione è diversa:

- **Equipaggiamenti:** vengono copiati solo quelli assegnati alla disciplina di destinazione o senza alcuna assegnazione di disciplina. Quelli assegnati esclusivamente ad altre discipline vengono omessi.
- **Categorie:** se una categoria ha equipaggiamenti assegnati esplicitamente e nessuno è compatibile, viene omessa l'intera categoria con le relative regole di matrice e prezzo. Una categoria senza equipaggiamenti assegnati viene mantenuta.
- **Matrice:** le voci legate a equipaggiamenti incompatibili vengono omesse. Le voci senza equipaggiamento restano se la categoria viene copiata. Le soglie non vengono convertite dal punto di vista sportivo.
- **Munizioni:** vengono omesse le regole dei calibri senza equipaggiamento disponibile. Restano le regole generali di prezzo e quelle delle categorie/turni mantenuti.
- **Licenze:** le categorie non assegnate alla disciplina di destinazione non sono selezionabili; viene mostrato il loro numero. La compatibilità viene ricontrollata al salvataggio. Se le assegnazioni sono cambiate, le categorie selezionate non più compatibili vengono omesse e segnalate.
- **Turni, programma e classifiche:** la struttura può essere copiata. Verifica personalmente numero di colpi, campi risultato, soglie e tipo di classifica per la nuova disciplina e il tipo di competizione.

Esempio: la categoria **A** del modello usa solo un equipaggiamento assegnato al fucile 300 m. Per un'altra disciplina, **A** viene omessa se nessun equipaggiamento assegnato è compatibile. Mancano anche i suoi prezzi e le voci della matrice; una regola generale senza categoria resta presente.

## Controlli ed errori di copia

Prima del salvataggio, l'interfaccia spiega le differenze di disciplina e le dipendenze mancanti. Dopo una copia parziale, indica il numero di categorie, assegnazioni di equipaggiamenti, voci della matrice, regole di prezzo/munizioni, collegamenti classifiche-turni e categorie di licenza omessi, nonché le restrizioni di partecipazione reimpostate.

Il modello non copia **partecipanti, assegnazioni ai gruppi, risultati o scorte/registrazioni dei fogli di stand**. Gli utenti vengono copiati solo con l'opzione corrispondente; gli utenti inattivi vengono omessi e ne viene segnalato il numero. Lo stato viene verificato sul server durante la copia. Nome e identificativo della nuova competizione sono indipendenti dal modello.

Un errore di caricamento blocca il salvataggio con quel modello. Selezionalo nuovamente oppure scegli **Non utilizzare un modello**. I dati generali già completati restano nel modulo; controllali prima di salvare.

Creazione e copia non sono atomiche. Se la copia fallisce dopo la creazione, la nuova competizione resta presente e può essere incompleta. Aprila per controllare e completare le impostazioni anziché crearla una seconda volta.

## Tipi di competizione

L'applicazione consente di scegliere tra competizioni individuali, a squadre e miste. Le classifiche e i gruppi disponibili dipendono dal tipo selezionato e dalla configurazione.

## Dopo la creazione

- Completa prima la configurazione, in particolare turni, categorie e campi risultato.
- Aggiungi i partecipanti nella sezione **Tiratori**.
- Per le competizioni a squadre, crea i gruppi necessari e assegnavi i partecipanti.
- Assegna i ruoli della competizione solo alle persone che necessitano del relativo accesso.

Continua: [Configurare una competizione](competition-settings.md) · [Gestire i partecipanti](manage-participants.md) · [Inserimento rapido dei risultati](../results/quick-start.md)
