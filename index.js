// Function declaration
function saturdayFun(doActivity) {
    if (doActivity) {
        return `This Saturday, I want to ${doActivity}!`;
    } else {
        return 'This Saturday, I want to roller-skate!';
    }   
}

// Function expression
const mondayWork = function (doWork) {
    if (doWork) {
        return `This Monday, I will ${doWork}.`
    } else {
        return 'This Monday, I will go to the office.'
    }
}

// Functions within functions

// The code below passes all of the tests, but I want to refactor it
// (Not so many if/else statements)
/*
function wrapAdjective(flair) {
    if (flair) {
        return function(adjective) {
            const start = 'You are';
            if (adjective) {
                return `${start} ${flair}${adjective}${flair}!`;
            } else {
                return `${start} ${flair}special${flair}!`
            }
            
        }
    } else {
        return function(adjective) {
            const start = 'You are';
            if (adjective) {
                return `${start} *${adjective}*!`;
            } else {
                return `${start} *special*!`
            }
            
        }
    }   
}
*/

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    }
}