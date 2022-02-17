// minimum


// 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
// кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:


function Product(name, quantity, bought, unitPrice) {
    this.name = name;
    this.quantity = quantity;
    this.bought = bought;
    this.unitPrice = unitPrice;
    let sum = quantity * unitPrice;
    this.sum = sum;
}

let shopingList = new Array();
shopingList[0] = new Product("apple", 2, false, 5);
shopingList[1] = new Product("milk", 1, true, 30);
shopingList[2] = new Product("orange", 5, false, 10);
shopingList[3] = new Product("sausage", 1, false, 100);
shopingList[4] = new Product("bread", 1, false, 27);
shopingList[5] = new Product("lemon", 2, true, 7);
shopingList[6] = new Product("avocado", 1, false, 55);

//  Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

shopListOrdered = (arr) => {
    console.log("Shopping List");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bought == true) {
            continue;
        }
        console.log(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bought == true) {
            console.log(arr[i]);
        }
    }
}

shopListOrdered(shopingList);

//  Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

productPurchase = (productName) => {
    for (let i = 0; i < shopingList.length; i++) {
        if (shopingList[i].name == productName && shopingList[i].bought == true) {
            console.log(`You have already bought ${productName}.`);
            break;
        }
        if (shopingList[i].name == productName && shopingList[i].bought == false) {
            shopingList[i].bought = true;
            console.log(`You have successfully purchased ${productName}.`);
            break;
        } else {
            console.log(`${productName} is not in the shopping list.`);
        }
    }
}

//  Створення списку (не) придбаних продуктів.

shopListUnpurchased = (arr) => {
    console.log("Shopping List of Unpurchased Products");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bought == false) {
            console.log(arr[i]); 
            // console.log(arr[i].name); - якщо треба тільки назви продуктів вивести
        } 
    }
}

productPurchase("apple");
shopListUnpurchased(shopingList);


// standart


// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
// в якому продукт, що ми шукаємо, буде відсутнім)

productRemove = (productName) => {
    shopingList = shopingList.map((item) => {
        if (item.name != productName) {
            return item;
        }
    });

    for (let i = 0; i < shopingList.length; i++) {
        if (shopingList[i] == undefined) {
            shopingList.splice(i, 1);
        } 
    }
    return shopingList;
}

console.log(shopingList);
productRemove("apple");
console.log(shopingList);
productRemove("cheese");
console.log(shopingList);


// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, 
// наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function isPositiveNumber (a) {
    if (a > 0 && a == +a) {
        return true;
    } else {
        alert('This number is not a positive number.')
        return false;
    }
}

productAdd = (productName) => {
    let productQuantity;
    let productPriceUnit;
    let check;
    do {
        productQuantity = prompt(`Enter the number of ${productName}s you want to buy.`);
        check = isPositiveNumber(productQuantity);
    } while (check == false)

    for (let i = 0; i < shopingList.length; i++) {
        if (shopingList[i].name == productName && shopingList[i].bought == false) {
            shopingList[i].quantity = shopingList[i].quantity + +productQuantity;
            console.log(`The ${productName} is already on the shopping list. Their number has increased by ${productQuantity}.`);
            return `${productName} added.`;
        } else if (shopingList[i].name == productName && shopingList[i].bought == true) {
            shopingList[i].quantity = +productQuantity;
            shopingList[i].bought = false;
            console.log(`You have already bought ${productName}. You will need to buy ${productQuantity} more.`);
            return `${productName} added.`;
        }
    }
    
    do {
        productPriceUnit = prompt(`Enter the price for one ${productName}.`);
        check = isPositiveNumber(productPriceUnit);
    } while (check == false)

    shopingList.push(new Product(productName, +productQuantity, false, +productPriceUnit));
    console.log(`New product ${productName} added to shopping list.`);
    return `${productName} added.`;
}

productAdd('orange');
productAdd('lemon');
productAdd('carrot');

// maximum


// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

sumAllProducts = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].sum; 
    }
    return sum;
}

console.log(`The sum of all products from the shopping list is ${sumAllProducts(shopingList)}.`)

// 2. Підрахунок суми всіх (не) придбаних продуктів.

sumUnpurchasedProducts = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bought == false) {
            sum += arr[i].sum; 
        }        
    }
    return sum;
}

console.log(`The sum of all unpurchased products from the shopping list is ${sumUnpurchasedProducts(shopingList)}.`)

// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
// в залежності від параметра функції, який вона приймає)

productsDependenceSum = (dependence) => {
    let first;
    let second;
    switch (dependence) {
        case "+":
            for (let i = 0; i < shopingList.length-1; i++) {
                for (let j = 0; j < shopingList.length-1; j++) {
                    first = Object.assign({}, shopingList[j]);
                    second = Object.assign({}, shopingList[j+1]);
                    if (shopingList[j].sum > shopingList[j+1].sum) {
                        shopingList[j] = Object.assign({}, second);
                        shopingList[j+1] = Object.assign({}, first);
                    }
                }
            }
            return console.log(shopingList);
        case "-":
            for (let i = 0; i < shopingList.length-1; i++) {
                for (let j = 0; j < shopingList.length-1; j++) {
                    first = Object.assign({}, shopingList[j]);
                    second = Object.assign({}, shopingList[j+1]);
                    if (shopingList[j].sum < shopingList[j+1].sum) {
                        shopingList[j] = Object.assign({}, second);
                        shopingList[j+1] = Object.assign({}, first);
                    }
                }
            }
            return console.log(shopingList);
        default:
            console.log(`Choose one of the options: "+" or "-".`);
            break;
    }   
}

productsDependenceSum("+");
productsDependenceSum('-');
productsDependenceSum(0);
