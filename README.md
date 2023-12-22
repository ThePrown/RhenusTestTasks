# RhenusTestTasks

## Fizz Buzz mit SpringBoot

1. Spring Boot Project Initialisieren
2. Tests für FizzBuzzController erstellen
	- Erreichbarkeit Prüfen
	- Prüfen ob Ausgabe ein JSON Array ist
3. Korrigieren der Tests
4. Tests für FizzBuzzService erstellen
	- Einzelfälle prüfen
	- Gesamtes Ergebnis prüfen
5. Logik für FizzBuzz einarbeiten

## Angular Crud Application
Vor dem start wird `npm i` erfordert
Zur Nutzung der Applikation wird das starten des Backends gefordert
`npx json-server --watch db.json`
Die Applikation wird gestartet mit
`ng serve`

1. Einrichung des Projekts und des Json-servers
	- Json-Server ist ein gutes Tool für einfache Fake Backends
 	- Verarbeitung von HTTP Anfragen mit JSON
2. Erstellen des Services um mit dem Backend zu kommunizieren
	- Tests für post, patch, get und delete
	- Arbeiten mit "echten Daten"
3. Auflisten aller Nutzer
	- URL: `users/`
4. Detail ansicht hinzufügen
   	- Direkte Erreichbarkeit durch URL `user/:id
5. Lösch Funktion
	- Löschen in Listen und Detail Ansicht
6. Form für Hinzufügen und Editieren erstellen und einbinden
   	- Wiederverwenden des Forms um Redundanzen zu vermeiden
