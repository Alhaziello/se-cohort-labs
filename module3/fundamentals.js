//Question 1//
"" + 1 + 0 = "10"
"" - 1 + 0 = "-1"
true + false = 1
!true = false
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 ="  -9  5"
"  -9  " - 5 = 14
null + 1 = 1
undefined + 1 = NaN
undefined == null = true
undefined === null = false
" \t \n" - 2 =   
                  -2

//Question 2//
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // let addition = parseInt(three) + parseInt(four);
let multiplication = three * four // let multiplication = parseInt(three) * parseInt(four);
let division = three / four // let division = parseInt(three) / parseInt(four);
let subtraction = three - four // let subtraction = parseInt(three) - parseInt(four);
let lessThan1 = three < four // let lessThan1 = parseInt(three) < parseInt(four);
let lessThan2 = thirty < four // let lessThan2 = parseInt(thirty) < parseInt(four);

//Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') //won't print 0 is falsy
if ("0") console.log('#2 zero is true') //will print '#2 zero is true' non empty strings are truthy
if (null) console.log('null is true') // won't print, null is falsy
if (-1) console.log('negative is true') // will print 'negative is true' -1 is a number, which is truthy
if (1) console.log('positive is true') // will print 'positive is true'  1 is a number, which is truthy

//Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += 'less than 10';
} else {
  result += 'greater than 10';
}

let a = 2, b = 3;
let result = `${a} + ${b} is ${(a + b < 10) ? 'less than 10' : 'greater than 10'}`;

//+= combines the current value with the string value

//Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
    return 'Hello ' + name + '!';
}    

const name = 'Mark';

const getGreeting = function(name) 
console.log(getGreeting);
{
    return 'Hello ' + name + '!';
  };

  const getGreeting = (name) => {
    return 'Hello ' + name + '!';
  };

/*a) Complete the inigo object by adding a lastName property and including it in the greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.*/

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastname: 'Montoya'
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastname}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase = (person) => 
        person.numFingers === 6
           ? (console.log("Hello. My name is Inigo Montoya. You killed my father. Prepare to die."), '')
            :'Nice to meet you.',
        
};
 
inigo.greeting(westley)
inigo.greeting(rugen)

/*The following object represents a basketball game and keeps track of the score as the game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.
*/

const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
}, basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
        return this;
    },
    fulltime() {
        console.log('Full time score is' + this.score);
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    }
}

  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .foul() 
  .fullTime();
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

/*The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.*/

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

printObjectProperties(sydney);

function printObjectProperties(object) {
    for (let key in object) {
        console.log(key + ': ' + object[key]);
    }
}

const melbourne = {
    name: 'Melbourne',
    population: 5_078_193,
    state: 'Victoria',
    founded: '30 August 1835',
    timezone: 'Australia/Melbourne',
    nickname: 'The Garden City',
  };

  printObjectProperties(melbourne);

/*Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent */

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports.slice();
moreSports.push('Rugby', 'golf');
moreSports.unshift('Gumboot throwing');
let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Doggo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = { cat1 };
cat2.name = 'Tabby';

console.log(teamSports);
console.log(dog1);
console.log(cat1);


/*The following constructor function creates a new Person object with the given name and age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive. */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
        return this.age >= 16;
    }
}



class PersonClass {
    constructor(name, age)  {
    this.name = name;
    this.age = age;
    this.human = true;
        
    canDrive() {
        return this.age >= 16;
    }
}

let person1 = new Person('mark', 33);

let person2 = new Person('Andy', 37);

let person3 = new PersonClass('Kate', 35);
console.log(person3);

console.log(person1);
console.log(person2);
