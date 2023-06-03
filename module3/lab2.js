//3.6.23
let printSection = (questionNumber) => {
console.log(
    "\n", 
    "# " + questionNumber,
    "-------------------------------------------------------------",
    "\n"
);
}

printSection("1");

function ucFirstLetter (str) {
    let words = str.split(' ');

    for (let i=0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let result = words.join(' ');
    return result;
}

console.log(ucFirstLetter("new york city best"));
console.log(ucFirstLetter("los angeles"));
console.log(ucFirstLetter("institute of data"));

printSection("2");

function truncate(str, max) {
    if (str.length < max) {
        return str;
    }
    else {
        return str.slice(0, max) + "..."; 
    }
}

let truncate1 = (str1, max1) =>
   str1.length > max1 ? str1.slice(0, max1) + '...' : str1

console.log(truncate1('helloworld my name is chan',9));
console.log(truncate1('hello',7));
console.log(truncate('helloworld my name is chan',9));
console.log(truncate('hello',7));

printSection("3");
const animals = ['Tiger', 'Giraffe'];
animals.push('Dog','Cat');
animals.unshift('Elephant', 'Lion', 'Cheetah');
animals.sort();
console.log(animals);

function replaceMiddleAnimal (newValue) {
    let middleIndex = Math.floor (animals.length / 2);
    animals[middleIndex] = newValue;
}

replaceMiddleAnimal('Crocodile');
console.log(animals);

function findMatchingAnimals (beginsWith) {
    let matchingAnimals = animals.filter(animal => {
        return animal.toLowerCase().startsWith(beginsWith.toLowerCase());
    });
    return matchingAnimals;
}

console.log(animals);
console.log(findMatchingAnimals('c'));

printSection("4");
function camelCase (cssProp) {
    let properties = cssProp.split('-');
    let result =  properties[0];
    
}



