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

dateToday.innerText = DateTime.now().toFormat('MMM dd, yyyy');

console.log(currentTime);
