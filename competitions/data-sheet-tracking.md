---
title: Standblatt-Tracking
---

# Standblatt-Tracking

Mit aktiviertem Tracking wird jedes physische Standblatt über seine Nummer vom Versand an einen Verein bis zur Resultaterfassung und Rückgabe verfolgt. Der Verbrauch und der tatsächliche Rücklauf sind zwei getrennte Angaben: Ein erfasstes Resultat bestätigt noch keine Rückgabe des Papiers.

## Wo wird was erfasst?

| Aufgabe | Ort in der Anwendung | Zuständig |
| --- | --- | --- |
| Tracking ein- oder ausschalten | **Verein → Wettkämpfe → Konfiguration → Abrechnung**, Bereich Standblatt-Verwaltung | Wettkampfadministration bzw. berechtigte Verwaltung des organisierenden Vereins |
| Nummern an einen Verein vergeben | Gleicher Bereich, neue Buchung **Versand** | Wettkampfverwaltung |
| Standblatt einem Resultat zuordnen | **Wettkämpfe → gewünschter Wettkampf → Resultate**, Erfassungs- oder Bearbeitungsdialog | Berechtigte Resultaterfassende oder Wettkampfadministration |
| Verschrieben oder fehlend melden | Auf der Seite **Resultate**, separates Formular zur Standblatt-Statusverwaltung | Berechtigte Resultaterfassende oder Wettkampfadministration |
| Rücklauf buchen | **Verein → Wettkämpfe → Konfiguration → Abrechnung**, Buchung **Rückversand** | Wettkampfverwaltung nach Kontrolle der eingegangenen Blätter |
| Offene Nummern kontrollieren | **Wettkämpfe → gewünschter Wettkampf → Statistiken**, Standblatt-Statistik | Berechtigte Wettkampfverwaltung bzw. Resultaterfassende, entsprechend ihrem Zugriff |

Die Beschriftung der Felder kann je nach Oberflächensprache abweichen. Standblätter sind die nummerierten Papierblätter, nicht die Schützenliste und nicht die Rangliste.

## Rollen und Zuständigkeiten

Die folgende Übersicht beschreibt die genannten Rollen ohne zusätzliche Berechtigungen. Für Vereinsrollen ist entscheidend, ob die Rolle beim **organisierenden Verein** gilt; eine Rolle bei einem teilnehmenden Verein gibt nicht automatisch Verwaltungsrechte am Wettkampf.

| Rolle | Tracking und Versand/Rückversand verwalten | Resultate mit Nummer erfassen | Verschrieben/fehlend erfassen | Nummernbestand |
| --- | --- | --- | --- | --- |
| Systemadministration (`admin`) | Ja | Ja, vereinsübergreifend | Ja | Alle Vereine |
| Wettkampfersteller mit weiterhin zugewiesener Wettkampfadministration | Ja | Ja, vereinsübergreifend | Ja | Alle Vereine |
| Wettkampfadministration (`competitionAdmin`) | Ja | Ja, vereinsübergreifend | Ja | Alle Vereine |
| Vereinsadministration oder Wettkampfverwaltung des organisierenden Vereins (`clubAdmin`, `clubCompetitionAdmin`) | Ja | Im Rahmen der Resultatberechtigung | Im Rahmen der Resultatberechtigung | Verwaltungszugriff; eine zusätzlich eingeschränkte Erfasserrolle kann den Nummernzugriff begrenzen |
| Wettkampf-Resultaterfassung ohne Vereinseinschränkung (`competitionResultScorer`) | Nein | Ja, für Schützen verschiedener Vereine | Ja, für verschiedene Vereine | Alle Vereine |
| Wettkampf-Resultaterfassung mit Vereinseinschränkung (`competitionResultScorer`) | Nein | Nur für Schützen des eigenen, aktuell ausgewählten Vereins | Nur Nummern dieses Vereins | Nur dieser Verein |
| Nur lesender Wettkampfzugang (`competitionViewer`) | Nein | Nein | Nein | Kein eigener Zugriff auf das Tracking-Inventar allein durch die Leserrolle |

