printSection(1);

/* 1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */

const str = 'los angeles';
const upper = str.split(" ");

for (var i = 0; i < upper.length; i++) {
    if (upper[i]) {
        upper[i] = upper[i].charAt(0).toUpperCase() + upper[i].slice(1);
    }
}

const str2 = upper.join(" ");
console.log(str2);

printSection(2);

/* 2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator. */

const str3 = "This is Jag's truncated string, I will try to make it long for this test. 123"
const maxLength = 12;

const condTrunc = str3.length > maxLength ? str3.substring(0, maxLength) + "..." : str3;

const truncated = str3.substring(0,20) + "...";

console.log(truncated);
console.log(condTrunc);

printSection(3);

/* 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */

const animals = ['Tiger', 'Giraffe']

console.log(animals);





function printSection(sectionNumber) {
    console.log("-------------------------------------------------------------");
}