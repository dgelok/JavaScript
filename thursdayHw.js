// Write a function which takes an array of numbers as input and returns a new array 
// containing only the positive numbers in the given array.

// var nums = [45, -123, 3, 0.44, -34, 5, 6, 6, -234]

// var positives = nums.filter((num) => num > 0)
// console.log(positives)


// Write a function which takes an array of numbers as input and returns a new array containing 
// only the even numbers in the given array.
// var nums = [45, -123, 3, 0.44, -34, 5, 6, 6, -234]

// var evens = nums.filter((num) => num%2 == 0)
// console.log(evens)


// Write a function which takes an array of numbers as input and returns a new array containing 
// result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) 
// should give [1, 4, 9].

// var nums = [45, -123, 3, 0.44, -34, 5, 6, 6, -234]

// var squares = nums.map((num) => num*num)
// console.log(squares)


// takes cities as input and returns a new array containing the cities whose temperature is cooler 
// than 70 degrees.
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var cool = cities.filter((city) => {
//     return city.temperature < 70
// })
// console.log(cool)

// Write a function which takes an array of city objects like the above problem as input and 
// returns an array of the cities names.
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];
// var names = cities.map((city) => {
//     return city.name
// })
// console.log(names)


// Given People, Print out 'Good Job, {{name}}!' for each person's name, one on a line.
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ]; 

// people.forEach((name) => {
//     console.log(`Good Job, ${name}!`)
// })


// Given an array of strings such the array of names given in the previous problem, 
// sort them by alphabetically order.
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ]; 

var sorted = people.sort()
console.log(sorted)