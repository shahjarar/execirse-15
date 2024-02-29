let guestList = ["Hamza","Usman","Ayesha","Areeba"];

let doncome = guestList[0];

console.log(doncome, "Nai Ahh skta");

guestList.splice(0 , 1, "Amirr");

guestList .forEach (guest => console.log('salam ${guest}, would u like to Dinner with me?'))