//()    #currentDay needs dynamic creation to display current date
//()    timeblocks need to be created for standard business hours 9am-5pm
//update backgroun-color style for each timeblock based on past, present, and future
    //()    function to check current Date
    //()    if/else statements to change background-color based on the current Date
//()    add input on timeblocks
//()    add save button for currently selected timeblock
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
    //sets the value of DateTime to luxon.DateTime so we dont have to type luxon. everytime we need DateTime.
        //its luxon syntax to include luxon. so this is for convenience.
var DateTime = luxon.DateTime;


    //checks the current time and sets it as the value of currentTime
let currentTime = DateTime.now();
    //sets the value of currentTimeObject to the current time as an object, so I can easily get just the time measurement I need.
let currentTimeObject = DateTime.now().toObject();
    //adds all the data-timeblockhour attributes for the table textarea's in an array
let timeblockTime = [nineText.dataset.timeblockhour, tenText.dataset.timeblockhour, elevenText.dataset.timeblockhour, twelveText.dataset.timeblockhour, oneText.dataset.timeblockhour, twoText.dataset.timeblockhour, threeText.dataset.timeblockhour, fourText.dataset.timeblockhour, fiveText.dataset.timeblockhour]


    //adds current Month Day, and Year to the currentDay element
dateToday.innerText = DateTime.now().toFormat('MMM dd, yyyy');



    //declares a funciton checkDateTimeVSTimeblock that will pass in hour and the value of an index position
function checkDateTimeVSTimeblock(hour, i) {
    if (hour > i) {
        var tbElemGreat = document.querySelector(`[data-timeblockhour="${i}"]`);
        tbElemGreat.classList.add("past");
        tbElemGreat.classList.remove("present");
        tbElemGreat.classList.remove("future");
    } else if (hour == i) {
        var tbElemEqual = document.querySelector(`[data-timeblockhour="${i}"]`);
        tbElemEqual.classList.add("present");
        tbElemEqual.classList.remove("past");
        tbElemEqual.classList.remove("future");
    } else {
        var tbElemLess = document.querySelector(`[data-timeblockhour="${i}"]`);
        tbElemLess.classList.add("future");
        tbElemLess.classList.remove("past");
        tbElemLess.classList.remove("present");
    }
};
    //runs the checkDateTimeVSTimeblock function when the page loads to display the correct background color for the user
timeblockTime.forEach((position) => checkDateTimeVSTimeblock(currentTimeObject.hour, position));
    //sets an interval every second to run the checkDateTimeVSTimeblock function for each timeblock textarea to change the background color so the user can see if the timeblock is past, present, or future.
let intervalID = setInterval(() => {
    currentTimeObject = DateTime.now().toObject();
    timeblockTime.forEach((position) => checkDateTimeVSTimeblock(currentTimeObject.hour, position));
}, 1000);


//each save button should store the text content of the text area in the same tr to local storage