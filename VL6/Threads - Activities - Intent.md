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

* CPUs können mehrere solcher Prozesse parallel bearbeiten
* CPU-Cores übernehmen dann die Verarbeitung einzelner Threads / Funktionen

> Multithreading ist das Ausführen von _mehreren parallel Funktionen_ innerhalb eines Prozesses / Programms.

_Wir machen hier nur eine ganz knappe Einführung, Multithreading ist ein sehr komplexes Thema, um bedarf viel Wissen, wie dieses technisch funktioniert_

===

### Threading in Java

* es gibt 2 Interfaces, um [Threads-Ausführungen](https://www.baeldung.com/java-runnable-callable) zu implementieren
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

---

## Let's try

Klassen implementieren und mehrfach laufen lassen 

__&rarr; Wie erklärt ihr Euch das Verhalten des Programms?__

---

## Race Condition


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
