---
layout: slide
permalink: /android-grundlagen/
---

# Informatikwerkstatt
__Android Grundlagen__

---

## Android - was ist das?

[Android](https://de.wikipedia.org/wiki/Android_%28Betriebssystem%29) ist ein  Betriebsystem ([Freie Software](https://de.wikipedia.org/wiki/Freie_Software)) für mobile Geräte, das von Google entwickelt und 2008 veröffentlicht wurde

---

## Architektur

![Plattform Architektur - Quelle https://developer.android.com/guide/platform/](https://developer.android.com/guide/platform/images/android-stack_2x.png)

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

Ein [Android Projekt](https://developer.android.com/studio/projects/) besteh aus mehreren Verzeichnis mit mehreren Dateien.

<div class="flex">
<div><ul><li><strong>app</strong> Hauptverzeichnis mit alen Daten</li><li><strong>Gradle Scripts</strong> ein Verzeichnnis um mit dem Build Tools [Gradle](https://gradle.org/) die App zu compilieren und zu bundlen</li><li><strong>manifests</strong> das [Manifest](#/5/1), d.h. die Konfiguration, des Projektes</li><li><strong>java</strong> enthält alle Quellcodedateien, einmal den Quellcode der App und den Code der [Unit-Tests](https://de.wikipedia.org/wiki/Modultest)</li><li><strong>res</strong> ein Verzeichnis mit allen weiteren Komponenten der App wie z.B. Bilder, Icons, Layout der [Activities (Fenster)](/threads-activities-intent/#/3), etc.</li></ul>
</div>
<div>
![Android Projekt Struktur - Quelle https://developer.android.com/studio/projects/](https://developer.android.com/images/tools/projectview-p1.png#floatright)
</div>
</div>

===

### Manifest

> Das [Android Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro) ist eine [XML-Datei](https://de.wikipedia.org/wiki/Extensible_Markup_Language) in der die Konfiguration der App, wie Start-[Activity](/threads-activities-intent/#/3) oder auch [Berechtigungen](/sensoren-resourcen/#/2) für Sensoren hinterlegt werden
 
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="de.tu_clausthal.in.informatikwerkstatt.helloworld">
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity
            android:name=".MainActivity"
            android:label="@string/app_name"
            android:theme="@style/AppTheme.NoActionBar">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

===

### Unit-Testing

> [Unit-Testing](https://de.wikipedia.org/wiki/Modultest), auch _Modultest_ oder _Komponententest_ ist eine Möglichtkeit einzelne Routinen auf ihre korrekte Funktionsweise zu überprüfen. In Java nutzt man dafür das [JUnit](https://junit.org/)-Framework, für [App-Testing](https://developer.android.com/studio/test/) gibt es weitere Möglichkeiten. Testing erhöht die Qualität der Software.

```java
import org.junit.Test;
import org.junit.Assert;

public final class TestCBeispiel
{
    @Test
    public void addition_isCorrect()
    {
        Assert.assertEquals( 4, 2 + 2 );
    }
}
```

===

### Resourcen & Berechtigungen<sup>1</sup>

<small>1: Wir behandeln hier nur kurz die Berechtigungen, im Foliensatz [Sensoren & Resourcen](/sensoren-resourcen/) werden wir genauer darauf eingehen</small>

---

## Tastatur Dein Freund

Software-Entwicklung besteht aus viel Text schreiben, so dass es hilfreich ist, vieles per Tastatur zu steuern:

* [Shortcuts](https://de.wikipedia.org/wiki/Tastenkombination) sind Tastenkombinationen für bestimmte Funktionen
* [IntelliSense](https://de.wikipedia.org/wiki/IntelliSense) ist eine Möglichkeit Befehle zu vervollständigen

&rarr; Software-Entwickler haben die wichtigsten Sachen im Kopf und beim Rest wissen sie, wo es steht / zu finden ist

===

### IntelliSense

> IntelliSense ist die _automatische Befehlsergänzung_ durch die IDE

===

### Shortcuts

> Shortcuts sind Tastenkürzel, über die man wichtige Befehle ohne Klicken ausführen kann

===

### Shortcuts - eine Auswahl

| Kommando              | Shortcut  |
|-----------------------|----------:|
| Klasse finden         | <kbd>Control</kbd>+<kbd>N</kbd> |
| Suchen                | <kbd>Control</kbd>+<kbd>F</kbd> |
| Ersetzen              | <kbd>Control</kbd>+<kbd>R</kbd> |
| Optimiere Imports     | <kbd>Control</kbd>+<kbd>Alt</kbd>+<kbd>O</kbd> |
| Reformat code	        | <kbd>Control</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd> |	
| Quick-Fix<sup>1<sup>  | <kbd>Alt</kbd>+<kbd>Enter</kbd> |
| Basis Code-Ergänzung  | <kbd>Control</kbd>+<kbd>Space</kbd> |
| Smarte Code-Ergänzung | <kbd>Control</kbd>+<kbd>Shift</kbd>+<kbd>Space</kbd> |
| Erzeugen & Ausführen  | <kbd>Shift</kbd>+<kbd>F10</kbd> |

<small>1: kann benutzt werden, wenn ein Befehl mit einer <span style="text-decoration: underline wavy red;">roten Linie</span> unterstrichen wurde</small>
<br/>
<small>[alle Shortcuts](https://developer.android.com/studio/intro/keyboard-shortcuts)</small>

---

## Build-Prozess

Mit Hilfe des [Build-Prozess](https://de.wikipedia.org/wiki/Erstellungsprozess) wird aus allen Elementen (Quellcode, Resourcen) ein fertiges Paket erstellt, dass dann als App benutzt werden kann.

![Android Studio Run](images/as_run.png#floatright)
Der Prozess wird mit dem _grünen Button_ in der rechten oberen Fensterecke gestartet

===

### @Profis

[Testing](#/5/2) und [Build-Prozess](#/7) können mit Hilfe von [Continuous Integration](https://de.wikipedia.org/wiki/Kontinuierliche_Integration) automatisiert werden. Dazu gibt es mehrere Cloud-Plattformen, die direkt mit [Github](/git-github/) verbunden werden können. Somit kann der gesamte Prozess z.B. bei einem _Git Push_ automatisch ausgeführt werden und jeden Tag ein [Nightly Build](https://de.wikipedia.org/wiki/Nightly_Build) aus dem aktuellen Entwicklungsstand erzeugt werden.
 
* [Circle CI](https://circleci.com/)
* [Travis CI](https://travis-ci.org/)

---

## APK - Android Application Package

> Ein [Android Application Package](https://en.wikipedia.org/wiki/Android_application_package), kurz _APK_, ist eine Datei, die das gesamte Programm in Binärform mit allen abhängigen Resourcen enthält. Zusätzlich ist ein APK noch [digital signiert](https://de.wikipedia.org/wiki/Digitale_Signatur), so dass der Urheber validierbar ist

===

### Erzeugen & Installation eines APK 

Nachdem das APK erzeugt wurde, wird es auf das Tablet per USB Dateifreigabe kopiert und kann mit dem Android Dateimanager installiert werden

<iframe class="video" src="https://player.vimeo.com/video/292676865" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />

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


| Log Level | Source Code |
|-----------|:-----------:|
| Verbose   | ```Log.v( "tag", "text" )``` |
| Debug     | ```Log.d( "tag", "text" )``` |
| Info      | ```Log.i( "tag", "text" )``` |
| Warn      | ```Log.w( "tag", "text" )``` |
| Error     | ```Log.e( "tag", "text" )``` |


===

### Logger-Anzeige

<iframe class="video" src="https://player.vimeo.com/video/287641440" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />

---

## Fehlersuche

===

### Breakpoints & Debugger

> Ein [Debugger](https://de.wikipedia.org/wiki/Debugger) ist ein Programm mit dessen Hilfe man ein Programm bei der Ausführung überwachen kann, um den realen Programmablauf zu analysieren. Ein [Breakpoint](https://de.wikipedia.org/wiki/Haltepunkt_%28Programmierung%29) ist eine markierte Stelle im Programm, an der der Debugger das Programm anhält, so dass man den aktuellen Zustand des Speichers / Variablenbelegung anschauen kann

---

## @Übung

1. Ergänzt die Hellow-World App um den Logger
2. Probiert die verschiedenen _Log Level_ aus
3. Überprüft die Log Nachrichten auf dem PC und den Tablet

&rArr; Wozu könnten die verschiedenen Log Levels sinnvoll sein?

===

### Erweiterungen

1. Implementiere weitere Variablen Zuweisungen und kleine Berechnungen
3. Setze Breakpoints und überprüfe mit Hilfe des Debuggers die Belegung der Variablen
4. Implementiere einen Fehler, so dass eine [Exception](/java-grundlagen/#/19) geworfen wird und probiere aus, wie man diesen Fehler mittels Brakpoints finden kann

&rArr; Was ist ein sinnvolles Vorgehen, um mit Breakpoints zu arbeiten?

---

## @Home

<div class="flex">
<div><ul><li>[Android Studio Download](https://developer.android.com/studio/)</li>
<li>Je nach Gerät muss ein anderes SDK installiert werden</li>
<li>Manche Geräte werden nicht von Android Studio erkannt, hierzu ist es hilfreich ```MTP``` oder ```PTP``` auszuprobieren</li></ul></div>
<div>
![USB Verbindung](images/usb.jpg#threequarter)
</div>
</div>

