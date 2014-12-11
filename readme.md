# Server side scripting in Node.js

***See this README with a table of contents [here](http://cmda.github.io/sss-course/).***


## Introductie
Hoewel je als Frontend developer je vooral met client-side bezig houdt, zijn er natuurlijk ook taken die je beter op de server kunt uitvoeren: data opslaan, gebruikers accounts, data uitwisselen met externe diensten, etc. In het server-side scripting leer je hoe je in JavaScript met Node.js een applicatie kunt maken voor het server side werk. Aangezien je vaak moet werken met databases om data op te kunnen slaan is het verstandig om naast dit vak ook te kiezen voor het profileringsvak Storage.

### Lesstof
* Werken met een Node.js server
* Templating
* Communicatie met externe dienste (API’s)
* Afhandelen & validatie van formulieren
* Veilig verwerken van gebruikersdata
* Unittesten
* Werken met bestanden en databases
* Realtime communicatie met client-side scripts


## Leerdoelen
* De student heeft een degelijke basis in Node.js en kan zelfstandig hierop gebaseerde systemen analyseren en naar behoefte aanpassen.
* De student kent de basisprincipes van een imperatieve programmeertaal: variabelen, sequentiële uitvoering, controlestructuren.
* De student ziet het nut van het gebruik van functies en kan functies toepassen om een web- applicatie gestructureerd op te bouwen.
* De student is in staat om met behulp van Node.js verbinding te leggen met een MySQL database en daar gegevens uit op te halen en in te muteren.
* De student kan de geleerde basisprincipes zelfstandig combineren en toepassen om eenvoudige programmeerproblemen op te lossen.


## Benodigde voorkennis
* Basis javascript kennis,
* Terminal kennis (zie [Tools](#tools) voor extra resource)
* Git en een GitHub-account

## Werkwijze
Het programma bestaat uit een serie hoor- en werkcolleges. In de hoorcolleges behandelen we elke week alles rondom een bepaald onderwerp, in de werkcolleges werk je elke week aan een opdracht om je dat onderwerp verder eigen te maken. Er zijn in totaal drie deeltoetsen waarvan de eerste twee tijdens het practicum uitgevoerd moeten worden. De eindopdracht wordt thuis gemaakt en moet bij de docent worden ingeleverd.

### Hoorcolleges
* Maandag (8.30u)
* Nieuw lesmateriaal wordt uitgelegd
* Uitleg huiswerkopdrachten
* Presentatie na afloop online

### Werkcolleges
* Behandelen opdrachten van vorige week
* Werken aan de nieuwe opdracht
* Vragen stellen

### Huiswerk & opdrachten
Het huiswerk wordt per week in het [weekoverzicht](#weekoverzicht) opgenomen. Het huiswerk zal bestaan uit het lezen van het boek als voorbereiding op de stof van het werkcollege of het volgende werkcollege, en een aantal opdrachten waarmee je gedurende de cursus zal leren om een server-side application te ontwikkelen. Het maken van de opdrachten zorgt ervoor dat je een goede voorbereiden hebt voor de deeltoetsen en eindopdracht. Wekelijks zal er een .zip worden geplaatst met hierin de opdrachten, of je kunt de code van GitHub gebruiken door een fork van de exercises repository te maken.

Als je vragen hebt kun je deze natuurlijk aan ons stellen tijdens de colleges, verder kunnen jullie bij onduidelijkheden [de issues van dit project](https://github.com/CMDA/sss-course/issues) gebruiken. Daarnaast waarderen wij het enorm als je ons helpt het lesmateriaal te verbeteren door een pull-request te sturen.


#### Workflow

1. [Fork the exercise project repo](https://github.com/CMDA/sss-exercises/fork)
2. [Clone it](http://git-scm.com/book/ch2-1.html#Cloning-an-Existing-Repository)
3. Open project in your texteditor or IDE
4. Commit your changes and push your changes


##### Update your repository
During the project, you can pull changes from [the upstream](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/). The upstream is the project from which you created the fork. Every week we will add extra exercises to this repository.

First we configure the [CDMA](https://github.com/CMDA/sss-exercises) repository as a remote in git.

```
git remote add upstream git@github.com:CMDA/sss-exercises.git
```

To get the new changes into your fork.
```
git pull upstream master
```


### Toetsing
Gedurende het programma worden in de werkcolleges 2 deeltoetsen aangeboden met een opbouwende moeilijkheidsgraad. In deze toetsen lost de student programmeerproblemen op met behulp van Node.js & Javascript. Beoordeling van en feedback op de gemaakte deeltoetsen worden tijdens de eerstvolgende practica gegeven, het is dus zaak dat studenten bij alle practica aanwezig zijn. Als alle toetsen voldoende zijn afgerond bestaat het eindcijfer uit het cijfer voor de eindopdracht. De eerste twee deeltoetsen worden alleen beoordeeld met voldoende/onvoldoende. Er is een algemene herkansing voor studenten die niet alle deeltoetsen voldoende hebben afgerond. Deze herkansing bestaat uit een praktijkgerichte opdracht die de totale stof uit alle deeltoetsen beslaat.


## Weekoverzicht

### Week 1
[Slides](http://cmda.github.io/sss-course/lesson1)

1. Node installeren en REPL draaien
1. NPM packages installeren en gebruik package.json
1. Debugging met console.log/console.dir en debugger
1. Basis JS control flow
1. Modules

#### Opdracht
* [Node. js in Action, Cantelon, Mike, et al. - Manning Publications, 2014](http://www.manning.com/cantelon/)
  * Chapter 3, t/m 3.2.3 (p 27 t/m 58)
  * Appendix A5 (p 363 t/m 366)
  * Appendix B1 t/m B3.2 (p 367 t/m 371)
* [Opdracht 1](https://github.com/CMDA/sss-exercises/tree/master/exercise1)
* [Opdracht 1 (met uitwerkingen)](https://gitprint.com/CMDA/sss-exercises/blob/feature-answers/exercise1/README.md)

### Week 2
[Slides](http://cmda.github.io/sss-course/lesson2)

1. Appserver
1. Templating
1. Async, callbacks en events
1. REST (externe diensten)

#### Opdracht
* [Node. js in Action, Cantelon, Mike, et al. - Manning Publications, 2014](http://www.manning.com/cantelon/)
  * Hoodstuk 3.2, t/m 3.4 (p 46 t/m 67)
  * Hoodstuk 8, t/m 8.3 (p 176 t/m 193), minder relevant: "view caching"
* [Opdracht 2](http://cl.ly/3l0r160k1k0P) [[PDF]](https://gitprint.com/CMDA/sss-exercises/blob/master/exercise2/README.md) [[Code]](https://github.com/CMDA/sss-exercises)
* [Opdracht 2 (met uitwerkingen)](https://gitprint.com/CMDA/sss-exercises/blob/feature-answers/exercise2/README.md)

### Week 3
[Slides](http://cmda.github.io/sss-course/lesson3)

1. Forms
1. Basic validations
1. Sessions

#### Opdracht
* [Node. js in Action, Cantelon, Mike, et al. - Manning Publications, 2014](http://www.manning.com/cantelon/)
  * Hoofdstuk 4.1, 4.2 en 4.4 (p. 71 t/m 80 & p. 87 t/m 94);
  * Hoofdstuk 11.1 en 11.2 (p. 264 t/m 275);
  * [Manage session using Node.js and Express 4](http://codeforgeek.com/2014/09/manage-session-using-node-js-express-4/)
  * In hoofdstuk 4 wordt gebruik gemaakt van de http-module van Node.js zelf. Omdat wij tijdens deze cursus gebruik maken van Express, is het minder van belang dat je de code uit het boek helemaal begrijpt. Wel wordt verwacht dat je de concepten begrijpt.
 
* [Opdracht 3](http://cl.ly/0u3W0D3k0d07) [[PDF]](https://gitprint.com/CMDA/sss-exercises/blob/master/exercise3/README.md) [[Code]](https://github.com/CMDA/sss-exercises)


### Week 4
[Slides](http://cmda.github.io/sss-course/lesson4)

1. Advanced routers
1. Files
1. Uploads
1. Testing

* Express.js Middleware Demystified; https://blog.safaribooksonline.com/2014/03/10/express-js-middleware-demystified/
* [Opdracht 4](http://cl.ly/0Y2F2A1M1x18) [[PDF]](https://gitprint.com/CMDA/sss-exercises/blob/master/exercise4/README.md) [[Code]](https://github.com/CMDA/sss-exercises)


### Week 5
1. Databases
1. MySQL
1. Security (injection)

### Week 6
1. Realtime

### Week 7 & 8
In deze weken zal geen nieuwe stof behandeld worden. Tijdens het werkcollege in week 7 zal er een samenvatting van de voor de eindopdracht belangrijke stof plaats vinden.


## Contactinformatie
Als je vragen hebt kun je met de volgende gegevens contact met ons opnemen. Wel willen wij je vragen om voor algemene zaken [een issue](https://github.com/CMDA/sss-course/issues/new) hier op GitHub te maken. Het is handig om deze [pagina te volgen](https://github.com/CMDA/sss-course/subscription) zodat je op de hoogte blijft als er updates zijn.

* Flurin Egger  <[f.p.egger@hva.nl](mailto://f.p.egger@hva.nl)>
* Edwin van der Graaf <[e.r.van.der.graaf@hva.nl](mailto://e.r.van.der.graaf@hva.nl)>
* Vincent Vijn <[v.l.vijn@hva.nl](mailto://v.l.vijn@hva.nl)>


## Bronnen

Het boek: [Node. js in Action, Cantelon, Mike, et al. - Manning Publications, 2014](http://www.manning.com/cantelon/) zal als belangrijke leidraad van deze cursus worden gebruikt. Wekelijks zullen diverse hoofdstukken hieruit worden behandeld.

### Voorkennis

### Aanbevolen literatuur

### Tools
* Command line
  * [http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)
  * [http://cli.learncodethehardway.org/book/](http://cli.learncodethehardway.org/book/)
* GIT
  - [Pro Git](http://git-scm.com/book/en/v2) [[NL](http://git-scm.com/book/nl/v1)]
  - [GitHub](https://help.github.com/)
  - [GitHub for Mac](https://mac.github.com/)
  - [GitHub for Windows](https://windows.github.com/)

