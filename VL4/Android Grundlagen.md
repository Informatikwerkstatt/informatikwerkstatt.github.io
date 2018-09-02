---
layout: slide
permalink: /android-grundlagen/
---

# Informatikwerkstatt
__Android Grundlagen__

---

## Android - was ist das?

[Android](https://de.wikipedia.org/wiki/Android_(Betriebssystem) ist ein  Betriebsystem ([Freie Software](https://de.wikipedia.org/wiki/Freie_Software)) für mobile Geräte, das von Google entwickelt und 2008 veröffentlicht wurde

---

## Architektur

![Plattform Architektur](https://developer.android.com/guide/platform/images/android-stack_2x.png)

===

### Muss ich das alles verstehen?

__Nein__ die vollständige Architektur behandeln wir hier nicht, wir behandeln nur den kleinen Ausschnitt der _Activity_ und _Sensoren_.

===

### Wie kann ich dann eine App entwickeln?

* Software wird heute _schichtweise_ aufgebaut
* jede Schicht stellt so genannte [Schnittstellen (API)](https://de.wikipedia.org/wiki/Programmierschnittstelle) bereit
* man muss nur immer die APIs verstehen, die man für seine Anwendung benötigt

&rarr; Als (angehender) Informatiker darf man faul sein und muss lernen, sich auf das _Wesentliche_ zu beschränken. Der Rest kommt mit der Zeit

---

## Android Studio

[Android Studio](https://developer.android.com/studio/) ist eine [Entwicklungsumgebung](https://de.wikipedia.org/wiki/Integrierte_Entwicklungsumgebung) zur Software-Entwicklung.

> Ist ein etwas komplizierterer Editor mit vielen Funktionen, wo man meist viele bunte Knöpfe zum klicken hat

===

### Integrierte Entwicklungsumgebung - IDE

* Basis von Android Studio ist [Intellij](https://www.jetbrains.com/idea/) der Firma [Jetbrains](https://www.jetbrains.com/)
* Intellij ist für generelle Java Entwicklung gedacht und gibt es auch als kostenlose _Community Edition_ zum Download
* Alternative [Eclipse](https://www.eclipse.org/)

===

### Wofür brauche ich das?

Es nimmt einem viel Arbeit ab!

* Organisation des Quellcodes und Resourcen
* Unterstützung bei Befehlseingabe (Intelli-Sense) und Layout des Codes
* Unterstützung beim Umbenennen von Codestrukturen
* Bundeling & Deployment - Erzeugen der fertigen Applikcation
* Enthält das [SDK](https://de.wikipedia.org/wiki/Software_Development_Kit), mit dem wir verschiedene Apps in verschiedenen Versionen und für verschiedene Geräte entwickeln können

---

## @Let's try

<iframe class="video" src="https://player.vimeo.com/video/287431166" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />

---

## Projektstruktur

===

### Resourcen & Berechtigungen

Wir behandeln hier nur kurz die Berechtigungen, im Foliensatz [Sensoren & Resourcen](/sensoren-resourcen/) werden wir genauer darauf eingehen

---

## Tastatur Dein Freund - IntelliSense & Shortcuts

Software-Entwicklung besteht aus viel Text schreiben, so dass es hilfreich ist, vieles per Tastatur zu steuern:

* [Shortcuts](https://de.wikipedia.org/wiki/Tastenkombination) sind Tastenkombinationen für bestimmte Funktionen
* [IntelliSense](https://de.wikipedia.org/wiki/IntelliSense) ist eine Möglichkeit Befehle zu vervollständigen

&rarr; Software-Entwickler haben die wichtigsten Sachen im Kopf und beim Rest wissen sie, wo es steht / zu finden ist

===

### IntelliSense

===

### Shortcuts

---

## Build-Prozess

Mit Hilfe des [Build-Prozess](https://de.wikipedia.org/wiki/Erstellungsprozess) wird aus allen Elementen (Quellcode, Resourcen) ein fertiges Paket erstellt, dass dann als App benutzt werden kann.

![Android Studio Run](images/as_run.png#floatright)
Der Prozess wird mit dem _grünen Button_ in der rechten oberen Fensterecke gestartet

===

### @Profis

* [Continuous Integration](https://de.wikipedia.org/wiki/Kontinuierliche_Integration)
* [Circle CI](https://circleci.com/)
* [Travis CI](https://travis-ci.org/)



---

## @Let's try

---

## Schreib' es hin - Der Logger

> Ein [Logger](https://developer.android.com/reference/android/util/Log) ist ein ```System.out.println``` mit etwas mehr Funktionalität um Ausgaben besser strukturieren zu können unf ggf. in eine Datei o.ä. schreiben zu können

===

### Log erzeugen

Für Lognachrichten gibt es einen _Level_ und einen _Tag_

```java
Log.e( "berechnung", "hier ist eine Division durch null aufgetreten" );
```

===

### Log Levels

nach Schwere sortiert:

* Verbose &rarr; ```Log.v( "tag", "text" )```
* Debug &rarr; ```Log.d( "tag", "text" )```
* Info &rarr; ```Log.i( "tag", "text" )```
* Warn &rarr; ```Log.w( "tag", "text" )```
* Error &rarr; ```Log.e( "tag", "text" )```


===

### Anzeige

<iframe class="video" src="https://player.vimeo.com/video/287641440" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />

---

## @Let's try

---

## Fehlersuche

===

### Breakpoints & debugger

=== 

### Println - Developers Best Friend

---

## @Home

1. Installation von [Android Studio](https://developer.android.com/studio/)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAzNDQ1NDI3NV19
-->