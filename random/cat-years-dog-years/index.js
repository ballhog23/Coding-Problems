// I have a cat and a dog which I got as kitten / puppy.
// I forget when that was, but I do know their current ages as catYears and dogYears.
// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:
// Results are truncated whole numbers of "human" years

// ! Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// ! Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


const ownedCatAndDog = (catYears, dogYears) => {
    if (catYears <= 0 && dogYears <= 0) return [0,0]

    return [catYearsToHumanYears(catYears), dogYearsToHumanYears(dogYears)];
}

function catYearsToHumanYears(number) {
    let years = number;
    let humanYears = 0;

    if (years < 15) return humanYears = 0

    years -= 15;

    if (years < 9) return humanYears = 1;

    years -= 9;

    if (years < 4) return humanYears = 2;

    years /= 4;
    
    return humanYears = Math.floor(years) + 2;
}

function dogYearsToHumanYears(number) {
    let years = number;
    let humanYears = 0;

    if (number < 15){
        console.log('less than 15')
        return humanYears = 0
    }

    years -= 15;

    if (years < 9) return humanYears = 1;

    years -= 9;

    if (years < 5) return humanYears = 2;

    years /= 5;
    
    return humanYears = Math.floor(years) + 2;
}

// console.log(ownedCatAndDog(15,15))
// console.log(ownedCatAndDog(24,24))
// console.log(ownedCatAndDog(56,64))
// console.log(ownedCatAndDog(-1.75,-1.4))
// console.log(ownedCatAndDog(0,0))
// console.log(ownedCatAndDog(1,1))
// console.log(ownedCatAndDog(1,39))
// console.log(ownedCatAndDog(15,7))
// console.log(ownedCatAndDog(0.5, 1.4))
// console.log(ownedCatAndDog(2.25, 2.2))
// console.log(ownedCatAndDog(76, 9))