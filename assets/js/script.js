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
const saveBtn9 = document.getElementById("9btn");
const saveBtn10 = document.getElementById("10btn");
const saveBtn11 = document.getElementById("11btn");
const saveBtn12 = document.getElementById("12btn");
const saveBtn1 = document.getElementById("1btn");
const saveBtn2 = document.getElementById("2btn");
const saveBtn3 = document.getElementById("3btn");
const saveBtn4 = document.getElementById("4btn");
const saveBtn5 = document.getElementById("5btn");
    //sets the value of DateTime to luxon.DateTime so we dont have to type luxon. everytime we need DateTime.
        //its luxon syntax to include luxon. so this is for convenience.
var DateTime = luxon.DateTime;

    //sets the value of currentTimeObject to the current time as an object, so I can easily get just the time measurement I need.
let currentTimeObject = DateTime.now().toObject();
    //adds all the data-timeblockhour attributes for the table textarea's in an array
let timeblockTime = [nineText.dataset.timeblockhour, tenText.dataset.timeblockhour, elevenText.dataset.timeblockhour, twelveText.dataset.timeblockhour, oneText.dataset.timeblockhour, twoText.dataset.timeblockhour, threeText.dataset.timeblockhour, fourText.dataset.timeblockhour, fiveText.dataset.timeblockhour];
    //adds all saveBtn elements into an array
let saveBtnArray = [saveBtn9, saveBtn10, saveBtn11, saveBtn12, saveBtn1, saveBtn2, saveBtn3, saveBtn4, saveBtn5];



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
function addEventListenerOnBtns(tableBtn) {
    tableBtn.addEventListener('click', () => {
        localStorage.setItem(`TextFor: ${tableBtn.id}`, `${tableBtn.parentElement.previousElementSibling.children[0].value}`);
    });
};
function getLocalStorage(timeBtn) {
    let storage = Object.entries(localStorage);
    storage.forEach((keyposition) => {
        let keyChecker = `TextFor: ${timeBtn.id}`;
        let saveBtnTextarea = timeBtn.parentElement.previousElementSibling.children[0];
        console.log(keyposition);
        if (keyposition[0] === keyChecker) {
            console.log("gotcha");
            saveBtnTextarea.innerText = `${keyposition[1]}`;
            console.log(keyposition[1]);
        }
    });
};


    //runs the checkDateTimeVSTimeblock function when the page loads to display the correct background color for the user
timeblockTime.forEach((position) => checkDateTimeVSTimeblock(currentTimeObject.hour, position));
    //sets an interval every second to run the checkDateTimeVSTimeblock function for each timeblock textarea to change the background color so the user can see if the timeblock is past, present, or future.
let intervalID = setInterval(() => {
    currentTimeObject = DateTime.now().toObject();
    timeblockTime.forEach((position) => checkDateTimeVSTimeblock(currentTimeObject.hour, position));
}, 1000);
//each save button should store the text content of the text area in the same tr to local storage
saveBtnArray.forEach((timeRow) => {
    getLocalStorage(timeRow)
    addEventListenerOnBtns(timeRow)
});