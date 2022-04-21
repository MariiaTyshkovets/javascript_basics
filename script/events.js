// 1. Створити HTML-сторінку для відображення/редагування тексту. 
// При відкритті сторінки текст відображається за допомогою тега div. 
// При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
// При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. 
// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

task1 = document.getElementById('task1');
const div = document.querySelector('.text');
const textarea = document.querySelector('#textarea');
let someText = "";


document.getElementsByClassName('text')[0].addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.code == 'KeyE' && event.ctrlKey) {
        textarea.textContent = div.textContent;
        div.classList.add('display-none');
        task1.appendChild(textarea);
        textarea.classList.remove('display-none');
    }
});

textarea.addEventListener('input', (event) => {
    someText = event.target.value; 
});

document.addEventListener('keydown', function(event) {
    event.stopPropagation();               
    if (event.code == 'Equal' && event.ctrlKey) {
        textarea.classList.add('display-none');
        div.textContent = someText;
        div.classList.remove('display-none');
    }
});



// 2. Створити HTML-сторінку з великою таблицею. 
// При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. 
// Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

// Вирішення цього завдання я знайшла в інтернеті і намагалась розібратись 

const isEmptyOrNaN = (obj) => obj === "" || isNaN(obj);

const getCellValueInColumn = (tr, columnIndex) => tr.children[columnIndex].innerText || tr.children[columnIndex].textContent;

const compareCellValues = (cellValue1, cellValue2) => {
    return isEmptyOrNaN(cellValue1) || isEmptyOrNaN(cellValue2) ? cellValue1.toString().localeCompare(cellValue2) : cellValue1 - cellValue2;
};

const compareFnFactory = (columnIndex, ascending) => (firstEl, secondEl) => {
    const cellValue1 = getCellValueInColumn(firstEl, columnIndex);
    const cellValue2 = getCellValueInColumn(secondEl, columnIndex);
    return ascending ? compareCellValues(cellValue2, cellValue1) : compareCellValues(cellValue1, cellValue2);
};

document.querySelectorAll("th").forEach((th) => {
    th.addEventListener("click", () => {
        const table = th.closest("table");
        const tbody = table.querySelector("tbody");
        const columnIndex = Array.from(th.parentNode.children).indexOf(th);
        const compareFn = compareFnFactory(columnIndex, (this.ascending == !this.ascending));
        Array.from(tbody.querySelectorAll("tr")).sort(compareFn).forEach((tr) => tbody.appendChild(tr));
    })
});


// 3. Створити HTML-сторінку з блоком тексту в рамці. 
// Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

const text = document.getElementsByClassName("text-with-border")[0];
const triangle = document.getElementsByClassName("triangle")[0];
let isDown = false;

triangle.addEventListener("mousedown", function(){
    isDown = true;
    text.addEventListener("mousemove", point, true);
}, true);

document.addEventListener('mouseup', function() {
  isDown = false;
}, true);

function point(event) {
    event.preventDefault();
    if (isDown) {
        let deltaX = event.movementX;
        let deltaY = event.movementY;
    
        let rect = text.getBoundingClientRect();
    
        text.style.width = rect.width - 42 + deltaX + 'px';
        text.style.height = rect.height - 42 + deltaY + 'px';
        console.log("rect.width = ", rect.width);
        console.log("rect.height = ", rect.height);
    }  
}   