// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log (`I'm ${age} years old. Happy birthday to me!`);
//     //debugger;
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.lenght; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         //debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(name, holiday) {
    let thankyouCards = []
    for (let i = 0; i < name.length; i++ ) {
        thankyouCards.push(`Thank you, ${name[i]}, for the wonderful ${holiday} gift!`)
    }
    return thankyouCards
}

function countDown(number) {
    while (number > 0) {
        console.log(number)
        number -= 1
    }
    console.log(number)

}