//()    #currentDay needs dynamic creation to display current date
//timeblocks need to be created for standard business hours 9am-5pm
//update backgroun-color style for each timeblock based on past, present, and future
//add input on timeblocks
//add save button for currently selected timeblock
//when save button is clicked, user text is stored in local memory
//make sure timeblocks check local storage for input on page load

const dateToday = document.getElementById("currentDay");

dateToday.innerText = moment().format('dddd, MMMM YYYY');