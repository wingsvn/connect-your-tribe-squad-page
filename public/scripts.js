// console.log('blabla')

// *** flip card by on click - tutorial: https://www.youtube.com/watch?v=or2g2bAEMRc ***

// hier selecteer ik de elementen waar de interactie op moet plaatsvinden
const polaroidElements = document.querySelectorAll('.polaroid');
// console.log('kaartje')

// bij een klik actie zal het element .polaroid 180deg om zijn Y-as draaien
// hiermee zorg ik ervoor dat elke polaroid kaart wordt geselecteerd voor deze functie
polaroidElements.forEach(function(polaroidElement){
    polaroidElement.addEventListener('click', function(){
        polaroidElement.classList.toggle('flip'); 
    });
});

// *** shake animation ***
// eerst selecteer ik ELK polaroid kaartje
// op de addEventlistener mouseover zorg ik ervoor dat het geselecteerde element de animatie 'shake' uitvoert
polaroidElements.forEach(function(polaroidElement){
    polaroidElement.addEventListener('mouseover', function(){ 
        polaroidElement.classList.add('shake');
    });
});

// verwijderen van de shake animatie wanneer er niet meer op het geslecteerde element wordt gehoverd.
polaroidElements.forEach(function(polaroidElement){
    polaroidElement.addEventListener('mousout', function() {
        polaroidElement.classList.remove('shake');
    })
});

// *** random color generator ***

// 1. een array aanmaken en hierin de gekozen willekeurige kleuren definieren (hexdecimale kleurcodes)
const colors = ["B5B5DB", "F19EAC", "74CBC1", "F7F9EC"]
// console.log('kleuren')

// 2. een nieuwe functie aanmaken om de willekeurige kleuren ophalen uit de array en toewijzen aan de polaroids
// dit genereert een willekleurige geheel getal dat binnen bereik is van de eerder gedfinieerde kleuren in de array dat vervolgens wordt toegewezen aan de variabele 'randomIndex'.
function generateNewColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    // het willekeurig retourneren van de kleur aan de gekozen index
    return'#' + colors[randomIndex];
}
// console.log('random')

// 3. een nieuwe functie aanmaken om de kleur van de polaroid kaartjes te wijzigen wanneer deze wordt aangeroepen
function cardcolor() {
    // hiermee selecteer ik de elementen die aangeroepen moeten worden, in dit geval ALLE elementen met de class 'polaroid-front', deze worden vervolgens opgeslagen in de variabele 'cardElements'.
    const cardElements = document.querySelectorAll(".polaroid-front, .polaroid-back");
    // hiermee zorg ik ervoor dat ELKE polaroid kaart wordt geselecteerd
    cardElements.forEach(function(card){
        // voor elk element (polaroid) wordt een nieuwe kleur toegewezen die is gegenereert in stap 2.
        card.style.background = generateNewColor();
    });
}
// 4. het ophalen van de nieuwe toegewezen kleur
cardcolor();