**Wettkampfersteller ist keine zusätzliche, dauerhafte Sonderrolle.** Für spätere Aktionen zählen die aktuell vorhandenen Rechte. Wird die Rolle geändert, gilt die neue Berechtigung. Prüfen Sie nach dem Erstellen die Zuweisung im Register **Benutzer**: Der aktuelle Erstellungspfad hinterlegt noch den älteren Rollenwert `admin`, während die Standblatt-Oberfläche und die Wettkampfrollenprüfung `competitionAdmin` verwenden. Verlassen Sie sich deshalb nicht allein auf die Erstellung des Wettkampfs; lassen Sie die gültige Wettkampfadministrationsrolle zuweisen bzw. korrigieren, wenn Verwaltungsaktionen fehlen.

Eine Vereinsrolle zur Resultaterfassung allein ist nicht mit der Wettkampfverwaltung gleichzusetzen. Lassen Sie für die Mitarbeit an einem fremden Wettkampf die passende Wettkampfrolle zuweisen. Die Einschränkung auf den eigenen Verein wird im Register **Benutzer** für die jeweilige Wettkampfperson festgelegt, nicht als globale Einstellung für alle Erfassenden.

Auch Administrierende und uneingeschränkte Erfassende dürfen beim Resultat **nur Nummern des Vereins auswählen, dem der Schütze in der Schützenliste dieses Wettkampfs angehört**. Ein gewählter Schiessstand oder der Verein der erfassenden Person ändert diese Zuordnung nicht. System- und Wettkampfadministration bleiben auch bei einer zusätzlich zugewiesenen eingeschränkten Erfasserrolle vereinsübergreifend berechtigt.

## 1. Tracking vorbereiten und aktivieren

**Voraussetzung:** Die Standblatt-Erweiterung muss für die Installation bereitgestellt sein. Aktivieren Sie das Tracking möglichst vor dem ersten Versand und unbedingt vor der Resultaterfassung.

1. Öffnen Sie die Wettkampfkonfiguration unter **Verein → Wettkämpfe**.
2. Wählen Sie **Abrechnung** und den Bereich Standblatt-Verwaltung.
3. Aktivieren Sie den Schalter für das Nummerntracking.
4. Kontrollieren Sie die Bestätigung, bevor Sie Buchungen erfassen.
5. Weisen Sie unter **Benutzer** die benötigten Wettkampfrollen und gegebenenfalls die Einschränkung auf den eigenen Verein zu.

**Ergebnis:** Versand und Rückversand benötigen konkrete Nummern; die Resultaterfassung erhält ein Pflichtfeld für die Standblatt-Nummer. Der Schalter speichert den Tracking-Modus unabhängig von den übrigen Abrechnungseinstellungen.

Bei vorhandenen Buchungen prüft die Anwendung Nummern, Mengen und Überschneidungen. Buchungen ohne gültige Nummern, manuell gebuchter Verbrauch oder bereits vorhandene Resultate können die Aktivierung verhindern. Bestehende Resultate werden nicht automatisch mit erfundenen Nummern ergänzt; wenden Sie sich für eine Übernahme an die Administration.

Das Ausschalten ist gesperrt, solange Nummernbestand oder nummerierte Resultate vorhanden sind. Ohne Tracking bleibt die bisherige Mengenerfassung ohne verpflichtende Resultatnummer bestehen.

## 2. Versand und Nummernbereiche erfassen

**Zuständig:** Wettkampfverwaltung, nicht die reine Resultaterfassung.

1. Öffnen Sie im Register **Abrechnung** eine neue Standblatt-Buchung.
2. Wählen Sie die Buchungsart **Versand** und den empfangenden Verein.
3. Geben Sie einzelne Nummern, Bereiche oder eine Kombination ein, beispielsweise `1001-1050, 1060`.
4. Prüfen Sie die automatisch ermittelte Menge: Dieses Beispiel umfasst **51 Standblätter**.
5. Erfassen Sie Datum und bei Bedarf eine Notiz und speichern Sie.

**Ergebnis:** Jede angegebene Nummer gehört innerhalb dieses Wettkampfs genau einem empfangenden Verein. Doppelte Nummern, überlappende Bereiche sowie bereits vergebene Nummern werden abgelehnt.

Bereiche sind einschliesslich beider Grenzen. `1001-1003` bedeutet `1001, 1002, 1003`. Verwenden Sie positive ganze Zahlen und aufsteigende Bereiche. Pro Eingabe sind höchstens 10.000 Nummern und 100 Zeichen zulässig. Teilen Sie umfangreiche, stark unterbrochene Nummernlisten bei Bedarf auf mehrere Buchungen auf.

Bei aktivem Tracking gibt es keine manuelle Verbrauchsbuchung: Der Verbrauch entsteht durch das gespeicherte Resultat.

