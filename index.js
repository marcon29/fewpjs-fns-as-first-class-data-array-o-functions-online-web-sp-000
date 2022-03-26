function wakeDog(dogName, dogBreed) {
    const dogCareStep = `Wake ${dogName} the ${dogBreed}`
    console.log(dogCareStep);
    return dogCareStep
}

function leashDog(dogName, dogBreed) {
    const dogCareStep = `Leash ${dogName} the ${dogBreed}`
    console.log(dogCareStep);
    return dogCareStep
}

function walkToPark(dogName, dogBreed) {
    const dogCareStep = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(dogCareStep);
    return dogCareStep
}

function throwFrisbee(dogName, dogBreed) {
    const dogCareStep = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(dogCareStep);
    return dogCareStep
}

function walkHome(dogName, dogBreed) {
    const dogCareStep = `Walk home with ${dogName} the ${dogBreed}`
    console.log(dogCareStep);
    return dogCareStep
}

function unleashDog(dogName, dogBreed) {
    const dogCareStep = `Unleash ${dogName} the ${dogBreed}`
    console.log(dogCareStep);
    return dogCareStep
}

const routine = [
    wakeDog, 
    leashDog, 
    walkToPark, 
    throwFrisbee, 
    walkHome, 
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    let routineSteps = []
    for (let i = 0; i < routine.length; i++) {
        routineSteps.push(routine[i](dogName, dogBreed));
    }
    return routineSteps
}
