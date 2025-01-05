const toepassingbtn1 = document.getElementById('toepassing-btn-1')
const algemeenbtn1 = document.getElementById('algemeen-btn-1')
const reflectiebtn1 = document.getElementById('reflectie-btn-1')
const h2 = document.getElementById('TLE-h2');
const imageElement = document.getElementById('TLE-image');
const tekstElement = document.getElementById('text-tle');

const toepassingbtn2 = document.getElementById('toepassing-btn-2')
const algemeenbtn2 = document.getElementById('algemeen-btn-2')
const reflectiebtn2 = document.getElementById('reflectie-btn-2')

const inzichtenbtn = document.getElementById('inzichten-btn')
const toepassingbtn3 = document.getElementById('toepassing-btn-3')


if (algemeenbtn1) {
    algemeenbtn1.addEventListener('click', () => {
        h2.innerHTML = 'Algemeen';
        imageElement.src = '../images/TLE1_groep.jpg';
        tekstElement.textContent = 'In TLE 1 zijn we bezig geweest met de onderzoekende aanpak. Het is hierbij de bedoeling dat je veel expirimenteerd om te kijken wat goed werkt en wat niet. Je maakt hierbij dus meerdere iteraties die vaak (nog) niet af zijn. Ook doe je van te voren goed onderzoek over de consumer van jouw product. Ik vind deze aanpak persoonlijk niet zo fijn werken. Zelf vind ik het fijner om af te maken waar ik aan begin. Daarnaast vind ik het ook fijn om een concreet doel te hebben, zoals een opdracht van een opdrachtgever waarmee ik meteen aan de slag kan.';
        imageElement.style.display = 'block';
        const p = document.getElementById('extra-info')
        if (p) {
            p.remove()
        }
    });

    toepassingbtn1.addEventListener('click', () => {
        h2.innerHTML = 'Toepassing';
        tekstElement.textContent = "Voor TLE 1 onderzoeken zijn we in de specialize me begonnen met het bedenken van een toekomst scenario. We hebben hierbij onderandere gebruik gemaakt van speculative design om zo'n accuraat mogelijk scenario te schrijven. Ook hebben we User Journey Maps gemaakt om je echt in de schoenen van de consumer te zetten en hoe hun het product zouden gebruiken. Daarna zijn we in de TLE bezig geweest om het product van dat toekomst scenario uit te werken. We hebben hier een validator gemaakt die kijkt of een artikel betrouwbaar is, een test om te kijken of mensen het verschil tussen nep- en echt nieuw kennen en een extensie voor de validator.";
        imageElement.src = '../images/validator.png';
        imageElement.style.display = 'block';
        const p = document.getElementById('extra-info')
        if (p) {
            p.remove()
        }

    });

    reflectiebtn1.addEventListener('click', () => {
        const a = document.getElementById('extra-info')
        if (a) {
            a.remove()
        }
        const inhoud = document.getElementById('inhoud-boxes');
        h2.innerHTML = 'Reflectie';
        tekstElement.textContent = "We hebben bij TLE 1 natuurlijk een hoop gedaan en ik heb hier voornamelijk geleerd wat er nog beter moet, Hier hoort onder andere bij de samenwerking van de groep en het werken aan de kern van je product. Ik heb ook wel een paar positieve dingen geleerd waar ik erg blij mee ben, vooral aan de technische kant. Zoals het communiceren tussen Javascript en PhP en beter werken met databases.";
        imageElement.style.display = 'none';
        const p = document.createElement('p');
        p.id = 'extra-info'
        p.textContent = "De samenwerking is in verloop van het project van verbeterd, we waren eerst vooral in eilandjes aan het werken en zagen daarna wel hoe het bij elkaar kwam. Dit kwam ook in de retrospectives naar voren. Maar we zijn verder in het project maar samen gaan werken door meer vragen aan elkaar te stellen en een extra 'stand-up' te doen om elkaar te updaten over hoe het er voor staat. Achteraf heb ik ook geleerd dat ik meer moet documenteren, zodat ik beter kan aantonen wat ik heb gedaan/geleerd. Ik vind zelf dat de samenwerking gedurende deze weken steeds beter is geworden en ik heb geprobeerd dit ook TLE 2 mee te nemen.";
        inhoud.appendChild(p);
    });
}