## 3. Resultat mit Standblatt-Nummer erfassen

1. Öffnen Sie im betreffenden Wettkampf **Resultate**.
2. Treffen Sie die benötigte Vorauswahl und öffnen Sie die Erfassung beim richtigen Schützen.
3. Wählen Sie im Feld **Standblatt-Nummer** die Nummer des vorliegenden Blatts. Mit der Nummernsuche können Sie die Auswahl einschränken.
4. Erfassen Sie Runde, Kategorie und die weiteren erforderlichen Resultatfelder.
5. Speichern Sie das Resultat.

**Ergebnis:** Die Nummer wird als verbraucht geführt und steht nicht für ein zweites Resultat zur Verfügung. Beim Bearbeiten bleibt die bisherige Nummer erhalten, solange Sie sie nicht ändern.

Für ein neues Resultat stehen nur verfügbare, noch nicht zurückgesandte Nummern des Schützenvereins zur Auswahl. Bereits verbrauchte, verschriebene, fehlende oder zurückgesandte Nummern sind nicht neu auswählbar. Beim Bearbeiten darf die bereits zugeordnete Nummer erhalten bleiben, auch wenn dieses Blatt inzwischen zurückgesandt wurde.

**Beispiel:** Verein A erhält `1001-1050`, Verein B erhält `2001-2050`. Für einen Schützen von Verein A kann auch die Wettkampfadministration keine Nummer aus `2001-2050` wählen.

Wenn keine Nummer erscheint, prüfen Sie den Versand an den richtigen Verein und die Vereinszuordnung in der Wettkampf-Schützenliste. Erfassen Sie keine fremde Nummer als Ersatz. Bei einem Ladefehler des Bestands muss dieser zuerst neu geladen werden.

## 4. Verschrieben oder fehlend melden

Dieses Formular funktioniert ohne Auswahl eines Schützen und ohne Resultaterfassung.

1. Öffnen Sie die Seite **Resultate** und dort die Standblatt-Statusverwaltung.
2. Wählen Sie den Verein. Bei eingeschränkten Erfassenden steht nur der eigene Verein zur Verfügung.
3. Geben Sie die betroffenen Nummern oder Bereiche ein.
4. Wählen Sie **Verschrieben** oder **Fehlend** und speichern Sie den Status.

| Status | Bedeutung |
| --- | --- |
| Verfügbar | Noch keinem Resultat zugeordnet; kann bei einer zulässigen Korrektur wieder freigegeben werden |
| Verbraucht | Einem gespeicherten Resultat zugeordnet; wird durch die Resultaterfassung gesetzt |
| Verschrieben | Das Blatt wurde unbrauchbar beschrieben und darf nicht für ein neues Resultat verwendet werden |
| Fehlend | Eine konkret vergebene Nummer wird ausdrücklich als fehlend gemeldet |

Unverbrauchte, noch nicht zurückgegebene Blätter können über **Verfügbar** korrigiert werden. Bereits verbrauchte oder zurückgesandte Blätter lassen sich über dieses Formular nicht ändern. Eine falsche Resultatzuordnung korrigieren Sie am Resultat, nicht durch eine Statusmeldung. Wird die Nummer am Resultat geändert oder das Resultat gelöscht, wird die bisherige Nummer freigegeben; ein bereits erfasster Rücklauf bleibt erhalten.

## 5. Rückversand kontrollieren und erfassen

**Zuständig:** Wettkampfverwaltung nach Eingang und Kontrolle der Papierblätter. Resultaterfassende melden Verschrieben/Fehlend, buchen aber nicht selbst den Rückversand.

1. Öffnen Sie **Verein → Wettkämpfe → Konfiguration → Abrechnung**.
2. Legen Sie eine Standblatt-Buchung mit der Art **Rückversand** an.
3. Wählen Sie den Verein, von dem die Blätter zurückgekommen sind.
4. Geben Sie die tatsächlich eingegangenen Nummern oder Bereiche an.
5. Prüfen Sie die automatisch berechnete Menge sowie Datum und Notiz und speichern Sie.

**Ergebnis:** Der Rücklauf ist für genau diese Nummern erfasst. Zurückgesandt werden können auch bereits verbrauchte oder verschriebene Blätter. Eine doppelte Rückgabe oder die Rückgabe einer Nummer eines anderen Vereins wird abgelehnt.

