---
layout: slide
permalink: /threads-activities-intent/
---

# Informatikwerkstatt
__Threads - Activities - Intent__

---

## Let's Dance

* Wer hat einen Tanzkurs besucht?
* Gibt es ein Paar, dass einmal einen Walzer o.ä. vorführen können?
* Gibt es zwei Freiwillige, die nicht tanzen können und es mit Anleitung probieren?

--- 

## Multithreading

Heutige CPUs können mehrere Aufgaben parallel verarbeiten<sup>1</sup>:

> [Multithreading](https://de.wikipedia.org/wiki/Multithreading) das Ausführen von _mehreren parallel Funktionen_ innerhalb eines Prozesses / Programms.

<small>1: Wir machen hier nur eine ganz kurze Einführung in Multithreading, wird in späteren Vorlesungen noch einmal behandelt</small>

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

---

## Activity Lifetime

---

## Intent

---

## Datenübergabe Intent &rarr; Activity

---

## Let's try

---

### @Profis

<!-- https://developer.android.com/training/best-background -->
