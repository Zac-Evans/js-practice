// Excercises can be found here: https://dc-codecamp.herokuapp.com/course/fullstack/april2017/week5/day4/aa.javascript-exercises.exercise.md


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

// Print Numbers

function printNumbers (start,end) {
    for (i=start; i <= end; i++) {
        console.log(i);
    }
}

printNumbers (4,12);

function printNumbers (start,end) {
    while (start <= end) {
        console.log(start);
        start++;
    }
}

printNumbers (4,12);


// Print a Square

function printSquare (size) {
    for (i=0;i<size;i++) {
        console.log ("*".repeat(size))}
}

printSquare(6);

// Print a box

function printBox(width,height) {
    console.log ('*'.repeat(width))
    for (i=0;i<(height-2);i++) {
        if (i=0 || i=(width-1)) {
            console.log('*')}
        else {
            console.log(' ');}
    
        console.log ('*'.repeat(width))
}

printBox(6,4);