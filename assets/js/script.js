//()    #currentDay needs dynamic creation to display current date
//()    timeblocks need to be created for standard business hours 9am-5pm
//update backgroun-color style for each timeblock based on past, present, and future
    //()    function to check current Date
    //if/else statements to change background-color based on the current Date
//add input on timeblocks
//add save button for currently selected timeblock
//when save button is clicked, user text is stored in local memory
//make sure timeblocks check local storage for input on page load

const dateToday = document.getElementById("currentDay");
const nineText = document.getElementById("9textarea");
const tenText = document.getElementById("10textarea");
const elevenText = document.getElementById("11textarea");
const twelveText = document.getElementById("12textarea");
const oneText = document.getElementById("1textarea");
const twoText = document.getElementById("2textarea");
const threeText = document.getElementById("3textarea");
const fourText = document.getElementById("4textarea");
const fiveText = document.getElementById("5textarea");

var DateTime = luxon.DateTime;

let currentTime = DateTime.now();
let currentTimeObject = DateTime.now().toObject();
let timeblockTime = [nineText.dataset.timeblockhour, tenText.dataset.timeblockhour, elevenText.dataset.timeblockhour, twelveText.dataset.timeblockhour, oneText.dataset.timeblockhour, twoText.dataset.timeblockhour, threeText.dataset.timeblockhour, fourText.dataset.timeblockhour, fiveText.dataset.timeblockhour]


dateToday.innerText = DateTime.now().toFormat('MMM dd, yyyy');



function checkDateTimeVSTimeblock(hour, i) {
    if (hour > i) {
        console.log(`> ${hour} ${i}`);
        var tbElemGreat = document.querySelector(`[data-timeblockhour="${i}"]`);
        tbElemGreat.classList.add("past");
        tbElemGreat.classList.remove("present");
        tbElemGreat.classList.remove("future");
    } else if (hour == i) {
        console.log(`= ${hour} ${i}`);
        var tbElemEqual = document.querySelector(`[data-timeblockhour="${i}"]`);
        console.log(tbElemEqual);
        tbElemEqual.classList.add("present");
        tbElemEqual.classList.remove("past");
        tbElemEqual.classList.remove("future");
    } else {
        console.log(`< ${hour} ${i}`);
        var tbElemLess = document.querySelector(`[data-timeblockhour="${i}"]`);
        tbElemLess.classList.add("future");
        tbElemLess.classList.remove("past");
        tbElemLess.classList.remove("present");
    }
};
timeblockTime.forEach((position) => checkDateTimeVSTimeblock(currentTimeObject.hour, position));

let intervalID = setTimeout(() => {
    timeblockTime.forEach((position) => checkDateTimeVSTimeblock(currentTimeObject.hour, position));
}, 1000);


