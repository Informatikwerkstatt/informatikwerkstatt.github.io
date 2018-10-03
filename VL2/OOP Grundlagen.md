---
layout: slide
permalink: /oop-grundlagen/
---

# Informatikwerkstatt
__Grundlagen Objekt-Orientierter Programmierung__

---

## Objekt-Orientierte Programmierung (OOP) - was ist das?

* Beschreibung von Software durch Objekte (seit den 1990igern)
    * Zustand (z.B. Auto hat Farbe, Marke, aktuelle Geschwindigkeit, Gang)
    * Verhalten (z.B. Gang wechseln, Gas geben, bremsen) 
* Prinzip **Abstraktion**:
    * Fokus auf das Wichtige &rarr; was tut ein Objekt?
    * Verbergen des Unwichtigen (wie?) &rarr; [Interfaces](#/3/15)
* Prinzip **Kapselung**:
    * "Zusammenbinden" von Zustand (Daten) und Verhalten (Funktionen / [Methoden](/java-grundlagen/#/5/2))
* Prinzip **Vererbung**
    * Abbilden von Ähnlichkeiten und Unterschieden zwischen Objekten

---

## Klasse & Objekt

* _Klasse_: (abstrakte) Bauplan einer Art von Objekten
  * definiert alle Eigenschaften / Variablen eines späteren Objektes
  * definiert die Funktion / [Methoden](/java-grundlagen/#/5/2) des Objektes
* _Objekt_: aus der Klasse erzeugter Speicherblock im Rechner
    * mit konkreten Belegungen der Variablen
    * wir haben in einer Variablen eine Referenz auf ein Objekt und können damit arbeiten

&rArr; Softwaretechnisch: Klasse erlaubt uns, konkrete Objekte aus ihr zu erzeugen um ein 

===

### Beispiel für Klasse eines Autos

Eigenschaften zusammen beschreiben den Zustand eines Autos beschreiben &rarr; sie können unveränderbar (```final```) oder veränderbar sein

```java
public class CAuto {
  // --- definiere Eigenschaften ---

  // unveränderbare Eigenschaft durch final  
  private final String m_farbe;
  private final String m_marke;
  private final int m_maximaleGeschwindigkeit;
  private final int m_anzahlGaenge;

  // veränderbare Eigenschaften
  // aktuelle Geschwindigkeit - der Wert bei Java mit 0 automatisch belegt
  private int m_aktuelleGeschwindigkeit;
  // aktueller Gang - hier wird ein Wert vorgegeben
  private int m_gang = 1;
  

  // --- definiere Methoden ---

  // Default-Konstruktor ohne Parameter
  public CAuto()
  {
    // ruft den Konstruktor mit Parametern auf
    this( "rot", "VW", 5, 250 );
  }

  // Konstruktor mit Parametern
  public CAuto( final String p_farbe, final String p_marke, final int p_anzahlGaenge, final int p_maximaleGeschwindigkeit)
  {
    m_farbe = p_farbe;
    m_marke = p_marke;
    m_anzahlGaenge = p_anzahlGaenge;
    m_maximaleGeschwindigkeit = p_maximaleGeschwindigkeit;
  }
}
```

---

## Instanziierung - Realen Autoobjektes

> Instanziierung &rarr; Erzeugung eines Objekts (Instanz) im Speicher aus einer Klasse

1. allokieren des Speichers<sup>1</sup> für ein Objekt mit dem ```new```-Operator
2. ```new``` liefert eine Referenz auf die Speicherstelle, die in einer Variablen abgelegt werden
    ```java
    final CAuto l_auto = new CAuto("rot", "beetle", 5, 250);
    ```
3. Beim Aufruf von ```new``` wird eine spezielle Methode _der Konstruktor_ aufgerufen

<mall>1: Wieviel Speicher benötigt wird, ist durch die Struktur der Klasse festgelegt</small>

---

## Konstruktor

* Konstruktor ist eine spezielle Struktur innerhalb einer Klassendefinition
* Ähnelt einer Methode, hat aber Namen der Klasse und keinen Rückgabewert 
* Für eine Klasse kann es mehrere Konstruktoren mit unterschiedlichen Argumenten geben

```java
public CAuto()
{
  this( "rot", "VW", 5, 250 );
}

public CAuto( final String p_farbe, final String p_marke, final int p_anzahlGaenge, final int p_maximaleGeschwindigkeit)
{
  m_farbe = p_farbe;
  m_marke = p_marke;
  m_anzahlGaenge = p_anzahlGaenge;
  m_maximaleGeschwindigkeit = p_maximaleGeschwindigkeit;
}
```

---

## Schlüsselwort ```this```

* Innerhalb jeder Methode gib es die Variable ```this```
* Liefert die Referenz auf den Speicherbereich zurück, in dem das Objekt gespeichert ist
* Nutzung für (1) Auflösung von Namenskonflikten und (2) beim Aufruf von Methoden und Konstruktoren
* Beispiel 
  ```java
    public Class CAuto{
    ...
      public CAuto get(){
        return this;
      }
    }
  ```
* ... mit Aufruf:
  ```java
      final CAuto l_auto1 = new CAuto("rot", "lada", 5, 200);
      final CAuto l_auto2 = l_meinAuto.get();

      // l_auto1 und l_auto2 enthalten nun die gleiche Referenz
  ``` 
* Was passiert hier? 

===

### ```this```: Illustration des Beispiels

* Das folgende Bild verdeutlicht noch einmal die Auswirkungen von ```new()``` und die Anwendung von ```this```
* Variablen ```l_auto1``` und ```l_auto2``` zeigen auf dasselbe Objekt!

![Beispiel this](images/2_new_this.png#center)

---

## @Let's try

1. Erstelle die Klasse ```CAuto``` mit einer ```main()```-Methode (vollständiges Programm)
2. Definiere ein paar Eigenschaften für Deine Klasse
3. Erzeuge in der ```main()``` drei unterschiedliche Instanzen Deiner Klasse
4. Nutze ```System.out.println()```, um die Instanzen auszugeben. Was siehst Du? Was bedeutet das? 
5. Prüfe die Identität der beiden oben definierten Variablen ```l_auto1``` und ```l_auto2``` in der ```main()```-Methode! Verwende den Operator ```==```. 

---

## Methoden

<span class="rrd" data-rrd="Diagram( Optional( Choice(0, Terminal('public'), Terminal('protected'), Terminal('private')), 'skip'),Choice(0,Terminal('void'), Terminal('int'), Terminal('String'), NonTerminal('...')), Terminal('Methodenname'), Terminal('('), Optional(Choice(0, NonTerminal('Parameter')), 'skip'), Terminal(')') )"></span>

Auto-Klasse um Methoden "Schalten", "Gas geben" und "Bremsen" ergänzen

```java
public class CAuto {
  // --- Eigenschaften ---
  // --- Konstruktoren ---
  // --- Methoden / Verhalten ---

  public void schalte( final int p_gang )
  {
      m_gang = p_gang % ( m_anzahlGaenge + 1 );
      m_gang = m_gang < 0 ? 0 : m_gang;
  }

  public void beschleunige( final int p_inkrement )
  {
      m_aktuelleGeschwindigkeit += p_inkrement;
      m_aktuelleGeschwindigkeit = m_aktuelleGeschwindigkeit > m_maximaleGeschwindigkeit ? m_maximaleGeschwindigkeit : m_aktuelleGeschwindigkeit;

  }
  
  public void bremse( final int p_dekrement )
  {
      m_aktuelleGeschwindigkeit -= p_dekrement;
      m_aktuelleGeschwindigkeit = m_aktuelleGeschwindigkeit < 0 ? 0 : m_aktuelleGeschwindigkeit;
  }
}
```

===

### Aufruf einer Methode
* Nach Erzeugen einer Instanz von ```CAuto``` können die Methoden des Objektes aufgerufen werden, z.B.
  ```java
  CAuto l_meinAuto = new CAuto("gelb", "opel", 140);
  l_meinAuto.schalte(2); //schalte in den 2. Gang
  l_meinAuto.beschleunige(5); //beschleunige um 5 Einheiten
  ```

===

### Getter-und Setter-Methoden

<!-- was ist ein getter, wozu braucht man es -->
* Spezielle Methoden, die den wohldefinierten Zugriff auf Eigenschaften einer Methode ermöglichen (siehe [Kapselungsprinzip](#/1))
* Getter-Methoden: Lesezugriff auf eine Eigenschaft, Auslesen ihres Werts
* Setter-Methoden: Schreibzugriff auf eine Eigenschaft, Prüfen und Ändern ihres Werts 
* Beides sind normale Methoden, für die aber spezielle Konventionen gelten
    * Nach außen sichtbar: i.d.R. Modifikator ```public```
    * Namensgebung (s. nächste Folie)

===

### Getter: Konventionen und Beispiel

* Getter für Eigenschaft ```m_prop``` heißt ```getProp()```
    * Ergebnistyp ist Typ von ```m_prop```
    * i.d.R. keine Eingabeparameter
* Beispiel für Klasse ```CAuto```:
  ```java
  public String getFarbe()
  {
    return m_farbe;
  }
 
  public int getKw()
  {
    return m_kw;
  }
  ``` 
* Schlüsselwort ```return``` wird verwendet, um den Rückgabewert einer Methode zu spezifizieren.
===

### Setter: Konventionen und Beispiel

<!-- was ist ein setter, wozu braucht man es, ebenso wann überprüft man Daten, in dem Objekt gesetzt werden -->
* Setter für Eigenschaft ```m_prop``` heißt ```setProp(.)```
    * Ergebnistyp ```void``` (kein Rückgabewert)
    * i.d.R. ein Eingabeparameter mit dem Typ von ```m_prop```
* Beispiel: Zwei Setter unserer Klasse ```CAuto```:
  ```java
  public void setFarbe(String p_farbe) {
    m_farbe = p_farbe;
  }
 
  public void setKw(int p_kw)
  {
    m_kw = p_kw;
  }
  ``` 
* In Settern werden häufig Eingabeparameter geprüft (z.B. ```!= null```, eingeschränkte Wertebereiche)
* Fehler abfangen z.B. durch  "Werfen" von [Exceptions](https://informatikwerkstatt.github.io/java-grundlagen/#/19)!

---

## @Let's try

<!-- Beispiel mit Getter / Setter + eine eigene Methode, die irgendetwas mit den Eigenschaften macht -->
1. Definiere Getter und Setter-Methoden für die Klasse ```CAuto```
2. Definiere sinnvolle Regeln für mögliche Werte und prüfe deren Einhaltung in der Setter-Methode
3. Schreibe eine eigene Methode ```leistungPS()```, die die Leistung des Autos in der Maßeinheit ```PS``` zurückgibt.
4. __@Profis__: Wie könnte man sinnvoll die möglichen Gangwechsel definieren?
<!-- einfach: Folge R-1-2-..-N; komplexer: Zustandsautomat -->

---

## @Home/Übung
1. Mache die Methoden ```schalte()```, ```beschleunige()```, ```bremse(.)``` realistischer:
    * Definiere für ```CAuto``` zusätzliche Eigenschaften für die Höchstgeschwindigkeit und die Anzahl der Gänge
    * Prüfe beim Versuch, die Methoden auszuführen, die Eingaben und fange Fehler ab
    * __@Profis__: Ergänze die Gangschaltung um Leerlauf und Rückwärtsgang und passe die Methoden entsprechend an. 
    * __@Profis__: Realisiere einen einfachen Zusammenhang zwischen eingelegtem Gang und ändern der Geschwindigkeit
---

## Ich sehe Dich - Sichtbarkeit

<!-- public / private / protected, private & public im Detail, protected muss nur erwähnt werden -->

* Wesentlich für das Prinzip der Kapselung: Sichtbarkeit
    * Kann ich auf den Wert einer Eigenschaft zugreifen oder eine Methode aufrufen?
* Die Sichtbarkeit von Eigenschaften und Methoden kann vom Programmierer durch einen Modifikator eingestellt werden
    * ```private```: nur innerhalb der Klasse sichtbar
    * ```public```: auch für beliebige andere Klassen / Objekte sichtbar
    * ```protected```: innerhalb der Klasse sowie für von der Klasse abgeleitete Subklassen sichtbar, siehe [Vererbung](#/10)
* Sichtbarmachen von Eigenschaften nach Außen nur durch Getter-/Setter-Methoden!!

---

## Es geht auch ohne Objekt - Static

<!-- Was ist static, wann benutzt man es, wofür ist es gut und wann benutzt man es nicht -->
* Bisher: Klassen als Blaupausen für Objekte 
* Jedes Objekt hat eigene Eigenschaften (_Instanzenvariablen_)
* Jedes Objekt hat individuelles Verhalten durch Methoden (_Instanzenmethoden_)
* Was machen wir mit "globalen" Eigenschaften oder Verhalten, die für alle Objekte gleich sind?
    * Z.B. jedes Autoobjekt mit eindeutigen Seriennummer ausstatten
    * Z.B. eine Übersicht über die Anzahl der bisher erzeugten Instanzen der Klasse verwalten
* Mit dem Schlüsselwort ```static``` können wir sog. [_Klassenvariablen_](#/8/1) sowie [_Klassenmethoden_](#/8/2) definieren

===

### Klassenvariablen
* Bezeichnen Eigenschaften einer Klasse; nur einmal definiert.
* Z.B.: Jedesmal, wenn Auto erzeugt wird &rarr; Wert der Klassenvariable um 1 hochzählen
  ```java
  public class CAuto {
    private String m_farbe;
    private String m_marke;
    private int m_serienNr; 
    ...
    // Klassenvariable
    private static int s_anzAutos = 0;
    ... 
    // Konstruktor
    public CAuto(String p_farbe, String p_marke, int p_leistung) {
      m_farbe = p_farbe;
      m_marke = p_marke;
     ...
      m_serienNr = ++s_anzAutos; // Klassenvariable erhöhen, Seriennr speichern
    }
  }
  ```
* Zugriff auf Wert über Setter und Getter:
  ```java
  int anzFahrzeuge = CAuto.getAnzAutos();
  ```
* Bei nicht privaten Klassenvariablen und Konstanten Direktzugriff möglich
  ```java
  int l_aVariable = CAuto.aPublicClassVar;
  ```

===

### Klassenmethoden

* ```static``` Methoden werden mit dem Klassennamen aufgerufen
  ```java
  ClassName.methodName(args);
  ```
* Dürfen keine Instanzenvariablen ihrer Klasse verwenden
* Anwendungen: 
    * Zugriff auf ```static``` Eigenschaften (Klassenvariablen) mit Setter- und Getter-Methoden,  siehe [oben](#/8/1)
      ```java
       public static int getAnzahlAutos() {
         return s_anzAutos;
       }
      ```
    * Libraries für generische Berechnungen, z.B. 
      ```java 
      int l_max = Math.max(5, 3); // returns 5
      ```
---

## @Let's try

<!-- static mit private / public, Methoden mit public / private -->
1. Ergänze die Definition der Klasse ```CAuto``` um die obigen Klassenvariablen
2. Füge Setter- und Getter-Methoden hinzu
3. Testet den Zugriff auf die Methoden aus dem ```main()``` Programm
4. Denkt Euch eine andere ```private``` Klassenvariable aus und fügt sie hinzu. Testet den Zugriff darauf
    * aus der Klasse heraus
    * von außerhalb der Klasse

   Was stellt Ihr fest?    

---

## Generalisierung, Spezialisierung, Vererbung:
__Ein SUV ist ein Auto ist ein Fahrzeug!__

<!-- was ist Vererbung allgemein mit Beispiel, wofür verwendet man es, Beispiel mit unterschiedlich großen Boxen, abstrakte Klassen weg lassen -->
* Zentrales Konzept der Objektorientierung
* Zwei komplementäre Sichtweisen _Generalisierung_ und _Spezialisierung_
* Generalisierung
    * Auto &rarr; Fahrzeug: Konzept Auto wird zu allgemeinerem Konzept Fahrzeug verallgemeinert
* Spezialisierung 
    * SUV &larr; Auto: Konzept SUV ist Spezialisierung von Auto
* Wir sagen: 
    * "Fahrzeug ist die _Oberklasse_ von Auto"
    * "SUV ist eine _Unterklasse_ von Auto"
* Transitive _Vererbungsbeziehung_ zwischen Ober- und Unterklasse

===

### Vererbungshierarchie
* In Java kann man Unterklassen von Oberklassen _ableiten_ 
* Unterklassen erbt von der Oberklasse deren Eigenschaften und Methoden
* Durch Vererbung entsteht eine Vererbungshierarchie
* In Java ist die allgemeinste Klasse ```Object``` -- alle Klassen erben von ihr (z.B. die Methode ```toString()```!)
* Klassen (außer ```Object```) haben _genau eine_ Oberklasse 

![Beispiel Vererbungshierarchie](images/2_vererbung.png#center)

===

### Beispiel
<!-- enum wäre besser für die Antriebsarten, aber hier  zu kompliziert,  deshalb für die PRofis als Aufgabe -->
![Antriebsmodi](images/2_awd.png)
* Neue Klasse SUV mit unterschiedlichen Antriebsmodi (Frontantrieb, Allrad, Allrad mit Differentialsperre) 
* Wir leiten jetzt die Unterklassse ```CSuv``` von ```CAuto``` ab. 
* Definition der Vererbungsbeziehung: Schlüsselwort ```extends```
  ```java
  public class CSuv extends CAuto {
      // Instanzenvariable von Auto müssen nicht nochmal definiert werden!
      private int m_fahrModus; //0=2WD, 1=4WD, 2=LOCK 

      public int getFahrModus(){
          return m_fahrModus;
      }

      public void setFahrModus( int p_modus ){
        m_fahrmodus = p_modus;
      }
  }
  ```

===

### Konstruktoren von Unterklassen

* In dem Codefragement für unsere Klasse ```CSuv``` fehlt noch der Konstruktor
* Konstruktor einer Unterklasse:
    1. ruft zunächst den Konstruktor der Oberklasse (Schlüsselwort ```super```) auf
    2. fügt zusätzliche Initialisierungen (hier: Initial gewählter Fahrmodus) hinzu
* Hier das Codebeispiel:
  ```java
    public CSuv(String p_farbe, String p_marke, int p_leistung) {
      super(p_farbe, p_marke, p_kw);  // Konstruktor von CAuto
      m_fahrmodus = 0;                // Initialer Modus: 2WD
  }
  ```
* Aufruf des Konstruktors der Oberklasse muss erste Anweisung sein.

--- 

## Let's try / @Home
1. Erstelle die Definition der og. Klasse ```CSuv``` und compiliere sie.
2. Erzeuge eine Instanz von ```CSuv``` und schreibe in der ```main()```-Methode Anweisungen zum Test des Zugriffs auf die Eigenschaften (Getter und Setter) und Methoden  
3. Worauf muss man bei der Setter-Methode ```setFahrModus(.)``` achten? Erweitere die Implementierung der Methode entsprechend!
<!-- ungültige Eingaben abfangen -->
4. __@Profis__: Ändere die SUV Klasse wie folgt:
    * Definiere die Fahrmodi durch einen [Enum-Datentyp](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)
    * Nutze Konstanten, um die möglichen Werte für die Fahrmodi zu definieren
 
---

## Interface
<!-- was sind Interfaces, wozu sind sie gut, wofür braucht man sie -->
* Fasst eine Gruppe von verwandten Methoden zusammen, die ein Objekt seiner Umwelt bereitstellt
* Beschreibt nur die Signatur (Schnittstelle)
    * Welche Methode? Welche Parameter? Welcher Rückgabewert?
    * Rumpf der Methoden ist leer
* Eine Klasse _implementiert_ ein Interface, wenn sie alle Methoden mit der im Interface definierten Signatur bereitstellt
* "_Vertrag_" zwischen der Klasse und der Außenwelt, vom Compiler überwacht
* In Interfaces werden auch Exceptions definiert; darauf gehen wir hier nicht näher ein.

===

### Interface definieren

  ```java
  public interface IFahren {
    public void schalte(int p_gang);
    public void beschleunige(int p_inkrement);
    public void bremse(int p_dekrement); 
  }
  ```
* Interfaces können andere Interfaces erweiten (Schlüsselwort  ```extends```)
* Alternative Definition des Interfaces ```IFahren```:
  ```java
  public interface ITempoWechseln {
    public void beschleunige(int p_inkrement);
    public void bremse(int p_dekrement); 
  }
  ```
  ```java
  public interface IFahren extends ITempoWechseln{
    public void schalte(int p_gang);
  }
  ```
* Im Gegensatz zu Klassen kann ein  Interface mehrere andere Interfaces erweitern

===

### Klasse implementiert Interface
* Schlüsselwort ```implements```
  ```java 
  public class CSomeClass implements Interface1, Interface2, ...{
      //Definition der Klasse
   } 
  ```
* Unsere Klasse ```CAuto``` soll das Interface ```IFahren``` implementieren.
  ```java
  public class CAuto implements IFahren {
      // Eigenschaften, Konstruktoren, Klassen
  } 
  ```
* __Merke__: 
    1. Eine Klasse kann nur von einer (Ober-)Klasse erben (```extends```)
    2. Eine Klasse kann beliebig viele Interfaces implementieren

---

## Überladen
<!-- was heisst überladen, wofür braucht man es und welche Einschränkungen gibt es beim Überladen -->
* (engl. _Overloading_): Unterschiedliche Methoden oder Konstruktoren einer Klasse mit selbem Namen, aber unterschiedlichen Parametern (Signatur)
* Beispiel: Überladen der Methode ```abs(.)``` der Klasse ```java.lang.Math```:
  ```java
  static int abs(int val);
  static long abs(long val);
  static double abs(double val);
  ```
 * Methode berechnet Betrag der Eingabezahl
 * Unterschiedliche Ausgabetypen für unterschiedliche Eingabetypen
 * Auch möglich: verschiedene Zahl von Argumenten &rarr; z.B. [Überladen von Konstruktoren](#/13/1)

===

 ### Überladen von Konstruktoren
 * Klassen können mehrere Konstruktoren mit unterschiedlichen Eingabeargumenten besitzen
 * Häufig: Default-Konstruktor ohne Argumente
     * Wird automatisch vom Compiler eingefügt, wenn man den Konstruktor vergisst
 * Beispiel: Unterschiedliche Konstruktoren für ```CAuto```
   ```java
   public CAuto() { // Default-Konstruktor
    // setze alle Instanzenvariablen auf null oder Initialwert
   }
   public CAuto(String p_farbe, String p_marke, int p_leistung) {
    // setze Initialwerte für Zustandsvariablen m_tempo, m_gang
   }
   public CAuto(String p_farbe, String p_marke, int p_leistung, 
                int p_tempo, int p_gang){
    // alle Werte vom Konstruktoraufruf übergeben 
   }
   ```

===

### Überschreiben von Methoden
* (engl. Overriding) Zwei Methoden mit gleichem Namen und Parametern, aber unterschiedlichem Verhalten.
* Entsteht, wenn abgeleitete Klasse ein Verhalten ihrer Oberklasse verändert.
* z.B. Klasse ```CAuto``` hat eine Unterklasse ```CAutomatikAuto```
   * Beide implementieren eine Methode
   ```java
    public void schalte(int p_gang);
   ```
    * Die Implementierung des Schaltens in der Unterklasse ```CAutomatikAuto``` wird aber eine andere sein als die in der Oberklasse
    ```CAuto```
* Überschreiben erfolgt einfach, indem die betreffende Methode in der Unterklasse entsprechend implementiert wird.

---

## @Let's try

<!-- ein Beispiel mit Interface und 2 abgeleiteten Klassen vom Interface und dann noch einer dritten Klasse, die von einer Klasse abgeleitet wurde -->
<!-- @Phil: Bin mir nicht sicher, ob Du so was gemeint hast - bitte checken. -->

1. Ändere die Definition von ```CAuto``` und ```CSuv```, so dass sie das Interface ```IFahren``` implementieren.
2. Denke Dir eine neue Klasse aus, die das Interface ```IFahren``` implementiert. Programmiere sie und teste sie in der ```main()```-Methode!
3. Leite eine weitere Unterklasse aus ```CAuto``` ab. Überschreibe in der neuen Klasse mindestens eine Methode von ```CAuto``` und teste sie! 

---

## @Home / Übung

> Schreiben Sie ein Programm, mit dem man Brüche berechnen kann. 

* Brüche sollen als Klassen mit Interfaces konstruiert werden 
* Berechnungsfunktionen als Methoden
* Die Eingabe erfolgt über die Kommandozeile in der Form 
  
  ```shell
  java Bruch 1 / 2 + 3 / 4
  ```
   
* Alle 4 [Operationen](https://de.wikipedia.org/wiki/Bruchrechnung#Rechnen_mit_Bruchtermen) (Addition, Subtraktion, Multiplikation, Division) müssen implementiert werden. 
* __Freiwillig:__ Implementation eines Algorithmus zum Kürzen des berechneten Bruchs, also aus $\frac{2}{4} \Rightarrow \frac{1}{2}$ und aus $\frac{2}{1} \Rightarrow 2$

---

## Packages
* Hierarchische Organisation von Java-Klassen und Interfaces
* Ähnlich zu Dateiordnern in Windows, ```.``` als Trennzeichen
* Übersicht über alle Java SE Klassen [hier](https://download.java.net/java/early_access/jdk11/docs/api/java.base/module-summary.html)
* Basisklassen wie ```String```, ```Math``` in Package ```java.lang```
* Oft verwendet: Package ```java.util``` für Listen etc.
* Package einer Klasse definieren: erste Anweisung in Java-Programm
  ```java
  package graphics;
  ```
* Organisationen verwenden umgekehrte Internet-Domain, z.B.
  ```java
  // Package mypackage der Org. sales.guugl.com
  package com.guugl.sales.mypackage
  ```

---

## Zusammenfassung: Vorteile Objektorientierter Programmierung

* Modularität
    * Quellcode einzelner Klassen kann unabhängig von dem anderer Klassen entwickelt und gepflegt werden
    * An mehreren Stellen benötigte Funktionen müssen nur einmal definiert werden  
* Information-hiding
    * Da Interaktion mit einem Objekt nur über seine Methoden möglich ist, bleibt die interne Implementierung nach außen verborgen
* Wiederverwendung von Code
    * Ihr könnt Klassen, die Ihr oder andere Programmierer erstellt und getestet haben, in Euren Programmen verwenden
* Leichte Austauschbarkeit und Fehlersuche: 
    * Fehler können leicht auf einzelne Klassen zurückverfolgt werden 
    * Wenn eine bestimmte Klasse fehlerhaft oder sonst problematisch ist, kann sie einfach durch eine andere Klasse ersetzt werden

---

## Zusammenfassung: Konventionen bei Benennung von Variablen
* In diesem Kapitel haben wir weitere Namenskonventionen eingeführt:
    * lokale Variablen (im Rumpf einer Methode verwendet) beginnen mit ```l_``` (außer Zählvariablen wie i, j, $\ldots$)
    * Instanzenvariablen beginnen mit ```m_``` (für engl. ```member```)
    * Klassenvariablen beginnen mit ```s_``` (für ```static```)
    * Parameter in Methodendefinitionen beginnen mit ```p_```
    * Namen von Interfaces beginnen mit ```I```, Namen von Klassen mit ```C```
---

## Links

* [OOP Introduction on Oracle Java pages](https://docs.oracle.com/javase/tutorial/java/concepts/)
* [OOP Tutorial Prof. Chua Hock Chuan, NTH Singapore](programming/java/J3a_OOPBasics.html) Ziemlich detaillierte akademische Einführung.
* [dev.to page OOP introduction](https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming) Informelle Einfühurung, nette Beispiele
* [Java OOPS Concepts @beginnersbook.com](https://beginnersbook.com/2013/04/oops-concepts/) Unklar, wer dahinter steckt, sieht aber auf den ersten Blick ok aus. 
* [Objektorientierung @java-tutorial.org](https://www.java-tutorial.org/objektorientierung.html) Sehr knappe Übersicht auf Deutsch.
* [Objektorientierung @jaxenter.de](https://jaxenter.de/java-kurs-teil-3-49623) Ausführlichere Einführung auf Deutsch.