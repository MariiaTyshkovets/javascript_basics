// minimum

// 1. Напиши всі можливі варіанти створення функцій.

// Function Declaration
function calcMultiplication (a, b) { 
    return a * b;
}

// Function Expression
let calcaAdding = function (a, b) {
    return a + b;
}

// Arrow Function
calcSubtraction = (a, b) => {
    return a - b;
}

// Anon Function

(function(){
    console.log("Mariia");
})();

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function calcArguments() {
    return console.log(arguments.length);
}

calcArguments(1, "word", 265, 145, 1);

// 3. Напиши функцію, яка приймає 2 числа і повертає: -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.

comparisonOfNumbers = (a, b) => {
    if (a > b){
        return 1;
    }
    if (a < b){
        return -1;
    } 
    if (a == b){
        return 0;
    }  
}

isNumber = (num) => {
    if (num == +num) {
        return true;
    } else {
        alert("You are entered not a number.")
        return false;
    }
}

let num_1;
let num_2;
let isNum;

do {
    num_1 = prompt("Enter any number for comparison.");
    isNum = isNumber(num_1);
} while (isNum == false);

do {
    num_2 = prompt("Enter any number for comparison.");
    isNum = isNumber(num_2);
} while (isNum == false);

console.log(comparisonOfNumbers(num_1, num_2));

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

function calcFactorial (num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function isNatural (a) {
    let b = isNumber(a);
    if (a == Math.floor(a) && a > 0 && b == true) {
        return true;
    } else {
        alert('This number is not a natural.')
        return false;
    }
}

let naturalNumber;

do {
    naturalNumber = prompt('Enter natural number for to find its factorial.');
    isNum = isNatural(naturalNumber);
} while (isNum == false);

console.log(`${naturalNumber}! = ${calcFactorial(naturalNumber)}.`);

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

createNumber = (a, b, c) => {
    return Number(a + b + c);
}

function isDigit (num) {
    if (num < 10 && num >= 0 && num == Math.floor(num)) {
        return true;
    } else {
        alert("You are entered not a digit")
        return false;
    }
}

let digit_1;
let digit_2;
let digit_3;

do {
    digit_1 = prompt('Enter a digit from 0 to 9 to create the number.');
    isNum = isDigit(digit_1);
} while (isNum == false);

do {
    digit_2 = prompt('Enter a digit from 0 to 9 to create the number.');
    isNum = isDigit(digit_2);
} while (isNum == false);

do {
    digit_3 = prompt('Enter a digit from 0 to 9 to create the number.');
    isNum = isDigit(digit_3);
} while (isNum == false);

console.log(`The number created is ${createNumber(digit_1, digit_2, digit_3)}.`);

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

calcSquareOfRectangle = (a = b, b = a) => {
    return a * b;
}

isPositiveNumber = (a) => {
    if (a >= 0) {
        return true;
    } else {
        alert("The side of rectangle can not be a negative.");
        return false;
    } 
}

let sideOfRectangle_1;
let sideOfRectangle_2;
let isPositive;

do {
    sideOfRectangle_1 = prompt('Enter the first side of rectangle to find a square.');
    isNum = isNumber(sideOfRectangle_1);
    isPositive = isPositiveNumber(sideOfRectangle_1);
} while (isNum == false && isPositive == false)

do {
    sideOfRectangle_2 = prompt('Enter the second side of rectangle to find a square.');
    isNum = isNumber(sideOfRectangle_2);
    isPositive = isPositiveNumber(sideOfRectangle_2);
} while (isNum == false && isPositive == false)

console.log(`The square of rectangle is ${calcSquareOfRectangle(sideOfRectangle_1, sideOfRectangle_2)}.`);
console.log(`The square is ${calcSquareOfRectangle(sideOfRectangle_1)} if only one side was identified.`);

// standart

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

let isPerfectNumber = function (num) {
    let result = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            result += i;
        } 
    }
    if (result == num) {
        return true;
    } else {
        return false;
    }
}

do {
    naturalNumber = prompt('Enter a natural number to check if it is perfect.');
    isNum = isNatural(naturalNumber);
} while (isNum == false);

isPerfectNumber(naturalNumber) == true ? console.log(`The number ${naturalNumber} is perfect.`) : console.log(`The number ${naturalNumber} is not perfect.`);

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
// і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

alert(`Enter two natural numbers and we will find all perfect numbers in this range.`);

logPerfectNumbers = (min, max) => {
    let perfNums = "";
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i) == true) {
            perfNums += `${i}, `;
        }
    }
    perfNums == "" ? console.log(`There are no perfect numbers in the range of ${min} to ${max}.`) : console.log(`${perfNums} they are perfect numbers in the range of ${min} to ${max}.`);
}

let naturalNumber_1;
let naturalNumber_2;

do {
    naturalNumber_1 = prompt('Enter the first number.');
    isNum = isNatural(naturalNumber_1);
} while (isNum == false);

do {
    naturalNumber_2 = prompt('Enter the second number.');
    isNum = isNatural(naturalNumber_2);
} while (isNum == false);

if (+naturalNumber_1 <= +naturalNumber_2) {
    logPerfectNumbers(naturalNumber_1, naturalNumber_2);
} else {
    logPerfectNumbers(naturalNumber_2, naturalNumber_1);
}