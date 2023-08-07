/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

//Question 1________________________
function getRandomNumber(){
    return Math.floor((Math.random() * 100));
}

function addToArray(){
    let newarray = [];
    for (i = 0; i <= 100; i++){
        let randnum = getRandomNumber();
        newarray.push(randnum)
    }
    return newarray
}

console.log(addToArray());

//Question 2________________________
let randArray = addToArray();
let sum = 0;

randArray.forEach(theSum);

function theSum(item){
    sum += item;
    return sum
}

console.log(theSum(randArray));
