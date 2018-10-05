---
layout: slide
permalink: /git-github/
---

# Informatikwerkstatt
__Git & Github__

<!-- ggf Social Cars Git Folien nutzen -->

Note:  Zwei Studierende auffordern,  Protokoll zu der Veranstaltung heute zu führen; Headlines und 1-2 Stichworte für die Folie mitschreiben. (Wichtig ist, dass die Protokolle nicht identisch sind)

---

## Versionskontrolle - Was ist das und wofür?

* Komplexe Projekte, z.B. Softwareentwicklung, erfordern Zusammenarbeit zwischen vielen Beteiligten
  * Lange Entwicklungszeiten, viele Code-Module und Dokumente
  * Mehrere Entwickler und Teams arbeiten gleichzeitig
  * Nicht-lineare Entwicklung: Viele Unterversionen und Verzweigungen
* Wie behält man da die Übersicht?
* Wie verwaltet man unterschiedliche Versionen und Entwicklungsstände?
* Wie vermeidet man, dass Entwickler sich gegenseitig stören?

&rarr; __Versionskontrollsystem__: Protokolliert Änderungen an Dateien über die Zeit hinweg, so dass man zu jedem Zeitpunkt auf Versionen und Änderungen zugreifen kann

---

## Repositories

<!-- Was ist ein Repository, wofür braucht man es, was ist der Sinn davon -->
* Systeme zur Versionskontrolle nutzen __Repositories__
* = Verwaltetes Verzeichnis zur Speicherung und Beschreibung digitaler Objekte (z.B. Source Code, Dokumentation, ...)
* = Eine Art Datenbank, auf der mehrere Nutzer parallel arbeiten können
* Realisiert Softwarefunktionen zur Versionskontrolle und Zusammenarbeit
* Für jedes digitale Objekt wird die Versionshistorie gespeichert

---

## Was ist Git?

<!-- einmal allgemeines zu Git -->
* Dezentral organisiertes System zur Versionskontrolle
* Entstanden aus der Linux Entwickler-Community
* Schnell, einfaches Design
* Speziell geeignet für große Projekte mit nichtlinearer Entwicklung

===

### Git Funktionsweise

* Versionshistorie: Reihe von "Snapshots" über Dateien eines Projekts
* Bei jedem Speichern legt Git eine Version des Projekts an
    * Sichert Zustand sämtlicher Dateien in diesem Moment (= Snapshot)
    * Speichert eine Referenz auf diesen Snapshot
* Beispiel: Projekt mit drei initialen Dateien A, B und C

![Git Versionshistorie](images/3-git-snapshots.png)

===

### Git lokaler Workflow

* Jeder Nutzer hat lokal
    * Arbeitsverzeichnis: Hier werden die Dateien bearbeitet
    * Staging-Bereich: Hier werden Änderungen vorgemerkt, die in die nächste Version übernommen werden sollen
    * Git Repository: Enthält komplettes Abbild eines Projekts

![Git Lokaler Workflow](images/3-git-lokal-wf.png)
* Drei Zustände einer Datei in Git: geändert, vorgemerkt, committed!

===

### Git verteilte Architektur

* I.d.R.: zusätzliches "remote" Repository, von dem verschiedene Nutzer Ihre Daten kopieren ("klonen") und miteinander synchronisieren  
* Folgende Abbildung zeigt einen Beispiel-Workflow

![Git Remote Workflow](images/3-git-remote.png)

* In der Folge schauen wir uns die bisher im Überblick gezeigten Abläufe im Detail an

---

## Gitconfig

<!-- wie konfiguriert man git -->

- Nach der Installation von Git, sollte Name und E-Mail Adresse hinterlegt werden
```
git config --global user.name "John Doe"
git config --global user.email johndoe.example.com
```
  - Git baut diese Informationen in jeden Commit ein
  - Besonders wichtig beim Einsatz von Plattformen wie Github
  - Durch die `--global` Option werden die Eingaben für alle Repositorys übernommen
- `git config color.ui true` ermöglicht eine farbige Konsolenausgabe
- `git config --list` oder `git config {key}` zum Überpüfen der Einstellungen

---

## Wie initialisiere ich Repository?

<!-- git init erklären -->

---
- `git init` erzeugt im aktuellen Verzeichnis ein *.git* Unterverzeichnis
- Dort werden alle relevanten Daten gespeichert
- Sollten bereits Dateien dort vorhanden sein, werden diese zunächst nicht versioniert

---

## Änderungen vormerken - Git Add

