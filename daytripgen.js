
function randomString(theArray){
    result = theArray[Math.floor(Math.random()*theArray.length)];
    return result;
}

function confirmRandom(string, array){
    let choose = window.confirm("Please confirm the option for your day trip by clicking OK, or cancel for another option: " + string)
    while(choose === false){
        string = randomString(array);
        choose = window.confirm("Please confirm the option for your day trip by clicking OK, or cancel for another option: " + string);
    }return string;
}

let destination = ["Dallas",  "Houston", "San Antonio", "South Padre Island", "Amarillo"];
let restaurant = ["Texas Roadhouse", "Gloria's", "Olive Garden", "Snuffer's", "Primo's", "Pecan Lodge"];
let transportation = ["Truck", "Plane", "Helicopter", "Bus", "Horse"];
let entertainment = ["Movie", "Bowling", "Bar", "Baseball Game", "Dancing"];

let yourDestination = randomString(destination);
let finalDestination = confirmRandom(yourDestination, destination);
let yourRestaurant = randomString(restaurant);
let finalRestaurant = confirmRandom(yourRestaurant, restaurant);
let yourTransportation = randomString(transportation);
let finalTransportation = confirmRandom(yourTransportation, transportation);
let yourEntertainment = randomString(entertainment);
let finalEntertainment = confirmRandom(yourEntertainment, entertainment);
let confirmDayTrip = window.confirm("Please confirm your Day Trip to " + finalDestination + ". You will be arriving by " + finalTransportation + ". You will be eating at " + finalRestaurant + ". The entertainment will be " + finalEntertainment + ".");

while(confirmDayTrip === false){
    yourDestination = randomString(destination);
    finalDestination = confirmRandom(yourDestination, destination);
    yourRestaurant = randomString(restaurant);
    finalRestaurant = confirmRandom(yourRestaurant, restaurant);
    yourTransportation = randomString(transportation);
    finalTransportation = confirmRandom(yourTransportation, transportation);
    yourEntertainment = randomString(entertainment);
    finalEntertainment = confirmRandom(yourEntertainment, entertainment);
    confirmDayTrip = window.confirm("Please confirm your Day Trip to " + finalDestination + ". You will be arriving by " + finalTransportation + ". You will be eating at " + finalRestaurant + ". The entertainment will be " + finalEntertainment + ".");
}
console.log("Your destination is " + finalDestination + ". You will arrive by " + finalTransportation + ". You will be eating at " + finalRestaurant + ". The entertainment will be " + finalEntertainment + ".");
