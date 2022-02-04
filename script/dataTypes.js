// mimimum

//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(1));

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let a = "1";
let b = 2;
console.log(+a + b);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let volumeFlashGB = prompt("Enter the volume of the flash drive in gigabytes (GB)");
const FILE_SIZE = 820;
let numberOfFiles = Math.floor(volumeFlashGB * 1000 / FILE_SIZE);
console.log(`The ${volumeFlashGB} GB flesh drive will hold ${numberOfFiles} file(s) with a size of ${FILE_SIZE} MB.`);

// standart

/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/

let moneyInWallet = prompt("Enter the emount of money in the your wallet (in UAH).");
let priceOfChocolate = prompt("Enter the price of chocolate (in UAH).");
if (+moneyInWallet > +priceOfChocolate) {
    let numberOfChocolates = Math.floor(moneyInWallet / priceOfChocolate);
    let rest = moneyInWallet % priceOfChocolate;
    console.log(`For ${moneyInWallet} UAH you can buy ${numberOfChocolates} chocolates and ${rest} UAH the rest will remain.`);
} else if (+moneyInWallet == +priceOfChocolate) {
    console.log(`For ${moneyInWallet} UAH you can buy one chocolate bar.`);
} else {
    console.log("Sorry. Your money is not enough to buy even one chocolate bar.");
}

/* Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).*/

let number = prompt("Enter a three-digit number.");
let firstDigit = +number % 10;
let secondDigit = Math.floor(+number / 10) % 10;
let thirdDigit = Math.floor(+number / 100);
let inverseNumber = String(firstDigit) + String(secondDigit) + String(thirdDigit);
console.log(`The number ${number} backwards will be ${inverseNumber}.`);

// maximum

/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
Вивести суму нарахованих відсотків.*/

let deposit = prompt("Enter the amount of money deposit in the bank with an annual rate of 5% (in UAH).");
const INTEREST_RATE = 0.05;
const NUMBER_OF_MONTH = 2;
let interestAmount = (deposit * INTEREST_RATE / 12) * NUMBER_OF_MONTH;
console.log(`The monetary amount of interest on the deposit for ${NUMBER_OF_MONTH} months is ${interestAmount.toFixed(2)} UAH.`);

// Що повернуть вираження:

console.log(2 && 0 && 3); 
// && - логічне "і". Перевіряє (зліва на право) на істинність (true). Якщо всі елементи true, то виводить останнє значення.
//Якщо є хибний елемент у ряді, то повертає перший елемент false. У нашому випадку буде 0 - бо він має значення false.

console.log(2 || 0 || 3);
// || - логічне "або". Перевіряє (зліва на право) на хибність (false). Працює навпаки у порівнянні з &&.
// У цьому випадку перший істинний елемент 2, тому його він і буде повертати.

console.log(2 && 0 || 3);
// Пріоритетніше виконується логічне "i", тому почнемо з початку. 2 - true, 0 - false, пому поверне перше хибне значення - 0.
// Далі перевіряє ||. 0 - false, 3 - true, тому повернеться перше істинне значення - 3.