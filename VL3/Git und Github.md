---
layout: slide
permalink: /git-github/
---

# Informatikwerkstatt
__Git & GitHub__

Note:  Zwei Studierende auffordern,  Protokoll zu der Veranstaltung heute zu führen; Headlines und 1-2 Stichworte für die Folie mitschreiben. (Wichtig ist, dass die Protokolle nicht identisch sind)

---

## Versionskontrolle - Was ist das?

* Software-Entwicklung ist heute _Teamwork_
* Software-Projekte laufen je nach Produkt über mehr als 10 Jahre
* Mit der Zeit führt die zu hoher Komplexität
* Nicht-lineare Entwicklung (Patches, Releases, Hotfixes)

<br/>
<div class="fragment">
&rarr; Wie behält man da die Übersicht?<br/>
&rarr; Wie verwaltet man verschiedene Entwicklungsstände?<br/>
&rarr; Wie vermeidet man, dass Entwickler sich gegenseitig stören?
</div>

<br/>
<div class="fragment">
&rArr; Protokollieren der zeitlichen Veränderung aller Daten
</div>
---

## Repositories

> Verzeichnisorientierte Struktur, die zur Verwaltung der Quellcodes zusätzliche zeit- und benutzerbezogeneInformationen enthält. Zusätzlich werden verschiedene Tools zur Verwaltung verwendet

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

## Git config

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