Verbrauchte und verschriebene Blätter sind damit nicht automatisch zurückgegeben. Buchen Sie deren Nummern ebenfalls, wenn sie physisch eingegangen sind. Erfassen Sie den Rücklauf verwendeter Blätter vorzugsweise nach der Resultaterfassung, da bereits zurückgesandte Nummern nicht für ein neues Resultat gewählt werden können.

Versandbuchungen mit verbrauchten, verschriebenen, fehlenden oder zurückgesandten Nummern sowie erfasste Rückversandbuchungen sind gegen nachträgliches Ändern und Löschen geschützt. Bei einer falschen geschützten Buchung wenden Sie sich an die Administration; legen Sie keine Gegenbuchung mit fremden Nummern an.

## 6. Statistik und Abschlusskontrolle

1. Öffnen Sie **Statistiken** im Wettkampf.
2. Kontrollieren Sie die Standblatt-Zählwerte und klappen Sie die Nummernlisten auf.
3. Wählen Sie bei Bedarf den **Vereinsfilter**. Er schränkt auch die Nummernlisten und die Standblatt-Zählwerte ein.
4. Prüfen Sie insbesondere **Fehlende Nummern** und **Noch nicht zurückgesandte Nummern**.
5. Vergleichen Sie offene Nummern mit dem Papierbestand und lassen Sie ausstehende Rückgaben klären.

| Auswertung | Was gezählt bzw. aufgelistet wird |
| --- | --- |
| Erhalten | Alle an die ausgewählten Vereine vergebenen Nummern |
| Verbraucht | Nummern mit gespeichertem Resultat |
| Verschrieben | Als verschrieben erfasste Nummern |
| Leer / unbenutzt | Verfügbare Nummern, auch bereits leer zurückgesandte Blätter |
| Fehlend | Ausdrücklich als fehlend erfasste Nummern |
| Noch nicht zurückgesandt | Alle Nummern ohne Rücklauf, unabhängig von ihrem Verbrauchsstatus |

Die offene Rücklaufliste ist **keine zusätzliche Verbrauchskategorie**. Eine verbrauchte Nummer kann gleichzeitig noch nicht zurückgesandt sein. Eine verfügbare, bereits zurückgegebene Nummer zählt weiterhin als leer, aber nicht mehr als offene Rückgabe. Addieren Sie die offene Rücklaufzahl deshalb nicht zu den Statuszahlen.

Die Nummernstatistik erscheint auch dann, wenn noch keine Resultate vorhanden sind. Der Vereinsfilter bietet auch Vereine an, die Blätter erhalten, aber noch keine Resultate erfasst haben. Andere Resultatfilter wie Runde oder Schiesstag ordnen unbenutzte Blätter nicht nachträglich einer Runde oder einem Datum zu.

Wenn **Abrechnung als PDF** für den Wettkampf freigeschaltet ist, übernimmt der Ausdruck die Standblatt-Mengen aus dem vereinsgefilterten Nummernbestand. Er enthält **nur Anzahlen, keine Nummernlisten**. Die Listen für die Nachkontrolle lesen Sie weiterhin in der Anwendung. Die PDF-Aktion wird in der Konfiguration **Abrechnung** separat freigeschaltet.

## Häufige Rückfragen

- **Die Rolle ist vorhanden, aber eine Aktion fehlt:** Kontrollieren Sie den ausgewählten Verein und den betreffenden Wettkampf. Bitten Sie die Wettkampfadministration, die tatsächliche Zuweisung und die Vereinseinschränkung zu prüfen.
- **Eine Nummer wurde bereits verwendet:** Prüfen Sie das vorhandene Resultat. Eine Nummer kann im selben Wettkampf nicht für mehrere Resultate verwendet werden.
- **Der Schütze gehört zum falschen Verein:** Korrigieren Sie zuerst die Schützenliste. Ein Vereinswechsel kann gesperrt sein, solange Resultate Nummern des bisherigen Vereins verwenden.
- **Das Papier ist da, erscheint aber noch als offene Rückgabe:** Die Resultaterfassung oder eine Statusmeldung ersetzt keine Rückversandbuchung. Lassen Sie den tatsächlichen Rücklauf durch die Wettkampfverwaltung buchen.

Weiter: [Wettkampf konfigurieren](competition-settings.md) · [Rollen und Berechtigungen](../getting-started/roles.md) · [Resultate erfassen](../results/entering-results.md) · [Statistiken](../rankings/statistics.md)