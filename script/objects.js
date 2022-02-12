const car = {
    maker: "Renault Fluence",
    model: "Megane Sedan",
    yearManufacture: 2021,
    averageSpeed: 95,
    fuelTank: 50,
    "average fuel consumption per 100 km": 4.4,
    drivers: "",
    carInfo: function () {
        console.log("Full information about car:")
        for (let key in car) {
            console.log(` ${key}: ${this[key]}`);
        }
    },
    driverAdd: function() {
        let newDriver = prompt("Enter driver name");
        let driverLicense = confirm("Do you have a driver's license?");
        if (newDriver != null && driverLicense == true) {
            this.drivers += `${newDriver}, `;
            console.log(`driver: ${this.drivers}`);
        } else {
            alert("You can't drive because you don't have a driver's license or you didn't enter a name.");
        }
    },
    carRefueling: function() {
        if (this.fuelTank < 50) {
            this.fuelTank = 50;
            console.log ("The fuel tank is full.");
        } else {
            console.log ("You don't need a car refueling. The fuel tank is already full.");
        }
    },
    calcTravelTime: function (distance = 10, driver) {
        let time;
        let fuel;
        let refueling;
        let numberRefuel = 0;
        let partDistance = (this.fuelTank - 2) * 100 / this["average fuel consumption per 100 km"];
        if (this.drivers.includes(`${driver},`) ) {
            time = distance / this.averageSpeed;
            fuel = this["average fuel consumption per 100 km"] * distance / 100; 
            if (time <= 4 && this.fuelTank > fuel) {
                this.fuelTank -= fuel;
                console.log(`You will need ${time.toFixed(2)} hours and ${fuel} liters of fuel to drive ${distance} km. In your fuel tank remains ${this.fuelTank} liters.`);
            } else if (time > 4 && fuel < (this.fuelTank - 2)) {
                time += Math.floor(time / 4);
                this.fuelTank -= fuel;
                console.log(`You will need ${time.toFixed(2)} hours and ${fuel} liters of fuel to drive ${distance} km. In your fuel tank remains ${this.fuelTank} liters.`);
            } else if (this.fuelTank <= fuel) {
                time += Math.floor(time / 4);
                do {
                    fuel -= this.fuelTank;
                    this.fuelTank = 2; 
                    refueling = confirm(`Your fuel tank is almost empty. Do you want to refuel the car?`);
                    if (refueling) {
                        this.carRefueling(); 
                        numberRefuel++;
                        partDistance += partDistance;
                    } else {
                        console.log(`The whole trip would take ${time.toFixed(2)} hours. You drove only ${partDistance.toFixed(2)} km and did not want to refuel.`);
                        break;
                    }
                } while (fuel > this.fuelTank)
                this.fuelTank -= fuel;
                fuel < this.fuelTank ? console.log(`You will need ${time.toFixed(2)} hours and ${numberRefuel} times to refuel the car to drive ${distance} km. In your fuel tank remains ${this.fuelTank} liters.`) : false;
            }
        
        } else {
            console.log(`You do not have permission to drive this car.`);
        }
    }
}
  
car.driverAdd();
car.calcTravelTime(500, "Mariia");

// standart

function isNatural (a) {
    if (a == Math.floor(a) && a > 0 && a == +a) {
        return true;
    } else {
        alert('This number is not a natural.')
        return false;
    }
}

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    showTime: function() {
        for (let key in time) {
            if (String(this[key]).length == 1) {
                this[key] = `0${this[key]}`;
            }
        }
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    changeSeconds(a) {
        if (isNatural(a)) {
            if ((+this.seconds + a) < 60) {
                this.seconds = +this.seconds + a;
            } else {
                this.minutes = +this.minutes + Math.floor((+this.seconds + a)/60);
                this.seconds = (+this.seconds + a)%60;
                if (this.minutes >= 60) {
                    this.hours = +this.hours + Math.floor(this.minutes/60);
                    this.minutes = this.minutes%60;
                }
                if (this.hours >= 24) {
                    this.hours = this.hours%24;
                }
            }
        }
    },
    changeMinutes(b) {
        if (isNatural(b)) {
            if ((+this.minutes + b) < 60) {
                this.minutes = +this.minutes + b;
            } else {
                this.hours = +this.hours + Math.floor((+this.minutes + b)/60);
                this.minutes = (+this.minutes + b)%60;
                if (this.hours >= 24) {
                    this.hours = this.hours%24;
                }
            }
        }
    },
    changeHours(c) {
        if (isNatural(c)) {
            if ((+this.hours + c) < 24) {
                this.hours = +this.hours + c;
            } else {
                this.hours = (+this.hours + c)%24;
            }
        }
    }
}

time.showTime();
time.changeSeconds(150);
time.changeMinutes(65);
time.changeHours(25);
time.showTime();

// maximum

function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

let firstNumber = new Fraction(6, 9);
let secondNumber = new Fraction(2, 8);

const calcFractions = {
    sum: function(a, b) {
        return `The sum of two fractions is ${a.numerator*b.denominator + b.numerator*a.denominator}/${a.denominator * b.denominator}`; 
    },
    subtraction: function(a, b) {
        return `The difference of the two fractions is ${a.numerator*b.denominator - b.numerator*a.denominator}/${a.denominator * b.denominator}`; 
    },
    multiplication: function(a, b) {
        return `The multiplication of two fractions is ${a.numerator * b.numerator}/${a.denominator * b.denominator}`; 
    },
    division: function(a, b) {
        return `The division of two fractions is ${a.numerator * b.denominator}/${a.denominator * b.numerator}`; 
    },
    reduction: function(a) {
        let commonFactor;
        if (a.numerator == a.denominator) {
            return 1;
        } 
        if (a.numerator < a.denominator) {
            for (let i = 1; i <= a.numerator; i++) {
                if ((a.numerator % i == 0) && (a.denominator % i == 0)) {
                    commonFactor = i;
                }
            }
            a.numerator /= commonFactor;
            a.denominator /= commonFactor;
        }
        if (a.numerator > a.denominator) {
            for (let i = 1; i < a.denominator; i++) {
                if ((a.numerator % i == 0) && (a.denominator % i == 0)) {
                    commonFactor = i;
                }
            }
            a.numerator /= commonFactor;
            a.denominator /= commonFactor;
        }
        return `${a.numerator}/${a.denominator}`;
    }
}

console.log(calcFractions.sum(firstNumber, secondNumber));
console.log(calcFractions.subtraction(firstNumber, secondNumber));
console.log(calcFractions.multiplication(firstNumber, secondNumber));
console.log(calcFractions.division(firstNumber, secondNumber));
console.log(calcFractions.reduction(firstNumber));
console.log(calcFractions.reduction(secondNumber));