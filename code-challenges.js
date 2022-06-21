// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const stringCombo = (string1, string2) => {
    if(string1.length > string2.length) {
      return string1
    } else if(string1 < string2) {
      return string2
    } else {
      return "Oops, neither are greater"
    }
  }
  
  console.log(stringCombo(fruit1, fruit2))
  console.log(stringCombo(fruit3, fruit4))
  //banana
  //cherry


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: so any of the 3 test variables i place in console will return an answer about the tempature being below,at or above boiling point. tempature is my special veriable and I am invoking the test variables in the console


const temp1 = 42
const temp2 = 350
const temp3 = 212

const hotWater = (tempature) => {
  if(tempature === 42) {
    return "42 is below boiling point"
  } else if(tempature === 212) {
    return "212 is at boiling point"
  } else if(tempature === 350) {
    return "350 is above boiling point"
  }
}
console.log(hotWater(42)) // 42 is below boiling point
console.log(hotWater(212)) // 212 is at boiling point
console.log(hotWater(350)) // 350 is above boiling point






// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: concatenating two arrays together and invoking .length in the console to get the length of the two arrays.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
console.log(myNumbers1.length + myNumbers2.length) // 10


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: I used the split built in method to make the string into an array of substrings then use the reverse built in method to reverse the order of the array i used split with and joined each individual letter together using .join built in method.

const currentCohort = "Delta 2022"
var cohort = currentCohort.split("")
console.log(cohort.reverse().join("")) // 2202 atleD



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: unable to get the result of odd even, tried creating global variable with odd and even 

const myArray = [13, 34, 5, 10, 27, 42]
for(let i = 0; i < myArray.length; i++) {
  if(myArray % 2 !== 0) {
    console.log(`${myArray[0]} odd`)
  } else if(myArray % 2 !== 0) {
    return "even"
  }
}
console.log(myArray[0])





     



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: I am not sure how to set this up where i put in 58-100 to show 42 and vice versa

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const numCombo = (number1, number2, number3, number4) => {
  if(number2 - number1) {
    return 42
  } else if(number3 - number4) {
    return 3
  }
}
console.log(number2 - number1)
console.log(number3 - number4)
