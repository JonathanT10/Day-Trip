
function randomString(theArray){
    result = theArray[Math.floor(Math.random()*theArray.length)];
    return result;
}
function confirmRandom(string, array){
    let choose = window.confirm("Do you want to go to " + string + "?")
while(choose === false){
    let string = randomString(array);
    choose = window.confirm("Do you want to go to " + string + "?");
}
 console.log(string);
}



let destination = ["Dallas",  "Houston", "San Antonio", "South Padre Island", "Amarillo"];
let restaurant = ["Texas Roadhouse", "Gloria's", "Olive Garden", "Snuffer's", "Primo's", "Pecan Lodge"];
let transportation = ["Truck", "Plane", "Helicopter", "Bus", "Horse"];
let entertainment = ["Movie", "Bowling", "Bar", "Baseball Game", "Dancing"];

let yourDestination = randomString(destination);
let choose = window.confirm("Do you want to go to " + yourDestination + "?");

while(choose === false){
    let yourDestination = randomString(destination);
    choose = window.confirm("Do you want to go to " + yourDestination + "?");
}
 console.log(yourDestination);

let yourRestaurant = randomString(restaurant);
confirmRandom(yourRestaurant, restaurant);
let yourTransportation = randomString(transportation);
console.log(yourTransportation);
let yourEntertainment = randomString(entertainment);
console.log(yourEntertainment);


