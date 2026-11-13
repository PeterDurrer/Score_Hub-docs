---
title: Schützen, Teilnehmer und Gruppen
---

# Schützen, Teilnehmer und Gruppen

Die Teilnehmer eines Wettkampfs werden im Bereich **Schützen** verwaltet. Gruppen und deren Belegung werden im separaten Bereich **Gruppen** gepflegt.

![Teilnehmerliste mit Beispieldaten](../../../../../screenshots/participants.png)

## Schützen hinzufügen

1. Öffnen Sie den Wettkampf und wechseln Sie zu **Schützen**.
2. Wählen Sie **Schützen hinzufügen** und suchen Sie im Dialog nach einem vorhandenen Schützen.
3. Wählen Sie den passenden Eintrag aus den Suchergebnissen und fügen Sie ihn dem Wettkampf hinzu. Prüfen Sie anschliessend die Teilnehmerliste.

### Globale Schützen übernehmen

Über **Globale Schützen importieren** können berechtigte Benutzer zentrale Schützen gesammelt in den geöffneten Wettkampf übernehmen. Das ist besonders nützlich, wenn die Teilnehmerliste bereits für Lizenzarten zugelassen ist.

1. Öffnen Sie **Globale Schützen importieren**.
2. Wählen Sie bei Bedarf die zu übernehmenden Lizenzarten aus und aktualisieren Sie die Vorschau.
3. Prüfen Sie, wie viele Schützen zugriffsberechtigt, bereits vorhanden und noch zu importieren sind.
4. Starten Sie den Import. Der Fortschritt und anschliessend die Anzahl der übernommenen, übersprungenen oder fehlerhaften Einträge werden angezeigt.

Schützen, die bereits am Wettkampf teilnehmen, werden übersprungen. Der Import fügt zentrale Schützen nur diesem Wettkampf hinzu; er ist kein Excel- oder CSV-Dateiimport.

### Neuen Schützen erfassen

Ist kein passender Schütze vorhanden, können Sie ihn direkt im Dialog erstellen, sofern die Neuerfassung für den Wettkampf freigeschaltet ist. Der Zugang hängt von Ihrer Rolle ab. Die Abbildungen zeigen frei erfundene Daten; die roten Markierungen wurden für diese Anleitung ergänzt.

![Hinzufügen-Dialog mit nummerierten Bereichen für Suchangaben, Suche, Jahrgang und Geschlecht sowie Erstellen](../../../../../screenshots/shooter-create-steps.png)

1. Geben Sie Vor- und Nachname ein und wählen Sie bei Bedarf den Verein. Die Lizenznummer ist für lokale Schützen optional.
2. Wählen Sie **Suchen**, um vorhandene Einträge zu prüfen. Gibt es einen passenden Treffer, wählen Sie ihn aus, statt einen doppelten Eintrag zu erstellen.
3. Falls kein Treffer passt, ergänzen Sie den Jahrgang oder das Geburtsdatum sowie bei Bedarf das Geschlecht. Die angezeigte Alterskategorie wird anhand des Jahrgangs ermittelt.
4. Wählen Sie **Neuen Schützen erstellen**. Prüfen Sie anschliessend den Eintrag in der Teilnehmerliste.

### Geburtsdatum oder Jahrgang

Im Feld **Geburtsdatum / Jahrgang** sind beide Eingaben möglich:

- Nur der vierstellige Jahrgang, zum Beispiel `2004`: Beim Speichern wird automatisch der **01.01.2004** als Geburtsdatum verwendet.
- Das vollständige Datum, zum Beispiel `14.03.2004`: Dieses Datum wird beim Speichern übernommen. Auch `2004-03-14` ist möglich.

![Hinzufügen-Dialog mit markiertem vollständigem Geburtsdatum und angezeigter Alterskategorie](../../../../../screenshots/shooter-birth-date.png)

Für die Alterskategorie wird derzeit nur das Geburtsjahr benötigt. Das Feld darf leer bleiben; dann wird keine Alterskategorie aus dem Geburtsdatum vorgeschlagen. Ungültige Daten oder Jahrgänge ausserhalb von 1900 bis zum aktuellen Jahr werden im Dialog beanstandet.

Teilnehmerlisten aus Excel oder CSV können nicht importiert werden.

## Schützendaten bearbeiten oder entfernen

Wählen Sie den Schützen in der Liste und verwenden Sie die angebotene Bearbeitungsaktion. Bei bereits erfassten Resultaten können Änderungen oder das Entfernen eingeschränkt sein. Ändern Sie Stammdaten sorgfältig, weil sie in Resultaten und Ranglisten verwendet werden können.

Bei lokal erfassten Schützen können Sie die Lizenznummer über **Bearbeiten** auch nach der Resultaterfassung korrigieren oder entfernen. Speichern Sie die Änderung und prüfen Sie die Nummer in der Liste. Bereits erfasste Resultate und Gruppenzuordnungen bleiben mit dem Schützen verknüpft. Eine Nummer, die im selben Wettkampf bereits einem anderen Schützen zugeordnet ist, wird abgelehnt. Aus der zentralen Schützenliste hinzugefügte Schützen können hier nicht bearbeitet werden.

## Gruppen bilden

1. Wechseln Sie zu **Gruppen**.
2. Wählen Sie bei Bedarf die Kategorie und Runde.
3. Erstellen Sie eine Gruppe mit einem eindeutigen Namen.
4. Fügen Sie die passenden Wettkampfschützen der Gruppe hinzu.
5. Kontrollieren Sie die Zuordnung für jede relevante Runde und Kategorie.

Die Gruppenbelegung kann je nach Wettkampfkonfiguration pro Runde und Kategorie verwaltet werden. Prüfen Sie vor der Resultaterfassung, dass die Zuordnungen stimmen.

Weiter: [Wettkampf konfigurieren](competition-settings.md) · [Resultate erfassen](../results/quick-start.md)
