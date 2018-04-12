// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(55, 1));


// const user = {
//     name: 'Justin',
//     cities: ['BG', 'Findlay', 'Toledo'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };

// console.log(user.printPlacesLived());


// // Challeng Area

// const multiplier = {
//     numbers: [1, 2, 3, 4, 5],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map((number) => number * this.multiplyBy);
//     }
// };
// console.log(multiplier.multiply());


// // const add = function (a, b) {
// //     return a * b;
// // }

// const added = (a, b) => a * b;

// console.log(added(3, 4));


const divider = {
    numbers: [1, 2, 3, 4, 5],
    divisor: 2,
    divideBy() {
        return this.numbers.map((number) => number / this.divisor)
    }
};

console.log(divider.divideBy());
