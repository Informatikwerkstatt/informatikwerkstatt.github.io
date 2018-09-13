---
layout: slide
permalink: /oop-grundlagen/
---

# Informatikwerkstatt
__Objekt-Orientierte Programmierung Grundlagen__

---

## Objekt-Orientierte Programmierung (OOP) - was ist das?

<!-- was ist der Sinn von OOP -->
* Moderner Programmieransatz, Mainstream seit 1990ern
* Idee: Intuitive Beschreibung von Systemen und ihren Bestandteilen (Objekten) durch 
    * Zustand (z.B. Fahrrad hat Farbe, aktuelle Geschwindigkeit, Gang)
    * Verhalten (z.B. Gang wechseln, beschleunigen, bremsen) 
* Prinzip **Abstraktion**:
    * Fokus auf das Wichtige (was tut ein Objekt?), Verbergen des Unwichtigen (wie?) &rarr; [Interfaces](#/3/15)
* Prinzip **Kapselung**:
    * "Zusammenbinden" von Zustand (Daten) und Verhalten  
* Prinzip **Vererbung**
    * Abbilden von Ähnlichkeiten und Unterschieden zwischen Objekten
* Prinzip **Polymorphismus** 
    * Kommt später noch ...
<!-- Polymorphismus würd ich hier weglassen und nur auf Overloading und evtl. overriding beschränken -->

---

## Klasse & Objekt
<!-- was ist eine Klasse, was ist ein Objekt, was ist der Sinn von diesem Konzept -->

* Objekt: Konkreter Bestandteil eines Systems, den man mit Software beschreiben will
    * virtuell (z.B. konkretes Dokument auf dem Rechner) oder physisch (konkretes Fahrrad)
    * hat Zustand, beschrieben durch Eigenschaften und deren Ausprägungen (z.B. ```farbe=blau```)
    * hat Verhalten, beschrieben durch Methoden (z.B. ```wechseleGang```)
* Klasse: Abstrakte Beschreibung  einer Menge ähnlicher Objekte (d.h. Objekte vom selben Typ)
    * z.B. die Klasse aller Fahrräder
    * definiert Eigenschaften und generelles Verhalten, die allen Fahrrädern gemeinsam sind
* Softwaretechnisch: Klasse erlaubt uns, konkrete Objekte aus Ihr zu erzeugen 

===

### Beispiel für Klasse

* Hier seht Ihr eine rudimentäre Definition einer Klasse mit Eigenschaften
```java
  public class CAuto {
  // Definiere Eigenschaften
    private String m_farbe;
    private String m_marke;
    private int m_kw;       // Leistung in kW
    private int m_tempo;    //aktuelle Geschwindigkeit
    private int m_gang;     // aktueller Gang

    ...
  }
  ```
* Wir sehen, dass die Eigenschaften zusammen den Zustand eines Fahrrads beschreiben
* Manche Eigenschaften sind unveränderbar (z.B. Farbe, Marke), andere dynamisch (aktueller Gang, Geschwindigkeit)

===

### Von der Klasse zum Objekt: Instanziierung

* Instanziierung = Erzeugung eines konkreten Objekts einer Klasse
* Das konkrete Objekt nennen wir auch *Instanz* der Klasse
* Dazu wird der ```new``` Operator verwendet. Er initialisiert das Objekt:
    * allokiert Speicher für neues Objekt (wieviel, hängt von Klasse (Typ) des Objekts ab)
    * gibt eine Referenz auf diesen Speicherbereich zurück, die einer Variable zugewiesen werden kann
    ```java
    CAuto einAuto = new CAuto("rot", "beetle", 100);
    ```
    * ruft dabei eine spezielle Methode der Klasse auf: Den *Konstruktor*.

===

### Konstruktor
* Beispiel für unsere Klasse ```Auto```
  ```java
  public CAuto(String p_farbe, String p_marke, int p_leistung) {
      m_farbe = p_farbe;
      m_marke = p_marke;
      m_kw = p_kw;  // Leistung in kW
      m_tempo = 0; // Initialzustand: Auto steht
      m_gang = 1;  //Initialzustand: 1. Gang 
  }
  ```
* Konstruktor ist ein Codeblock innerhalb einer Klassendefinition
* Ähnelt einer Methode, hat aber Namen der Klasse und keinen Rückgabewert 
* Für eine Klasse kann es mehrere Konstruktoren mit unterschiedlichen Argumenten geben

===

### Schlüsselwort ```this```

<!-- was ist this, mit einem Schaubild -->
* Innerhalb Konstruktor oder einer Instanzenmethode:  ```this``` referenziert das Objekt, dessen Konstruktor oder Methode aufgerufen wird.
* Liefert die Referenz auf den Speicherbereich zurück, in dem das Objekt gespeichert ist
* Nutzung von :
    * Auflösung von Namenskonflikten
    * Aufruf von Methoden und Konstruktoren
* Betrachte Beispiel 
  ```java
    public Class CAuto{
    ...
      public CAuto getMe(){
        return this;
      }
    }
  ```
* ... mit Aufruf:
  ```java
      CAuto l_auto1 = new CAuto("rot", "lada", 60);
      CAuto l_auto2 = l_meinAuto.getMe();
  ``` 
* Was passiert hier? 

===

### this: Diskussion des Beispiels

* Das folgende Bild verdeutlicht noch einmal die Auswirkungen von ```new()``` und die oben beschriebene Anwendung von ```this```
* Variablen ```l_auto1``` und ```l_auto2``` zeigen auf dasselbe Objekt!

![Beispiel](images/2_new_this.png#center)

---

## @Let's try

<!-- Beispiel Klasse erstellen mit ein paar Eigenschaften und aus der main Instantiieren -->

1. Erstelle eine Klasse ```Auto``` mit einer ```main()```-Methode
2. Definiere ein paar Eigenschaften für Deine Klasse
3. Erzeuge in der ```main()``` drei unterschiedliche Instanzen Deiner Klasse
4. Nutze ```System.out.println()```, um die Instanzen auszugeben. Was siehst Du? Was bedeutet das? 
5. Prüfe die Identität der beiden oben definierten Variablen ```l_auto1``` und ```l_auto2``` in der ```main()```-Methode! Verwende den Operator ```==```. 
---

## Methoden

<!-- Was sind Methoden, wozu braucht man sie, wie sehen sie aus -->
* Methode implementiert Verhalten einer Klasse
* Besteht aus
    * Modifikatoren
    * Signatur: Name + Parameter (mit Typen) + Ergebnistyp (s. [VL1](../java-grundlagen/#/5/2))
* Wir ergänzen unsere Klasse ```Auto``` um zwei Methoden:
  ```java
  public Class CAuto {
   // Eigenschaften
  ...
  //Konstruktor
  ...
  // definiere Verhalten
    public boolean schalte(int p_gang) {
        m_gang = p_gang;
        return true;  // Schalten ist immer erfolgreich
    }

    public boolean beschleunige(int p_inkrement) {
        m_tempo += p_inkrement; 
    }
  }
```
* **@Profis**: Warum haben die Methoden den Rückgabetyp ```boolean```? Wie könnte man das noch lösen?

===

### Aufruf einer Methode
* Nach Erzeugen einer Instanz von ```CAuto``` können die Methoden des Objektes aufgerufen werden, z.B.
  ```java
  CAuto l_meinAuto = new CAuto("gelb", "opel", 140);
  l_meinAuto.schalte(2); //schalte in den 2. Gang
  l_meinAuto.beschleunige(5); //beschleunige um 5 Einheiten
  ```
* Das Schlüsselwort ```return``` wird verwendet, um den Rückgabewert einer Methode zu spezifizieren.

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
* Beipiel --  Klasse ```Auto```:
  ```java
  public String getFarbe() {
    return m_farbe;
  }
 
  public int getKw(){
    return m_kw;
  };
  ``` 

===

### Setter: Konventionen und Beispiel

<!-- was ist ein setter, wozu braucht man es, ebenso wann überprüft man Daten, in dem Objekt gesetzt werden -->
* Setter für Eigenschaft ```m_prop``` heißt ```setProp(.)```
    * Ergebnistyp ```void``` (kein Rückgabewert)
    * i.d.R. ein Eingabeparameter mit dem Typ von ```m_eigenschaft```
* Beipiel: Zwei Getter unserer Klasse ```Auto```:
  ```java
  public void setFarbe(String p_farbe) {
    m_farbe = p_farbe
  }
 
  public void setKw(int p_kw){
    m_kw = p_kw;
  };
  ``` 
* In Setter-Methoden werden häufig die Eingabeparameter geprüft (z.B. ```!= null```, eingeschränkte Wertebereiche)
* Fehler abfangen z.B. durch  "Werfen" von Exceptions!

---

## @Let's try

<!-- Beispiel mit Getter / Setter + eine eigene Methode, die irgendetwas mit den Eigenschaften macht -->
1. Definiere Getter und Setter-Methoden für die Klasse CAuto
2. Definiere sinnvolle Regeln für mögliche Werte und prüfe deren Einhaltung in der Setter-Methode
3. Schreibe eine eigene Methode ```leistungPS()```, die die Leistung des Autos in der Maßeinheit ```PS``` zurückgibt.

---

## @Home/Übung
1. Mache die Methoden ```schalte()``` und ```beschleunige()``` realistischer:
    * Definiere für jedes ```CAuto``` zusätzliche Eigenschaften für die Höchstgeschwindigkeit und die Anzahl der Gänge
    * Prüfe beim Versuch, die Methoden auszuführen, ob die Methode ausgeführt werden kann; ansonsten gib ```false``` zurück
    * @Profis: Ergänzt die Gangschaltung um Leerlauf und Rückwärtsgang und passt die Methoden ```schalte()``` und ```beschleunige()``` entsprechend an. 
---

## Ich sehe Dich - Sichtbarkeit

<!-- public / private / protected, private & public im Detail, protected muss nur erwähnt werden -->

* Wesentlich für das Prinzip der Kapselung: Sichtbarkeit
    * Kann ich auf den Wert einer Eigenschaft zugreifen oder eine Methode aufrufen?
* Die Sichtbarkeit von Eigenschaften und Methoden kann vom Programmierer durch einen Modifikator eingestellt werden
    * ```private```: nur innerhalb der Klasse sichtbar
    * ```public```: auch für beliebige andere 
    * ```protected```: innerhalb der KLasse sowie für von der Klasse abgeleitete Subklassen sichtbar, siehe [Vererbung](#/10))

---

## Es geht auch ohne Objekt - Static

<!-- Was ist static, wann benutzt man es, wofür ist es gut und wann benutzt man es nicht -->
* Bisher: Klassen als Blaupausen für Objekte 
* Jedes Objekt hat eigene Eigenschaften (_Instanzenvariablen_)
* Jedes Objekt hat individuelles Verhalten durch Methoden (_Instanzenmethoden_)
* Was machen wir mit "globalen" Eigenschaften oder Verhalten, die für alle Objekte gleich sind?
    * Z.B. jedes Autoobjekt mit eindeutigen Seriennummer ausstatten
    * Z.B. eine Übersicht über die Anzahl der bisher erzeugten Instanzen der Klasse verwalten
* Mit dem Schlüsselwort ```static``` können wir sog. [_Klassenvariablen_](#/?) sowie [_Klassenmethoden_](#/?) definieren

===

### Klassenvariablen
* Bezeichnen Eigenschaften einer Klasse; nur einmal definiert.
* Z.B.: Jedesmal, wenn Auto erzeugt wird &rarr; Wert der Klassenvariable um 1 hochzählen
```java
  public class CAuto {
    private String m_farbe;
    private String m_marke;
    ...
  // Klassenvariable
    private static int s_anzAutos = 0;
  }
 ... 
  public CAuto(String p_farbe, String p_marke, int p_leistung) {
      m_farbe = p_farbe;
      m_marke = p_marke;
     ...
      id = ++s_anzAutos; // Erhöhen der Klassenvariable
  }
  ```
* Zugriff auf Wert über Setter und Getter:
```java
int anzFahrzeuge = CAuto.getAnzAutos();
```
* Bei nicht ```private``` Klassenvariablen und Konstanten auch Direktzugriff möglich
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
    * Zugriff auf ```static``` Eigenschaften (Klassenvariablen) mit Setter- und Getter-Methoden,  siehe [oben](#/?)
      ```java
       public static int getAnzahlAutos() {
         return s_anzAutos;
       }
      ```
    * Libraries für generische Berechnungen, z.B. 
    ```Math.max(number1, number2)```
---

## @Let's try

<!-- static mit private / public, Methoden mit public / private -->
1. Ergänzt die Definition der Klasse ```CAuto``` um die oben beschriebenen Klassenvariable
2. Füge Setter- und Getter-Methoden hinzu
3. Testet den Zugriff auf die Methoden aus dem ```main()``` Programm
4. Denkt Euch eine andere ```private``` Klassenvariable aus und fügt sie hinzu. Testet den Zugriff darauf
    * aus der Klasse heraus
    * von außerhalb der Klasse

    Was stellt Ihr fest?    

---

## Vererbung

<!-- was ist Vererbung allgemein mit Beispiel, wofür verwendet man es, Beispiel mit unterschiedlich großen Boxen, abstrakte Klassen weg lassen -->

---

## Interface

<!-- was sind Interfaces, wozu sind sie gut, wofür braucht man sie -->

---

## Überladen

<!-- was heisst überladen, wofür braucht man es und welche Einschränkungen gibt es beim Überladen -->

---

## @Let's try

<!-- ein Beispiel mit Interface und 2 abgeleiteten Klassen vom Interface und dann noch einer dritten Klasse, die von einer Klasse abgeleitet wurde -->

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

-->

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

## Links

* [OOP Introduction on Oracle Java pages](https://docs.oracle.com/javase/tutorial/java/concepts/)
* [OOP Tutorial Prof. Chua Hock Chuan, NTH Singapore](programming/java/J3a_OOPBasics.html) Ziemlich detaillierte akademische Einführung.
* [dev.to page OOP introduction](https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming) Informelle Einfühurung, nette Beispiele
* [Java OOPS Concepts @beginnersbook.com](https://beginnersbook.com/2013/04/oops-concepts/) Unklar, wer dahinter steckt, sieht aber auf den ersten Blick ok aus. 
* [Objektorientierung @java-tutorial.org](https://www.java-tutorial.org/objektorientierung.html) Sehr knappe Übersicht auf Deutsch.
* [Objektorientierung @jaxenter.de](https://jaxenter.de/java-kurs-teil-3-49623) Ausführlichere Einführung auf Deutsch.