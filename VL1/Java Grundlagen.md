---
layout: slide
permalink: /java-grundlagen/
---

# Informatikwerkstatt
__Java Grundlagen__

---

## Sie sprechen Java?

* Objektorientierte Programmiersprache
* Seit 1995
* Plattformunabhängig
	* Java Programme laufen auf verschiedenen Betriebssystemen  (Windows, Mac, Unix, Android)
* Java Software enthalten im Java Developer Kit (JDK)
* aktuelle Version: Java 11
<!-- Allgemeine Infos zu Java -->

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
 - List Datei erstellen mit Texteditor -> Endung `.java`
 - Datei übersetzen 
	 Maschinenlesbare Repräsentation (bytecode)
	 Verwendung eines Compilers (Programm `javac`) 
 - Übersetzte Datei ausführen (Programm `java`) --> 
![](http://winf.in.tu-clausthal.de/jpm/infws/img/java-process.png)<!-- todo: agree on destination  in github --> 
 
 - Java Compiler: `javac` 
	 - Dienstprogramm, Teil der Java Software
	 - Übersetzt Java Programm in bytecode-Format (Endung `.class`)
 - Java Virtual Machine (JVM): `java`
	 - Laufzeitumgebung für Java
	 - Portabilität durch eine JVM pro Plattform (Betriebssystem)

===

### Java auf Android-Endgeräten
<!-- eine Subfolie für Java bei Android (Achtung die Infos auf Folien vom letzten Jahr stimmen nicht mehr Dalvik VM wird bei Android nicht mehr benutzt
JPM: Ich würde das eher am Anfang der Android-Intro machen. Hier eher die allgemeine Abbildung, die den Cross-Platform Charakter von Java illustriert, s.u. -->

 - Android: Betriebssystem für mobile Endgeräte
 - Eigene JVM für Android
 - Siehe Kapitel 4!
  ![](http://winf.in.tu-clausthal.de/jpm/infws/img/java-cross-pf.png)

---

## Ein paar Begriffe: Quellcode,Binary, App
 <!-- Übersetzungsvorgang, compilieren + Bundling 
 @Phil: Gehört Bundling nicht eher ins Android Kapitel?-->

 - **Quellcode**: Textbasierte Darstellung eines Programms
	 - z.B. `.java` Datei, erstellt mit Texteditor (z.B. Visual Studio Code)
	 - einzelne Zeichen als Bitfolgen gespeichert, standardisierte Kodierung (z.B. UTF-8)
	 - Textdateien können nur textuelle Information enthalten
 - **Binärcode**: Ausführbares Programm als Bytefolge gespeichert, z.B. `.class` Datei
	 - Binärdateien sind nicht für den Menschen lesbar
	 -werden von Programmen (z.B. Java Compiler `javac`) verarbeitet / interpretiert
 - **App**: Ein Programm, das vom Nutzer aufgerufen und verwendet werden kann (z.B. Google Maps)

===

## Kommandozeile - ich kann nicht klicken!?

Die [Kommandozeile](https://de.wikipedia.org/wiki/Kommandozeile) ist eine Anwendung, um mittels Befehlseingabe Programme auszuführen. Wir benutzen die Kommandozeile zum
- Manuellen  Compilieren einfacher Programmbeispiele
- Starten der einfachen Beispiele von Hand
- Verstehen des Prozesses des Compilierens und der Ausführung von Javaprogrammen

===

### Befehle

<!-- Befehle der Windows Commandline, navigieren in Verzeichnissen & Verzeichnislisting -->

===

### Compilieren der Sourcen

Übersetzen des geschriebenen Quellcodes in _maschinen Sprache_

```shell
javac HelloWorld.java
```

===

### Ausführen des Programms

```shell
java HelloWorld
```

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

## Programmaufbau

<!-- wie ist der allgemeine Aufbau eines Java Programs, Stichwort Klasse, Stichwork main, insbesondere Parameter erklären -->

---

## Java Keywords

Java besitzt [50 Keywords](https://en.wikipedia.org/wiki/List_of_Java_keywords), die in der Sprachdefinition festgelegt sind.

* Keywords definieren meist den Basis Syntax (Befehle) einer Programmiersprache
* Sie dürfen nicht als Variablen-, Funktions-, Mehoden-, Klassennamen benutzt werden

---

## Datentypen

<!-- Basisdatentypen, Text, Zahl, Boxing/Unboxing des Compilers -->

---

## Variablen

<!-- Deklaration von Variablen, Nutzung von Variablen, Keywort "final" -->

===

### Zuweisung

<!-- Zuweisungen von Variablen, Beachtung von final -->

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
eyJoaXN0b3J5IjpbLTIwMzc3MDU1MjcsLTEyMjAwMzg0OTUsLT
E1NzYxMTM3NTksLTE3MDAwNTc3MjQsLTI2Nzk0NjUwMSwtNzI1
NjM3NjAzLC00NzAwMTA1OTQsLTE4ODc2MDc3OTksMTU2MTk5ND
cxNCw0NzM2NTk2MDEsLTE2MzE3Njk4NzksNzg1NzcyMzIwLDM4
ODYzNDczOCwtMTM3NzU4NDE2NSw5MjI5NjA3NzAsMTk0NzEwMT
kxNF19
-->