* Ein Projekt entspricht einem Verzeichnis &rarr; zunächst legt man ein leeres Verzeichnis an
* In dem Verzeichnis werden zwei Dateien angelegt
    * [.gitignore](#/8)<sup>1</sup> 
    * ```readme.md``` in der eine Kurzbeschreibung des Projektes als [Markdown](https://de.wikipedia.org/wiki/Markdown) enthalten ist
* Über die [Git Bash Shell](https://gitforwindows.org/)<sup>2</sup> wechselt man in das erstellte Verzeichnis
* Dort führt man ```git init``` aus

<small>1: die Datei muss mit einem Punkt beginnen und darf keine Endung (kein ```.xxx```) haben; Tipp: diese Datei in der Git Bash mit dem Befehl [touch](https://de.wikipedia.org/wiki/Touch_%28Unix%29) anzulegen<br/>2: Git Bash ist auf den Pool Rechnern installiert</small>

---

## Genereller Workflow

> In einem Repository können Dateien und Verzeichnisse erzeugt, verändert und gelöscht werden. Der generelle Workflow sollte möglichst nur kleine Veränderungen enthalten, die dann [committed](#/6/2) werden (Details in [Git Dokumentation](https://git-scm.com/book/de/v1/Git-Grundlagen-%C3%84nderungen-am-Repository-nachverfolgen))

![Git Workflow - https://git-scm.com/figures/18333fig0201-tn.png](https://git-scm.com/figures/18333fig0201-tn.png)

===

### Änderungen vormerken - Git Add

* Neue, veränderte oder gelöschte Dateien müssen _immer_ vorgemerkt werden
* Dies tut der Befehl ```git add```; vorzumerkende Dateien müssen als Argumente übergeben werden
    * alle Dateien vormerken mit Punkt, z.B. ```git add .```
    * [Wildcard](https://de.wikipedia.org/wiki/Wildcard_(Informatik) kann benutzt werden 
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

### Gute Commit Nachrichten schreiben

* Commit Nachrichten dienen der Kommunikation zwischen Entwicklern
* Besonders wichtig, wenn mehrere Entwickler gleichzeitig an etwas arbeiten

* **Ziel**: Änderungen möglichst _kurz_, aber trotzdem _präzise_ beschreiben, um anderen Entwicklern einen Überblick über gemachte Änderungen zu geben
* [Tipps für eine gute Commit-Nachricht](https://wp-typ.de/entwicklung/gute-git-commits-schreiben/)

===

### @Profi

Um die Historie des Repositories einzusehen und die einzelnen Änderungen der Dateien einzusehen, gibt es zwei Kommandos

* [git log](https://git-scm.com/docs/git-log) zeigt die gesamte [Commit-Historie](https://git-scm.com/book/de/v1/Git-Grundlagen-Die-Commit-Historie-anzeigen) mit den Informationen wie Commit-Nachricht und Benutzer an
* [git diff](https://git-scm.com/docs/git-diff) zeigt die [Änderungen zwischen Commits](https://git-scm.com/book/de/v1/Git-Grundlagen-%C3%84nderungen-am-Repository-nachverfolgen#Die-%C3%84nderungen-in-der-Staging-Area-durchsehen) zeilengenau an, normalerweise zwischen dem aktuellen, noch nicht committeten Stand und dem letzten Commit (Head)

---  

## Gitignore

- Viele Dateien (Cache Dateien, Logs, etc.) müssen nicht versioniert werden
- In der ```.gitignore``` Datei kann man Regeln festlegen, welche Dateien oder Dateimuster von Git ignoriert werden sollen

    ```shell
    # ignoriert alle Dateien mit der Endung *.log
    *.log
    # ignoriert alle test.txt Dateien in jedem Verzeichnis
    test.txt
    ```

<small>diverse [Gitignore Vorlagen](https://github.com/github/gitignore)</small>

===

### @Profi

Mit Hilfe einer [Whitelist](https://de.wikipedia.org/wiki/Wei%C3%9Fe_Liste) kann man in der ```.gitignore``` Datei nur die Dateitypen auflisten, die für einen Commit erlaubt sind

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

1. Konfiguriere Git mit Deinem vollständigen Namen und E-Mail Adresse
2. Erstelle ein leeres Repository auf dem Desktop in einem Verzeichnis
3. Erzeuge in diesem Verzeichnis die zwei Dateien ```readme.md``` und eine ```readme.txt``` und füge in beiden die gleiche Überschrift hinzu, z.B. einen beliebigen Projektnamen
4. Passe die ```.gitignore``` so an, dass alle  Dateien mit der Endung ```.txt``` ignoriert werden
5. erzeuge einen Commit mit den Daten

&rarr; ... und die Tutoren überprüfen, ob es richtig gemacht wurde

---

## Git Trick & Tips

* [Git Interactive Visualization](http://git-school.github.io/visualizing-git)
* [Git Cheat Sheet](https://services.github.com/on-demand/downloads/de/github-git-cheat-sheet/)
* [Learn Git in 30 Minutes](https://tutorialzine.com/2016/06/learn-git-in-30-minutes)
* **@Profis** [Learning Git Branching](https://learngitbranching.js.org/)

---

## GitHub - Social Coding

> [GitHub](http://github.com) ist die bekannteste und größte Code-Hosting Plattform und stellt Repositories für Projekte bereit, um gemeinsam Software zu entwickeln 

- Einfaches Projektmanagement (Issues, Project-Boards)
- Genutzt von vielen Open Source Projekten, wie [MySQL](https://github.com/mysql), [Tensorflow](https://github.com/tensorflow), [Android](https://github.com/topics/android)
- Organisation für Gruppenprojekte ([Google](https://github.com/google), [Microsoft](https://github.com/Microsoft), [Facebook](https://github.com/facebook))
- Webseiten mittels [GitHub Pages](https://pages.github.com/)
    - Meine Dissertation [LightJason](https://lightjason.org/)
    - Forschungprojekt [SocialCars](https://socialcars.github.io/)
- Um GitHub hat sich ein ganzes System weiterer Plattformen entwickelt [Gitter](https://gitter.im/), [CircleCI](https://circleci.com/), [Zenodo](https://zenodo.org/)

===

### Github - Local & Remote

![Git Remote Workflow](images/git-remote.png)

---

### SSH ???

> Die Datenübertragung zwischen GitHub und dem PC erfolgt mittels verschlüsseltem [SSH-Protokoll](https://de.wikipedia.org/wiki/Secure_Shell) mit Hilfe eines [Schlüsselpaares](https://de.wikipedia.org/wiki/Asymmetrisches_Kryptosystem). Der Schlüssel besteht aus einem _öffentlichen_ und einem _privaten_ Teil; __nur__ der __öffentliche Schlüssel__ wird bei GitHub hinterlegt.

1. ```ssh-keygen -t rsa -b 4096 -C "EMail-Adresse"``` generiert ein neues Schlüsselpaar
2. die zwei Dateien, die den Schlüssel ergeben, findet man unter ```/c/Users/**Benutzername**/.ssh/```
    * ```id_rsa``` ist der _private Schlüssel_
    * ```id_rsa.pub``` ist der _öffentliche Schlüssel_    

===

### SSH-Key & Github

> Nun muss der Inhalt der Datei ```id_rsa.pub``` (öffentliche Schlüssel) zu GitHub übertragen werden

1. Mit ```clip < ~/.ssh/id_rsa.pub``` wird der Schlüssel in die Zwischenablage kopiert
2. Dann ruft man in der GitHub Benutzereinstellung das Menü [SSH and GPG keys](https://github.com/settings/keys) auf
3. Man erzeugt einen [neuen Schlüssel](https://github.com/settings/ssh/new) und fügt den Inhalt aus der Zwischenablage in das Feld _Key_ ein

===

### SSH Verbindung testen

1. ```ssh -T git@github.com``` versucht, eine SSH-Verbindung zu Github aufzubauen
2. Beim ersten Verbindungsaufbau erscheint eine Warnung, die mit **yes** bestätigt werden muss
2. Der Befehl sollte folgende Ausgabe liefern: 

    ```Hi **GitHub Benutzername**! You've successfully authenticated, but GitHub does not provide shell access.```

<small>Bei [Problemen](https://help.github.com/articles/connecting-to-github-with-ssh/) findet sich eine Hilfe bei GitHub</small>

---

## Projekt & Repository

- **Public** Repos sind einsehbar für alle Github Nutzer
- **Private** Repos sind nur für Dich und für die Leute einsehbar, denen du Zugriff erteilst
- _Zur Erinnerung:_ In jedem Repo sollten ein [readme.md](#/5) und eine [.gitignore](#/7) Datei vorhanden sein

---

## @Let's try - Mein eigenes Repository

1. Bei GitHub [registriert](https://github.com/) _jeder_ bitte einen eigenen Account<sup>1</sup>
    * bei [Problemen](https://services.github.com/on-demand/intro-to-github/create-github-account) die Anleitung anschauen
    * **@Profi:** [Github Student Pack](https://github.com/): Beliebig viele private Repositories und andere Developer Tools kostenlos
2. Erstelle einen SSH-Schlüssel und trage ihn im GitHub-Account ein
3. Lege ein [neues Projekt / Repository](https://help.github.com/articles/creating-a-new-repository/) bei GitHub an
4. Übertrage das lokal erstellte Repository vom Desktop anhand der obigen Anleitung zu GitHub
5. Prüfe im GitHub Web Interface, ob alle Daten korrekt übertragen wurden

<small>1: Wir geben eine Liste herum, auf die jeder von Euch bitte Euren Namen mit den zugehörigen GitHub-Accountnamen einträgt; damit erhaltet ihr Zugang zu den Projekten</small>

Note: Tutoren sollen Studierende direkt via Laptop / PC in das Team "Studierende" eintragen

---

### Git Push

> Mit ```git push``` bzw. beim ersten Mal mit ```git push origin master``` werden die Daten aus dem lokalen Repository in das GitHub [Remote Repository](https://help.github.com/articles/pushing-to-a-remote/) (siehe [Darstellung](#/10/1)) übertragen.
```master``` bedeutet, dass die Daten im Master-[Branch] gespeichert werden

---

### Git Clone

> Das [Clonen](https://services.github.com/on-demand/github-cli/clone-repo-cli) kopiert das gesamte (Remote) Repository auf die lokale Festplatte. Jeder Benutzer, der sich ein Repository clont, hat somit eine vollständige Kopie der Historie. Das Verzeichnis mit allen notwendigen Daten wird automatisch erzeugt

```shell
# Clonen mit automatischem Erzeugen des Verzeichnis
git clone **Repository URL**

# Clonen in ein definiertes Verzeichnis
git clone **Repository URL** **Verzeichnisname**
```

---

### Git Pull, Fetch & Merge

> Um Änderungen (von anderen Nutzern) aus dem Remote Repository in das lokale Repository zu übertragen, wird ```git pull``` verwendet,  eine [Kurzform](https://help.github.com/articles/fetching-a-remote/) von ```git fetch``` und ```git merge```. [Fetch](https://git-scm.com/docs/git-fetch) holt die Änderungen, ohne sie einzufügen; [Merge](https://git-scm.com/docs/git-merge) fügt dann die Änderungen ein, dabei können Konflikte auftreten

---

## @Let's try

1. Im letzten [Let's try](#/13) wurde das Repository zu GitHub gepusht
2. Lösche nun das lokale Verzeichnis auf dem Desktop
3. Clone das Repository ohne Angabe eines Verzeichnisses
4. Clone das Repository ein zweites Mal mit Angabe eines beliebigen Verzeichnisnamens, so dass  zwei Verzeichnisse auf dem Desktop liegen
5. Mache in einem Verzeichnis eine Änderung, z.B. neue Datei einfügen oder Datei verändern 
6. Pushe diese Änderung zu GitHub; prüfe, ob die Änderung gemacht wurde
7. Nun mache in dem zweiten Repository einen Pull; prüfe, ob beide Repositories wieder den gleichen Stand haben

---

## @Let's try - Für Alle

1. Clont das [Namen-Repository](https://github.com/Informatikwerkstatt/Namen) der Informatikwerkstatt
2. Ergänzt in der ```readme.md``` Eure(n) Vornamen 
3. Pusht nun die Änderung

&rArr; Was stellt Ihr fest?

Note: Fragen, wie beide Protokolle gemergt werden sollen und Studis hinweisen keine persönlichen Daten einzutragen

---

## Merge-Konflikt

> Ein [Merge-Konflikt](https://git-scm.com/book/de/v1/Git-Branching-Einfaches-Branching-und-Merging#Grundlegende-Merge-Konflikte) tritt auf, wenn zwischen Eurem letzten _Pull_ und dem durchgeführten _Push_ jemand anderes seine Änderungen gepusht hat. Ihr müsst somit zuerst einen _Pull_ machen, den [Konflikt ggf. manuell beheben](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/), dann _committen_ und _pushen_

&rArr; Bitte beseitigt alle die auftretenden Konflikte und pusht die Namensliste, so dass wir am Ende alle Namen im Repository haben

---

## Issues

> In jedem Projekt treten [Fehler (Issues)](https://guides.github.com/features/issues/) auf. Mit Hilfe des Issue-Trackers können die Arbeiten zu Behebung organisiert werden. Man kann Issues vereinfacht als _Arbeitsaufgaben / Todos_ sehen. Innerhalb der Fehlerbeschreibung kann eine Diskussion statt finden. Weiterhin können Issues einzelnen Personen zugeteilt werden, die sich dann um die Lösung kümmern.

__@Let's try:__ &rArr; Jede(r) erfasst bitte einen Issue mit einem einfachen Kommentar in dem [Namen-Repository](https://github.com/Informatikwerkstatt/Namen/issues)

<small>**@Profis:** Man kann durch eine Commit-Nachricht einen Issue [automatisch schließen](https://help.github.com/articles/closing-issues-using-keywords/) und weiss damit, welche Änderungen den Fehler behoben haben</small>

===

## @Profi - Milestones

> In einem komplexen Software-Projekt müssen meist zu gewissen Zeiten bestimmte Features fertig realisiert sein. Diese Features sind meist mit Issues verbunden. Um diesen Zusammenhang darzustellen, gibt es das Konzept von [Milestones](https://help.github.com/articles/about-milestones/). Ein Milestone ist eine Liste von Issues, die bis zu einem festen Datum abgearbeitet sein müssen. Diese Organisation wird in der _agilen Software-Entwicklung_ nach [Scrum](https://de.wikipedia.org/wiki/Scrum) verwendet

---

## @Profi - Branches

> Ein [Branch](https://git-scm.com/book/de/v1/Git-Branching-Branching-Workflows) ist eine abgetrennte / isolierte Umgebung, deren Änderungen keine Auswirkungen auf den Master-Code haben

- Ermöglicht parallele Entwicklung an verschiedenen Features, während der Master-Code unberührt bleibt
- Raum zum Experimentieren für die Entwickler
- Um Branches anzulegen und zwischen ihnen zu wechseln, benutzt man das Kommando ```git checkout```
- Unterschiedliche Branches können ineinander [gemergt](https://git-scm.com/book/de/v1/Git-Branching-Einfaches-Branching-und-Merging) werden ähnlich wie bei der Konfliktbeseitigung
- Wenn so genannte [Forks](https://guides.github.com/activities/forking/) eines Repositories existieren, können mit Hilfe von [Pull Requests](https://help.github.com/articles/about-pull-requests/) und dem [GitHub Flow](https://guides.github.com/introduction/flow/) die verschiedenen Stände konsistent zusammengeführt werden

---

## @Links

* [Git Bash](https://git-scm.com/downloads)
* [Github Desktop](https://desktop.github.com/)
* [Git Kraken](https://www.gitkraken.com/)
* [Git Referenz](https://git-scm.com/docs)
* [Pro Git](https://git-scm.com/book/de/v2) Online-Buch
* [Git-Flow](https://nvie.com/posts/a-successful-git-branching-model/) für komplexere Entwicklungen
