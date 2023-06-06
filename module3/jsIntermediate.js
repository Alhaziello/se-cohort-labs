console.log("MODULE 3 LABS - JS INTERMEDIATE")
/* console.log("")
console.log("------------------------------EXCERCISE 1------------------------------")
console.log("")

input = "This is my 1 exercise from Module 3 Labs JS Intermediate."
console.log("Input: "+input)

const arr = input.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log("Output: "+str2); */


/* console.log("")
console.log("------------------------------EXCERCISE 2 ------------------------------")
console.log("")

var string = "Hello! Welcome to my second string."
var maxLength = 10

// const truncate = (str,max) => {str.lenght >= max ? str.slice(0,max) + "..." : str};


function truncate(str, max) {
    if(str.length >= max) {
        return str.slice(0,max) + "..."
    }
    else{
        return str
    }
}

// console.log(truncate("This is my 1 exercise from Module 3 Labs JS Intermediate.",12));
//console.log(truncate(string, maxLength))
console.log(truncate('This text will be truncated if it is too long', 25)) */




/* console.log("")
console.log("------------------------------EXCERCISE 3 ------------------------------")
console.log("")

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push("Lion");
animals.push("Cheetah");

console.log("a) New animals added in the end: ")
console.log(animals)

animals.unshift("Monkey");
animals.unshift("Pig");

console.log("b) New animals added in the end: ")
console.log(animals)

console.log("c) Sort the values alphabetically: ")
console.log(animals.sort())

console.log("d) Replace middle value ")

function replaceMiddleAnimal(array,newValue){
    middleIndex = array.length / 2;
    array[middleIndex] = newValue;
}
replaceMiddleAnimal(animals,"Donkey")
console.log(animals)

console.log("e) Find matching values ")

// function findMatchingAnimals(arr, beginWith){
//     let newArray = arr.filter(callback(currentValue[, index[, array]]) {
//         // return element for newArray, if true
//       }[, thisArg]);
// }
animals.seachstring */






/* console.log("")
console.log("------------------------------EXCERCISE 4 ------------------------------")
console.log("")

function camelCase(caseProp) {
    arr = caseProp.split("-");

    //console.log(splitInput);
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    const str2 = arr.join("");
    console.log("Output: "+str2);
}

camelCase("margin-left"); */



/* console.log("")
console.log("------------------------------EXCERCISE 5 ------------------------------")
console.log("")

let twentyCents = 0.20
let tenCents = 0.10
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let answer = twentyCents + tenCents;

console.log("a) Correct answer with two decimals")
console.log(answer.toFixed(2))

console.log("b) Function to add two decimal values")

function currencyAddition(float1, float2){
    let answer = float1 + float2;
    floatAns = answer.toFixed(2);
    return floatAns
}

console.log(currencyAddition(0.10000, 0.35667))

console.log("c) Function to perform required operation to two decimal values")

function currencyOperation(float1, float2, operator){
    if(operator == "+" | "add" | "Add" | "ADD" | "Addition" | "addition" | "ADDITION"){
        answer = float1 + float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
    if(operator == "-" | "sub" | "Sub" | "SUB" | "substract"| "Substract"| "SUBSTRACT"){
        answer = float1 - float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
    if(operator == "/" | "div" | "Div" | "DIV" | "divide" | "Divide" | "DIVIDE"){
        answer = float1 / float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
    if(operator == "*" | "mul" | "Mul" | "MUL" | "multiple" | "Multiple" | "MULTIPLE"){
        answer = float1 * float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
}

console.log(currencyOperation(22, 7, "+"))

console.log("d) Function to perform required operation with required decimal values")

function currencyOperation(float1, float2, operator, decimalValue){
    if(operator == "+" | "add" | "Add" | "ADD" | "Addition" | "addition" | "ADDITION"){
        answer = float1 + float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
    if(operator == "-" | "sub" | "Sub" | "SUB" | "substract"| "Substract"| "SUBSTRACT"){
        answer = float1 - float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
    if(operator == "/" | "div" | "Div" | "DIV" | "divide" | "Divide" | "DIVIDE"){
        answer = float1 / float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
    if(operator == "*" | "mul" | "Mul" | "MUL" | "multiple" | "Multiple" | "MULTIPLE"){
        answer = float1 * float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
}

console.log(currencyOperation(22.5, 7.5, "-", 4)) */



console.log("")
console.log("------------------------------EXCERCISE 6 ------------------------------")
console.log("")

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const newArray = ["Hello", "world", "I'm", "new", "to", "this", "world"]

var uniqueValue1 = [...new Set(colours)]
var uniqueValue2 = [...new Set(testScores)]
var uniqueValue3 = [...new Set(newArray)]

function uniqueValue(array){
    var unique = [...new Set(array)]
    console.log("Original array contains: " + array)
    return unique
}

console.log(uniqueValue(colours))

