// Hello You pt.(1 + 2)
function hello(name) {
    if (name != null) {
        return "Hello, " + name + "!"}
    else {
        return "Hello, World!"}
}

hello('dave');

// Madlib

function madlib (name,subject) {
    return name + "'s favorite subject in school is " + subject + "."
}

madlib('Zac','music')

// Tip Calculator

function tipAmount (billAmount,serviceLevel) {
    if (serviceLevel = 'good') {
        return billAmount * 0.2;
    }
    else if (serviceLevel = 'fair') {
        return billAmount * 0.15;
    }
    else if (serviceLevel = 'bad') {
        return billAmount * 0.1;
    } 
}

tipAmount (7,'bad');

//Tip Calculator 2

function totalAmount (billAmount,serviceLevel) {
    if (serviceLevel = 'good') {
        return billAmount * 1.2;
    }
    else if (serviceLevel = 'fair') {
        return billAmount * 1.15;
    }
    else if (serviceLevel = 'bad') {
        return billAmount * 1.1;
    } 
}

totalAmount (40,'bad');

// Tip Calculator 3

function splitAmount (billAmount,serviceLevel,numberPeople) {
    if (serviceLevel = 'good') {
        return billAmount * 1.2 / numberPeople;
    }
    else if (serviceLevel = 'fair') {
        return billAmount * 1.15 / numberPeople;
    }
    else if (serviceLevel = 'bad') {
        return billAmount * 1. / numberPeople;
    } 
}

splitAmount (50,'good',4)