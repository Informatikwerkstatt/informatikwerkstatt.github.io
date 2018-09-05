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
 - Eigene JVM für Android, siehe VL4!
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
3. Kopiere oder schreibe den Beispielcode des Hello-World-Programms __exakt wie angegeben,__ in die Datei
4. Speichere die Datei auf dem Desktop
5. Öffne die _Eingabeaufforderung_
6. Schau mittels ```dir``` wo der Desktop ist
7. Wechsel mit ```cd``` auf den Desktop
8. Compiliere das Programm
9. Führe das Programm aus

---

## Aufbau eines Java-Programms
<!-- wie ist der allgemeine Aufbau eines Java Programs, Stichwort Klasse, Stichwork main, insbesondere Parameter erklären -->
- Betrachten wir noch einmal unser HelloWorld-Programm
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
 - Die `HelloWorld` Klasse hat eine Methode: ```main()``` 
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
### @Profis
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
- Wichtig: Initiale Wertzuweisung (=Initialisierung) vor Verwendung einer Variable! 
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
- Die Variable `message` kann nach ihrer Instanziierung als Argument (Parameter) beim Aufruf der Methode  `println()` des Objekts `System.out` (siehe VL2) verwendet werden
- Der Wert der Variable wird an die Methode übergeben und dort weiterverarbeitet. 

