/* 
    Write a function called dataChecker which takes two parameters
    (string, rank).
    If the string is equal to ‘codenation’ and the rank is equal to 1 then
    log to the console a template string to tell us both are correct.
    If the string is ‘codenation’ but the rank isn’t 1 log to the console a
    template string that tells us the string was correct but the rank was
    wrong.

    Finally if the string was not equal to ‘codenation’ then log to the
    console a template string which tells us that the string was wrong
*/

const dataChecker = (string,rank) => {
    if (string == "codenation" && rank == 1) {
        console.log(`${string} and ${rank} are correct!`)
     } else if (string == "codenation" && rank != 1) {
         console.log(`${string} is correct but ${rank} is wrong!`)
     } else if (string != "codenation") {
         console.log("The string was wrong!")
     }
    }

dataChecker("hello",1);