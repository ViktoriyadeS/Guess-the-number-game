


const userName = prompt( "Welkom! Wat is je naam?");
console.log(userName);
let userMin = prompt("Hey "+ userName + ", wij gaan eerst je getalenrange bepalen. Wat is het kleinste nummer?");
let userMax = prompt("En nu de grootste getal dat jij wilt raden:");
let min = parseInt(userMin);
let max = parseInt(userMax);
const getRandomIntInclusive = Math.floor(Math.random() * (max - min + 1) + min);
console.log(getRandomIntInclusive);
let attempts = 0;
for (attempts = 1; attempts <= 5; attempts++ ){
    let restAttempts = 5 - attempts;
    const userInput = prompt("Voer een nummer in van " + min + " tot " + max + "..." + "\nPoging " + attempts + " van 5.");
    let guessedNumber = parseInt(userInput);
    console.log(guessedNumber);
    if (guessedNumber > max || guessedNumber < min || guessedNumber == null){
        alert("Het cijfer moet binnen de range zijn.\nJe hebt nog " + restAttempts + "kans(en)");
    } else if (guessedNumber == getRandomIntInclusive){
        alert ("Gefeliciteerd je hebt gewonnen!");
        alert("Dag " + userName + "! Tot volgende keer.");
        break;
    } else if (guessedNumber != getRandomIntInclusive && attempts < 5){
        alert ("Dit is niet correct. Wil je nogmaals proberen?\nJe hebt nog " + restAttempts + "kans(en)");
    } else if (guessedNumber != getRandomIntInclusive && attempts == 5){
        alert("Helaas je hebt geen pogingen meer over.\nDag " + userName + ", tot volgende keer.");
    }
};
        

