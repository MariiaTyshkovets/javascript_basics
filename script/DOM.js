// Створити сторінку, що показує нумерований список пісень.

const playList = [
    {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
    {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
    {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
    {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
    {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
    {author: "AC/DC", song:"BACK IN BLACK"},
    {author: "QUEEN", song:"WE WILL ROCK YOU"},
    {author: "METALLICA", song:"ENTER SANDMAN"} 
];

let h2 = document.createElement("h2");
h2.innerHTML = "Playlist:";
document.body.appendChild(h2);
let liPlayList = [];
let liPlayListText = [];
let olPlayList = document.createElement("ol");
for (let i = 0; i < playList.length; i++) {
    liPlayList[i] = document.createElement("li");
    liPlayList[i].textContent = `${playList[i].author} - ${playList[i].song}.`;
    olPlayList.appendChild(liPlayList[i]);
}
document.body.appendChild(olPlayList);

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
// На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. 
// При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає. 

let btn = document.getElementById("btn");
btn.innerHTML = "Open";
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("closeBtn");
closeBtn.innerHTML = "Close";
let modalText = document.getElementsByClassName("modal__text")[0];
modalText.innerHTML = "This is a modal window.";

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

//Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

let btnTraffic = document.getElementsByClassName(['traffic-lights__btn'])[0];
let trafficLights = document.getElementsByClassName(['traffic-lights__item']);
let disable;

btnTraffic.onclick = function() {
    let active = document.getElementsByClassName(['traffic-lights__item--active'])[0];
    if (active == trafficLights[1]) {
        disable = document.getElementsByClassName(['traffic-lights__item--disable'])[1];        
    } else {
        disable = document.getElementsByClassName(['traffic-lights__item--disable'])[0];
    }
    disable.classList.add(['traffic-lights__item--active']);
    disable.classList.remove(['traffic-lights__item--disable']);
    active.classList.add(["traffic-lights__item--disable"]);
    active.classList.remove(['traffic-lights__item--active']);
}