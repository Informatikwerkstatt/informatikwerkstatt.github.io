---
layout: slide
permalink: /threads-activities-intent/
---

# Informatikwerkstatt
__Threads - Activities - Intent__

---

## Let's Dance

* Wer hat einen Tanzkurs besucht?
* Finden wir zwei, die einmal einen Walzer o.ä. vorführen können?

--- 

## Multithreading

Multithreading ist das ausführen von _mehreren parallel Funktionen_ innerhalb eines Prozesses / Programms.

* CPUs können mehrere solcher Prozesse parallel bearbeiten
* CPU-Cores übernehmen dann die Verarbeitung einzelner Threads / Funktionen

__Wir machen hier nur eine ganz knappe Einführung, Multithreading ist ein sehr komplexes Thema, um bedarf viel Wissen, wie dieses technisch funktioniert__

===

### Threading in Java

* es gibt 2 Interfaces, um [Threads-Ausführungen](https://www.baeldung.com/java-runnable-callable) zu implementieren
	* [Runnable](https://docs.oracle.com/javase/10/docs/api/java/lang/Runnable.html) ohne Rückgabewerte
	* [Callable](https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/Callable.html) mit Rückgabewerte

===

### Thread-Klasse - Runnable

```java
public final class CountingThread implements Runnable
{
    private final String m_text;
    private final int m_max;

    public CountingThread( final String p_text, final int p_max )
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
public final class HelloThread
{

    private HelloThread()
    {
    }

    public static void main( final String[] p_args )
    {

        final Thread l_thread1 = new Thread( new CountingThread( "erster Thread", 10 ) );
        final Thread l_thread2 = new Thread( new CountingThread( "zweiter Thread", 10 ) );

        l_thread2.start();
        l_thread1.start();

    }
}
```

---

## Let's try

Klassen implementieren und mehrfach mal laufen lassen &rarr; Wie erklärt ihr Euch das Verhalten des Programms?

---

## Synchron - Asynchron



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
