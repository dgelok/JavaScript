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
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ]; 

// var sorted = people.sort()
// console.log(sorted)


// Sort the same array, but not by alphabetically order, but by how long each name is, 
// shortest name first.
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ]; 

// people.sort(function(a, b){
//     return a.length - b.length
// })
// console.log(people)


// ************************************************************************ //
// ************************************************************************ //
// ************************************************************************ //
// ************************************************************************ //
// Sort the array by the sum of each inner array. For the above example, the respective sums for 
// each inner array is 8, 20, and 9. Therefore, the solution should be:
// [ [1, 3, 4],
// [3, 6],
// [2, 4, 6, 8] ] 
// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ]; 

// arr.sort(function ())


// Given this function:
// Use the call3Times function to print "Hello, world!" 3 times.

// function call3Times(fun) { fun(); fun(); fun(); }
// var hello = function () {console.log("Hello, world!")}
// call3Times(hello)

// You will write a function callNTimes that takes two arguments: times as a number, and fun as a 
// function. It will call that function for that many times. Example:
// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world! 
// You are allowed to use a loop in the implementation of callNTimes.

// function callNTimes(times, fun) {
//     for (var i = 0; i < times; i++) {
//         fun()
//     }
// }

// var hello = function () {console.log("Hello, world!")}
// callNTimes(9, hello)



// Write a function sum that takes an array of numbers as argument and returns the sum of those 
// numbers. Use the reduce method to do this.
// var array1 = [1, 2, 3];

// // var reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce((sum, current) => sum + current));


// ************************************************************************ //
// ************************************************************************ //
// ************************************************************************ //
// ************************************************************************ //
// Write a function acronym that takes an array of words as argument and returns the acronym 
// of the words. Use the reduce method to do this.

// myArr = ["north", "american", "saxophone", "alliance"]
// var reducer = (accumulator, currentValue) => accumulator + currentValue[0]
// var answer = myArr.reduce(reducer)
// console.log(answer)

// ************************************************************************ //
// ************************************************************************ //
// ************************************************************************ //
// ************************************************************************ //
// Implement your own custom forEach function which takes two arguments: an array arr and a function 
// fun. It will call fun passing each item in arr to fun as the first argument. Example:
// var arr = [
//     { name: 'Bob' },
//     { name:'Alice' },
//     { name:'Joe' } ];
// forEach(arr, function(person) {
//        console.log('Hello, ' + person.name + '!');
//     }); 
// You can use a loop in the implementation of this function.

// function forEach(arr, function(person)) {

// }



// function cipher(text) { 
//     var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); 
//     var result = '';
//     for (var i = 0; i < text.length; i++) {
//         var chr = text[i];
//         var idx = alphabet.indexOf(chr.toUpperCase());
//         var newIdx = idx + 13;
//         if (newIdx >= alphabet.length) {
//             newIdx -= 26;
//         }
//         result += alphabet[newIdx];
//     }
//     return result;
// } // You can assume that the text is only one word, all letters are capitalized, and the offset is always 13 
// var encrypted = cipher('GENIUS');
// console.log(encrypted);