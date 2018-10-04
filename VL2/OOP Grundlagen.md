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
3. Beim Aufruf von ```new``` wird eine spezielle Methode der [Konstruktor](/#/5) aufgerufen

<small>1: Wieviel Speicher benötigt wird, ist durch die Struktur der Klasse festgelegt</small>

---

## Eigenschaften

<span class="rrd" data-rrd="Diagram(Optional( Choice(0, Terminal('public'), Terminal('protected'), Terminal('private')), 'skip'),Optional( Terminal('static'), 'skip'), Optional( Terminal('final'), 'skip'), NonTerminal('Datentyp'),NonTerminal('Eigenschaft- / Variablenname'),Optional(Sequence(Terminal('='),Choice(0,Sequence(Terminal('new'),NonTerminal('Klasse')),NonTerminal('Wert'))), 'skip'),Terminal(';'))"></span>

> Eigenschaften / Properties sind Variablen innerhalb einer Klasse, die für jedes Objekt vorhanden sind und individuell für das Objekt benutzt werden können. Sie beschreiben den Zustand des Objektes

---

## Konstruktor

* Konstruktoren sind eine spezielle Struktur innerhalb einer Klassendefinition
* Ähnelt einer Methode, hat aber Namen der Klasse und keinen Rückgabewert 

```java
// Default Konstruktor - ohne Parameter
public CAuto()
{
  // ruft den Konstruktor mit mehreren Parametern auf
  this( "rot", "VW", 5, 250 );
}

// überladener Konstruktor - hat mehrere Parameter
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
      public CAuto get()
      {
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

1. Erstelle eine Klasse ```CAuto``` mit einer ```main()```-Methode (vollständiges Programm)
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
      m_gang = p_gang % m_anzahlGaenge;
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

<span class="rrd" data-rrd="Diagram(NonTerminal('Variable'),Terminal('.'),NonTerminal('Methodenname'),Terminal('('),Optional('Parameter', 'skip'),Terminal(')'))"></span>

Nach Erzeugen einer Instanz von ```CAuto``` können die Methoden des Objektes aufgerufen werden

```java
CAuto l_meinAuto = new CAuto("gelb", "opel", 140);

//schalte in den 2. Gang
l_meinAuto.schalte(2);

//beschleunige um 5 Einheiten
l_meinAuto.beschleunige(5);
```

---

### Getter

> _Getter_ sind Methoden, meist mit ```get``` im Namen, die Daten aus einem Objekt nach außen liefern. Über den Getter können die Daten intern unverändert bleiben und somit sichert der Getter den Zustand des Objektes ab

```java
public String getFarbe()
{
  return m_farbe;
}

public CAuto get()
{
  return this;
}
```

&rArr; Was ist bei den beiden Gettern der Unterschied?

===

### Absicherung mittels Getter

> Bei primitven Typen und bei String wird intern eine Kopie der Daten erzeugt und zurückgeliefert, bei allem anderen eine Referenz, die dann veränderbar ist

```java
public String getFarbe()
{
  return m_farbe;
}

public CAuto get()
{
  return new CAuto( m_farbe, m_marke, m_anzahlGaenge, m_maximaleGeschwindigkeit );
}
```

&rarr; hier wird innerhalb das Getters das Objekt kopiert, damit das Originalobjekt nicht verändert werden kann (vergleiche [this](/#/5))

---

## Setter

> _Setter_ sind ebenfalls Methoden, meist mit ```set``` im Namen, die das gegenteil des Getters sind und Werte setzen. Die Werte, die über einen Setter gesetzt werden können, sollten __immer__ geprüft werden, damit das Objekt in einem konsistenten Zustand bleibt. Wenn ein fehlerhafter Wert übergeben wird kann mittels Werfen einen [Exception](/java-grundlagen/#/19) eine Fehlerbehandlung veranlasst werden

```java
  public void schalte( final int p_gang )
  {
      // Wert setzen
      m_gang = p_gang % ( m_anzahlGaenge + 1 );

      // falls der Wert falsch ist, wird er strikt richtig gemacht anstatt eine Exception zu werfen
      m_gang = m_gang < 0 ? 0 : m_gang;
  }
```

---

## @Let's try

1. Erweitere die ```CAuto``` Klasse um die Eigenschaft _Leistung in KW_
2. Schreibe dafür einen Getter und einen Setter mit entsprechender Überprüfung
3. Ergänze eine Methode ```double getPS()```, der die KW Zahl in PS umrechnet, die [Formel](https://de.wikipedia.org/wiki/Pferdest%C3%A4rke) lautet: $KW \cdot 1.36 = PS$
4. __@Profis__: Wie könnte man sinnvoll die möglichen Gangwechsel definieren?

---

## @Home / Übung

Mache die Methoden ```schalte()```, ```beschleunige()```, ```bremse(.)``` realistischer:

1. Ergänze das Schalten um Leerlauf und Rückwärtsgang
2. Prüfe beim Versuch, die Methoden auszuführen, die Eingaben und fange Fehler ab
3. __@Profis__: Realisiere einen einfachen Zusammenhang zwischen eingelegtem Gang und ändern der Geschwindigkeit

---

## Ich sehe Dich - Sichtbarkeit

> Bei [Methode](/#/7) wurden die drei Schlüsselwört ```public```, ```protected``` und ```private``` gezeigt, mit Hilfe dieser wird die so genannte _Sichtbarkeit_ festgelegt. Sichtbarkeiten können für Klassen, Eigenschaften und Methoden festgelegt werden

* ```public``` ist von überall sichtbar
* ```protected``` ist nur in abgeleiteten Klassen sichtbar
* ```private``` ist nur in der Klasse selbst sichtbar
* über Sichtbarkeiten können Zugriffe in der Benutzung beschränkt werden
* zuerst immer alles ```private``` setzen und wenn es zu restriktiv ist, Schritt für Schritt die Sichtbarkeit erhöhen

Note: Erklärung anhand des Büros von Prof Müller: Sitzt Prof Müller während der Sprechstunde mit einem Studi im Büro und hat die Tür zu, dann ist das Gespräch "privat", ist die Tür zum Sekretariat offen, aber zum Gang zu, dann ist das Gespräch "protected", weil Sekretärin mithören kann, aber sie ist ja auch Mitarbeiterin, wenn beide Türen offen sind, dann kann jeder auf dem Gang auch das Gespräch mithören. 

---

## Es geht auch ohne Objekt &rarr; Static

> Mit dem Schlüsselwort ```static``` ist es möglich Methoden oder Eigenschaften ohne Objekt benutzen zu können. Das bekannsteste Beispiel sind die [mathematische Funktionen](https://docs.oracle.com/javase/10/docs/api/java/lang/Math.html) z.B. ```Math.sin(3)```. Statische Methoden sind nützlich, wenn es sich um eine reine funktionale Struktur ohne Variablen etc.

&rArr; Hinweis: Aus _static_ Methoden kann man nur auf _static_ Eigenschaften & Methoden zugreifen, aber aus _nicht static_ Methoden, kann man auf alle zugreifen

Note: Wozu kann man das Konzept von "static" sinnvoll verwenden? Problem: Seriennummer für die Autoklasse, wie lösen wir das?

===

### Auto mit Seriennummer
__Klassenvariablen & -methoden__

```java
public class CAuto {
  // statische Eigenschaft für den Zähler der Autos
  private static int s_anzahl;

  private final String m_farbe;
  private final String m_marke;
  private final int m_maximaleGeschwindigkeit;
  private final int m_anzahlGaenge;
  // individuelle Seriennummer des Autos
  private final int m_seriennummer;

  private int m_aktuelleGeschwindigkeit;
  private int m_gang = 1;
  

  public CAuto()
  {
    // ruft den Konstruktor mit Parametern auf
    this( "rot", "VW", 5, 250 );
  }

  public CAuto( final String p_farbe, final String p_marke, final int p_anzahlGaenge, final int p_maximaleGeschwindigkeit)
  {
    m_farbe = p_farbe;
    m_marke = p_marke;
    m_anzahlGaenge = p_anzahlGaenge;
    m_maximaleGeschwindigkeit = p_maximaleGeschwindigkeit;

    // Zuweisung der Objekt Seriennummer aus der statischen Variablen
    m_seriennummer = s_anzahl;
    // inkrementieren der statischen Variablen
    s_anzahl++;
  }

  // --- Methoden für die Seriennummer & Anzahl ---

  // statische Methode, um die Anzahl der Autos zu erhalten
  public static int getAnzahl()
  {
    return s_anzahl;
  }

  // Methode des Autos, um die individuelle Seriennummer zu erhalten
  public int getSeriennummer()
  {
    return m_seriennummer;
  }
}
```

===

## @Let's try

1. Ergänze die Definition der Klasse ```CAuto``` um die obigen Klassenvariablen
2. Testet die Methoden zur Anzahl Autos und zu Seriennummer
3. Implementiert eine Seriennummer nach dem Schema: ```0-0, 0-1, 0-2, 0-3, 0-4, 0-5, 0-6, 0-7, 0-8, 0-9, 1-0...``` immer wenn die hintere Stelle 10 erreicht wird die vordere Stelle inkrementiert, die Seriennummer soll dann als String ausgegeben werden

---

## Generalisierung, Spezialisierung, Vererbung
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
* Die Eingabe erfolgt über die Kommandozeile in der Form (siehe [Parameter von Main](/java-grundlagen/#/8/3))
  
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