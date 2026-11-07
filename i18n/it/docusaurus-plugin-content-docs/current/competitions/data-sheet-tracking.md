---
title: Tracciamento dei fogli di stand
---

# Tracciamento dei fogli di stand

Quando il tracciamento è attivo, ogni foglio di stand cartaceo viene seguito tramite il proprio numero dall'invio a una società fino all'inserimento dei risultati e alla restituzione. Il consumo e l'effettiva restituzione sono due informazioni distinte: la registrazione di un risultato non conferma che il foglio cartaceo sia stato restituito.

## Dove si registra ciascuna operazione?

| Attività | Sezione dell'applicazione | Responsabile |
| --- | --- | --- |
| Attivare o disattivare il tracciamento | **Società → Competizioni → Configurazione → Contabilità**, sezione Gestione dei fogli di stand | Amministrazione della competizione o amministrazione autorizzata della società organizzatrice |
| Assegnare numeri a una società | Stessa sezione, nuova registrazione **Invio** | Amministrazione della competizione |
| Associare un foglio di stand a un risultato | **Competizioni → competizione desiderata → Risultati**, finestra di inserimento o modifica | Persone autorizzate all'inserimento dei risultati o amministrazione della competizione |
| Segnalare un foglio compilato male o mancante | Nella pagina **Risultati**, modulo separato per la gestione dello stato dei fogli di stand | Persone autorizzate all'inserimento dei risultati o amministrazione della competizione |
| Registrare una restituzione | **Società → Competizioni → Configurazione → Contabilità**, registrazione **Restituzione** | Amministrazione della competizione, dopo aver controllato i fogli ricevuti |
| Controllare i numeri ancora da restituire | **Competizioni → competizione desiderata → Statistiche**, statistiche dei fogli di stand | Amministrazione della competizione o persone autorizzate all'inserimento dei risultati, in base ai rispettivi accessi |

Le etichette dei campi possono variare a seconda della lingua dell'interfaccia. I fogli di stand sono i fogli di carta numerati: non sono l'elenco dei tiratori né la classifica.

## Ruoli e responsabilità

La panoramica seguente descrive i ruoli indicati senza autorizzazioni aggiuntive. Per i ruoli della società è determinante che siano assegnati presso la **società organizzatrice**; un ruolo presso una società partecipante non conferisce automaticamente diritti di gestione della competizione.

| Ruolo | Gestione del tracciamento e dell'invio/restituzione | Inserimento dei risultati con numero | Registrazione dei fogli compilati male/mancanti | Inventario dei numeri |
| --- | --- | --- | --- | --- |
| Amministrazione di sistema (`admin`) | Sì | Sì, per tutte le società | Sì | Tutte le società |
| Creatore della competizione a cui è ancora assegnata l'amministrazione della competizione | Sì | Sì, per tutte le società | Sì | Tutte le società |
| Amministrazione della competizione (`competitionAdmin`) | Sì | Sì, per tutte le società | Sì | Tutte le società |
| Amministrazione della società o gestione delle competizioni della società organizzatrice (`clubAdmin`, `clubCompetitionAdmin`) | Sì | Nell'ambito delle autorizzazioni per i risultati | Nell'ambito delle autorizzazioni per i risultati | Accesso di gestione; un ruolo aggiuntivo limitato per l'inserimento può restringere l'accesso ai numeri |
| Inserimento risultati della competizione senza limitazione alla società (`competitionResultScorer`) | No | Sì, per tiratori di società diverse | Sì, per società diverse | Tutte le società |
| Inserimento risultati della competizione limitato alla società (`competitionResultScorer`) | No | Solo per tiratori della propria società attualmente selezionata | Solo numeri di questa società | Solo questa società |
| Solo consultazione della competizione (`competitionViewer`) | No | No | No | Il solo ruolo di consultazione non dà accesso autonomo all'inventario dei fogli |

