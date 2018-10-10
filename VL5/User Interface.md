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

<small>Eine [Beispiel APK](https://github.com/Informatikwerkstatt/informatikwerkstatt.github.io/releases/download/apk-taschenrechner/taschenrechner.apk) gibt es zum anschauen</small>

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

### Übersicht

* Edittext
* Textview
* Button


===

### Toast

<!-- https://developer.android.com/guide/topics/ui/notifiers/toasts -->

===

### Dialog

<!-- 
https://developer.android.com/guide/topics/ui/dialogs
https://developer.android.com/reference/android/content/DialogInterface -->

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

__Anmerkung aus der Dokumentation:__ For better performance and tooling support, you should instead build your layout with [ConstraintLayout](https://developer.android.com/training/constraint-layout/).

![Grid View Layout - Quelle https://developer.android.com/guide/topics/ui/layout/gridview](https://developer.android.com/images/ui/gridview.png)

===

### Relative Layout

> Relative Layouts sind _zurzeit_ die einfachste Möglichkeit um sehr gut strukturierte und flexible Layouts zu erzeugen. Der Kniff besteht dadurch, dass man die einzelnen Layout Elemente (Hierarchien) immer in Relation zu dem Parent-Element setzt. Somit richtet sich ein Kindelement immer nach dem Vaterelement aus

<iframe class="video src="https://www.youtube.com/embed/CW7M_akbp64?rel=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />

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

## Layout-Eigenschaften

---

## Struktur verleihen - Trick & Kniffe

<!-- 
https://developer.android.com/design/

https://android-developers.googleblog.com/2011/09/thinking-like-web-designer.html

https://android-developers.googleblog.com/2009/02/android-layout-tricks-1.html 
https://android-developers.googleblog.com/2009/03/android-layout-tricks-3-optimize-by.html
https://android-developers.googleblog.com/2009/03/android-layout-tricks-3-optimize-with.html
https://developer.android.com/training/improving-layouts/optimizing-layout
-->

---

## @Let's try

<!-- Ein paar Buttons, bei denen ein Dialog, Toast erscheint und ein Text aus einem Editorfeld eingelesen und in etwas anderes eingesetzt wird -->

---

## Recycling von Layout - Fragments

<!-- https://android-developers.googleblog.com/2009/02/android-layout-tricks-2-reusing-layouts.html -->

---

## Fragmente Lifetime

---

## Dynamische Oberflächen

---

## @Profis

* [App Widget](https://developer.android.com/guide/topics/appwidgets/)
* [App Bar](https://developer.android.com/training/appbar/)
