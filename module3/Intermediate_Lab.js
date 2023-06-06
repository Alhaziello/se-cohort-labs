// question 1
console.log("question 1--------------------")

console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(cityname){
    let str = cityname.charAt(0).toUpperCase() + cityname.slice(1);
    return str
}

// question 2
console.log("question 2--------------------")

const truncate = (str, max) => (str.length>max) ? str.slice(0,max) + '...' : str

console.log(truncate('This text will be truncated if it is too long', 25))

// function truncate(str,max){

//     if (str.length > max) {
//         return str.slice(0,max) + '...'
//     }
//     else {
//         return str
//     }
// }

// question 3
console.log("question 3--------------------")

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Dog', 'Cat')
console.log(animals)
animals.unshift('Rabbit', 'Ant')
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
    animals[3] = newValue;
    
}

replaceMiddleAnimal('Pig')
console.log(animals)



function findMatchingAnimals(beginWith) {
    
}