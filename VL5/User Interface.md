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

> Ein [einfaches User-Interface](https://developer.android.com/training/basics/firstapp/building-ui) (UI) wird im besten Fall mit Containern erstellt und man ordnet diese Container einmal immer relativ zu dem übergeordneten Container an. Je nach Design kann somit direkt ein Hoch- oder Querlayout erzeugt werden.
> 
===

### View

> Ein [View](https://developer.android.com/reference/android/view/View) ist die oberste Ebene für graphische Layouts. Die _Activity_ ist ein Container der ein Layout enthält. Ein guter Vergleich ist eine Festplatte unter Windows, der _Laufwerksbuchstabe_ ist die _Activity_, das _Verzeichnis_ die [Viewgroup](#/2/2), die _Datei_ der _View_ und der _Dateiinhalt_ das _konkrete Layout_ des Elements. 

===

### ViewGroup

> Eine [ViewGroup](https://developer.android.com/reference/android/view/ViewGroup) ist eine Sammlung von View-Containern eines Layouts, sowohl View wie auch weitere ViewGroup können miteinander verbunden werden

![View und ViewGroup - Quelle https://developer.android.com/training/basics/firstapp/building-ui](https://developer.android.com/images/viewgroup_2x.png#ninety)

---

## Was bin ich? - Layoutelemente

<div class="flex">
<div>
UI's werden mit Hilfe einzelner Layoutelemente, eine kurze Übersicht über die verschiedenen Elemente. Alle Elemente sind in einer dreigliedigen Ansicht angeordet ([Palette & Component Tree](#/4), aktuelles Layout, Elementattribute)<br/>
<ul>
<li>Button</li>
<li>Textfield</li>
<li>Layouts</li>
</ul>
</div>
<div>
![Layout Designer](images/layoutdesigner.png#ninety)
</div>
</div>

<!-- https://developer.android.com/training/keyboard-input/style -->

===

### Toast

> [Toast Notifiers](https://developer.android.com/guide/topics/ui/notifiers/toasts) sind kleine Textboxen, die über der App eingeblendet werden und nach ein paar Sekunden wieder automatisch verschwinden. Der Aufruf, um eine solche Box zu erzeugen, benötigt den Applikation-Context (diesen erhält man aus der Activity), damit die Box über allen anderen Fenstern angezeigt wird, die Nachricht und dann die Zeit, wie lange sie angezeigt werden soll

```java
Toast.makeText( 
    activity.getApplicationContext(), 
    "eine Hallo-Nachricht", 
    Toast.LENGTH_LONG | Toast.LENGTH_SHORT 
).show();
``` 

===

### Dialog

<!-- 
https://developer.android.com/guide/topics/ui/dialogs
https://developer.android.com/reference/android/content/DialogInterface -->

---

## Palette & Component Tree

<div class="flex">
<div>
<p>
Zum Design des Layouts findet sich auf der linken Seite die _Palette_, die die verschiedenen Elemente enthält. Man zieht die einzelnen Elemente aus der Palette
an die Stelle im Layout, wo sie erscheinen sollen.
</p>
<p>Der _Component Tree_ die die aktuelle Struktur des Layouts, hiermit sieht die [Hierarchie](#/2/2) des Layoutes, also welches Element _hängt unter_ welchem Container.</p>
</div>
<div>
![Layout Designer](images/palettetree.png)
</div>
</div>

---

## Alles im Lot - Layouts

* Wir behandeln hier nur die Grundfunktionalität
* Mit Hilfe von Layouts kann die Darstellung für
    * unterschiedliche Displaygrößen entworfen werden
    * horizontales / vertikales Layout erzeugt werden

&rarr; ein gutes Design erhält man durch Kreativität und Feedback, als Hilfestellung gibt es häufig _[Design Styleguides](https://material.io/)_

===

### Constraint Layout

[Constraint Layouts](https://developer.android.com/training/constraint-layout/) sind aktuell die Wahl für ein Layout, der Vorteil besteht darin, dass sie sich recht flexibel an verschiedene Displaygröße, sowie horizontale / vertikale Darstellung anpassen lassen. Man baut gedanklich eine große Box, in die man viele kleinere Boxen stellt auf. Damit ergibt sich die Layouthierarchie des [Component Trees](#/4)

<small>Wer Erfahrung mit Webseitengestelltung kennt vielleicht den Begriff [Responsive Webdesign](https://de.wikipedia.org/wiki/Responsive_Webdesign), um das Layout der Webseite an die Auflösung des Endgerätes anzupassen. Das Design einer App kann in ähnliche organisiert werden</small>

===

### Linear Layout

Das [Linear Layout](https://developer.android.com/guide/topics/ui/layout/linear) ermöglicht es geradlinige Strukturen wie z.B. Listen darzustellen. Die Breite ist flexible, aber auf eine Spalte begrenzt, und die Höhe orientiert sich der Länge des Inhaltes

![Linear Layout - Quelle https://developer.android.com/guide/topics/ui/layout/linear](https://developer.android.com/images/ui/linearlayout.png)

===

### Grid View

Das [Grid View Layout](https://developer.android.com/guide/topics/ui/layout/gridview) ist aufgebaut wie ein Schachbrett, sollen aber nicht mehr verwendet werden. __Anmerkung aus der Dokumentation:__ For better performance and tooling support, you should instead build your layout with Constraint Layout.

![Grid View Layout - Quelle https://developer.android.com/guide/topics/ui/layout/gridview](https://developer.android.com/images/ui/gridview.png)

===

### Relative Layout

> Relative Layouts sind _zurzeit_ die einfachste Möglichkeit um sehr gut strukturierte und flexible Layouts zu erzeugen. Der Kniff besteht dadurch, dass man die einzelnen Layout Elemente (Hierarchien) immer in Relation zu dem Parent-Element setzt. Somit richtet sich ein Kindelement immer nach dem Vaterelement aus

===

### Tutorial Relative Layout

<iframe class="video" src="https://www.youtube.com/embed/CW7M_akbp64?rel=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />

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
