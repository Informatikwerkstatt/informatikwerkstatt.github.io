---
layout: slide
permalink: /oop-grundlagen/
---

# Informatikwerkstatt
__Objekt-Orientierte Programmierung Grundlagen__

---

## Objekt-Orientiert - was ist das?

<!-- was ist der Sinn von OOP -->

---

## Klasse & Objekt

<!-- was ist eine Klasse, was ist ein Objekt, was ist der Sinn von diesem Konzept -->

---

## Eigenschaften

<!-- was sind Eigenschaften, wozu braucht man die-->

---

## Instantiierung

<!-- was macht new, Stichwort Speicher, am besten mit Boxen, wo man was rein tun kann erklären -->

===

### this

<!-- was ist this, mit einem Schaubild -->

---

## @Let's try

<!-- Beispiel Klasse erstellen mit ein paar Eigenschaften und aus der main Instantiieren -->

---

## Methoden

<!-- Was sind Methoden, wozu braucht man sie, wie sehen sie aus -->

===

### Konstruktor

<!-- was ist ein Ctor, wofür wird er benötigt -->

===

### Getter

<!-- was ist ein getter, wozu braucht man es -->

===

### Setter

<!-- was ist ein setter, wozu braucht man es, ebenso wann überprüft man Daten, in dem Objekt gesetzt werden -->

---

## @Let's try

<!-- Beispiel mit Getter / Setter + eine eigene Methode, die irgendetwas mit den Eigenschaften macht -->

---

## Es geht auch ohne Objekt - Static

<!-- Was ist static, wann benutzt man es, wofür ist es gut und wann benutzt man es nicht -->

---

## Ich sehe Dich - Visibility

<!-- public / private / protected, private & public im Detail, protected muss nur erwähnt werden -->

---

## @Let's try

<!-- static mit private / public, Methoden mit public / private -->

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

## @Übungsaufgabe

> Schreiben Sie ein Programm, mit dem man Brüche berechnen kann. 

* Brüche sollen als Klassen mit Interfaces konstruiert werden 
* Berechnungsfunktionen als Methoden
* Die Eingabe erfolgt über die Kommandozeile in der Form 
  
   ```shell
   java Bruch 1 / 2 + 3 / 4
   ```
   
* Alle 4 [Operationen](https://de.wikipedia.org/wiki/Bruchrechnung#Rechnen_mit_Bruchtermen) (Addition, Subtraktion, Multiplikation, Division) müssen implementiert werden. 
* __Freiwillig:__ Implementation eines Algorithmus zum Kürzen des berechneten Bruchs, also aus $\frac{2}{4} \Rightarrow \frac{1}{2}$ und aus $\frac{2}{1} \Rightarrow 2$
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjgwNjkyMjEyXX0=
-->