**Il ruolo di creatore della competizione non è un ruolo speciale aggiuntivo e permanente.** Le azioni successive dipendono dalle autorizzazioni attualmente assegnate. Se il ruolo cambia, si applica la nuova autorizzazione. Dopo la creazione, controlla l'assegnazione nella scheda **Utenti**: il flusso di creazione attuale salva ancora il valore del ruolo precedente `admin`, mentre l'interfaccia dei fogli di stand e il controllo dei ruoli della competizione usano `competitionAdmin`. Non fare quindi affidamento solo sulla creazione della competizione; se mancano le azioni di gestione, fai assegnare o correggere il ruolo valido di amministrazione della competizione.

Il solo ruolo della società per l'inserimento dei risultati non equivale alla gestione della competizione. Per collaborare a una competizione di un'altra società, chiedi che ti venga assegnato il ruolo appropriato per la competizione. La limitazione alla propria società si imposta per ogni utente della competizione nella scheda **Utenti**, non come impostazione globale per tutte le persone che inseriscono risultati.

Anche gli amministratori e chi inserisce risultati senza limitazioni possono selezionare per un risultato **solo i numeri della società a cui appartiene il tiratore nell'elenco dei tiratori della competizione**. La scelta del poligono di tiro o la società della persona che inserisce il risultato non cambia questa associazione. L'amministrazione di sistema e quella della competizione mantengono le autorizzazioni per tutte le società anche se è stato assegnato loro in aggiunta un ruolo limitato per l'inserimento dei risultati.

## 1. Preparare e attivare il tracciamento

**Prerequisito:** l'estensione per i fogli di stand deve essere disponibile nell'installazione. Se possibile, attiva il tracciamento prima del primo invio e, in ogni caso, prima di inserire i risultati.

1. Apri la configurazione della competizione da **Società → Competizioni**.
2. Seleziona **Contabilità** e la sezione Gestione dei fogli di stand.
3. Attiva l'interruttore per il tracciamento dei numeri.
4. Controlla la conferma prima di registrare le operazioni.
5. In **Utenti**, assegna i ruoli della competizione necessari e, se serve, imposta la limitazione alla propria società.

**Risultato:** per l'invio e la restituzione è necessario specificare i numeri; la maschera di inserimento dei risultati include un campo obbligatorio per il numero del foglio di stand. L'interruttore salva la modalità di tracciamento indipendentemente dalle altre impostazioni di contabilità.

Se sono già presenti registrazioni, l'applicazione controlla numeri, quantità e sovrapposizioni. Le registrazioni senza numeri validi, il consumo registrato manualmente o i risultati già esistenti possono impedire l'attivazione. I risultati esistenti non vengono completati automaticamente con numeri inventati; per la migrazione, contatta l'amministrazione.

Non è possibile disattivare il tracciamento finché esistono numeri a inventario o risultati associati a numeri. Senza tracciamento, resta disponibile la precedente registrazione per quantità, senza l'obbligo di indicare il numero nel risultato.

## 2. Registrare l'invio e gli intervalli numerici

**Responsabile:** amministrazione della competizione, non chi si occupa soltanto dell'inserimento dei risultati.

1. Nella scheda **Contabilità**, crea una nuova registrazione di fogli di stand.
2. Seleziona il tipo di registrazione **Invio** e la società destinataria.
3. Inserisci numeri singoli, intervalli o una combinazione, ad esempio `1001-1050, 1060`.
4. Controlla la quantità calcolata automaticamente: l'esempio comprende **51 fogli di stand**.
5. Inserisci la data e, se necessario, una nota, quindi salva.

**Risultato:** nell'ambito della competizione, ogni numero indicato appartiene a una sola società destinataria. I numeri duplicati, gli intervalli sovrapposti e i numeri già assegnati vengono rifiutati.

Gli intervalli includono entrambi gli estremi. `1001-1003` indica `1001, 1002, 1003`. Usa numeri interi positivi e intervalli in ordine crescente. Ogni immissione può contenere al massimo 10.000 numeri e 100 caratteri. Se necessario, suddividi gli elenchi numerici lunghi e discontinui in più registrazioni.