=== 
### main() Methode
 
 -  Programme wie unser `HelloWorld` Beispiel , die eine main() Methode haben, sind *ausführbar*.
 -  Ausführung: Aufruf / Abarbeitung der `main()`-Methode
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
myInt = (int)pi;
```
- **@Let's try:** Führe den o.g. Code aus und gib die Werte von `myInt` und `pi` aus! Was beobachtest Du?
<!-- kein Compile-Fehler, aber nur ganzzahliger Anteil!-->

---
## Größer, Kleiner, Gleich - Vergleiche und Operatoren
<!-- Operatoren erklären, Operatoren Precedence erklären -->
- In Java kann man eine größe Anzahl von [Standard-Operatoren](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren) nutzen
- Einen kennen wir schon: Operator `A=B` weist `A` den Wert in `B` zu 
- Mit arithmetischen Operatoren (z.B. `+, -`) kann man rechnen. Übersicht [hier](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren#Arithmetische_Operatoren)
- Vergleichs-Operatoren (z.B. >, !=, >=) drücken Bedingungen für Verzweigungen eines Programms aus.  Übersicht [hier](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren#Operatoren_f%C3%BCr_Vergleiche)
- Übliche mathematische Präzedenzregeln für Operatoren (z.B. "Punktrechnung vor Strichrechnung"). Übersicht [hier](https://de.wikibooks.org/wiki/Java_Standard:_Operatoren)
- Im Zweifelsfall: Klammern setzen!
- **@Let's try:**
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
- Vorsicht beim Test auf Gleichheit bei speziellen Datenobjekten!
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
- **@Profis**: Könnt Ihr dieses Ergebnis erklären?
- Anm. : In `s1.equals(s2)` muss `s1` initialisiert sein --> prüfen mit `s1 != null`

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
- Wenn nur zwischen zwei Ausgabewerten unterschieden werden soll, gibt es für die IF-ELSE-Anweisung eine Kurzform
-  Der *ternäre Operator* `?:` hat die Form
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
String  s3  =  "Joerg";
// erzeuge neue Liste
ArrayList<String> betreuer  =  new  ArrayList<>();
// füge Elemente ein
betreuer.add(s1);
betreuer.add(s2);
betreuer.add(s3);
// gib alle Elemente aus (for-Schleife s.u.)
for (String name: betreuer)
    System.out.println(name);
``` 
- Detailliertere Infos zum Java Collections Framework findest Du [hier](https://docs.oracle.com/javase/tutorial/collections/index.html)

===

### @Let's try 
<!-- an dieser Folienformattierung verzweifele ich -->
* Schreibe zunächst ein kleines Programm, in dem Du 
    1. einen `Array` Deiner Wahl deklarierst
    2. ihn initialisierst
    3. seine Werte ausliest und ausgibst 
* **@Profis**: Schreibe ein weiteres Programm, in dem Du 
    1. eine `ArrayList` Deiner Wahl deklarierst
    2. sie mit Werten füllst
    3. und danach die Werte ausliest und ausgibst 

---
## Spiel's noch einmal, Sam ... - Schleifen

<!-- for, while und do-while Schleifen, wann benutzt man was anhand eines einfachen zu erklärenden Beispiels -->
- Mit Schleifen könnt Ihr eine Codesequenz mehrfach ausführen
- Z.B. alle Elemente einer Liste ausgeben
- Schleifen haben eine Abbruchbedingung (z.B. Ende der Liste erreicht)
- Es gibt auch Endlosschleifen (s.u.).
- Java bietet unterschiedliche Kontrollstrukturen für Schleifen, z.B.
	- `for` (etwas veraltet)
	- `for each` 
	- `while`
	- `do while` (erzwingt mindestens einen Durchlauf) 
- Wir erläutern kurz `foreach` und `while`

===
### For each
<!-- was ist for-each, wann ist es sinnvoll -->
- die `for each`-Schleife haben wir im obigen `ArrayList`-Beispiel schon kennengelernt
- Sie dient zum einfachen Durchlaufen listenartiger Datenstrukturen und Arrays
- Anm.: Das Wort "each" kommt darin nicht vor. Man nennt sie so, um sie von der `for`-Schleife zu unterscheiden
- Beispiel:
``` java
List<String> someList = new ArrayList<String>();
// füge "aepfel", "birnen", "pflaumen" zu someList hinzu
for (String item : someList) {
    System.out.println(item);
}
```
- Anm.:  Da im Rumpf der `for each` Anweisung nur Kopien der Listenelemente verarbeitet werden, kann man damit keine Elemente der Liste ändern oder löschen!

===
### While / do-while
- Wenn die Anzahl der Wiederholungen eines Codeblocks nicht bekannt ist, sondern nach jedem Durchlauf eine Bedingung überprüft werden muss, nutzen wir die `while-`Schleife
- z.B. wir schauen alle 5 Sekunden so lange in den Briefkasten, bis ein Brief drinnen liegt
``` 
// Pseudocode - dient nur zum Erklären des Prinzips
Mail m = null;                // Zum Speichern der Mail
while (m == null ){           // Mache weiter, solange noch keine Mail da ist
    m = Mailbox.lookup();       // Schaue nach Mail
    Thread.sleep(5000);         // Warte 5 Sekunden
}
m.read();                     // Endlich!! Wir können unsere Mail lesen
```
- Und hier noch ein Beispiel für `do-while`
``` java
int count = 1;
do { // der Rumpf der Schleife wird bei do-while mindestens einmal ausgeführt
   System.out.println("Count is: " + count);
   count++;
 } while (count < 11); 
```        
---
## Infinity Loop
<!-- while true, was passiert intern dabei -> CPU Last 100% -->
- Frage: Wie kann man ein Programm erzeugen, das nie anhält?
- Antwort: Whileschleife, die nie abbricht
```java
while ( true ) {
    // einatmen  ... ausatmen
 }
 ```
- Es gibt Fälle, in denen Endlosschleifen beabsichtigt sind.
- Manchmal entstehen Sie aber unbeabsichtigt - durch Programmierfehler

===
### Oh weh, was macht mein Programm??
 - **@Let's try**: Was passiert hier? 
 ``` java
public  class  Endless
{
   public  static  void  main( String[] p_args )
   {
     int  n=0, m=0;
     while (n <  11) {
       System.out.println("Count is: "  + n);
       m++;
     }
   }
}
``` 
- Endlosschleifen sind ein einfaches Rezept, die CPU komplett auszulasten :o
 - Wenn Ihr das Programm über die Eingabeaufforderung gestartet habt, könnt Ihr es dort mit der Tastenkombination STRG+C beenden.
- Manchmal ist es aber nicht so einfach ...

===
### Kill it - Der Task-Manager
<!-- wie killt man ein hängendes Java Programm -->
- Wenn ein Programm "hängt", ist es manchmal unvermeidbar, den Prozess zu beenden, in dem das Programm läuft
- Dazu
	- Rechtsklick auf Datumsanzeige in Windows-Taskleiste
	- Im Menu Task-Manager auswählen
	- "Hängenden" Prozess (hier: Windows-Befehlsprozessor) suchen
	- Rechtsklick  darauf, "Task beenden" auswählen
	- Fertig!

===
### Kill-it -- das Video
- Hier noch ein Video zur Illustration des Prozesses

<iframe src="https://player.vimeo.com/video/288322168" width="320" height="180" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

---

## @Let's try
- Versuche, die obigen Beispiele selbst zum Laufen zu bringen. 
	- for each, 
	- while / do while
	- Endlosschleife und Folgenbeseitigung

---

### @Profis - Lambda-Expression & Streaming-API

- Wer sich gerade langweilt, weil alles viel zu einfach ist:
- Macht Euch selbst mit zwei fortgeschritteneren Konzepten für die effiziente (und parallele) Verarbeitung großer Datenstrukturen / Datenmengen in Java vertraut.
	- [Lambda-Ausdrücke](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)
	- [Java Streaming](https://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)
- Quellen zum "Reinschnuppern":
	- [Erste Schritte](https://blog.codecentric.de/2013/10/java-8-erste-schritte-mit-lambdas-und-streams/)
	- [java 8 streams](https://www.baeldung.com/java-8-streams)
	- [Stream tutorial](https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/)

---
## Fehler - Exception
<!-- Was sind Exception, Beispiel am besten Division durch 0 -->

- Fehler in Programmen, z.B.
	- Division durch 0
	- Zugriff auf einen nicht existierenden Array-Index
	- Zugriff auf ein noch nicht erzeugtes Objekt
- Diese Fehler werden in Java als _Exception_ (Ausnahme) bezeichnet 
- Sie treten zur Laufzeit ein (deshalb: RuntimeException)
- Unbehandelt führen sie zu  Abstürzen oder unerwünschten Programmzuständen 

===
### @Let's try: Ein Beispiel
- Lassen Sie das folgende Beispiel laufen - was passiert?
``` java
public  class  Div0Fehler{
  public  static  void  main( String[] p_args )
  {
    int  zaehler=5;
    int  nenner=0;
    int  ergebnis  = zaehler / nenner;
    System.out.println("Ergebnis: "  + ergebnis);
  }
}
```
===
### Fang den Fehler - try-catch
<!-- wie behandelt man Exceptions -->
- Java verwendet das sogenannte Try-Catch Modell zur Ausnahmebehandlung
- Code, in dem eine Ausnahme auftreten kann, wird in einen "Catch-Block" eingeschlossen.
- Dahinter wird ein Try-Block angegeben, der bestimmt, was im Falle des Auftretens von Ausnahmen zu tun ist.
- Wir erweitern den Rumpf der main()-Methode unserer `Div0Fehler`-KLasse
``` java
  int  ergebnis=0;
  try{ //
    int  zaehler=5;
    int  nenner=0;
    ergebnis = zaehler / nenner;
  } catch (ArithmeticException  e){ // try-Block wird beendet!
    System.out.println(e.toString());
    System.out.println("Sorry, Du hast durch null geteilt! Probiere es nochmal!");
  }
  System.out.println("Ergebnis: "  + ergebnis);
}
```
- So kann der Programmierer sinnvoll auf Ausnahmen reagieren 

===
### @Profis: Diskussion 
- Ist es sinnvoll, auf Laufzeitfehler wie z.B. Division durch Null mit try-catch zu reagieren?
- Wie könnte man sinnvoll den Fall abfangen, wenn der Nenner von einem Benutzer eingegeben wird?

---


## @Home

 - Im Abschnitt über Arrays haben wir gesehen, dass ein häufiger Fehler ist, dass versucht wird, mit ungültigen (zu großen pder negativen) Array-Indizes auf Elemente eines Arrays zuzugreifen
 1. Schreiben Sie ein Programm, in dem eine solche Situation auftritt
 2. Überlegen Sie, wie Sie die Situation behandeln können
 3. Erstellen Sie einen entsprechenden Try-Catch-Block
 4. Compilieren Sie ihr Programm und lassen es laufen

<!-- Division durch Null Beispiel fangen + eigenes Beispiel wo eine RuntimeException geworfen wird -->

---

## @Übungsaufgabe

> Schreiben Sie ein Programm, dass zwei Argumente von der Kommandozeile einliest, einen String und eine Zahl, und das den String so oft auf der Kommandozeile ausgibt, wie die Zahl angibt.

- Prüfen Sie die Typen der Eingaben
- Bei einem leeren String sollte eine Fehlermeldung ausgegeben werden, dass der String leer ist
- Wenn die Zahl $\leq 0$ ist, dann soll eine passende Fehlermeldung ausgegeben werden
* Wenn die Argumentanzahl nicht stimmt, soll auch eine passende Meldung ausgegeben werden
* Wenn bei der Umwandlung des Textes in eine Zahl ein Fehler auftritt, dann soll auch eine verständliche Fehlermeldung ausgegeben werden

## @Übungsaufgabe

> Schreiben Sie ein Programm, dass zwei ganze Zahlen A und B von der Kommandozeile einliest und (1) das Ergebnis der ganzzahligen Division der beiden Zahlen sowie (2) den Rest der ganzzahligen Division ausgibt.

* Prüfen Sie die Typen der Eingaben
* Bei einem leeren String sollte eine Fehlermeldung ausgegeben werden, dass der String leer ist
* Wenn die Zahl $\leq 0$ ist, dann soll eine passende Fehlermeldung ausgegeben werden
* Wenn die Argumentanzahl nicht stimmt, soll auch eine passende Meldung ausgegeben werden
* Wenn bei der Umwandlung des Textes in eine Zahl ein Fehler auftritt, dann soll auch eine verständliche Fehlermeldung ausgegeben werden

---

## @Home

1. Installation [Java Development Kit](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. [Setzen der Umgebungsvariablen](https://www.java.com/de/download/help/path.xml) ```JAVA_HOME``` und ```PATH```
3. Installation [Visual Studio Code](https://code.visualstudio.com/)

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTQ3NDUwNyw4MDkyODIzMTcsLTUyMTMxNz
QyNSwtMTkyNzgxOTgwNywtMTgxNzUxMjM3LDE0OTA3NjEyMCwx
MDE3MTc4OTYxLC04NzAyODI3NywyMDI0MTQ2MzMyLDMxNTU2ND
AzMSwxNjU5OTU1MDk2LDE3MzY0MDA5ODcsLTEwNDcyMjkxNjMs
LTEzMDMzNjg0NTEsMTgzMDc1NTkxNCwtMTQ3MTE3NjcwNywtND
UwMDc3MjMsNjUxMTgyNTY3LC0xODIzODg0Mjg1LC0xMjcxNjY4
MzBdfQ==
-->