UITLEG STRUCTUUR DARK-MODE  

Aside

de structuur  bestaat uit een (aside) , waar bijvoorbeeld de zij knoppen in zitten en de premium knop , je kan de aside een beetje verplaatsen door middel van padding als dat nodig is.

Body

is de achtergrond waar wij dus een rand aan kunnen geven en dan het laten lijken alsof dat de rand is maar door de main en de aside lijkt dat dus niet zo in mijn geval had ik het een zei kleur gegeven grijs

Main

de main is waar de eche magie gebeurt waar de darkmode knop is en waar je producten kan toevoegen
de knoppen heb ik een class gemaakt met een p erin en 5 li's met een + die er in zit voor de CSS
heb ik een width en height 7 rem gedaan en border radius 50% zodat het rond word en heb voor de rand een dashed border toegevoegd voor een rechthoekige rand met stipjes er tussen

darkmode

dashboard__header_mode

border-radius: 5rem


met een position relative 

zodat het goed ging positioneren

transform: translate 30%  -50%
de vorm van de knop 

transition : 0.4s transitietijd

tijd hoelang het duurt om naar rechts te gaan

transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);

bepaald waar hij heen moet 