if (algemeenbtn2) {
    algemeenbtn2.addEventListener('click', () => {
        const box = document.getElementById('inhoud-divider')
        box.style.flexDirection = 'column'
        h2.innerHTML = 'Algemeen';
        imageElement.src = '../images/TLE2.png';
        tekstElement.textContent = 'In TLE2 zijn we bezig geweest met de ontwerpende aanpak. Hierbij probeer je dus een probleem op te lossen, in ons geval het anoniem soliciteren bij Open Hiring. Om dit te doen is het testen van de ontwerpen/fases van je product erg belangrijk. Je maakt bij de ontwerpende aanpak eerst een ontwerp, dit kan een simpele mockup zijn of een totaal doordacht prototype. Het laaste is wat wij hebben gedaan bij de specialize me. Ik vind deze aanpak een heel stuk fijner werken dan de onderzoekende aanpak, al zou ik niet persee zeggen dat dit de perfecte aanpak is voor mij. Ontwerpen is namelijk niet een van mijn sterkste punten dus ik moet erg veel moeite doen op een resultaat te krijgen wat andere soms gewoon uit hun mouw schudden. Ik vind het dan wel weer erg fijn dat er al een opdracht is, het bedenken van hoe is voor mij namelijk een stuk makkelijker dan het bedenken van wat. Het was dan wel weer fijn dat je na het ontwerpen meteen aan de slag kon en wist wat je moest doen. Als ik deze aanpak vaker zou gebruiken hoop ik dat het ontwerpen steeds makkelijker gaat worden zodat het programmeren daarna nog makkelijker word.';
        imageElement.style.display = 'block';
        imageElement.style.maxHeight = '20vh';
        const p = document.getElementById('extra-info')
        if (p) {
            p.remove()
        }
    });

    toepassingbtn2.addEventListener('click', () => {
        const box = document.getElementById('inhoud-divider')
        box.style.flexDirection = 'row'
        h2.innerHTML = 'Toepassing';
        tekstElement.textContent = "Voor TLE2 zijn we dus begonnen met het maken van een ontwerp, we hebben hierbij dus een volledig prototype gemaakt met clickable wireframes. We hebben dit gedaan in een design sprint, waar je in 4 dagen een zo goed mogelijk ontwerp maakt. Daarna zijn we begonnen aan het maken van de website voor Open Hiring. Aan het eind van elke week hebben we daarna een demo gegeven bij IO en hieruit feedback meegenomen om onze site daarna weer te kunnen verbeteren om ons product zo gebruiksvriendelijk mogelijk te maken. Ik ben best trots op dit product en vind dat ik samen met mijn team een mooi product heb geleverd. Ik vind het zelf vooral cool hoe het jouw locatie gebruikt om lokale bedrijven te tonen.";
        imageElement.src = '../images/openhiring.png';
        imageElement.style.display = 'block';
        imageElement.style.maxHeight = '40vh';
        const p = document.getElementById('extra-info')
        if (p) {
            p.remove()
        }
    });

    reflectiebtn2.addEventListener('click', () => {
        const box = document.getElementById('inhoud-divider')
        box.style.flexDirection = 'column'
        const a = document.getElementById('extra-info')
        if (a) {
            a.remove()
        }
        const inhoud = document.getElementById('inhoud-boxes');
        h2.innerHTML = 'Reflectie';
        tekstElement.textContent = "Voor TLE2 dacht ik goed begonnen te zijn door meteen veel te gaan programmeren maar hierdoor was ik juist weer op mijn 'eilandje' aan het werken zoals dat ook was bij TLE1. Dit hoort enigzins bij de bedrijfsman, wat mijn rol was in dit team. Alleen heb ik hier van mijn team wel feedback op gekregen en was het dus nodig dat ik meer in teamverband ging werken. Dit is volgens mijn teamgenoten over de weken heen ook goed verbeterd en ik wil dus ook zeker proberen dit in volgende TLE's door te pakken. Ik ben er tijdens dit project ook achter gekomen hoe belangrijk het is om rollen te hebben in je team, zoals een voorzitter en iemand die de keuzes maakt. Dit is ook in de retrospectives benoemd en ik merkte dat na het opnemen van deze rollen de efficiëntie veel hoger lag.";
        imageElement.style.display = 'none';
        const p = document.createElement('p');
        p.id = 'extra-info'
        p.textContent = "Bij de demo's met IO-digital ben ik er pas echt achter gekomen hoe belangrijk het is om te testen en hoeveel informatie hier nou echt vrijkomt door een simpele demo van 15 minuten. Hierdoor begon ik dus ook pas echt te begrijpen waarom mijn nachtkastboek zo'n belangrijke nadruk legde op het testen van je product. En niet alleen aan het einde om te kijken of het af is, maar gedurende het proces zodat je steeds aanpassingen kan maken op basis van de feedback die je krijgt. Uiteindelijk vind ik dat ik in de 5 weken van Specialize me en TLE2 erg vele heb geleerd. Ik vind ontwerpen dan misschien moeilijker en minder leuk, maar dat is slechts een drempel waar ik overheen moet komen om het programmeren zoveel makkelijker en efficiënter te maken. Ook is gebleken hoeveel informatie er uit simpele testjes komt wat voor een veel beter en gebruiksvriendelijker product zorgt. Ik wil er dus ook zeker voor zorgen dat ik dit meeneem naar volgende TLE's om nog betere producten te leveren.";
        inhoud.appendChild(p);
    });
}

