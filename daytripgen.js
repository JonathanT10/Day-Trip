
function randomString(theArray){
    result = theArray[Math.floor(Math.random()*theArray.length)];
    return result;
}




let destination = ["Dallas",  "Houston", "San Antonio", "South Padre Island", "Amarillo"];

let yourDestination = randomString(destination);
console.log(yourDestination);

