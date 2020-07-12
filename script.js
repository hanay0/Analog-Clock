
// defining these constants to shorten the code below
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runTheClock(){

    var date = new Date();
    console.log(date);

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();

    console.log("hours = " + hrs + " / minutes = " + mins + " / seconds = " + sec);


    let hrPosition = (hrs*360/12)+(mins*(360/60)/12);
    let minPosition = (mins*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;


HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
