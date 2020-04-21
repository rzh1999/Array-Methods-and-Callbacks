import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
fifaData.forEach(function(item){
    //console.log(`year ${item["Year"]}`)
    if(item["Year"] === 2014 && item["Stage"] === "Final" ){
        console.log(`Home Team ${item["Home Team Name"]}`);
        console.log(`Away Team ${item["Away Team Name"]}`);
        console.log(`Home Goals ${item["Home Team Goals"]}`);
        console.log(`Away Goals ${item["Away Team Goals"]}`);
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            console.log(`Winner of 2014 world cup final ${item["Home Team Name"]}`)
        }
        else{
            console.log(`Winner of 2014 world cup final ${item["Away Team Name"]}`)
        }
    }
});



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) {
    const finals = [];
    fifaData.forEach(function(item){
        if(item["Stage"] === "Final"){
        finals.push(item)
        }
    });
    return finals;
};
const getFinalsResult = getFinals(fifaData);
console.log("Return from getFinals()")
console.log(getFinalsResult)

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`,
 and returns an array called `years` containing all of the years in the dataset */
const finals = getFinals(fifaData);

function getYears(finals) {
    const years =[];
    finals.forEach(function(item){
        years.push(item["Year"])

    });
    return years;
};

const result = getYears(finals);
console.log("Results of get years")
console.log(result)

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner 
(home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finals) {
  
    const winners = [];
    finals.forEach(function(items){
        if (items["Home Team Goals"] > items["Away Team Goals"]){
           
            winners.push(items["Home Team Name"])

        }
        else{
            winners.push(items["Away Team Name"])
        }

    });
   return winners;

};

let getWinnerResults = getWinners(finals);
console.log("GetWinners Result");
console.log(getWinnerResults)

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings
 "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
let winners = getWinners(finals);
let years = getYears(finals)
function getAllWinners(winners, years) {
    console.log(`New code ${winners.length} ${years.length}`)
    for(let i =0; i < winners.length; i++){
        console.log(`In ${years[i]}, ${winners[i]} won the world cup! `)
    }
};

getAllWinners(winners, years);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` 
and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(fifaData, initials) {
   const newFilter =  fifaData.filter(function(item){ 
        return item["Stage"] === "Final"
    });
   console.log('newFilter ${newFilter}')
   
}




/* Task 8: Write a function called getGoals() that accepts a parameter `data` 
and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

     
    

};

getGoals(fifaData);


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most 
goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average 
number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {
    const homeTeamGoals = [];
     array.forEach(function(item){
        homeTeamGoals.push(item["Home Team Goals"])
     });
     const len = homeTeamGoals.length;
     const homeAvg = homeTeamGoals.reduce((a,b) => (a + b)) /len
     const homeAverage = homeAvg.toFixed(2)

     const awayTeamGoals = [];
     array.forEach(function(item){
        awayTeamGoals.push(item["Away Team Goals"])
     });
     
     const awayAvg = awayTeamGoals.reduce((a,b) => (a + b)) /awayTeamGoals.length
     const awayAverage = awayAvg.toFixed(2)

      return `Home Team goals Average ${homeAverage} and Away Teams Goals Average ${awayAverage} `
        
        
}



let results2 = getAverageGoals(fifaData);
console.log(results2)


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */