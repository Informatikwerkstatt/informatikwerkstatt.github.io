---
layout: slide
permalink: /git-github/
---

# Informatikwerkstatt
__Git & Github__

Note:  Zwei Studierende auffordern,  Protokoll zu der Veranstaltung heute zu führen; Headlines und 1-2 Stichworte für die Folie mitschreiben. (Wichtig ist, dass die Protokolle nicht identisch sind)

---

## Versionskontrolle - Was ist das?

* Software-Entwicklung ist heute _Teamwork_
* Software-Projekte laufen je nach Produkt über mehr als 10 Jahre
* Hohe Komplexität mit der Entwicklungszeit
* nicht-lineare Entwicklung (Patches, Releases, Hotfixes)

<br/>
<div class="fragment">
&rarr; Wie behält man da die Übersicht?<br/>
&rarr; Wie verwaltet man diese verschiedenen Entwicklungsstände?<br/>
&rarr; Wie vermeidet man, dass Entwickler sich gegenseitig stören?
</div>

<br/>
<div class="fragment">
&rArr; Protokolliert zeitliche Veränderung aller Daten
</div>
---

## Repositories

> Verzeichnisorientierte Struktur, die zur Verwaltung der Quellcodes mit zusätzlichen zeitlichen und Benutzerinformationen versieht. Zusätzlich werden verschiedene Tools zur Verwaltung berwendet

---

## Was ist Git?

