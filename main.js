var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
var doncome = guestList[0];
console.log(doncome, "Nai Ahh skta");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log('salam ${guest}, would u like to Dinner with me?'); });
