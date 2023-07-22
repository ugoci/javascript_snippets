//function getRandomNumber(){
//    return Math.floor((Math.random() * 100) + 1);
//}
//console.log(getRandomNumber());

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

//Question 1.1
i = 5;
while (i <= 1000) {
  i++;
  console.log(i);
}

//Question 1.2
i = -100;
while (i <= 100) {
  i++;
  console.log(i);
}

//Question 1.3
a = 0
while (a <= 20){
    a++
    if (a%2 ==0){
        console.log(a);
    }else if (a%3 ==0){
        console.log(a);
    }
}

//Question 2
/**function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}
*/
//console.log(getRandomNumber());


function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**let testvar = getRandomNumber()
while (testvar){
    if (testvar % 11 != 0){
        console.log("Continue")
    }else if (testvar % 11 == 0){
        break
    }
}
*/
let testvar = getRandomNumber()
if (testvar % 11 != 0){
    console.log("Continue");
}else if (testvar % 11 == 0){
    console.log("End");
}
        
console.log(getRandomNumber());
