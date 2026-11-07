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

## GitHub Pages veröffentlichen

Das Repository `PeterDurrer/Score_Hub-docs` veröffentlicht die Dokumentation mit dem Workflow `.github/workflows/deploy.yml` über GitHub Actions. Ohne eigene Domain ist die Projektseite erreichbar unter:

`https://peterdurrer.github.io/Score_Hub-docs/`

Die Werte `url` und `baseUrl` in `docusaurus.config.js` müssen dafür auf `https://peterdurrer.github.io` und `/Score_Hub-docs/` gesetzt sein. In GitHub unter **Settings → Pages** muss als Build- und Deploymentquelle **GitHub Actions** ausgewählt sein. Ein DNS-Eintrag oder eine `CNAME`-Datei ist für die GitHub-Standardadresse nicht erforderlich. Falls dort noch eine Custom Domain eingetragen ist, diese entfernen und speichern; andernfalls kann GitHub weiterhin auf die alte Domain verweisen.

Nach einem Push auf `main` den Workflow **Deploy documentation** unter **Actions** prüfen. Die URL wird im erfolgreichen Deploy-Job als `page_url` angezeigt. Änderungen am Doku-Submodul müssen zuerst dort committet und gepusht werden; anschliessend muss das Hauptrepository den aktualisierten Submodul-Verweis committen und pushen.

## Später eine eigene Domain verwenden

Wenn eine eigene Domain verfügbar ist, zum Beispiel `docs.example.ch`:

1. In `docusaurus.config.js` `url` auf `https://docs.example.ch` und `baseUrl` auf `/` ändern.
2. Im DNS-Verwaltungsbereich einen `CNAME`-Eintrag für `docs` auf `peterdurrer.github.io` setzen. Bei Cloudflare den Proxy zunächst deaktivieren (DNS-only), damit GitHub das Zertifikat ausstellen kann.
3. Im Repository `PeterDurrer/Score_Hub-docs` unter **Settings → Pages → Custom domain** `docs.example.ch` eintragen und speichern. Die Veröffentlichungsquelle bleibt **GitHub Actions**; dafür ist keine `CNAME`-Datei im Quellrepository nötig.
4. Warten, bis GitHub das DNS geprüft und das HTTPS-Zertifikat bereitgestellt hat. Danach **Enforce HTTPS** aktivieren.
5. Die geänderte Docusaurus-Konfiguration auf `main` pushen und den Deploy-Workflow kontrollieren.

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
