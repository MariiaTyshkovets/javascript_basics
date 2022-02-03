// minimum

// name
let name;
let NAME;
let userName; // camelCase
let user_Name; // snake_case
let $name;
let USER_NAME; // SCREAMING_SNAKE_CASE

// surname
let surname;
let Surname;
let UserSurname; // PascalCase
let _userSurname;
let $userSurname;

// wrong names
/* let 1name;
let %surname;
let "name";
let my-name;
let &name;
let #surname; */

// standart

let yourName = prompt("What is your name?");
alert("Hello, " + yourName);

let yearOfBirth = prompt("What is your year of birth?")
const age = 2022 - yearOfBirth; // age з маленької літери, бо не заданий початково
console.log("Your approximate age - " + age);

let lenghtOfSquare = prompt("Define the length of the side of the square.");
console.log("The perimeter of this square is " + lenghtOfSquare*4);

// maximum

let radius = prompt("Define the radius of the circle.");
let square = Math.pow(radius, 2)*Math.PI;
console.log("The square of this circle is " + Number(square.toFixed(4)));

let distance = prompt("What is the distance between the cities? (in kilometers)");
let time = prompt("How many hours do you want to get to the city? (in hours)");
let speed = distance/time;
console.log("To get to another city on time you need to go at a speed of at least " + speed + " km/h.");

const DOLLAR_TO_EURO = 0.89;
let dollar = prompt("How many dollars do you want to convert into euros?");
let euro = dollar * DOLLAR_TO_EURO;
console.log("You will receive " + euro + " euros"); 