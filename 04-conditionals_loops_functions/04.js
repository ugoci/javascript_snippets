/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

//Question 1____________________________
//KtoC = K - 273.15
function KtoC(kelvin){
    celsius = kelvin - 273.15;
    return celsius
}

//CtoK = C + 273.15
function CtoK(celsius){
    kelvin = celsius + 273.15;
    return kelvin
}

//FtoK = (F - 32) / 1.8 + 273.15
function FtoK(farenheit){
    kelvin = ((farenheit - 32) / 1.8) + 273.15;
    return kelvin
}

//KtoF = (K - 273.15) *9/5 + 32
function KtoF(kelvin){
    farenheit = ((kelvin - 273.15) * 9/5) + 32;
    return farenheit
}

//Question 2____________________________
//c = √(a² + b²)2
function pythagoras(a,b){
    c = Math.sqrt(((a*a) + (b*b)) *2);
    return c
}

//Question 3____________________________
//MToKm
function MToKm(miles){
    kilometer = miles * 1.609347218694
    return kilometer
}

//KmToM
function KmToM(kilometer){
    miles = kilometer * 0.621371
    return miles
}

//inchToCm
function inchToCm(inch){
    centimeters = inch / 0.393701;
    return centimeters
}

//CmToInch
function CmToInch(centimeter){
    inches = centimeter / 2.54;
    return inches
}

// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));