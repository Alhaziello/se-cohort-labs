console.log("MODULE 3 LABS - JS INTERMEDIATE")
/* console.log("")
console.log("------------------------------EXCERCISE 1------------------------------")// Exercise 1
console.log("")

input = "This is my 1 exercise from Module 3 Labs JS Intermediate."
console.log("Input: "+input)

const arr = input.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log("Output: "+str2); */


console.log("")
console.log("------------------------------EXCERCISE 2 ------------------------------")// Exercise 2
console.log("")
maxLength = 25
input = "This is my 1 exercise from Module 3 Labs JS Intermediate."
console.log("Input: "+input)

console.log("Length: "+input.length)
console.log("Max length: " +maxLength)

let newResult = (str,max) => {(str.length >= max) ? str.slice(0,max) + "..." : str;} 

console.log(newResult)
