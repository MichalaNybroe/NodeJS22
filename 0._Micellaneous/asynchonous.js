/*
Why: Javascript er single-threaded
Asynchounous code removes code that blocks.

Use cases of asynchonous code:
- Data over network e.g. fetch.
- Read and write to files.
- When calling urls --> import.
- Interaction with databses.
- Heavy calculations.
- Encryption/decryption.
- Event listeners (DOM).

Basically anything that consumes time
- Ergo when we do not want to block our code from running

Promises er ret nyt - bluebird



What did we do before?

Solution 1:
Callback functions
Problem: callback hell, pyramid of doom : to many callback functions nested in each other
is not very readable.

Promises are therefore basically just a more estetic way of having callbacks via then().


Solution 2:
Two different states:
- Pending
- Fulfilled
    -Resolved, Rejected
*/

new Promise((resolve, reject) => {
    try {
        throw Error;
        // At some point you might have resolved
        resolve("Yay");
    } catch (stackTrace) {
        reject("Nay");
    } 
})
.then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage));



function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            try {
                //throw new Error("Bad");
                resolve("Good!");
            } catch (stackTrace) {
                console.log(stackTrace);
                reject("Bad!");
        }}, 3000);
    })
};

somethingGoodSomethingBad()
.then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage));


function howAwesomeAmI(name) {
    return new Promise((resolve, reject) => {
        try {
            resolve(`${name} is very awesome`);       
        } catch (error) {
            reject(error);
        }
})};

howAwesomeAmI("Anders").then(anwser => console.log(anwser));

//Can still be very nested - therefore asynch await!
//Solution 3:
//Syntastic sugar


//const shouldBeGood = await somethingGoodSomethingBadSolutionThree();
// Has to be mjs or experiemental flag or package.json with type module


async function asyncAwaitExample() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad();
        console.log(shouldBeGood);   
    } catch (error) {
        console.log(error);
    }
};

asyncAwaitExample();

// Do not use promises if you do not have to wait

//Ulempe ved await asynch : lige nu kan den vente på flere efter hinanden
// i stedet sig promise.all() så kan man kører dem parallelt

//IIFE Imediately invoked functional expresssion : example below

(async function asyncAwaitExampleIIFE() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad();
        console.log(shouldBeGood);   
    } catch (error) {
        console.log(error);
    }
})();
