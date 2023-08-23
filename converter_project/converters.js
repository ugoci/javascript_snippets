
//KtoC = K - 273.15____________________________
function KtoC(kelvin){
    celsius = kelvin - 273.15;
    return celsius
}

//CtoK = C + 273.15____________________________
function CtoK(celsius){
    kelvin = celsius + 273.15;
    return kelvin
}

//FtoK = (F - 32) / 1.8 + 273.15____________________________
function FtoK(farenheit){
    kelvin = ((farenheit - 32) / 1.8) + 273.15;
    return kelvin
}

//KtoF = (K - 273.15) *9/5 + 32____________________________
function KtoF(kelvin){
    farenheit = ((kelvin - 273.15) * 9/5) + 32;
    return farenheit
}


//c = √(a² + b²)2 ____________________________
function pythagoras(a,b){
    c = Math.sqrt(((a*a) + (b*b)) *2);
    return c
}


//MToKm____________________________
function MToKm(miles){
    kilometer = miles * 1.609347218694
    return kilometer
}

//KmToM____________________________
function KmToM(kilometer){
    miles = kilometer * 0.621371
    return miles
}

//inchToCm____________________________
function inchToCm(inch){
    centimeters = inch / 0.393701;
    return centimeters
}

//CmToInch
function CmToInch(centimeter){
    inches = centimeter / 2.54;
    return inches
}

//____________________________

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