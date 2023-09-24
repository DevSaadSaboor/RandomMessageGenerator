function randomNumber(number) {
    return Math.floor(Math.random() * number);
}
let resultOfRandomNumber = randomNumber(4)
// console.log(resultOfRandomNumber);

let greetings = ["Good_Day", "Good Night", "Good_Evening", "Good Afternoon"]

// it will shuffle the array 
function shuffleArray() {
    return greetings.sort(() => Math.random() - 0.5);
}
let shuffleArrayResult = shuffleArray()

shuffleArrayResult.forEach((element, index) => {
    if (resultOfRandomNumber == index) {
        console.log("Thanks For Visting have a " + element);
    }
});



let foodReview = ["average", "excellent", "good", "bad", "tasteless"]
function shuffleArrayfoodReview() {
    return foodReview.sort(() => Math.random() - 0.5);
}
let foodreviewshuffle = shuffleArrayfoodReview()

foodreviewshuffle.forEach((element, index) => {
    if (resultOfRandomNumber == index) {
        console.log("Your food is  " + element);
    }
});


let foodprices = ["expensive", "Cheap", "Moderate", "Worth_the_money"]
function foodpriceShuffle() {
    return foodprices.sort(() => Math.random() - 0.5);
}
let priceofFoods = foodpriceShuffle();
priceofFoods.forEach((element, index) => {
    if (resultOfRandomNumber == index) {
        console.log("Food price here is  " + element);
    }
});



