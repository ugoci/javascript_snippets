/**
 * You may want to modify the html file to mute the output of certain exercises,
 * this one for instance, will generate many lines of output. You can comment
 * out lines in HTML with <!-- comment --> tags.
 *
 * 1. Create a for loop that will log all the numbers between 5 and 1000.
 *    incrementing in 5s. So the output would start "5, 10, 15, 20 ..."
 * 2. Create a for loop that outputs every number between 100 and -100 included.
 * 3. Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
 *    9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
 *    times, what is the number you get at the end?
 *
 * This last one can be tricky! There are a couple ways to do it, see if you can
 * find both ways!
 *
 */

//Question 1________________________
for (let i = 5; i < 1000; i = (i * 1) + 4){
    console.log(i)
}

//Question 2________________________
for (let i = -100; i <= 100; i++){
    console.log(i)
}

//Question 3________________________
for (let a = 0; a <= 20; a++){
    if (a%2 ==0){
        console.log(a);
    }else if (a%3 ==0){
        console.log(a);
    }
}

for (let a = 2; a % 2 == 0; a++){
    console.log(a++)
}

//Pseudocode________________________
//create a function that takes in the parameters
//then uses the parameters to replace the counter 

//Range function_____________________
function range(start, end){
    for (i = start; i < end; i++){
        console.log(i)
    }
    return i
}

//Function to generate alternating numbers_____
function generateAlternatingLoop(length, alternatingParams){
    rangevar = range(0,1)
    let currentParam = alternatingParams[rangevar];
    for (i = 0; i < length; i = currentParam){
        console.log(i);
    }
    return length, alternatingParams
}

console.log(generateAlternatingLoop(20, [+3, -1]));