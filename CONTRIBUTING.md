# Dokumentation pflegen

Dieses Verzeichnis enthält das deutschsprachige Benutzerhandbuch der Score_Hub-Anwendung. Beschreiben Sie nur Funktionen, die in der aktuellen Oberfläche vorhanden und überprüfbar sind.

## Lokale Vorschau

Voraussetzung ist Node.js 18 oder neuer.

```sh
npm install
npm start
```

Die lokale Vorschau ist standardmässig unter `http://localhost:3000` erreichbar.

Für einen Produktionsbuild:

```sh
npm run build
```

Aus dem Repository-Stamm funktionieren die Befehle `npm run docs:build` und `npm run docs:serve`.

## Seitenstruktur

- `README.md`: Einstieg und Inhaltsübersicht
- `getting-started/`: Konto, Navigation und Rollen
- `clubs/`: Vereinsdaten, Benutzer und Standorte
- `competitions/`: Wettkampfkonfiguration und Teilnehmende
- `results/`: Resultaterfassung und Korrekturen
- `rankings/`: Ranglisten und Statistiken
- `screenshots/`: Platzhalter und echte, freigegebene Abbildungen

Die Seitenreihenfolge und Gruppen sind in `sidebars.js` definiert. Wenn Sie eine Seite hinzufügen, aktualisieren Sie die Sidebar und die Links im Einstieg.

## Schreibregeln

- Schreiben Sie auf Deutsch, klar und handlungsorientiert.
- Verwenden Sie nummerierte Listen für Abläufe.
- Unterscheiden Sie sichtbar zwischen Voraussetzung, Handlung und Ergebnis.
- Behaupten Sie keine Funktionen, die nicht im aktuellen Code oder in einer laufenden, freigegebenen Anwendung bestätigt wurden.
- Versprechen Sie keine Rollen, Exportformate, Benachrichtigungen oder Antwortzeiten ohne Beleg.
- Verwenden Sie für interne Querverweise relative Markdown-Links.

## Screenshots

Ersetzen Sie Platzhalter nur mit aktuellen Aufnahmen einer freigegebenen Umgebung. Verwenden Sie synthetische Testdaten, entfernen Sie personenbezogene Daten und Zugangsinformationen und ergänzen Sie Alternativtext. Die Dateinamen und Einbindung sind in `screenshots/README.md` dokumentiert.
