// Question 1: Can you write a function in JavaScript to reverse the order of words in a given string?

const reversedString = str => str.split(' ').reverse().join(' ');



// Question 2: Can you write a function in JavaScript to remove duplicate elements from an array?

const uniqueArray = arr => [...new Set(arr)];



// Question 3: Can you write a function in JavaScript to merge two objects without overwriting existing properties?

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });



// Question 4: Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?

const currentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
}



// Question 5: Can you write a function in JavaScript to calculate the cumulative sum of an array?

const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);



// Question 6: Can you write a function in JavaScript to split an array into chunks of a specified size?

const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));


// Question 7: Can you write a one-liner in JavaScript to find the longest consecutive sequence of a specific element in an array?

const longestConsecutiveSequence = (arr, element) => Math.max(...arr.join('').split(element).map(group => group.length));


// Question 8: Can you write a function in JavaScript to transpose a 2D matrix?

const transposeMatrix = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));


// Question 9: Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?

const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


// Question 10: Can you write a line of code in JavaScript to swap the values of two variables without using a temporary variable?

[a, b] = [b, a];


// Question 11: Can you write a function in JavaScript to create a countdown from a given number?

const countdown = n => Array.from({ length: n }, (_, i) => n - i);
const countdownResult = countdown(5);
console.log(countdownResult); // Output: [5, 4, 3, 2, 1]

// Question 12: Can you write a function in JavaScript to convert a string to an integer while handling non-numeric characters gracefully?

const stringToInteger = str => +str === +str ? +str : 0;
stringToInteger("123"); // Output: 123
stringToInteger("abc"); // Output: 0

// Question 13: Can you write a function in JavaScript to convert a decimal number to its binary representation?

const decimalToBinary = num => num.toString(2);
const decimalNumber = 10;
const binaryRepresentation = decimalToBinary(decimalNumber);
// binaryRepresentation: "1010"



// Question 14: Can you write a function in JavaScript to calculate the factorial of a given non-negative integer?

const factorial = (n) => n === 0 ? 1 : Array.from({length: n}, (_, i) => i + 1).reduce((acc, num) => acc * num, 1);
const number = 5;
const result = factorial(number);
// result: 120


// Question 15: Write a concise function to safely access a deeply nested property of an object without throwing an error if any intermediate property is undefined.

const deepAccess = (obj, path) => path.split('.').reduce((acc, key) => acc && acc[key], obj);

const nestedObject = { a: { b: { c: 42 } } };
const propertyPath = 'a.b.c';
const result1 = deepAccess(nestedObject, propertyPath);
// result: 42

// Question 16: Can you write a function in JavaScript to generate a random integer between a specified minimum and maximum value (inclusive)?

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const minValue = 5;
const maxValue = 10;
const result2 = randomInRange(minValue, maxValue);
// result: 7


// Question 17: Can you write a function in JavaScript to count the occurrences of each element in an array and return the result as an object?

const countOccurrences = (arr) => arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});
const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
const result3 = countOccurrences(inputArray);
// result: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }


// Question 18: Can you write a function in JavaScript to capitalize the first letter of each word in a given sentence?

const capitalizeWords = (sentence) => sentence.replace(/\b\w/g, char => char.toUpperCase());
const inputSentence = 'hello world, this is a test';
const result4 = capitalizeWords(inputSentence);
// result: 'Hello World, This Is A Test'

// Question 19: Can you write a function in JavaScript to reverse a given string? 

const reverseString = (str) => str.split('').reverse().join('');
const inputString = 'hello';
const result5 = reverseString(inputString);
// result: 'olleh'  // you can use the same for palindrome

// Question 20: Can you write a function in JavaScript to find the longest word in a given sentence?

const longestWord = (sentence) => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
const inputSentence1 = 'The quick brown fox jumpss over the lazy dog';
const result6 = longestWord(inputSentence);
// result: 'jumpss'