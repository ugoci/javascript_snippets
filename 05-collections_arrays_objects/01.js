/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

//Question 1________________________
let thingsinroom = ["chair", "screen", "plant"]

//Question 2________________________
let drawers = [
    ["books", "pens", "pencils", "Highlighter", "Marker"], 
    ["Stapler", "Eraser", "Calculator", "Glue", "Paper"], 
    ["Envelope", "Keyboard", "Computer", "Fax", "Folder"]
]

//Question 3________________________
console.log(drawers[0][0])
console.log(drawers[0][2])
console.log(drawers[1][2])
console.log(drawers[1][4])
console.log(drawers[2][2])

//Question 4________________________
for (let i = 1; i <= 100; i++){
    console.log(i)
}

//Question 5________________________
let newarray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
let sum = 0
for (i = 1; i < newarray.length; i++){
    sum += newarray[i]
}
console.log(sum)

//Question 6________________________
//Random number generator
function getRandomNumber(){
    randnum = Math.floor((Math.random() * 100));
    return newarray
}

//Random number generator but adds sequential numbers to the array
function getRandomNumber(){
    let newarray = [];
    randnum = Math.floor((Math.random() * 100));
    for (randnum = 0; randnum <= 100; randnum++){
        newarray.push(randnum)
    }
    
    return newarray
}

//Random number generator but adds only 1 random number to the array
function getRandomNumber(){
    let newarray = [];
    randnum = Math.floor((Math.random() * 100));
    newarray.push(randnum)
    
    return newarray
}
console.log(addtoarray());

//Question 7________________________
//TBC

//Question 8________________________
function getRandomNumber(){
    let newarray = [];
    randnum = Math.floor((Math.random() * 100));
    for (randnum = 0; randnum <= 100; randnum++){
        newarray.push(randnum)
    }
    return newarray
}

let anotherarray = [2,2,2]
function sumarray(anotherarray){
    let sumd = 0
    for (i = 0; i < anotherarray.length; i++){
        sumd += anotherarray
        console.log(sumd)
        return sumd
    }
}

console.log(sumarray(anotherarray));