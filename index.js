const wakeDog = (name, breed) => {
    console.log(`Wake ${name} the ${breed}`);
    return `Wake ${name} the ${breed}`
}
const leashDog = (name, breed) => {
    console.log(`Leash ${name} the ${breed}`);
    return `Leash ${name} the ${breed}`;
}
const walkToPark = (name, breed) => {
    console.log(`Walk to the park with ${name} the ${breed}`);
    return `Walk to the park with ${name} the ${breed}`;
}

const throwFrisbee = (name, breed) => {
    console.log(`Throw the frisbee for ${name} the ${breed}`);
    return `Throw the frisbee for ${name} the ${breed}`;
}

const walkHome = (name, breed) => {
    console.log(`Walk home with ${name} the ${breed}`);
    return `Walk home with ${name} the ${breed}`;
}

const unleashDog = (name, breed) => {
    console.log(`Unleash ${name} the ${breed}`);
    return `Unleash ${name} the ${breed}`;
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = (name, breed) => {
    return routine.map(fn => fn(name, breed));
}
