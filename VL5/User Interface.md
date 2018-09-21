---
layout: slide
permalink: /user-interface/
---

# Informatikwerkstatt
__User Interface__

---

## Unser Szenario - Der Taschenrechner

> Wir bauen einen Taschenrechner, der Plus, Minus, Mal und Geteilt kann (Klammersetzung und Punkt-vor-Strichrechnung ignorieren wir). Wer möchte kann auch noch eine Rest-Division (Modulo) einbauen

* Komma-Zahlen sollen eingebar sein
* Rückgängigtaste für die aktuelle Eingabe soll vorhanden sein
* Berechnung soll korrekt funktionieren

<small>Eine [Beispiel APK](assets/taschenrechner.apk) gibt es zum anschauen</small>

Note: Studis fragen, was man dafür wohl alles braucht: UI Layout, Events, Algorithmus

---

## Interface Aufbau

<!-- https://developer.android.com/training/basics/firstapp/building-ui -->

===

### View

Ein [View](https://developer.android.com/reference/android/view/View) ist die oberste Ebene für graphische Layouts.

===

### ViewGroud

Eine [ViewGroup](https://developer.android.com/reference/android/view/ViewGroup) ist eine Sammlung von View-Containern eines Layouts, sowohl View wie auch ViewGroup können miteinander verbunden werden

![View und ViewGroup - Quelle https://developer.android.com/training/basics/firstapp/building-ui ](https://developer.android.com/images/viewgroup_2x.png)

---

## Sprich mit mir - Darstellungselemente

<!-- https://developer.android.com/training/keyboard-input/style 
-->

===

### Edittext


===

### Textview

===

### Button

---

## Alles im Lot - Layouts

* Layouts sind _sehr_ komplexe Strukturen, um eine App darzustellen
* Mit Hilfe von Layouts kann die Darstellung für
    * unterschiedliche Displaygrößen entworfen werden
    * horizontales / vertikales Layout erzeugt werden
* Wir behandeln hier nur die Grundfunktionalität

&rarr; ein gutes Design erhält man mit Kreativität und viel Feedback von Nutzern der App

===

### Constraint Layout


===

### Linear Layout

Das [Linear Layout](https://developer.android.com/guide/topics/ui/layout/linear) ermöglicht es geradlinige Strukturen wie z.B. Listen darzustellen. Die Breite ist flexible, aber auf eine Spalte begrenzt, und die Höhe orientiert sich der Länge des Inhaltes

![Linear Layout - Quelle https://developer.android.com/guide/topics/ui/layout/linear](https://developer.android.com/images/ui/linearlayout.png)

===

### Grid View

Das [Grid View Layout](https://developer.android.com/guide/topics/ui/layout/gridview) ist aufgebaut wie ein Schachbrett. Die Anzahl der Zeilen und Spalten kann zur Laufzeit gesetzt werden. Es eignet sich gut für Darstellung von mehreren Thumbnails

![Grid View Layout - Quelle https://developer.android.com/guide/topics/ui/layout/gridview](https://developer.android.com/images/ui/gridview.png)

---

### Margin & Padding


---

## Die Verbindung - Adapter

<!-- 
https://developer.android.com/reference/android/widget/Adapter
https://www.edureka.co/blog/what-are-adapters-in-android/
https://code.tutsplus.com/tutorials/android-from-scratch-understanding-adapters-and-adapter-views--cms-26646
-->

---

## Struktur verleihen - Gestaltung

---

## @Let's try

---

## Layout-Eigenschaften

---

## @Let's try

---

## Layout Inflater - Pump it up

<!-- https://developer.android.com/reference/android/view/LayoutInflater -->

---

## @Let's try

---

## @Profis

* [App Widget](https://developer.android.com/guide/topics/appwidgets/)
* [App Bar](https://developer.android.com/training/appbar/)