Quando il tracciamento è attivo, non è possibile registrare manualmente il consumo: questo viene determinato dal risultato salvato.

## 3. Inserire un risultato con il numero del foglio di stand

1. Nella competizione interessata, apri **Risultati**.
2. Imposta le preselezioni necessarie e apri il modulo di inserimento per il tiratore corretto.
3. Nel campo **Numero del foglio di stand**, seleziona il numero del foglio. Puoi usare la ricerca per restringere l'elenco.
4. Inserisci il turno, la categoria e gli altri campi risultato obbligatori.
5. Salva il risultato.

**Risultato:** il numero viene registrato come utilizzato e non è disponibile per un secondo risultato. Quando modifichi il risultato, il numero precedentemente assegnato resta invariato a meno che non lo cambi.

Per un nuovo risultato sono disponibili solo numeri non utilizzati e non ancora restituiti della società del tiratore. Non è possibile selezionare di nuovo numeri già utilizzati, compilati male, mancanti o restituiti. Durante la modifica è possibile mantenere il numero già assegnato anche se nel frattempo il foglio è stato restituito.

**Esempio:** la società A riceve `1001-1050`, la società B riceve `2001-2050`. Anche l'amministrazione della competizione non può selezionare un numero da `2001-2050` per un tiratore della società A.

Se non appare alcun numero, verifica che l'invio sia stato registrato per la società corretta e che l'associazione alla società sia corretta nell'elenco dei tiratori della competizione. Non inserire un numero di un'altra società come sostituto. Se si verifica un errore durante il caricamento dell'inventario, è necessario ricaricarlo.

## 4. Segnalare fogli compilati male o mancanti

Questo modulo funziona senza selezionare un tiratore e senza inserire un risultato.

1. Apri la pagina **Risultati** e la gestione dello stato dei fogli di stand.
2. Seleziona la società. Chi ha accesso limitato può selezionare solo la propria società.
3. Inserisci i numeri interessati o gli intervalli.
4. Seleziona **Compilato male** o **Mancante** e salva lo stato.

| Stato | Significato |
| --- | --- |
| Disponibile | Non ancora associato a un risultato; i numeri compilati male o mancanti possono essere resi nuovamente disponibili con una correzione autorizzata |
| Utilizzato | Associato a un risultato salvato; lo stato viene impostato durante l'inserimento del risultato |
| Compilato male | Il foglio è stato compilato in modo da renderlo inutilizzabile e non può essere usato per un nuovo risultato |
| Mancante | Un numero assegnato specifico è stato segnalato esplicitamente come mancante |

In modalità di correzione, è possibile riportare allo stato **Disponibile** solo i numeri non restituiti con stato **Compilato male** o **Mancante**. I numeri già disponibili non richiedono correzioni; il modulo non consente di modificare fogli utilizzati o restituiti. Per correggere un'associazione errata a un risultato, modifica il risultato e non inviare una segnalazione di stato. Se cambi il numero nel risultato o elimini il risultato, il numero precedentemente utilizzato viene reso disponibile; un'eventuale restituzione già registrata viene mantenuta.

## 5. Controllare e registrare la restituzione

**Responsabile:** amministrazione della competizione, dopo aver ricevuto e controllato i fogli cartacei. Chi inserisce i risultati segnala i fogli compilati male o mancanti, ma non registra la restituzione.

1. Apri **Società → Competizioni → Configurazione → Contabilità**.
2. Crea una registrazione dei fogli di stand con tipo **Restituzione**.
3. Seleziona la società da cui sono stati restituiti i fogli.
4. Inserisci i numeri o gli intervalli effettivamente ricevuti.
5. Controlla la quantità calcolata automaticamente, la data e la nota, quindi salva.

