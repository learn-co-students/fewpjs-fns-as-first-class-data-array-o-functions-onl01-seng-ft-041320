const { version } = require("chai")

function func1(num) {
    return 65 * num
}

function func2(num) {
    return 44 * num
}

let func3 = function (num) {
    return 12 * num
}

let functions = [func1, func2, func3]

//iterate over the array of functions and pass in the same number to all four, and return an array of the return values of all the functions

//when you want a new array with the same amount of elements as the original, but want a transformation of the elements, which iterator would you use? map 

// Method A Part One: 
// let funcIterate = function (funcInArray) {
//     return funcInArray(10)
// }

// // or
// // parenthesis are *only* optional if there's *only* one argument
// let funcIterate = (funcInArray) => funcInArray(10)

// // or
// let funcIterate = funcInArray => funcInArray(10)

// Method A Part Two:
// let arrayOfReturns = functions.map(funcIterate)

// // or Method B:
let arrayOfReturns = functions.map(function (funcInArray) {
    return funcInArray(10)
})

// // or
// let arrayOfReturns = functions.map(funcInArray => funcInArray(10))

console.log(arrayOfReturns)


// Regular vs. Arrow Functions:

x.map( function(y) { return y(z) } )

// is the same as 

x.map( ( y ) => y(z) )

// is the same as

x.map( y => y(z) )