<!-- git add, commit und Commit Nachrichten erklären -->
- `git add {Dateiname}` um Dateien für den nächsten Commit vorzumerken
  - Verschiebt die Dateien vom Arbeitsverzeichnis in den Staging-Bereich
  - `git add README` um eine bestimmte Datei vorzumerken
  - `git add *.java` um mehrere Dateien eines Typs vorzumerken
  - **Achtung**: Die Dateien sind noch nicht versioniert
- `git status` listet alle Dateien auf, die sich im Staging-Bereich befinden

===

## Änderung festschreiben - Git Commit

- `git commit` um die Dateien dauerhaft zu versionieren
  - Änderungen die nicht mit `git add` vorgemerkt wurden, werden nicht nicht committed
  - Nach Eingabe des Befehls öffnet sich ein Text-Editor:

  ```
  # Please enter the commit message for your changes. Lines starting
  # with '#' will be ignored, and an empty message aborts the commit.
  #
  # On branch master
  #
  # Initial commit
  #
  # Changes to be committed:
  #       new file:   helloworld.java
  ```
  
  - In dieses Fenster schreibt man seine Commit-Nachricht
- Mit `git commit -m "faster commit"` kann man sich diesen Schritt sparen
- Git liefert nach Abschluss einige Details über den Commit:
```
[master 7d1739e] faster commit
1 file changed, 1 insertion(+)
```

===

### Commit Nachrichten
- Sie soll möglichst genau beschreiben, welche Änderungen der Entwickler durchgeführt hat
  - Besonders wichtig wenn mehrere Entwickler gleichzeitig an etwas arbeiten
  - Commit Nachrichten stellen also eine Art "Kommunikationsmittel" dar.
