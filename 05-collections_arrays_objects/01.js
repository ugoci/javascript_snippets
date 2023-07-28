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
function generateSequentialArray(){
    let newarray = [];
    for (i = 0; i <= 100; i++){
        let newnum = i;
        newarray.push(newnum)
    }
    return newarray
}

//Question 5________________________
let newseqarray = generateSequentialArray()
let sum = 0
for (i = 1; i < newseqarray.length; i++){
    sum += newseqarray[i]
}
console.log(sum)

//Question 6________________________
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


//Question 7________________________
let newrandarray = addToArray()
console.log(newrandarray);
let newevenarray = [];
let newoddarray = [];
for (i = 0; i < newrandarray.length; i++){
    let eachnum = newrandarray[i];
        if (i % 2 == 0){
            newevenarray.push(eachnum)
        }else if (i % 2 != 0){
            newoddarray.push(eachnum)
    }
}

console.log(newevenarray);
console.log(newoddarray);

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


//


    
