---
layout: slide
permalink: /java-grundlagen/
---

# Informatikwerkstatt
__Java Grundlagen__

---

## Sie sprechen Java?
<!-- Allgemeine Infos zu Java -->
* Objektorientierte Programmiersprache
* Seit 1995
* Plattformunabhängig
	* Java Programme laufen auf verschiedenen Betriebssystemen  (Windows, Mac, Unix, Android)
* Java Software enthalten in Oracle's Standard Edition Java Development Kit [(Java SE JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html)
* Aktuelle Version: [Java 11](http://jdk.java.net/11/)
* Die Java Software ist auf den Pool-Rechnern installiert

===

### Hello-World: Mein erstes Java-Programm

- Ein [Hello-World-Programm](https://de.wikipedia.org/wiki/Hallo-Welt-Programm) ist ein Minimalbeispiel für ein Programm in einer Programmiersprache
- Das folgende Java-Programm gibt die Zeichenkette "Hello World" auf der Konsole aus.

```java
public class HelloWorld
{
	public static void main( String[] p_args )
	{
		System.out.println( "Hello, World" );
	}
}
```

===

### Java Standalone am Rechner
<!-- eine Subfolie für Java-Standalone am Rechner (Java Runtime) 
--> 
![](http://winf.in.tu-clausthal.de/jpm/infws/img/java-process.png)<!-- todo: agree on destination  in github --> 
 
 - Java Compiler:  Befehl `javac` 
	 - Dienstprogramm, Teil der Java Software
	 - Übersetzt Java Programm in binäres bytecode-Format (Endung `.class`)
 - Java Virtual Machine (JVM): Befehl `java`
	 - Laufzeitumgebung für Java
	 - Portabilität durch eine JVM pro Plattform (Betriebssystem)

===

### Java auf Android-Endgeräten
<!-- eine Subfolie für Java bei Android (Achtung die Infos auf Folien vom letzten Jahr stimmen nicht mehr Dalvik VM wird bei Android nicht mehr benutzt
JPM: Ich würde das eher am Anfang der Android-Intro machen. Hier eher die allgemeine Abbildung, die den Cross-Platform Charakter von Java illustriert, s.u. -->

 - Android: Betriebssystem für mobile Endgeräte
 - Eigene JVM für Android, siehe Vorlesung 4!
  ![](http://winf.in.tu-clausthal.de/jpm/infws/img/java-cross-pf.png)

---

## Quellcode, Binärcode, Apps ...??
 <!-- Übersetzungsvorgang, compilieren + Bundling 
 @Phil: Gehört Bundling nicht eher ins Android Kapitel?-->

 - **Quellcode**: Textbasierte Darstellung eines Programms
	 - z.B. `.java` Datei, erstellt mit Texteditor (z.B. Visual Studio Code)
	 - einzelne Zeichen als Bitfolgen gespeichert, standardisierte Kodierung (z.B. UTF-8)
	 - Textdateien können nur textuelle Information enthalten
 - **Binärcode**: Ausführbares Programm als Bytefolge gespeichert, z.B. `.class` Datei
	 - Binärdateien sind nicht für den Menschen lesbar
	 - werden von Programmen (z.B. Java Compiler `javac`) verarbeitet / interpretiert
 - **App**: Ein Programm, das vom Nutzer aufgerufen und verwendet werden kann (z.B. Google Maps)

---

## Kommandozeile - tippen statt clicken!

Die [Kommandozeile](https://de.wikipedia.org/wiki/Kommandozeile) ist eine Anwendung, um mittels Tastatureingabe Befehle/Programme auszuführen. 
Wir nutzen sie zum
- manuellen  Compilieren einfacher Programmbeispiele
- Starten einfacher Beispiele
- Verstehen des Prozesses des Compilierens und der Ausführung von Javaprogrammen

Werkzeug unter Windows: *Eingabeaufforderung*

===

### Kommandozeilentool unter Windows: Eingabeaufforderung
 1. Linksclick auf Windows-Symbol
 2. In Windows-Suche `cmd` eingeben (+ Return-Taste)
 3. Linksclick auf angezeigtes `cmd`-Symbol
 
![](http://winf.in.tu-clausthal.de/jpm/infws/img/1_cmd.png)

===
### Befehle der Eingabeaufforderung
<!-- Ausgewählte Befehle der Windows Commandline, navigieren in Verzeichnissen & Verzeichnislisting -->
 - `help` listet alle Befehle auf
 - `dir` listet Inhalt des aktuellen Verzeichnisses
 - `cd [Laufwerk:][Pfad]`wechselt Laufwerk / Verzeichnis, z.B. 
	 - `cd c:\Users\jpm\Development`
	 - `cd Development` wechselt in Unterverzeichnis `Development` des aktuellen Verzeichnisses, falls dieses existiert 
	- `cd \` wechselt ins Wurzelverzeichnis
	- `cd ..` wechselt in das übergeordnete Verzeichnis
- Befehl mit der Option `/?` starten, um genauere Infos zu bekommen! 
	- z.B.`cd /?` liefert Infos zum Befehl `cd`
- `ren [Laufwerk:][Pfad]Dateiname1 Dateiname2` benennt Datei mit Namen `Dateiname1` in `Dateiname2` um
- `del Dateiname` löscht die Datei mit Namen `Dateiname`, wenn diese Datei existiert

 ===
### Compilieren des Quellcodes

- Übersetzen des geschriebenen Java-Quellcodes in _Maschinensprache_ (meistens Binärcode)
- Eingabe in Java: 
```shell
javac HelloWorld.java
```

- Damit die Datei `javac.exe` gefunden wird, müssen die Umgebungsvariablen `%JAVA_HOME%` und `%PATH%` entsprehend gesetzt sein. [Details siehe z.B. hier](https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-microsoft-windows-platforms.htm).

===

### Ausführen des Programms

```shell
java HelloWorld
```
Und hier das ganze im Video:

<iframe class="video" src="https://player.vimeo.com/video/287916699" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />

---

## @Let's try

1. Starte _Visual Studio Code_
2. Erstelle leere Datei mit dem Namen ```HelloWorld.java```
3. Kopiere oder schreibe den Beispielcode des Hello-World-Programms __exakt, wie angegegben,__ in die Datei
4. Speichere die Datei auf dem Desktop
5. Öffne die _Eingabeaufforderung_
6. Schau mittels ```dir``` wo der Desktop ist
7. Wechsel mit ```cd``` auf den Desktop
8. Compiliere das Programm
9. Führe das Programm aus

---

## Aufbau eines Java-Programms
<!-- wie ist der allgemeine Aufbau eines Java Programs, Stichwort Klasse, Stichwork main, insbesondere Parameter erklären -->
- Betrachten wir noch einmal unser HelloWorld-Programms
```java
public class HelloWorld
{
	public static void main( String[] p_args )
	{
		// Ausgabe 
		System.out.println( "Hello, World" );
	}
}
```
 - Quelldatei enthält Klasse HelloWorld 
	 - *Achtung*: Groß-/Kleinschreibung wird in Java generell unterschieden!
 - Verhalten einer Klasse wird durch Methoden beschrieben
 - Die `HelloWorld` Klasse hat eine Methode ```main``` 
- In der Folge erfahren wir mehr über Klassen und Ihren Aufbau
===
### Klassen 
	
- Zentrale Einheit der objektorientierten Programmierung (s. VL2). 
- Programmcode ist in Klassen organisiert
- Klasse hat Namen (z.B. HelloWorld)
- Konvention: Name der Klasse = Name der Quelldatei, die die Klasse enthält
===
### Methoden
- Strukturieren den Code einer Klasse
- Methode beschrieben durch
	- Rückgabewert (`void` = Methode gibt keinen Wert zurück)
	- Name (`main`)
	- Eingabeparameter (optional), beschrieben durch 
		- Typ, z.B. `String[]` bezeichnet Liste (Array)  von Zeichenketten
		- Name `p_args` 
	- Rumpf mit Anweisungen, in `{ ... }`eingefasst
- Methoden und Klassen können außerdem sog. Modifikatoren haben (z.B. `public`, oder `public static` (siehe VL2)

---

## Java Schlüsselwörter

Java besitzt [50 reservierte Schlüsselwörter](https://en.wikipedia.org/wiki/List_of_Java_keywords), die in der Sprachdefinition festgelegt sind.

* Sie definieren den Grundwortschatz der Programmiersprache, grundlegende Befehle
* Im HelloWorld-Programm haben wir bereits einige davon kennen gelernt: `public`, `class`, `static`, `void`
* Schlüsselwörter dürfen nicht als Variablen-, Funktions-, Methoden-, Klassennamen benutzt werden

---

## Datentypen
<!-- Basisdatentypen, Text, Zahl, Boxing/Unboxing des Compilers -->
- Alle Daten, die in Java-Programmen verarbeitet werden, müssen wohldefinierten Datentyp haben
- jeder Datentyp hat einen Namen und definiert einen Wertebereich
- Java enthält vordefinierte Basisdatentypen, z.B.: 

|Datentyp|Wertebereich|
|--|--|
| int| Ganze Zahl, 32 bit Länge | 
| double| Fliesskommazahl mit doppelter Genauigkeit | 
| boolean|`true` und `false` |
| char | Einzelne Zeichen, 16-bit Länge. z.B. `'a'` |
| String| Zeichenkette, max. $2^{31}-1$ Zeichen. z.B. `"Hello World!"` |

---

## Variablen
<!-- Deklaration von Variablen, Nutzung von Variablen, Keywort "final" -->
 
- Benannter Bereich im Speicher, dem in einem Programm ein Wert zugewiesen werden kann 
- Mithilfe der Datentypen können wir dem Java-Compiler genau beschreiben, welches erlaubte Wert einer Variable sind 
- Wir erweitern unser Hallo World-Programm
``` java
public class HelloWorld
{
	// Variablendeklaration mit Initialisierung
	private final String message = "Hello World";
	public static void main( String[] p_args )
	{
	// Variable wird Methode als Parameter übergeben
		System.out.println( message );
	}
}
```

===

### Zuweisung
<!-- Zuweisungen von Variablen, Beachtung von final -->
- Variable muss vor Verwendung deklariert werden
```  java
	private final String message = "Hello World";
```
- Mit dem Zuweisungsoperator `=` kann einer Variable ein Wert zugewiesen werden
- Wichtig: Initiale Wertzuweisung vor Verwendung einer Variable! 
- Modifikator final gibt an, dass die Variable nach der Initialisierung nicht mehr verändert werden darf
- Mithilfe von final lassen sich in Java Konstanten definieren
---

## Typenumwandlung / Casting

<!-- Was bedeutet Casting, wozu wird es benötigt, was ist der Sinn davon, was sind die Nachteile davon, insbesondere parsen von String als numerischer Wert -->

---

## @Let's try

<!-- Codebeispiel Main-Programm, Variablen deklarieren, Variablen setzen, Variablen mit Println ausgeben -->

---

## Ja / Nein / Vielleicht - If-Else

<!-- Aufbau von If-Else, Dangling Else -->

===

### Ternärer Operator

<!-- was ist das, wann nutzt man if, wann den ternären Operator -->

---

## Größer, Kleiner, Gleich - Vergleiche und Operatoren

<!-- Operatoren erklären, Operatoren Precedence erklären -->

---

## @Let's try

<!-- Codebeispiel mit Variablen und If-Else -->

---

## Arrays

<!-- was sind Arrays, wozu sind sie gut, was gibt es für Beschränkungen -->

===

### Array Initialisierung

<!-- verschiedene Arten für die Initialisierung von Arrays -->

===

### Collections

<!-- was ist es, kurz fassen und auf Listen & Sets beschränken -->

---

## Wieder und wieder und wieder... - Schleifen

<!-- for, while und do-while Schleifen, wann benutzt man was anhand eines einfachen zu erklärenden Beispiels -->

===

### For-Each

<!-- was ist for-each, wann ist es sinnvoll >

---

## Infinity Loop

<!-- while true, was passiert intern dabei -> CPU Last 100% -->

---

## Kill it - Der Task-Manager

<!-- wie killt man ein hängendes Java Programm -->

---

## @Let's try

<!-- Schleifen-Beispiel + Infinity Loop Beispiel -->


---

### @Profis - Lambda-Expression & Streaming-API

<!-- 
https://blog.codecentric.de/2013/10/java-8-erste-schritte-mit-lambdas-und-streams/
https://www.baeldung.com/java-8-streams
https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/
-->

---

## Wirf den Fehler - Throw-Exception

<!-- Was sind Exception, Beispiel am besten Division durch 0 -->

---

## Fange den Fehler - try-catch

<!-- wie behandelt man Exceptions -->

---

## @Let's try

<!-- Division durch Null Beispiel fangen + eigenes Beispiel wo eine RuntimeException geworfen wird -->

---

## @Übungsaufgabe

> Schreiben Sie ein Programm, dass einen String und eine Zahl von der Kommandozeile einliest und den String so oft auf der Kommandozeile ausgibt, wie als Zahl gesetzt ist.

* Bei einem leeren String sollte eine Fehlermeldung ausgegeben werden, dass der String leer ist
* Wenn die Zahl $\leq 0$ ist, dann soll eine passende Fehlermeldung ausgegeben werden
* Wenn die Argumentanzahl nicht stimmt soll auch eine passende Meldung ausgegeben werden
* Wenn bei der Umwandlung des Textes in eine Zahl ein Fehler auftritt, dann soll auch eine verständliche Fehlermeldung ausgegeben werden


---

## @Home

1. Installation [Java Development Kit](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. [Setzen der Umgebungsvariablen](https://www.java.com/de/download/help/path.xml) ```JAVA_HOME``` und ```PATH```
3. Installation [Visual Studio Code](https://code.visualstudio.com/)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA5MDIxNTI2NCw5MTM2NzUzNzYsNTkzNz
U4NDUwLDEzMDYxNjg1NzMsLTE5MzYyMDgwMDMsMTA3NzMwMTM3
NywxNDAxMDEwMzEyLC02MTUwMDU0NjUsMTY1NTY2MDM0OSwtNz
gzMzM5MDE2LDExNjQxMjMzNjEsMjY1NzIxMTQ0LDEwODg5NjQ4
NjksLTExNzA4MjE0MzQsLTEwODc1OTE5NzMsMTYzNzYxNDY5OS
wxMjMxNTMyODk3LC05MDY0Nzg5NTAsLTE5NTI0MjUzNCwtMTcz
NTQ0MDg0M119
-->