/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */
//let result = 0
//console.log("Label", result)

let varone = 1234;
let vartwo = 5678;
let varthree = 2468;
let luckyNumber = 7;

let sumthem = varone + vartwo + varthree + luckyNumber;
let subtract = vartwo - (varone + varthree);
let multip = varone * vartwo * varthree;
let divy = vartwo / (varthree - varone);
let modone = varone % luckyNumber;
let modtwo = vartwo % luckyNumber;
let modthree = varthree % luckyNumber; 

console.log("The result of adding the numbers", sumthem)
console.log("The result of subtracting the two smallest numbers from the larger one", subtract)
console.log("The result of multiplying all the numbers", multip)
console.log("The result of diving the largest by others", divy)
console.log("The result of First number modulu luckynumber", modone)
console.log("The result of Second number modulu luckynumber", modtwo)
console.log("The result of Third number modulu luckynumber", modthree)
