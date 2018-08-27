---
layout: slide
permalink: /java-grundlagen/
---

# Informatikwerkstatt
__Java Grundlagen__

---

# Sie sprechen Java?

---

# Quellcode, Compiler, Binary, App - hä?

---

# Hello-World

Ein [Hello-World-Programm](https://de.wikipedia.org/wiki/Hallo-Welt-Programm) ist ein Minimalbeispiel für ein Programm in einer Programmiersprache

```java
public class HelloWorld
{
	public static void main( String[] p_args )
	{
		System.out.println( "Hello, World" );
	}
}
```

---

# Kommandozeile - ich kann nicht klicken!?

Die [Kommandozeile](https://de.wikipedia.org/wiki/Kommandozeile) ist eine Anwendung, um mittels Befehlseingabe Programme auszuführen. Wir benutzen die Kommandozeile für

* Compilieren der einfachen Beispiele von Hand
* Starten der einfachen Beispiele von Hand
* Verstehen, wie der Compileprozess und die Ausführung des Javaprogramms funktioniert

===

### Befehle

===

### Compilieren der Sourcen

Übersetzen des geschriebenen Quellcodes in _maschinen Sprache_

```shell
javac HelloWorld.java
```

===

### Ausführen des Programms

```shell
java HelloWorld
```

---

## Let's try

1. Starte _Visual Studio Code_
2. Erstelle leere Datei mit dem Namen ```HelloWorld.java```
3. Kopiere oder schreibe den Beispielcode des Hello-World-Programms __exakt, wie angegegben,__ in die Datei
4. Speichere die Datei auf dem Desktop
5. Öffne die _Eingabeaufforderung_
6. Schau mittels ```dir``` wo der Desktop ist
7. Wechsel mit ```cd``` auf den Desktop
8. Compiliere das Programm
9. Führe das Programm aus

---

# Programmaufbau

---

# Java Keywords

Java besitzt [50 Keywords](https://en.wikipedia.org/wiki/List_of_Java_keywords), die in der Sprachdefinition festgelegt sind.

* Keywords definieren meist den Basis Syntax (Befehle) einer Programmiersprache
* Sie dürfen nicht als Variablen-, Funktions-, Mehoden-, Klassennamen benutzt werden

---

# Datentypen

---

## Variablen

---

## Typenumwandlung / Casting

---

## Let's try

---

## Ja / Nein / Vielleicht - If-Else

---

## Größer, Kleiner, Gleich - Vergleiche und Operatoren

---

## Let's try

---

## Wieder und wieder und wieder... - Schleifen

---

## Infinity Loop

---

## Kill it - Der Task-Manager

---

## Let's try

---

## Wirf den Fehler - Throw-Exception

---

## Fange den Fehler - try-catch

---

## Let's try

---

## @Home

1. Installation [Java Development Kit](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. [Setzen der Umgebungsvariablen](https://www.java.com/de/download/help/path.xml) ```JAVA_HOME``` und ```PATH```
3. Installation [Visual Studio Code](https://code.visualstudio.com/)

    
