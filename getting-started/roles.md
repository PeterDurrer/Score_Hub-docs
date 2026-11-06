---
title: Rollen und Berechtigungen
---

# Rollen und Berechtigungen

Score_Hub prüft Berechtigungen auf mehreren Ebenen. Eine Rolle für einen Verein ist nicht automatisch dieselbe wie eine Rolle für jeden einzelnen Wettkampf.

| Ebene | Rolle | Typischer Zweck |
| --- | --- | --- |
| System | `admin` | Systemweite Verwaltung und Zugriff auf Administrationsseiten |
| System | `user` | Regulärer, angemeldeter Zugang; weitere Rechte ergeben sich aus Vereins- und Wettkampfrollen |
| Verein | `clubAdmin` | Vereinsdaten und Vereinsbenutzer verwalten |
| Verein | `clubCompetitionAdmin` | Wettkämpfe des Vereins verwalten |
| Verein | `clubResultScorer` | Resultate im Rahmen der Vereinsberechtigungen erfassen |
| Wettkampf | `competitionAdmin` | Einstellungen und Verwaltung eines Wettkampfs |
| Wettkampf | `competitionResultScorer` | Resultate für einen Wettkampf erfassen |
| Wettkampf | `competitionViewer` | Wettkampfinformationen ansehen |

Die tatsächlich möglichen Aktionen hängen zusätzlich von der Konfiguration des Vereins und des Wettkampfs ab. Insbesondere können Resultat-Erfassende auf den eigenen Verein eingeschränkt sein.

## Wenn eine Aktion fehlt

1. Prüfen Sie, ob Sie im richtigen Verein und Wettkampf arbeiten.
2. Fragen Sie die Vereinsadministration, welche Vereinsrolle Ihrem Konto zugewiesen ist.
3. Für eine Rolle innerhalb eines einzelnen Wettkampfs wenden Sie sich an dessen Administration.
4. Systemweite Rollen können nur durch eine Systemadministration verwaltet werden.

Die Rollenbezeichnungen können in der übersetzten Oberfläche abweichend angezeigt werden; die Kennungen in der Tabelle entsprechen den internen Rollen.
