// Импортирует скрипт с папки
// import hello from "./modules/hello";

// Скрипт календаря
// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';
// new AirDatepicker('#date')

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
}) 

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("close").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
}) 



