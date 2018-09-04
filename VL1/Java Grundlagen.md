---
layout: slide
permalink: /java-grundlagen/
---

# Informatikwerkstatt
__Java Grundlagen__

---

## Sprichst Du Java?
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
| boolean|`true` und `false`, 1 Bit Länge |
| byte | Ganze Zahlen von -128 bis 127 |
| int| Ganze Zahl, 32 bit Länge | 
| double| Fliesskommazahl mit doppelter Genauigkeit | 
| char | Einzelne Zeichen, 16-bit Länge. z.B. `'a'` |
| String| Zeichenkette, max. $2^{31}-1$ Zeichen. z.B. `"Hello World!"` |

===
### @Cracks
Warum  gibt es verschiedene Datentypen für Zahlenwerte?
Man könnte doch für alles `double` verwenden ...

---
## Variablen
<!-- Deklaration von Variablen, Nutzung von Variablen, Keywort "final" -->
 
- Benannter Bereich im Speicher, dem in einem Programm ein Wert zugewiesen werden kann 
- Mithilfe der Datentypen können wir dem Java-Compiler genau beschreiben, welches erlaubte Werte einer Variable sind 
- Wir erweitern unser Hallo-World-Programm:
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
- `=` kopiert Wert auf der rechten Seite in die Variable auf der linken 
- Wichtig: Initiale Wertzuweisung vor Verwendung einer Variable! 
- Modifikator `final` gibt an, dass die Variable nach der Initialisierung nicht mehr verändert werden darf
- `final` wird häufig verwendet, um Konstanten zu definieren

===
### Verwendung von Variablen bei Methodenaufrufen
``` java
	public static void main( String[] p_args )
	{
		System.out.println( message );
	}
```	
- Die Variable `message` kann nach ihrer Instanziierung als Argument (Parameter) zum Aufruf der Methode  `println()` des Objekts `System.out` (siehe VL2) verwendet werden
- Der Wert der Variable wird so übergeben und kann in der Methode weiterverarbeitet werden 

=== 
### main() Methode
 
 -  Programme wie unser `HelloWorld` Beispiel , die eine main() Methode haben, sind *ausführbar*.
 -  Die Ausführung eines solchen Programms erfolgt durch Aufruf / Abarbeitung der `main()`-Methode
 - Das Argument `String[] p_args` der `main()` Methode kann genutzt werden, um bei dem Aufruf des Programms über die Kommandozeile Parameter an es zu übergeben.

---
## Typumwandlung
<!-- Was bedeutet Casting, wozu wird es benötigt, was ist der Sinn davon, was sind die Nachteile davon, insbesondere parsen von String als numerischer Wert -->

- Typumwandlung (engl. *Casting*) = Umwandlung eines Datentyps in einen anderen Datentyp.

``` java
byte counterB = 1;
int counterI = 1;
double counterD = 1.0;
String myNumber = "";
/*
  wir casten jetzt eine byte-Variable auf eine 
  int-Variable und dann die int-Variable auf 
  eine double-Variable. Geht das?
 */
counterI = counterB;
counterD = counterI;
System.out.println("counterD = ", counterD);

//int auf String casten erfordert extra Methodenaufruf
mynumber = Integer.toString(counterI).
```

===
### @Let's try

<!-- Codebeispiel Main-Programm, Variablen deklarieren, Variablen setzen, Variablen mit Println ausgeben -->
1. Schreibe eine Klasse Example.java mit einer `main()`-Methode
2. Kopiere das obigen Code-Fragment in den Rumpf der `main()`-Methode 
4. Übersetze das Programm und führe es aus! Was beobachtest Du?
5. Füge nun folgende Zeile am Ende des `main()`-Programms ein?
``` java
/*
 hier versuche ich, eine double-Variable auf 
 eine int-Variable zu casten :o
 */
counterI = counterD;
```
6. Übersetze das Programm! Was beobachtest Du?
7.  Ermittele jeweils durch Nachdenken oder probieren: Auf welche Typen können byte / int / double gecastet werden?
8. Versuche, die Variable `counterD` auf die String-Variable `myNumber` zu casten! 

===
### Implizites vs. explizites Casting
- Typenumwandlung ist oft notwendig, erfordert aber Sorgfalt!
- Dabei können Probleme zur Übersetzungszeit und u.U. auch zur Ausführungszeit (runtime) eines Programmes auftreten 
- *Erweiterndes Casting* (z.B. von `int` auf `double`) wird vom Compiler automatisch durchgeführt (implizites Casting)
- *Einschränkendes Casting* (z.B. von `double` auf `int`) muss explizit vom Programmierer gemacht *(und geprüft!)* werden. Beispiel:
``` java
int myInt;
double  pi  =  3.14159;
//explizites casting
myInt= (int)pi;
```
- **@Let's try:** Führe den o.g. Code aus und gib die Werte von `myInt` und `pi` aus! Was beobachtest Du?
<!-- kein Compile-Fehler, aber nur ganzzahliger Anteil!-->

