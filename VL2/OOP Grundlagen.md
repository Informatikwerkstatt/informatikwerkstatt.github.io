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
    public Class CAuto
    {
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
public class CAuto
{
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
public class CAuto
{
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
2. Testet die Methoden zur Anzahl Autos und zur Seriennummer mit Hilfe eines Main-Programms
3. Implementiert eine Seriennummer nach dem Schema: ```0-0, 0-1, 0-2, 0-3, 0-4, 0-5, 0-6, 0-7, 0-8, 0-9, 1-0...``` immer wenn die hintere Stelle 10 erreicht wird die vordere Stelle inkrementiert, die Seriennummer soll dann als String ausgegeben werden

Note: Karton-Drone vorführen, um das Thema "Vererbung" einzuleiten und einen kleinen Break zu haben

---

## Everything is Object - Vererbung

&rArr; Wie bauen wir nun einen LKW, ein Motorrad und einen SUV dazu, so dass alle eine Seriennummer haben, schalten können etc. zusätzlich soll der LKW noch eine Ladung bekommen und das Motorrad einen Sozius?

===

### Kochrezept

* Wir _verallgemeinern_ unsere ```CAuto``` Klasse zu _Fahrzeug_ &rarr; Generalisierung
* _Fahrzeug_ ist eine _Oberklasse_ von ```CAuto```
* ```CAuto``` wird eine _Unterklasse_ von Fahrzeug &rarr; Spezialisierung
* ebenfalls wird Motorrad & LKW eine _Spezialisierung_ von Fahrzeug
* SUV wird eine Spezialisierung von ```CAuto```

&rArr; Motorrad, LKW, Auto und SUV sind Fahrzeuge und SUV ist ein Auto

===

### Graphische Notation

[Unified Modeling Language (UML)](https://de.wikipedia.org/wiki/Unified_Modeling_Language#Klassen)

![UML](images/vererbung.png#half)


===

### Warum macht man das

* um Code-Redundanz zu vermeiden, man muss Methoden nur einmal implementieren
* um Eigenschaften bei Ableitung erweitern zu können
* um Struktur in die Software zu bekommen &rarr; um ein möglichst gutes Modell des Problems zu erhalten
* um saubere Trennung von Elementen anhand ihrer Funktionalität & Eigenschaften zu erhalten

---

## Vererbung

> Vererbung ist die Möglichkeit in OPP Klassen miteinander in Beziehung zu setzen. Man nutzt die _Ähnlichkeit_ zwischen Klassen und gruppiert sie, dass man eben entweder _generalisiert_ oder _spezialisiert_. Man spricht bei der _Spezialisierung_ von _ableiten_, was einer _ist-ein_ Beziehung entspricht

===

### Ein SUV ist ein Auto

```java
public class CSUV extends CAuto
{
  private final m_offroadFahrbar;

  public CSUV()
  {
    // ruft den SUV Konstruktor auf
    this( "rot", "VW", 5, 250, false );
  }

  public CSUV( final boolean p_offroadFahrbar )
  {
    // ruft den SUV Konstruktor auf
    this( "rot", "VW", 5, 250, p_offroadFahrbar );
  }

  public CAuto( final String p_farbe, final String p_marke, final int p_anzahlGaenge, final int p_maximaleGeschwindigkeit, final boolean p_offroadFahrbar )
  {
    // Aufruf des Konstruktur von CAuto
    super( p_farbe, p_marke, p_anzahlGaenge, p_maximaleGeschwindigkeit );
    m_offroadFahrbar = _p_offroadFahrbar;

  }
}
```

===

### Vererbung bei Klassen

<span class="rrd" data-rrd="Diagram(Terminal('public'), Terminal('class'), NonTerminal('Klassenname der abgeleiteten Klasse'), Optional(Sequence( Terminal('extends'), NonTerminal('Oberklasse')), 'skip'))"></span>

* um von einer Klasse zu erben / abzuleiten, wird das Schlüssewort ```extends``` verwendet
* ist eine Klasse mit ```public final class``` deklariert, kann diese nicht abgeleitet werden
* mit ```super``` wird der Konstruktor der Oberklasse aufgerufen, dies muss die erste Zeile in dem abgeleiteten Konstruktor sein
* eine Klasse kann mittels ```extends``` nur von _genau einer_ anderen Klass erben

===

### Interfaces

> Interfaces legen nur die public Methoden-Definition fest, die in einer Klasse enthalten sein müssen. Die konkrete Implementierung liegt dann in der Klasse, Interfaces können nicht instantiiert werden

```java
public interface IFahrzeug
{
  void schalte( final int p_gang );
  void beschleunige( final int p_inkrement );
  void bremse( final int p_dekrement );
}
```

===

### Implementierung des Fahrzeug-Interface

```java
public class CAuto implements IFahrzeug
{
  // --- Eigenschaften ---
  // --- Konstruktoren ---
  // --- Methoden / Verhalten ---

  @Override
  public void schalte( final int p_gang )
  {
      m_gang = p_gang % m_anzahlGaenge;
      m_gang = m_gang < 0 ? 0 : m_gang;
  }

  @Override
  public void beschleunige( final int p_inkrement )
  {
      m_aktuelleGeschwindigkeit += p_inkrement;
      m_aktuelleGeschwindigkeit = m_aktuelleGeschwindigkeit > m_maximaleGeschwindigkeit ? m_maximaleGeschwindigkeit : m_aktuelleGeschwindigkeit;
  }
  
  @Override
  public void bremse( final int p_dekrement )
  {
      m_aktuelleGeschwindigkeit -= p_dekrement;
      m_aktuelleGeschwindigkeit = m_aktuelleGeschwindigkeit < 0 ? 0 : m_aktuelleGeschwindigkeit;
  }
}
```

===

### Vererbung mit Interfaces

<span class="rrd" data-rrd="Diagram(Terminal('public'), Terminal('class'), NonTerminal('Klassenname der abgeleiteten Klasse'), Optional(Sequence( Terminal('extends'), NonTerminal('Oberklasse')), 'skip'), Optional( Sequence(Terminal('implements'), OneOrMore( NonTerminal('Interface-Klasse'), Terminal(','))), 'skip'))"></span>

* Interface werden mit ```implements``` vererbt
* eine Klasse kann von mehreren Interfaces erben
* Interface-Methoden _müssen_ implementiert werden
* Implementierte Interface Methoden müssen mit der Annotation ```@Override``` versehen werden

--- 

## Let's try

1. Ergänze in dem Auto-Beispiel die SUV-Klasse und ergänze sie um einen passenden Getter
2. Ergänze das Interface und die dazu gehörige Benutzung in der Auto-Klasse
3. Schreibe ein Hauptprogramm, in dem einmal eine Variable vom Typ ```IFahrzeug``` erstellt wird, in der einmal ein Auto- und einmal eine SUV Objekt abgelegt wird
4. Rufe dann die entsprechenden Methoden der jeweiligen Klassen auf

&rArr; Was stellst Du fest?

---

## Let's try

1. Ergänze nun die Klassen für LKW und Motorrad mit passenden Methoden (Motorrad und LKW müssen je eine individuelle Eigenschaft mit Getter ggf mit Setter erhalten)
2. Ergänze nun das Hauptprogramm um diese beiden neuen Objekte und führe es aus
3. __@Profis__ Wie könnte man das [Diagramm](/#/15/2) sinnvoll mit Interfaces ergänzen?
4. __@Profis__ Ergänze die SUV Klasse um verschiedene Farmodi (Outdoor, Offroad, Urban) mit Hilfe eines [Enums](https://www.baeldung.com/a-guide-to-java-enums)

&rArr; Was stellst Du für diese beiden neuen Objekte fest?

---

## Überladen / Overloading

> Überladen bedeuetet, dass man eine Methode (gleicher Name) mehrfach innerhalb einer Klasse hat, wobei sie sich nur anhand ihrer Parameter unterscheiden. Ein Überladen anhand des Rückgabewertes ist nicht möglich

```java
public class CUeberladen
{
// --- korrektes Überladen anhand unterschiedlicher Parameter ---

  public void halloWelt()
  {
    System.out.println( "Hallo Welt" );
  }

  public void halloWelt( final String p_text )
  {
    System.out.println( "Hallo Welt: " + p_text );
  }


  // --- fehlerhaftes Überladen mit Compilerfehler ---

  public int getValue()
  {
    return 5;
  }

  public String getValue()
  {
    return "fünf";
  }
}
```

===

### Überladen bei Vererbung

> Jede nicht _final_ deklarierte Methode in einer Klasse, die nicht _final_ deklariert ist oder ein Enum ist, kann in jeder beliebigen Unterklasse überladen werden
```java
public class COberklasse
{
  public void halloWelt()
  {
    System.out.println( "Hallo Welt Oberklasse" );
  }

  // -- final verhindert das weitere Überladen
  public final void foobar()
  {
    System.out.println( "Foobar Oberklasse" );
  }
}

public class CUnterklasse extends COberklasse
{
  @Override
  public void halloWelt()
  {
    System.out.println( "Hallo Welt Unterklasseklasse" );
  }

  // -- hier entsteht nun ein Compilerfehler!
  @Override
  public final void foobar()
  {
    System.out.println( "Foobar Unterklasse" );
  }
}
```

=== 

### toString()

> Überladen der Methode ```toString()``` ermöglicht es die Ausgabe eines Objektes anzupassen. Mit Hilfe von [MessageFormat](https://docs.oracle.com/javase/10/docs/api/java/text/MessageFormat.html) können schnell die Ausgaben formatiert werden

```java
public class COhneToString
{
}

public class CMitToString
{
  private final String m_message;

  public CMitToString( final String p_message )
  {
    m_message = p_message;  
  }

  @Override
  public String toString()
  {
    return MessageFormat.format( "{0}: {1}", super.toString(), m_message );
  }
}

import java.text.MessageFormat;

public final class CAusgabe
{
    private CAusgabe()
    {
    }

    public static void main( final String[] p_args )
    {
        final COhneToString l_ohne = new COhneToString();
        final CMitToString l_mit = new CMitToString( "Hallo World" );

        System.out.println( l_ohne );
        System.out.println( l_mit );
    }
}
```

```shell
COhneToString@e73f9ac
CMitToString@61064425: Hallo World
```

===

### equals() und hashCode()

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