const numbers = [20,10,5,8,30,100,19]

let sortedNums = numbers.sort()

console.log(sortedNums)

// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let fave_demo = ages.filter(age => age >= 18 && age <= 49)

console.log(fave_demo)

// 2) Choose a loop method of your choice to get this result from this array:
// `let nums = [1, 2, 3, 4, "5", 6, "7"]`
// expected result:
// `[3, 5, 7, 9, 11, 13]`


// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

// `let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]`

// 4)  * Sort the following numbers in descending order
//    * Remove any integers greater than 19.
//    * Multiply each remaining number by 1.5 and then substract 1.
//    * Then output (either in the DOM or the console) the sum of all the resulting numbers.