* Dezentral organisiertes System zur [Versionsverwaltung](https://de.wikipedia.org/wiki/Versionsverwaltung)
* Entstanden 2005 aus der Linux Entwickler-Community
* Gut geeignet für große Projekte mit nicht-linearer Entwicklung

===

### Funktionsweise

* Versionshistorie: Reihe von _Snapshots_ über Dateien eines Projekts
* Bei jedem Speichern legt Git eine Version des Projekts an
    * Sichert Zustand sämtlicher Dateien (= Snapshot)
    * Speichert eine Referenz auf diesen Snapshot

![Git Versionshistorie - https://git-scm.com/figures/18333fig0105-tn.png](https://git-scm.com/figures/18333fig0105-tn.png)

===

### Workflow

* Drei Zustände einer Datei: geändert &rarr; vorgemerkt &rarr; committed! 
* Im _Arbeitsverzeichnis_  werden die Dateien bearbeitet
* Im _Staging-Bereich_ werden Änderungen vorgemerkt, die in die nächste Version übernommen werden sollen
* Das _Repository_ enthält ein komplettes Abbild des Projekts

![Git Lokaler Workflow](images/git-lokal-wf.png#half)

---

## Gitconfig

- Git muss mit einigen persönlichen Daten konfiguriert werden
- Git fügt diese Informationen in jeden Commit ein, um immer eine vollständige Historie zu erzeugen
- Mit folgenden Befehlen wird der Benutzername und EMail-Adresse gesetzt
      
    ```shell
    git config --global user.name "Dein Vor- und Nachname"
    git config --global user.email EMail-Adresse
    ```

- ```git config --global color.ui true``` ermöglicht eine farbige Konsolenausgabe
- ```git config --list``` oder ```git config {key}``` zum Überpüfen der Einstellungen

---

## Projekt erstellen

* ein Projekt entspricht einem Verzeichnis &rarr; somit legt man ein leeres Verzeichnis an
* in dem Verzeichnis werden zwei Dateien angelegt
    * [.gitignore](#/8)<sup>2</sup> 
    * ```readme.md``` in der eine Kurzbeschreibung des Projektes als [Markdown](https://de.wikipedia.org/wiki/Markdown) enthalten ist
* über die [Git Bash](https://gitforwindows.org/)<sup>1</sup> wechselt man in das erstelle Verzeichnis
* dort führt man ```git init``` aus

<small>1: die Git Bash ist auf den Pool Rechner installiert<br/>2: die Datei muss mit einem Punkt beginnen und darf keine Endung haben, hierzu empfiehlt es sich diese Datei in der Git Bash mit dem Befehl [touch](https://de.wikipedia.org/wiki/Touch_%28Unix%29) anzulegen</small>

---

## Genereller Workflow

> In einem Repositry können Dateien und Verzeichnisse erzeugt, verändert und gelöscht werden. Der generelle Workflow sollte möglichst nur kleine Veränderungen enthalten, die dann [committet](#/6/2) werden (siehe Deatils [Git Dokumentation](https://git-scm.com/book/de/v1/Git-Grundlagen-%C3%84nderungen-am-Repository-nachverfolgen))

![Git Qorkflow - https://git-scm.com/figures/18333fig0201-tn.png](https://git-scm.com/figures/18333fig0201-tn.png)

===

### Änderungen vormerken - Git Add

* Neue, veränderte oder gelöschte Dateien müssen _immer_ vorgemerkt werden
* Befehl ```git add``` führt dies durch, aber es müssen die Dateien übergeben werden
    * für allen Dateien reicht ein Punkt
    * es kann ein  [Wildcard](https://de.wikipedia.org/wiki/Wildcard_(Informatik) benutzt werden 
    * Dateiname mit Endung und ggf. Verzeichnispfad
* ```git status``` listet alle vorgemerkten Dateien

```shell
git add .
git add *.java
git add src/mein_java_programm.java
```

&rarr; _Vorgemerkte Dateien sind noch nicht versioniert!_

===

### Änderung festschreiben - Git Commit

* mit dem Befehl ```git commit``` werden die Änderungen festgeschrieben
* dazu öffnet sich ein Editor, in den man eine _Commit-Nachricht_ eingeben muss

  ```shell
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

* mit <kbd>Strg</kbd>+<kbd>X</kbd> gefolgt von einem <kbd>Y</kbd> speichert man den Commit
* mit ```git commit -m "meine Tolle Commit-Nachricht"``` kann man alle Schritte zusammen ausführen

===

### Gute Commit Nachrichten

* sie soll möglichst genau beschreiben, welche Änderungen durchgeführt wurden
* besonders wichtig wenn mehrere Entwickler gleichzeitig an etwas arbeiten
* Commit Nachrichten stellen also eine Art "Kommunikationsmittel" dar.
* **Ziel**: Änderungen möglichst kurz aber trotzdem präzise zu beschreiben um anderen Leuten einen Überblick über gemachte Änderungen zu geben
* [Tipps für eine gute Commit-Nachricht](https://wp-typ.de/entwicklung/gute-git-commits-schreiben/)

===

### @Profi

Um die Historie des Repositories einzusehen und die einzelnen Änderungen der Dateien einzusehen gibt es zwei Kommandos

* [Git Log](https://git-scm.com/docs/git-log) zeigt die gesamte [Commit Historie](https://git-scm.com/book/de/v1/Git-Grundlagen-Die-Commit-Historie-anzeigen) mit den Informationen wie Commit-Nachricht und Benutzer an
* [Git Diff](https://git-scm.com/docs/git-diff) zeigt die [Änderungen zwischen Commits](https://git-scm.com/book/de/v1/Git-Grundlagen-%C3%84nderungen-am-Repository-nachverfolgen#Die-%C3%84nderungen-in-der-Staging-Area-durchsehen) zeilengenau an, normalerweise dem aktuellen noch nicht committeten Stand und dem letzten Commit (Head)

---  

## Gitignore

- Viele Dateien (Cache Dateien, Logs, etc.) müssen nicht versioniert werden
- In der ```.gitignore``` Datei kann man festlegen welche Dateien oder Dateimuster von Git ignoriert werden sollen

    ```shell
    # ignoriert alle Dateien mit der Endung *.log
    *.log
    # ignoriert alle test.txt Dateien in jedem Verzeichnis
    test.txt
    ```

<small>diverse [Gitignore Vorlagen](https://github.com/github/gitignore)</small>

===

### @Profi

Mit hilfe einer [Whitelist](https://de.wikipedia.org/wiki/Wei%C3%9Fe_Liste) kann man in der ```.gitignore``` Dateien nur die Dateien auflisten, die für einen Commit erlaubt sind

```shell
# ignoriert alle Dateien
*.*
# erlaube andere Dateien mit Wildcard
!*.md
!.gitignore
!pom.xml
!*.java
# ignoriere alles Erlaubte in gewissen Verzeichnissen
target/
bin/
```

---

## Let's try

[Git - The simple guide](http://rogerdudler.github.io/git-guide/) durcharbeiten mit folgender Aufgabe

1. Konfiguriere Git mit Deinem vollständigen Namen und EMail Adresse
2. Erstelle ein leeres Repository auf dem Desktop in einem Verzeichnis
3. Erzeuge in diesem Verzeichnis die zwei Dateien ```readme.md``` und eine ```readme.txt``` und füge beiden die gleiche Überschrift z.B. einen beliebigen Projektnamen hinzu
4. Passe die ```.gitignore``` so an, dass alle ```*.txt``` Dateien ignoriert werden
5. erzeuge einen Commit mit den Daten

&rarr; und die Tutoren überprüfen, ob es richtig gemacht wurde

---

## Git Trick & Tips

* [Git Interactive Visualization](http://git-school.github.io/visualizing-git)
* [Git Cheat Sheet](https://services.github.com/on-demand/downloads/de/github-git-cheat-sheet/)
* [Learn Git in 30 Minutes](https://tutorialzine.com/2016/06/learn-git-in-30-minutes)
* **@Profis** [Learning Git Branching](https://learngitbranching.js.org/)

---

## GitHub - Social Coding

> [GitHub](http://github.com) ist die bekannteste und größte Code-Hosting Plattform und stellt Repositorys für Projekte bereit, um zusammen Software zu entwickeln 

- Einfaches Projektmanagement (Issues, Project-Boards)
- viele OpenSource Projekte wie [MySQL](https://github.com/mysql), [Tensorflow](https://github.com/tensorflow), [Android](https://github.com/topics/android)
- Organisation für Gruppenprojekte ([Google](https://github.com/google), [Microsoft](https://github.com/Microsoft), [Facebook](https://github.com/facebook))
- Webseiten mittels [GitHub Pages](https://pages.github.com/)
    - Meine Dissertation [LightJason](https://lightjason.org/)
    - Forschungprojekt [SocialCars](https://socialcars.github.io/)
- um GitHub hat sich ein ganzes System an weiteren Plattformen entwickelt [Gitter](https://gitter.im/), [CircleCI](https://circleci.com/), [Zenodo](https://zenodo.org/)

===

### Github - Local & Remote

![Git Remote Workflow](images/git-remote.png)

---

### SSH - Was hä?

> Die Datenübertragung zwischen GitHub und dem PC erfoglt mittels verschlüsseltem [SSH-Protokoll](https://de.wikipedia.org/wiki/Secure_Shell) mit Hilfe eines [Schlüsselpaares](https://de.wikipedia.org/wiki/Asymmetrisches_Kryptosystem). Der Schlüssel besteht aus einem _öffentlichen_ und einem _privaten_ Teil und __nur__ der __öffentlich Schlüssel__ wird bei GitHub hinterlegt.

1. ```ssh-keygen -t rsa -b 4096 -C "EMail-Adresse"``` generiert einen neues Schlüsselpaar
2. die zwei Dateien, die den Schlüssel ergeben findet man unter ```/c/Users/**Benutzername**/.ssh/```
    * ```id_rsa``` ist der _private Schlüssel_
    * ```id_rsa.pub``` ist der _öffentliche Schlüssel_    

===

### SSH-Key & Github

> Nun muss der Inhalt der Datei ```id_rsa.pub``` (öffentliche Schlüssel) zu Github übertragen werden

1. Mit ```clip < ~/.ssh/id_rsa.pub``` wird der Schlüssel in die Zwischenablage kopiert
2. Dann ruft man in einen GitHub Benutzereinstellung das Menü [SSH and GPG keys](https://github.com/settings/keys) auf
3. Man erzeugt einen [neuen Schlüssel](https://github.com/settings/ssh/new) und fügt den Inhalt aus der Zwischenablage in das Feld _Key_ ein

===

### SSH Verbindung testen

1. ```ssh -T git@github.com``` Versucht eine SSH-Verbindung zu Github aufzubauen
2. Beim ersten Verbindungsaufbau erscheint eine Warnung, die mit **yes** bestätigt werden muss
2. Der Befehl sollte folgende Ausgabe liefern: 

    ```Hi **GitHub Benutzername**! You've successfully authenticated, but GitHub does not provide shell access.```

<small>Bei [Probleme](https://help.github.com/articles/connecting-to-github-with-ssh/) findet sich eine Hilfe bei GitHub</small>

---

## Projekt & Repository

- **Public** Repos sind einsehbar für alle Github Nutzer
- **Private** Repos sind nur für Dich bzw. den Leuten denen du Zugriff erteilst einsehbar
- _Zur Erinnerung:_ In jedem Repo sollten ein [readme.md](#/5) und eine [.gitignore](#/7) Datei vorhanden sein

---

## @Let's try - Mein eigenes Repository

1. bei GitHub [registriert](https://github.com/) _jeder_ bitte einen eigenen Account<sup>1</sup>
    * bei [Problemen](https://services.github.com/on-demand/intro-to-github/create-github-account) die Anleitung anschauen
    * **@Profi:** [Github Student Pack](https://github.com/) Unendlich private Repositorys und andere Developer Tools kostenlos
2. SSH-Schlüssel erstellt und im Github-Account eintragen
3. ein [neues Projekt / Repository](https://help.github.com/articles/creating-a-new-repository/) bei Github anlegen
4. das lokal erstellte Repository vom Desktop anhand der gezeigten Anleitung zu Github übertragen

<small>1: Wir geben eine Liste herum, auf die bitte Euer Name mit den zugehörigen Accountnamen eingetragen wird, damit jeder von Euch Zugang zu den Projekten erhält</small>

---

### Push

> Mit ```git push``` bzw. beim ersten Mal mit ```git push origin master``` werden die Daten aus dem lokalen Repository in das [Remote-Repository](https://help.github.com/articles/pushing-to-a-remote/) hier in den Master-Branch zu GitHub übertragen

**@todo Link zur Branching Slide**

---

### Clone

> Mit ```git clone **Repository URL**``` bzw ```git clone **Repository URL** ***Verzeichnisname**``` kann ein Repository initial geladen werden. Das [Clonen](https://services.github.com/on-demand/github-cli/clone-repo-cli) kopiert das gesamte Repository auf die lokale Festplatte. Jeder Benutzer, der sich ein Repository clont, hat somit eine vollständige Kopie der History. Das Verzeichnis mit allen notwendigen Daten wird automatisch erzeugt

---

### Pull

- `git pull` bringt dein lokales Repository auf den Stand des remote Repositorys
- Verbindet zwei Funktionen:
  - **fetch** : Lädt Änderungen herunter
  - **merge** : Fügt remote Änderungen mit lokalen Änderungen zusammen
- Da bei pull immer ein **merge** Prozess stattfindet, kann es hierbei zu Konflikten kommen

[Dokumentation](https://help.github.com/articles/fetching-a-remote/)

---

## @Let's try

<!-- wir stellen ein Repository in der Infowerkstatt zur Verfügung, in dem Repo ist eine Textdatei mit Namen, jeder clont es sich und trägt seinen Namen ein und pusht es wieder und behebt ggf den Merge Conflict -->

---

## Merge Conflict

Note: Fragen, wie beide Protokolle gemergt werden sollen

- Beim Ändern von Code an denselben Stellen in den selben Dateien unterschiedlicher Branches, tritt bei einem Merge ein Fehler auf (Git kann Änderungen nicht mehr sauber zusammen führen)
- Beim Auftreten eines solchen Fehlers wird der Merge sofort gestoppt
- Fehler muss **manuell** behoben werden
  - Git fügt den betroffenen Dateien Konfliktlösungsmarker hinzu
  - Nach manueller Beseitigung müssen alle betroffenen Dateien wieder per `git add` markiert werden
  - `git commit` ausführen, um den Merge-Commit endgültig abzuschließen

[Dokumentation](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/)

---

## Issue

<!-- was sind Issues, wozu dienen sie -->
- Issues sind eine Möglichkeit um Aufgaben, Verbesserungen oder Bugs zu erfassen
- Issues können bestimmten Personen zugeordnet werden (Aufgabenverteilung)
- Mithilfe von Labels werdeb Issues kategorisiert / organisiertes

[Dokumentation](https://guides.github.com/features/issues/)
  
---

## @Let's try

<!-- jeder erstellt in unserem Testrepo einen Issue und wenn alle Issue da sind, dann bündeln wir diese zu Milestones -->

---

## @Profi - Milestones

- Sammlung von Issues
- Zuordnung von mehreren Issues zu einem spezifischen Feature oder Projekt-Phase
  - Bsp. Beta-Launch, May-Sprint oder UI-Design

---

## @Profi - Branches

- Ein Branch ist eine abgetrennte / isolierte Umgebung, deren Änderungen keine Auswirkungen auf den Master Code haben
  - Ermöglicht parallele Entwicklung an verschiedenen Features während der "Master"-Code unberührt bleibt
  - Raum zum experimentieren
  - **master**-Branch ist der lokale Standard Branch
- `git checkout -b featureX` erstellt einen neuen lokalen Branch mit dem Namen *featureX*
- `git checkout {branch}` wechselt in den angegebenen Branch

[Git Dokumentation](https://git-scm.com/book/de/v1/Git-Branching-Einfaches-Branching-und-Merging)
[Github Flow](https://guides.github.com/introduction/flow/)

---

## @Links

* [Git Bash](https://git-scm.com/downloads)
* [Github Desktop](https://desktop.github.com/)
* [Git Kraken](https://www.gitkraken.com/)
* Online Buch: [Pro Git](https://git-scm.com/book/de/v1) von Scott Chacon and Ben Straub
* [Git-Flow](https://nvie.com/posts/a-successful-git-branching-model/) für komplexere Entwicklungen
