
function randomString(theArray){
    result = theArray[Math.floor(Math.random()*theArray.length)];
    return result;
}




let destination = ["Dallas",  "Houston", "San Antonio", "South Padre Island", "Amarillo"];
let restaurant = ["Texas Roadhouse", "Gloria's", "Olive Garden", "Snuffer's", "Primo's", "Pecan Lodge"];
let transportation = ["Truck", "Plane", "Helicopter", "Bus", "Horse"];
let entertainment = ["Movie", "Bowling", "Bar", "Baseball Game", "Dancing"];

let yourDestination = randomString(destination);
console.log(yourDestination);
let yourRestaurant = randomString(restaurant);
console.log(yourRestaurant);
let yourTransportation = randomString(transportation);
console.log(yourTransportation);
let yourEntertainment = randomString(entertainment);
console.log(yourEntertainment);