if (inzichtenbtn) {
    inzichtenbtn.addEventListener('click', () => {
        h2.innerHTML = 'Inzichten';
        tekstElement.textContent = "Het boek dat ik heb gelezen, Just Enough Research, gaat over onderzoek doen naar jouw doelgroep. Het heeft het erover hoe onderzoek belangrijk en haalbaar is voor elk project zelfs met beperkte tijd of budget. En dat je al heel snel en eenvoudig inzichten kan krijgen die ervoor kunnen zorgen dat je betere beslissingen en uiteindelijk ook betere producten kan maken. Het belangrijkste wat in dit boek werd gezegd was dat je niet alles hoeft te onderzoeken, maar genoeg moet onderzoeken om de grootste risico's te elimineren. Ook zeggen ze dat het belangrijk is om onderzoek te blijven doen omdat het een proces is het meegroeit met je project. Al met al gaat het boek over hoe belangrijk onderzoek/testen is en het niet uit maakt of je geen budget of kort de tijd hebt.";
    });

    toepassingbtn3.addEventListener('click', () => {
        h2.innerHTML = 'Toepassing';
        tekstElement.textContent = "Uit het boek blijkt dus dat onderzoek/testen heel belangrijk is. De assessment heeft alleen niet echt een doelgroep waarnaar ik onderzoek zou kunnen doen. Toch heb ik geprobeerd dit toe te passen door aan vrienden en familie te vragen wat hun graag zien/fijn vinden aan een site. Ik heb hier bijvoorbeeld eerst wat voor sfeer mensen bij een website graag willen. Hierin kwam vooral naar voren dat mensen een rustgevend gevoel erg fijn vinden, daarom ben ik voor de kleur groen gegaan. Later heb ik ook getest of alles op mijn site duidelijk was, hieruit kwam dat de foto's op de homepage erg druk waren en ervoor zorgden dat de tekst minder goed leesbaar was dus heb ik deze daarna aangepast. Op deze manier heb ik toch geprobeerd de inzichten van mijn boek te verwerken ondanks dat het een klein project is zonder een specifieke doelgroep.";
    });
}