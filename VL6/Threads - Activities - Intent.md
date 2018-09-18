---
layout: slide
permalink: /threads-activities-intent/
---

# Informatikwerkstatt
__Threads - Activities - Intent__

--- 

## Multithreading

Heutige CPUs können mehrere Aufgaben parallel verarbeiten<sup>1</sup>:

> [Multithreading](https://de.wikipedia.org/wiki/Multithreading) das Ausführen von _mehreren parallel Funktionen_ innerhalb eines Prozesses / Programms.

<small>1: Wir machen hier nur eine ganz kurze Einführung in Multithreading, wird in späteren Vorlesungen noch einmal behandelt</small>

Note: Studis fragen, ob 2 einen Tanzkurs besucht haben und z.B. einen Walzer vorführen können, Stichwort Synchronisation aufeinander erläutern

===

### Threading in Java

es gibt zwei Interfaces, um [Threads-Ausführungen](https://www.baeldung.com/java-runnable-callable) zu implementieren
	
* [Runnable](https://docs.oracle.com/javase/10/docs/api/java/lang/Runnable.html) ohne Rückgabewerte
* [Callable](https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/Callable.html) mit Rückgabewerte

===

### Thread-Klasse - Runnable

```java
public final class CCounting implements Runnable
{
    private final String m_text;
    private final int m_max;

    public CCounting( final String p_text, final int p_max )
    {
        m_max = p_max;
        m_text = p_text;
    }

    @Override
    public void run()
    {
        for( int i=0; i < m_max; i++ )
            System.out.println( m_text + "      " + i );
    }
}
```

===

### Thread Ausführung

```java
public final class CMain
{

    private CMain()
    {
    }

    public static void main( final String[] p_args )
    {
        final Thread l_thread1 = new Thread( new CCounting( "erster Thread", 10 ) );
        final Thread l_thread2 = new Thread( new CCounting( "zweiter Thread", 10 ) );

        l_thread1.start();
        l_thread2.start();
    }
}
```

===

### Let's try

Klassen implementieren und mehrfach laufen lassen 

__&rarr; Wie erklärt ihr Euch das Verhalten des Programms?__

---

## Race Condition

> ist ein Verhalten, bei der die _zeitliche Ausführung_ von Befehlen das Verhalten bestimmt und Ausführungsreihenfolge sich _gegenseitig beeinflusst_.

Race Conditions führen somit zu einem _undefinierten Verhalten_ wie Abstürze oder auch Datenverlust. Sie sollten somit vermieden werden, aber es ist schwer sie zu erkennen

===

### Thread 1 - Hinzufügen

Hinzufügen von Elementen in eine Liste

```java
import java.util.List;

public final class CAppend implements Runnable
{
    private final int m_max;
    private final List<Integer> m_list;

    public CAppend( final int p_max, final List<Integer> p_list )
    {
        m_max = p_max;
        m_list = p_list;
    }

    @Override
    public void run()
    {
        for( int i = 0; i < m_max; i++ )
            m_list.add( i );
    }
}
```

===

### Thread 2 - Zufälliges Löschen

Zufälliges Löschen von Elementen aus der Liste

```java
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

public class CDelete implements Runnable
{
    private final int m_max;
    private final List<Integer> m_list;

    public CDelete( final int p_max, final List<Integer> p_list )
    {
        m_max = p_max;
        m_list = p_list;
    }

    @Override
    public void run()
    {
        for( int i = 0; i < m_max; i++ )
            if ( m_list.size() > 0 )
                m_list.remove( ThreadLocalRandom.current().nextInt( m_list.size() ) );
    }
}
```

===

### Main-Programm

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public final class CMain
{
    private CMain()
    {
    }
    
    public static void main( final String[] p_args ) throws InterruptedException
    {
        // jeweils eine der beiden Zeilen aus- / einkommentieren
        //final List<Integer> l_numberlist = new ArrayList<>();
        final List<Integer> l_numberlist = new LinkedList<>();

        // Liste mit Threads erzeugen
        final List<Thread> l_threads = new ArrayList<>();
        for( int i=0; i < 10; i++ )
        {
            // zufällig mal einen Thread zum Löschen und einem zum Hinzufügen erzeugen
            final Thread l_thread = Math.random() < 0.5
                                    ? new Thread( new CAppend( 10000, l_numberlist ) )
                                    : new Thread( new CDelete( 10000, l_numberlist ) );

            // Thread der Threadliste hinzufügen und starten
            l_threads.add( l_thread );
            l_thread.start();
        }

        // warten bis alle Threads fertig sind
        for ( final Thread l_thread : l_threads )
            l_thread.join();
    }
}
```

===

### Let's try

Klassen implementieren und einmal mit der Zeile ```LinkedList``` und einmal mit der Zeile ```ArrayList``` laufen lassen 

__&rarr; Was passiert und wie erklärt Ihr Euch bei den unterschiedlichen Listen das Verhalten?__

---

## Activity

* entspricht einem [Fenster mit Interaktion durch den Benutzer](https://de.wikibooks.org/wiki/Googles_Android/_Activities) in der Anwendung 
* ist eine spezielle [Android](https://developer.android.com/reference/android/app/Activity) [Klasse](/oop-grundlagen/#/2)
* benötigt ein Layout in der [Manifestdatei](/android-grundlagen/#/5/1)
* wird eine Activity geöffnet &rarr; wird sie als über die bestehende Activity gelegt
* [Einführung in Activities](https://developer.android.com/guide/components/activities/intro-activities)

===

### @Let's try

---

## Activity Lifecycle

<!-- https://developer.android.com/guide/components/activities/activity-lifecycle -->

![Android Activity Lifecycle -  Quelle https://developer.android.com/guide/components/activities/activity-lifecycle](https://developer.android.com/guide/components/images/activity_lifecycle.png)

---

## Denke parallel - Background Threads

Mobile Apps müssen _schnell_ und _effizient_ reagieren, so dass der Benutzer
das Gefühl von Echtzeit bekommt. 

* Damit können komplexe Berechnung _nicht_ in der Activity statt finden
* Komplexe Berechnungen müssen in eigen [Threads](#/1) ausgelagert werden
    * Zugriff auf Daten aus dem Web
    * Datenaustausch zwischen Tablets
    * Berechnung von 2D/3D Koordinaten

<!-- https://developer.android.com/guide/background/ -->
<!-- https://medium.com/elevate-by-lateral-view/background-processing-in-android-575fd4ecf769 -->

===

### Wie geht das parallel?

> Wie in bei den Hausaufgaben / einem Übungszettel: Es gibt mehrere Aufgaben (Berechnungen) und mehrere Studierende (Threads). Man spricht ab, wer welche Aufgabe bearbeitet und jeder
Studierende bearbeitet seine Aufgabe. Wenn alle Aufgaben bearbeitet wurden, dann ist
der Aufgabenzettel auch bearbeitet. 

&rArr; In der Informatik nennt man das Prinzip [Fork & Join Modell](https://en.wikipedia.org/wiki/Fork%E2%80%93join_model)


---

## Intent

* [abstrakte Absicht](https://de.wikibooks.org/wiki/Googles_Android/_Intents_oder_%22Ich_h%C3%A4tte_gern_den_Zucker%22) etwas zu tun
* [Intents](https://developer.android.com/reference/android/content/Intent) sind passive Datenstruktur-Klassen &rarr; eine Art _Nachrichten-Objekt_
* Intents sind applikationsübergeifend
* werden zur [Laufzeit](https://en.wikipedia.org/wiki/Intent_(Android)) gebunden
* über [Intent-Filter](#/8) können komplexe Prüfungen zur Ausführung gesetzt werden

<!-- https://developer.android.com/training/basics/firstapp/starting-activity -->

Note: Studi einen Zettel geben auf dem steht "geh bitte mal vor die Tür und komm zurück", das gehen ist die Activity, der Text auf dem Zettel die Daten für die Activity und der Zettel selbst ist das Intent

===

## Datenübergabe Intent &rarr; Activity

> Um eine Activity aus einer anderen zu öffnen / starten, benötigen man ein Intent, in dem die Daten übergeben werden

Note: Einem Studierenden einen Zettel in die Hand geben, auf dem steht, dass er aufstehen und zur Tür gehen und sich wieder hinsetzen soll. Das gehen die die "Activity", der Zettel das "Intent" und die "Nachricht" die Daten

---

## Let's try

---

## Intent-Filter

* [explizite Intents](https://developer.android.com/guide/components/intents-filters#ExampleExplicit), diese werden direkt aus dem Quellcode aufgerufen
* [implizite Intents](https://developer.android.com/guide/components/intents-filters#ExampleSend), diese werden _allgemein_ durch Android behandelt

&rArr; und für die impliziten Intents benötigt die App den _Intent-Filter_ um darauf reagieren zu können

===

### Emfangen von impliziten Intents

* Das [Empfangen](https://developer.android.com/guide/components/intents-filters#Receiving) von Intents wird über Filter in der [Manifest](/android-grundlagen/#/5/1) definiert
* Filter besitzen die Einträge ```action```, ```category``` und ```data``` um auf das Intent zu matchen
* es können mehrere Filter angegeben werden und **alle** müssen matchen, damit ein Intent ausgeführt wird

```xml
<activity android:name="ShareActivity">
    <intent-filter>
        <action android:name="android.intent.action.SEND"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <data android:mimeType="text/plain"/>
    </intent-filter>
</activity>
```

Note: Studis fragen, was "explizit" und "implizit" ist, einem Studi sagen "geh mal Tafel putzen" &rarr; explizites Intent, dann implizit "putzt mal die Tafel"

---

### @Profis - Background Tasks

<!-- https://developer.android.com/training/best-background -->
