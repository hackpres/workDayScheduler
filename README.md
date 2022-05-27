# Work Day Scheduler

## Description

This challenge was to create a simple calendar application that allows a user to save events for each hour of the day.

Upon researching the moment js documentation (https://momentjs.com/docs/) I saw that the moment team has deprecated the project and doesn't recommend new projects to use it. Instead they recommend using Luxon, Day.js, date-fns, or js-Joda. I decided to implement the use of luxon in place of moment for my scheduler.

The acceptance Criteria for this challenge was:
```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Git links

Github repo:
  https://github.com/hackpres/workDayScheduler

Github deployed link:
  https://hackpres.github.io/workDayScheduler/

## Screenshots of Deployed app

![wds12pm](./assets/images/wds12pm.png?raw=true "Work Day Scheduler at mid-day")
![wds2pm](./assets/images/wds2pm.png?raw=true "Work Day Scheduler between 2-3pm")


## Usage and Features

The project was built and styled using Bootstrap.
The table includes rows with a time for each hour of the workday, a textarea for user input, and a save button to save the user's input to local storage.

I used an icon from https://graphemica.com/%F0%9F%92%BE#html-entity-hexadecimal for the save button icon.

after declaring the various const variables I would need from the document I started by setting the DateTime to luxon.DateTime this was recommended by luxon's docs and is just a convenience so I dont have to type luxon whenever I need to access DateTime through luxon.

I also used the newly declared DateTime to declare TimeNow to an object. This will allow me later to access just the hour of the current time and compare it against the table hours.
I also declared two arrays. One is just an array of the table buttons and the other is an array of the data-timeblockhour values for each table row.
![luxonDateTime](./assets/images/luxonDateTime.png?raw=true "The convenience variables declared for my challenge")

Displaying the current day, month, and year was just a matter of setting the innerText of dateToday to DateTime.now() with the format of (MMM dd, yyyy).
![dateToday](./assets/images/dateToday.png?raw=true "Code setting the innerText for dateToday")

Next I declared all of my functions.
I made a function to check the current time against the tabletime and change the background color of the textarea accordingly.
I also needed a function to add eventListeners to the save buttons.
And the final declared function is used to get the local storage and compare its key against the table time and print the key value where it matches.
![functions](./assets/images/functions.png?raw=true "Declared functions")

The final part of this challenge was to call my functions so that the page stays updated automatically.

First I set the background color of the textareas based on the time.
This was achieved by using my declared array timeblockTime and invoking checkDateTimeVSTimeblock for each array position when the page loads. However, in order to have the background color change automatically when the hour rolls over I needed to use a setInterval(). Every 1000ms (1second) the table time is checked against the hour in the  current DateTime.now object.

Lastly I used a forEach loop on the save buttons array to give the buttons their eventListeners and to run the getLocalStorage function to check and print any saved local storage content for each table row.
![functionalCode](./assets/images/functionalCode.png?raw=true "The code that automates the site and makes everything function")