---
## Größer, Kleiner, Gleich - Vergleiche und Operatoren
<!-- Operatoren erklären, Operatoren Precedence erklären -->
- In Java kann man eine größe Anzahl von [Standard-Operatoren](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren) nutzen
- Einen kennen wir schon: Operator `A=B` weist A den Wert in B zu 
- Mit arithmetischen Operatoren (z.B. +, -) kann man rechnen. Übersicht [hier](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren#Arithmetische_Operatoren)
- Vergleichs-Operatoren (z.B. >, !=, >=) drücken Bedingungen für Verzweigungen eines Programms aus.  Übersicht [hier](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren#Operatoren_f%C3%BCr_Vergleiche)
- Übliche mathematische Präzedenzregeln für Operatoren (z.B. "Punktrechnung vor Strichrechnung"). Übersicht [hier](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren)
- Im Zweifelsfall: Klammern setzen!
``` java
int i = 2;
int j = 2 * i;
int k = 4 * ( i + j) / 2;
int l = 4 * i + j / 2;
System.out.println("k = " + k);
System.out.println("l = " + l);
```
===
### Test auf Gleichheit
- Vorsicht beim Test auf Gleichheit bei speziellen Datenobjekten
- Operator `==` prüft Gleichheit der Speicherstellen
``` java
int  i=1;
int  j=1;
System.out.println(i==j); // Ergebnis: true}
```
- bei String und anderen Objekten: Test mit Methode `equals()`
``` java
String  s1=new  String("maus"); // neues String-Objekt wird erzeugt (s. VL2)
String  s2=new  String("maus");
System.out.println(s1==s2); // false!
System.out.println(s1.equals(s2)); // true
```
- Bei `s1.equals(s2)` muss `s1` initialisiert sein --> prüfen mit `s1 != null`

---
## Bedingte Anweisungen - IF-ELSE
- IF-Anweisung hat Form `if (bedingung) block`
	- Wenn Bedingung erfüllt ist , wird Anweisungsblock ausgeführt; sonst übersprungen.
``` java
int a=2;
if (a>0) System.out.println(a + " ist positiv");
if (a <=0) System.out.println(a + ist "nichtpositiv");
```
- IF-ELSE-Anweisung hat Form `if (bedingung) block1 else block2`
``` java
if (a>0) 
	  System.out.println(a + " ist positiv");
else 
	  System.out.println(a + ist "nichtpositiv");
```
- Blöcke mit mehreren Anweisungen in geschweifte Klammern einfassen!
<!-- @Phil: brauchen wir  switch-case -->

===
### Ternärer Operator
<!-- ternärer Operator funktioniert nur für 2 Alternativen; kompakter; if-else empfinden viele als besser lesbar -->
- Wenn nur zwischen zwei Ausgabewerten unterschieden werden soll, so gibt es für die IF-ELSE-Anweisung eine Kurzform
-  Der ternäre Operator `?:` hat die Form
```
(<boolescher Ausdruck>) `?` AusgabewertTrue `:` AusgabewertFalse;
```
- Beispiel:
```java
 (a > 0) ? System.out.println(a + " ist positiv") 
	 : System.out.println(a + " ist nichtpositiv");
```
- Oder etwas eleganter
```java
 System.out.println(a + " ist " + ((a > 0) ? "positiv" : "nichtpositiv"));
```
---
## @Let's try

 1. Erstellen Sie eine Klasse `Example1` (Datei `Example1.java`) mit einer
    main() Methode.
 2.  Probieren Sie die obigen Beispiele für `if-else` und den ternären Operator aus!

---
## @Home
Betrachte die beiden folgenden IF-ELSE Anweisungen
 1. Überlege, welcher Teil der Anweisungen jeweils ausgeführt wird und
    warum. 
 2. Schreibe für jede Anweisung ein Java-Programm; wähle geeignete Ausgaben, um die Ausführung nachvollziehen zu können.

```java
// Anweisung 1				
int a = 5, b = 6;				
if ( a < b ) { a = b; }			
else { b = a; }							
```
```java
// Anweisung 2
int a = 5, b = 6, c = 7;
if ( a > b ) { a = b; }
else {
	if ( a < c ) { a = c; }
}
```
<!-- Anweisung 1: 5<6, also wird a=b ausgeführt (if-Zweig)
       Anweisung 2: a <= b, deshalb zunächst else-Zweig, dann wg a<c der if-Zweig -->

---
## Arrays
<!-- was sind Arrays, wozu sind sie gut, was gibt es für Beschränkungen -->
- Container-Objekte, die feste Anzahl von Werten eines bestimmten Types speichern können (detaillierte Einführung [hier](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html))
- HelloWorld-Beispiel: Array  `String[] p_args`
- Anderes Beispiel: Liste von Highscore-Werten eines Spiels
- Elemente über eine Index-Variable (Werte von `0` bis `Länge-1`) addressierbar
![](http://winf.in.tu-clausthal.de/jpm/infws/img/1_array.png)
- Arrays können verschachtelt sein 
===
### Array anlegen / initialisieren
<!-- verschiedene Arten für die Initialisierung von Arrays -->
- Eindimensionaler Array, direkte Initialisierung durch Aufzählung
``` java
int[] highscores = {1000, 850, 600};
```
- Eindimensionaler Array, Deklaration mit `new` Operator; "Füllen" später
``` java
int[] highscores = new int[10];
...
highscores[0] = 4711;
```
- Nach `new`-Anweisung sind die Elemente des Arrays mit dem Initialwert des Elementtyps initialisiert (Zahlen: `0`, `boolean: false`)
- Zweidimensionaler Array als Tabelle mit 10 Zeilen, 15 Spalten:
 ``` java
 //Namenstabelle mit 10 Zeilen, 15 Spalten
String[][] tabelleNamen = new String[10][15];
...
tabelleNamen[7][8] = "Steffi";
```
===
### Zugriff auf Array
- Adressieren des gesuchten Feldes mit Indexvariable:
``` java
int[] highscores = {1000, 850, 600};
int first = highscores[0]; //first hat nun Wert `1000`
```
- Arrayelemente durchlaufen (iterieren) mit `for`-Schleife (s.u.)
``` java
for (int i=0; i<highscores.length; i++)
	System.out.println(highscores[i]); 
```
- Häufiger Fehler: Ungültiger Wert für Index --> Führt zu Laufzeitfehler
``` java
int[] highscores = {1000, 850, 600};
int = highscores[3]; //Zugriff auf viertes Element --> Fehler
``` 
===
### Collections
- Java Bibliothek, stellt häufig verwendete Datenstrukturen und Methoden zur Speicherung und Verkettung von Objekten zur Verfügung
- Haupttypen Listen, Mengen, Maps, Queues
- Beispiel Liste: Klasse `java.util.ArrayList` = dynamischer Array (keine feste Länge)
<!-- Packages haben wir noch nicht eingeführt ... -->
<!-- was ist es, kurz fassen und auf Listen & Sets beschränken -->
``` java
import java.util.ArrayList; //importiere die Klasse
// ...
String  s1  =  "Phil";
String  s2  =  "Steffi";
// erzeuge neuen Vector
ArrayList<String> betreuer = new  ArrayList<>();
// füge Elemente hinzu
betreuer.add(s1);
betreuer.add(s2);
// gib Elemente aus
for (int  i  =0; i <  betreuer.size(); i++) 
   System.out.println((String)betreuer.get(i));
``` 
Detailliertere Infos zum Java Collections Framework findest Du [hier](https://docs.oracle.com/javase/tutorial/collections/index.html)

---
## @Let's try
 
 - Schreibe zunächst ein kleines Programm, in dem Du 
 1. einen Array Deiner Wahl deklarierst
 2. ihn initialisierst
 3. seine Werte ausliest und ausgibst 
 
 -  **@Cracks:** Schreibe ein weiteres Programm, in dem Du 
 1. eine ArrayList Deiner Wahl deklarierst
 2. sie mit Werten füllst
 3. und danach die Werte ausliest und ausgibst 
 
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
eyJoaXN0b3J5IjpbLTExOTE1NTY3NjcsLTk3NDI2MDc0MywtMT
kyODY3NDY1MCwtMTE1OTEzOTMwMSwxNDg4MzE4NjM5LDEyMDA0
OTc5MjQsMTYyNjI2NTU2NCwtMTc0MzQxNTgzMSwtMjc5MTI4Nj
k4LDE1OTE2NzM5MzksLTU5Nzg3NTMzNiwtMTQ1NzA1MTcwOSw1
NTAzNDE1MzUsNjQ0MDQ5NTA3LDE3OTkzODQ2MTQsMTAwNjM0NT
MzOCw2MjUwOTg3NzksOTMzOTI1MTQwLC0xMDUyNzE0NDI2LC0x
MzA3Njg2MTA1XX0=
-->