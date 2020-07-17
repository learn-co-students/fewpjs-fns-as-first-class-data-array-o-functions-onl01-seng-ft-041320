
function func1(num) {
    return 65 * num
}

function func2(num) {
    return 44 * num
}

let func3 = function (num) {
    return 12 * num
}

const func4 = function (num) {
    return 4 * num
}

var functions = [func1, func2, func3, func4]

//iterate over the array of functions and pass in the same number to all four, and return an array of the return values of all the functions

//when you want a new array with the same amount of elements as the original, but want a transformation of the elements, which iterator would you use? map 

let handleIteration = function (funcInArray) {
    return funcInArray(2)
}

let handleIteration = (funcInArray) => funcInArray(2)
// parenthesis are *only* optional if there's *only* one argument

let handleIteration = funcInArray => funcInArray(2)

// for example in Ruby
//functions.map {|funcInArray| funcinArray(2)}

let arrayOfReturns = functions.map(handleIteration)

//also (long way)
// let arrayOfReturns = functions.map(function (funcInArray) {
//     return funcInArray(2)
// })

// also (stay away from arrow functions for now)
// let arrayOfReturns = functions.map(funcInArray => funcInArray(2))