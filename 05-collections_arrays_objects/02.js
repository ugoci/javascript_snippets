// This array is made up of lengths in Centimeters
lengths = [
    231, 432, 342, 543, 678, 756, 543, 654, 109, 239, 349,
    654, 323, 573, 432, 345, 549, 943, 999, 111, 100, 934,
    934, 342, 543, 442, 726, 432, 123, 657, 432, 654, 435
];

/**
 * 1. Use a for loop and one of the functions you wrote in previous labs to
 *    create a new list of the lengths in inches.
 * 2. Use another for loop to log the average length in cm and inches. Log the
 *    result with string interpolation. For example, "The average length in cm
 *    is ___ , which is ___ in inches"
 *
 * You don't have to reference other JavaScript files or anything, just copy and
 * paste the code you wrote previously into this file.
 */


//Question 1________________________
function CmToInch(){
    let inchArray = [];
    for (let i = 0; i < lengths.length; i++){
        eachElement = lengths[i];
        inches = eachElement / 2.54;
        inchArray.push(inches)
    }
    return inchArray
}

console.log(CmToInch(lengths));

//Question 2________________________

let sumInches = 0;
let sumCentimeres = 0;
let inchArray = [];

for (i = 1; i < lengths.length; i++){
    sumInches += lengths[i];
    averageInchLength = sumInches / lengths.length;
}

for (let i = 0; i < lengths.length; i++){
    eachElement = lengths[i];
    inches = eachElement / 2.54;
    inchArray.push(inches);
    
for (i = 1; i < inchArray.length; i++){
    sumCentimeres += inchArray[i];
    averageCentLength = sumCentimeres / inchArray.length;
}
}

console.log("The average length in cm is,", averageCentLength, "which is", sumInches, "in inches");
