// Deel 1 - Leeftijdsgrens

const age = 18;

if (age >= 17) {
    console.log("This person is 18+! Acces allowed!");
} else if (age < 18) {
    console.log("ERROR! This person is under 18. Acces denied!");
}

// Deel 1 - 50% Korting

if (age >= 17 && age <= 26) {
    console.log("You get 50% discount! Lucky You!");
} else {
    console.log("You don't need a discount!");
}

// Deel 2 - LadiesNight

const isFemale = true;

if (isFemale) {
    console.log("Hey Girl, Welcome to our LadiesNight!");
} else {
    console.log("For Real,Bro?");
}

// Deel 2 - Ludieke Actie

const name = "Sarah";

if (name === "Sarah" || name === "Bram"){
    console.log("You get a free beer!");
} else {
    console.log("Sorry, you are no Sarah or Bram!");
}

// Deel 3 - statusDriver

const driverStatus = 'BoB';

if (driverStatus == 'BoB') {
    console.log("Have a safe trip home!");
} else if (driverStatus !== 'BoB') {
    console.log("Uber it is, then!");
}

// Deel 3 - Jubileum Korting

const totalAmount = 100.00;

if (totalAmount >= 25.00 && totalAmount <= 49.99) {
    console.log("You get a free portion of bitterballs of choise!");
} else if (totalAmount >= 50.00 && totalAmount <= 99.99) {
    console.log("You get free nachos!");
} else if (totalAmount >= 100.00) {
    console.log("Free Champagne! Pop that bottle!");
} else {
    console.log("Nothing yet, maybe next round!");
}