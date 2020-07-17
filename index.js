function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`
    console.log(wake)
    return wake
}

function leashDog(dogName, dogBreed) {
    const leash = `Leash ${dogName} the ${dogBreed}`
    console.log(leash)
    return leash
}

function walkToPark(dogName, dogBreed) {
    const walk = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walk)
    return walk
}

function throwFrisbee(dogName, dogBreed) {
    const throws = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(throws)
    return throws
}

function walkHome(dogName, dogBreed) {
    const walkHome = `Walk home with ${dogName} the ${dogBreed}`
    console.log(walkHome)
    return walkHome
}

function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleash)
    return unleash
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(function (x) {
        return x(dog, breed)
    })
    }

// shorter version
// function exerciseDog(dog, breed) {
//     return routine.map(x => x(dog, breed))
// }

// exerciseDog("Byron", "poodle")
