// minimum

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
//дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let userAge = +prompt(`How old are you?`);

switch (true) {
    case userAge <= 0:
        console.log("Age cannot be negative. This is a clear mistake.");
        break;
    case userAge > 0 && userAge < 12:
        console.log("You are child. I believe you will have a great future :)");
        break;
    case userAge >= 12 && userAge < 18:
        console.log("You are already a teenager. I hope you are able to study well and relax at the same time.");
        break;
    case userAge >= 18 && userAge < 60:
        console.log("An adult has so much trouble, but I wish you to be happy every day.");
        break;
    case userAge >= 60 && userAge < 110:
        console.log("A person at this age has so much wisdom, so I just want to wish a lot of health and loved ones around.");
        break;
    case userAge >= 110:
        console.log("This is almost impossible. I do not believe that you are over 109 years old. This is either a mistake or a joke.");
        break;
    default:
        console.log("There was an error in writing the age. A letter or symbol may have been entered, which is not allowed.")
        break;
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
//який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let num = +prompt(`Enter a number from 0 to 9.`);

switch (num) {
    case 0:
        console.log(")");
        break;
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("$");
        break;
    case 4:
        console.log("%");
        break;
    case 5:
        console.log("^");
        break;
    case 6:
        console.log("&");
        break;
    case 7:
        console.log("*");
        break;
    case 8:
        console.log("(");
        break;
    case 9:
        console.log(")");
        break;
    default:
        console.log("There was an error in writing the number. A letter, another number or symbol may have been entered, which is not allowed.")
        break;
}

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let firstInt = +prompt("Enter the first integer.");
let lastInt = +prompt("Enter the last integer.");
let result = 0;
if (Math.floor(firstInt) == firstInt && Math.floor(lastInt) == lastInt) {
    // Проводжу перевірку, чи число і правда ціле.
    if (firstInt == lastInt) {
        console.log(`The range is not specified here. But still one number is included in it - ${firstInt}.`)
    } else if (firstInt < lastInt) {
        for (let i = firstInt; i <= lastInt; i++) {
            result += i;
        }
        console.log(`The sum of all numbers in the range from ${firstInt} to ${lastInt} is ${result}.`)
    } else {
        for (let i = lastInt; i <= firstInt; i++) {
            result += i;
        }
        console.log(`The sum of all numbers in the range from ${lastInt} to ${firstInt} is ${result}.`);
    }
} else {
    console.log(`You have entered a string or not an integer.`)
}

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let firstNum = +prompt("Enter any natural number.");
let lastNum = +prompt("Enter another natural number.");
let rest;
let commonDivisor;

if (Math.floor(firstNum) == firstNum && Math.floor(lastNum) == lastNum && firstNum > 0 && lastNum > 0) {
    // Перевіряю чи введені числа є натуральними та додатніми
    if (firstNum == lastNum) {
        console.log(`These numbers are the same, so their greatest common divisor is ${firstNum}.`)
        // Якщо наші числа не однакові, то далі використовую алгоритм Евкліда для знаходження найбільшого спільного дільника
    } else if (firstNum < lastNum) {
        rest = lastNum % firstNum;
        if (rest == 0) {
            console.log(`The greatest common divisor of ${firstNum} and ${lastNum} is ${firstNum}.`);
        } else {
            while (rest > 0) {
                commonDivisor = rest;
                rest = firstNum % rest;
            }
            console.log(`The greatest common divisor of ${firstNum} and ${lastNum} is ${commonDivisor}.`);
        }
    } else {
        rest = firstNum % lastNum;
        if (rest == 0) {
            console.log(`The greatest common divisor of ${firstNum} and ${lastNum} is ${lastNum}.`);
        } else {
            while (rest > 0) {
                commonDivisor = rest;
                rest = lastNum % rest;
            }
            console.log(`The greatest common divisor of ${firstNum} and ${lastNum} is ${commonDivisor}.`);
        }
    }
} else {
    console.log("You have entered a string or not a natural numbers.")
}

// 5. Запитай у користувача число і виведи всі дільники цього числа.

let anyInt = +prompt(`Enter any integer to find all its divisors.`);
result = "1, -1";
let numberOfDivisors = 2;
switch (true) {
    case anyInt === 0:
        console.log("The number 0 has infinity of divisors.");
        break;
    case anyInt === 1 || anyInt === -1:
        console.log(`The number ${anyInt} has 2 divisors: 1 and -1.`);
        break;
    case Math.floor(anyInt) == anyInt && (anyInt > 1 || anyInt < -1):
        for (let i = 2; i <= Math.abs(anyInt); i++) {
            if (Math.abs(anyInt) % i == 0) {
                result += `, ${i}, ${-i}`;
                numberOfDivisors += 2;
            }
        }
        console.log(`The number ${anyInt} has ${numberOfDivisors} divisors: ${result}.`);
        break;
    default:
        console.log("You have entered a string or not an integer.");
        break;
}

// standart

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let palindrome = prompt("Enter an integer to check for the palindrome.");
let firstDig;
let lastDig;
for (let i = 0; i < palindrome.length / 2; i++) {
    lastDig = Math.floor((+palindrome % Math.pow(10, i + 1)) / Math.pow(10, i));
    if (i == 0) {
        firstDig = Math.floor(+palindrome / Math.pow(10, palindrome.length - 1 - i));
    } else {
        firstDig = Math.floor(+palindrome / Math.pow(10, palindrome.length - 1 - i)) % 10;
    }
    if (firstDig != lastDig) {
        console.log(`${palindrome} is not a palindrome or you did not enter a number at all.`)
        break;
    }
    if (i == (palindrome.length / 2 - 1) || i == (palindrome.length / 2 - 0.5)) {
        console.log(`${palindrome} is a palindrome.`);
    }
}

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let purchaseAmount = +prompt("Enter the amount of your purchase.");
let discount = 0;

switch (true) {
    case purchaseAmount < 0:
        console.log(`The amount of the purchase cannot be negative.`);
        break;
    case purchaseAmount == 0:
        console.log("You entered 0 or nothing, which means that there was no purchase.");
        break;
    case purchaseAmount > 0 && purchaseAmount < 200:
        console.log('There is no discount if the purchase amount is less than UAH 200. I apologize.');
        break;
    case purchaseAmount > 199 && purchaseAmount < 300:
        discount = 0.03;
        break;
    case purchaseAmount > 299 && purchaseAmount < 500:
        discount = 0.05;
        break;
    case purchaseAmount > 499:
        discount = 0.07;
        break;
    default:
        console.log("You have entered a string or not an number.");
        break;
}

if (discount > 0) {
    purchaseAmount = (1 - discount) * purchaseAmount;
    console.log(`Your discount is ${Math.floor(discount * 100)}%. Currently, the amount with the discount is ${purchaseAmount.toFixed(2)} UAH.`);
}

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. 
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let positiveNum = 0; // додатні числа
let negativeNum = 0; // від'ємні числа
let zero = 0;
let evenNum = 0; // парні числа
let oddNum = 0; // непарні числа
for (let i = 0; i < 10; i++) {
    num = +prompt(`Enter any number.`);
    num > 0 ? positiveNum++ : positiveNum;
    num == 0 ? zero++ : zero;
    num < 0 ? negativeNum++ : negativeNum;
    num % 2 == 0 ? evenNum++ : evenNum;
    (num % 2 != 0) && (Math.floor(num) == num) ? oddNum++ : oddNum;
    if ((Boolean(num) != true) && (num != 0)) {
        alert(`You have entered a string or not an number.`);
    }
}

console.log(`You entered ${positiveNum} positive number(s), ${negativeNum} negative number(s), ${zero} zero(s), ${evenNum} even number(s), ${oddNum} odd number(s).`);

// 4. Зацикли відображення днів тижня таким чином: 
// «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let today;
let next;

for (let i = 0; i < 7; i++) {
    today = weekdays[i];
    do {
        next = confirm(`The day of the week is ${today}. Do you want to see the next day?`);
    } while (next == false)
}

// maximum

// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача 
// «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. 
// Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

const NUMBER = +prompt(`Enter the integer from 0 to 100.`);
let max = 100;
let min = 0;
let N;
let answer1 = false;
let answer2 = false;

if (Math.floor(NUMBER) == NUMBER && NUMBER > 0 && NUMBER < 100) {
    do {
        N = Math.floor((min + max) / 2);
        answer1 = confirm(`Is your number below ${N}?`);
        answer1 === true ? max = Math.floor(N) : min = Math.floor(N);
        answer2 = confirm(`Is your number ${N}?`);
        if ((answer2 === false) && (NUMBER == N)) {
            console.log(`You are lier, because your number is ${N}`);
            break;
        }
    } while (NUMBER != N)
    console.log(`Your number is ${N}`);
} else {
    console.log("Read the condition and enter the correct number.");
}

// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
let multiplication;

for (let i = 2; i < 10; i++) {
    console.log(`Multiplication of numbers by ${i}.`)
    for (let j = 1; j <= 10; j++) {
        multiplication = i * j;
        console.log(`${i} x ${j} = ${multiplication}`);
    }
}

// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
// Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

let someDate = prompt(`Enter a date in the format: 01.01.2000 `);
let arrSomeDate = someDate.split(".");
let someDay = +arrSomeDate[0];
let someMonth = +arrSomeDate[1];
let someYear = +arrSomeDate[2];
if (someDate.length == 10 && arrSomeDate.length == 3 && someMonth <= 12 && someDay <= 31) {
    if ((someDay < 28) || ((someDay < 30) && (someMonth == 4 || someMonth == 6 || someMonth == 9 || someMonth == 11)) || 
    ((someDay < 31) && (someMonth == 1 || someMonth == 3 || someMonth == 5 || someMonth == 7 || someMonth == 8 || someMonth == 10 || someMonth == 12)) || 
    (someDay == 28 && someMonth == 2 && (someYear % 400 == 0 || (someYear % 100 != 0 && someYear % 4 == 0)))) {
        someDay++;
    } else if (someDay == 31 && someMonth == 12) {
        someDay = "01";
        someMonth = "01";
        someYear++;
    } else {
        someDay = "01";
        someMonth++;
    }
    if (String(someDay).length == 1) {
        someDay = "0" + someDay;
    }
    if (String(someMonth).length == 1) {
        someMonth = "0" + someMonth;
    }
    for (let i = String(someYear).length; i < 4; i++) {
        someYear = "0" + someYear;
    }
    console.log(`Next date is ${someDay}.${someMonth}.${someYear}`);
} else {
    console.log("The date is entered in the wrong format.");
}