**Risultato:** la restituzione viene registrata per quei numeri specifici. È possibile restituire anche fogli già utilizzati o compilati male. La doppia registrazione della restituzione o la restituzione di un numero assegnato a un'altra società viene rifiutata.

I fogli utilizzati o compilati male non risultano restituiti automaticamente. Se sono stati effettivamente ricevuti, registra anche i relativi numeri. È preferibile registrare la restituzione dei fogli utilizzati dopo aver inserito i risultati, perché i numeri già restituiti non possono essere selezionati per un nuovo risultato.

Le registrazioni di invio con numeri utilizzati, compilati male, mancanti o già restituiti e le registrazioni di restituzione salvate non possono essere modificate o eliminate successivamente. In caso di registrazione protetta errata, contatta l'amministrazione; non creare una registrazione compensativa con numeri di un'altra società.

## 6. Statistiche e controllo finale

1. Apri **Statistiche** nella competizione.
2. Controlla i conteggi dei fogli di stand ed espandi gli elenchi dei numeri.
3. Se necessario, seleziona il **filtro per società**. Limita anche gli elenchi dei numeri e i conteggi dei fogli di stand.
4. Verifica in particolare i **Numeri mancanti** e i **Numeri non ancora restituiti**.
5. Confronta i numeri ancora in sospeso con l'inventario cartaceo e fai verificare le restituzioni in sospeso.

| Statistica | Cosa viene conteggiato o elencato |
| --- | --- |
| Ricevuti | Tutti i numeri assegnati alle società selezionate |
| Utilizzati | Numeri associati a un risultato salvato |
| Compilati male | Numeri registrati come compilati male |
| Vuoti / inutilizzati | Numeri disponibili, compresi i fogli restituiti già vuoti |
| Mancanti | Numeri segnalati esplicitamente come mancanti |
| Non ancora restituiti | Tutti i numeri senza una restituzione registrata, indipendentemente dallo stato di utilizzo |

L'elenco delle restituzioni in sospeso **non è una categoria di utilizzo aggiuntiva**. Un numero utilizzato può anche non essere ancora stato restituito. Un numero disponibile già restituito continua a essere conteggiato come inutilizzato, ma non come restituzione in sospeso. Non sommare quindi il conteggio delle restituzioni in sospeso ai conteggi degli stati.

Le statistiche numeriche vengono visualizzate anche quando non sono ancora presenti risultati. Il filtro per società include anche le società che hanno ricevuto fogli ma non hanno ancora registrato risultati. Altri filtri dei risultati, come turno o giornata di tiro, non associano retroattivamente i fogli inutilizzati a un turno o a una data.

Se per la competizione è disponibile **Contabilità in PDF**, la stampa include le quantità dei fogli di stand dell'inventario filtrato per società. Riporta **solo i conteggi, non gli elenchi dei numeri**. Gli elenchi per il controllo successivo restano consultabili nell'applicazione. L'azione PDF va abilitata separatamente nella configurazione **Contabilità**.

## Domande frequenti

- **Il ruolo è assegnato, ma manca un'azione:** controlla la società selezionata e la competizione interessata. Chiedi all'amministrazione della competizione di verificare l'assegnazione effettiva e l'eventuale limitazione alla società.
- **Un numero è già stato utilizzato:** controlla il risultato esistente. Lo stesso numero non può essere usato per più risultati nella stessa competizione.
- **Il tiratore appartiene alla società sbagliata:** correggi prima l'elenco dei tiratori. Il cambio di società potrebbe essere bloccato finché i risultati non sono associati a numeri della società precedente.
- **Il foglio cartaceo è arrivato, ma risulta ancora non restituito:** l'inserimento di un risultato o la segnalazione dello stato non sostituiscono la registrazione della restituzione. Chiedi all'amministrazione della competizione di registrare la restituzione effettiva.

Continua: [Configurare una competizione](competition-settings.md) · [Ruoli e autorizzazioni](../getting-started/roles.md) · [Inserire i risultati](../results/entering-results.md) · [Statistiche](../rankings/statistics.md)