- **Ziel**: Änderungen möglichst kurz aber trotzdem präzise zu beschreiben um anderen Leuten einen Überblick über gemachte Änderungen zu geben
- [Tipps für eine gute Commit-Nachricht](https://wp-typ.de/entwicklung/gute-git-commits-schreiben/)

---

### Änderungen überprüfen
- `git diff` ermöglicht eine exakte Auflistung aller Änderungen
  - Zeigt exakt an, welche Zeilen hinzugefügt, geändert oder entfernt wurden
  - Zeigt an, welche Änderungen noch nicht gestaged wurden
- `git diff --staged` zeigt alle Änderungen in der Staging Area an

- `git log` zeigt die bisherige Commit-Historie an
  - `git log -p -2` liefert eine Übersicht über alle Änderungen eines Commits (ähnlich `git diff`)
- `git log --stat` liefert eine Statistik
  - welche Dateien wurden geändert
  - wieviele Zeilen wurden hinzugefügt oder entfernt

---  

### Gitignore

<!-- Dateien ignorieren -->

- Viele Dateien (Cache Dateien, Logs, etc.) sind unnötig zu versionieren
- In der *.gitignore* Datei kann man festlegen welche Dateien oder Dateimuster von Git ignoriert werden sollen
```
*.log (ignoriert alle Dateien mit der Endung *.log*)
test.txt (ignoriert die test.txt-Datei)
```

===

### @Profi
**Tipp**: ignoriere zunächst einmal alle Dateien ` *.*` und füge dann konkret die benötigten Dateien und Dateimuster hinzu:
```
*.* (ignoriert alle Dateien)
!*.md
!.gitignore
!pom.xml
!*.java

# ignoring everything in java build
target/**
bin/**
```

---

## @Let's try

<!-- einmal ein komplettes Repository erstellen lassen und initial etwas committen -->

1. Initialisiere in einem leeren Ordner ein neues Git-Repository
2. Erstelle ebenfalls in diesem Ordner eine neue Java-Datei (z.B. eine Hello-World Datei) mit einem einfachen funktionsfähigen Programm
3. Füge diese Datei dann zur Staging Area hinzu
4. Vergewissere dich durch `git status`, dass die Datei wirklich hinzugefügt wurde
5. Committe die Datei mit einer geeigneten Commit-Nachricht

---

## Branches

<!-- was sind Branches, wofür sind sie gut, wie werden sie erstellt -->

Note: Verweisen auf die zwei Protokollanten

- Ein Branch ist eine abgetrennte / isolierte Umgebung, deren Änderungen keine Auswirkungen auf den Master Code haben
  - Ermöglicht parallele Entwicklung an verschiedenen Features während der "Master"-Code unberührt bleibt
  - Raum zum experimentieren
  - **master**-Branch ist der lokale Standard Branch
- `git checkout -b featureX` erstellt einen neuen lokalen Branch mit dem Namen *featureX*
- `git checkout {branch}` wechselt in den angegebenen Branch

---

## @Let's try

<!-- Branch lokal erstellen, zwischen Branches wechseln -->


---

## Was ist Github?

<!-- was ist Github (Social Coding) -->

---

## Github Account

<!-- Account anlegen -->

===

### SSH - Was hä?

<!-- ssh-keygen einmal erläutern -->

---

## Projekt & Repository

<!-- wie legt man bei Github ein eigenes Projekt / Repository an -->

===

### Local & Remote

<!-- was bedeutet local / remote Repository -->

---

## Clone

<!-- wie holt man sich ein Repository -->

- Ermöglicht eine lokale Kopie eines existierenden Remote-Repositorys
- `git clone [url]` lädt jede einzelne Version jeder Datei in der Historie des Repositorys herunter
- Lokale Kopie befindet sich dann im aktuell ausgewählten Verzeichnis
- Vorgänge während des clone-Vorgangs:
  - Anlegung eines Verzeichnises
  - Initialisierung eines *.git* Verzeichnises (`git init`)
  - Download aller Dateien
  - Checkout einer Arbeitskopie der aktuellen Version
- **Tipp**: Die benötigte URL findet man auf Github im jeweiligen Repository unter dem Punkt *Clone & Download*

---

## @Profi - Clone Recursive

<!-- Submodule kurz anreißen und dazu rekursives Clonen erläutern und einmal den Befehlssyntax zeigen -->

---

## Push & Pull

<!-- wie wird ein locales mit einem remote Repository synchronisiert -->

### Push
- `git push {remote}{branch}` Verschiebt Commits vom lokalen Repository zum remote Repository
  - z.B. `git push origin master` Verschiebt alle austehenden Commits vom lokalen master-Branch in den remote master-Branch (origin)
  - es werden alle notwendigen Commits und internen Objekte (Dateien) übertragen

===

### Pull
- `git pull` bringt dein lokales Repository auf den Stand des remote Repositorys
- Verbindet zwei Funktionen:
  - **fetch** : Lädt Änderungen herunter
  - **merge** : Fügt remote Änderungen mit lokalen Änderungen zusammen
- Da bei pull immer ein **merge** Prozess stattfindet, kann es hierbei zu Konflikten kommen

---

## @Let's try

<!-- einmal erzeugt jeder in seinem eigenen Account ein Repo und pusht das vorhin erstellte Repo dorthin-->

---

## Branches

<!-- Branches bei Github, lokal / remote Verbindung -->

---

## @Let's try

<!-- lokalen Branch erstellen, remote pushen, lokal pullen -->

---

## Merge Conflict

<!-- was ist ein Merge Conflict -->

Note: Fragen, wie beide Protokolle gemergt werden sollen

- Beim Ändern von Code an denselben Stellen in den selben Dateien unterschiedlicher Branches, tritt bei einem Merge ein Fehler auf (Git kann Änderungen nicht mehr sauber zusammen führen)
- Beim Auftreten eines solchen Fehlers wird der Merge sofort gestoppt
- Fehler muss **manuell** behoben werden
  - Git fügt den betroffenen Dateien Konfliktlösungsmarker hinzu
  - Nach manueller Beseitigung müssen alle betroffenen Dateien wieder per `git add` markiert werden
  - `git commit` ausführen, um den Merge-Commit endgültig abzuschließen

---

## @Let's try

<!-- wir stellen ein Repository in der Infowerkstatt zur Verfügung, in dem Repo ist eine Textdatei mit Namen, jeder clont es sich und trägt seinen Namen ein und pusht es wieder und behebt ggf den Merge Conflict -->

---

## Milestones

<!-- was sind Milestones, wozu dienen sie -->

---

## Issue

<!-- was sind Issues, wozu dienen sie -->

---

## @Let's try

<!-- jeder erstellt in unserem Testrepo einen Issue und wenn alle Issue da sind, dann bündeln wir diese zu Milestones -->

---

## Die Handschrift - Styleguide

<!-- was ist ein Styleguide und ein Beispiel von einem unorganisierten Code, siehe Matsim, Jason o.ä.-->

===

### Notationen / Styleguides

<!-- fertige Styleguides / Notationen kurz erläutern -->

* [Ungarische Notation](https://de.wikipedia.org/wiki/Ungarische_Notation)
* [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)

===

### How-to write

<!-- Beispiel aus dem Bachelorprojekt / LightJason wie mein Code aufgebaut ist, Mixtur aus ungarischer Notation mit Google Styleguide -->

---

## @Home

* [Git Bash](https://git-scm.com/downloads)
* [Git Kraken](https://www.gitkraken.com/)

---

## Links

* Online Buch: [Pro Git](https://git-scm.com/book/de/v1) von Scott Chacon and Ben Straub
