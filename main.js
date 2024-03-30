"use strict";

// Create Scroll Icon 
let scrollerDiv = document.querySelector(".scroller");
let pageScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
    let scrollToper = document.documentElement.scrollTop;
    scrollerDiv.style.width = `${(scrollToper / pageScroll) * 100}%`;
});


// Create CountDown Timer 
// Get the End Of Year 
let CountdownYear = new Date("Dec 31, 2024 23:59:59").getTime();

// Create Coundter With SetIntervel
let Counter = setInterval(() => {

    // Get Date OF Now 
    let dateNow = new Date().getTime();

    // Get The Differnce Between The Date Now And The Date Of The END of Year 
    let diffDate = CountdownYear - dateNow;

    // Get time Unites
    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diffDate % (1000 * 60) / 1000);

    // Set Date TIme In The Document Element
    document.querySelector(".events .container .info .time .unit .days").innerHTML = days < "10" ? `0${days}` : days;
    document.querySelector(".events .container .info .time .unit .hours").innerHTML = hours < "10" ? `0${hours}` : hours;
    document.querySelector(".events .container .info .time .unit .minutes").innerHTML = minutes < "10" ? `0${minutes}` : minutes;
    document.querySelector(".events .container .info .time .unit .seconds").innerHTML = seconds < "10" ? `0${seconds}` : seconds;

    // Create Clear Interval
    if (diffDate < 0) {
        clearInterval(Counter);
    }

}, 1000);


// Our Skills Section
let skillsSection = document.querySelector(".skills");
let skillsCount = document.querySelectorAll(".skills .container .info .skill .the-progress span");

// Stats Section
let statsSection = document.querySelector(".stats");
let spanCount = document.querySelectorAll(".stats .container .box .State");


let state = false;

window.onscroll = function () {
    if (window.scrollY >= skillsSection.offsetTop - 100) {

        skillsCount.forEach((el) => {
            el.style.width = el.dataset.prog;
        });

    }

    if (window.scrollY >= statsSection.offsetTop - 200) {

        if (state === false) {

            spanCount.forEach((el) => icreaseNumber(el));
        };

        state = true;
    }
}



function icreaseNumber(el) {
    let data = el.dataset.count;

    let countUp = setInterval(() => {
        el.textContent++;

        if (el.textContent == data) {
            clearInterval(countUp);
        }
    }, 2000 / data);
};

