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
console.log(randArray);
let sum = 0;

randArray.forEach(theSum);

function theSum(item){
    sum += item;
    console.log(sum)
    return sum;
}

console.log(theSum(randArray));


//Question 3________________________
let halfTheArray = addToArray();
console.log(halfTheArray);

halfTheArray.forEach(halfInt);

function halfInt(item){
    halves = item / 2;
    console.log(halves)
    return halves;
}

console.log(theSum(halfTheArray));


//Question 4________________________
let averageOfArray = addToArray();
console.log(averageOfArray);
let total = 0;

averageOfArray.forEach(calcAverage);

function calcAverage(item){
    total += item;
    let theAverage  = total / item.length;
    console.log(theAverage)
    return theAverage;
}

console.log(calcAverage(averageOfArray));
