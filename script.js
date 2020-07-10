
// defining these constants to shorten the code below
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



let hrPosition = 20,
    minPosition = 102,
    secPosition = 267;

    var date = new Date();
    console.log(date);

let hrs = date.getHours(),
    mins = date.getMinutes(),
    sec = date.getSeconds();

    console.log("hours = " + hrs + " / minutes = " + mins + " / seconds = " + sec);



HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";


