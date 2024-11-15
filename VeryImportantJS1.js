// Question 21: Can you write a function in JavaScript to rename a specific property in an object?
const renameProperty = (obj, oldName, newName) => ({
  ...obj,
  [newName]: obj[oldName],
  ...(delete obj[oldName], obj),
});

const person = { firstName: "John", lastName: "Doe", age: 30 };
const updatedPerson = renameProperty(person, "firstName", "first");
// updatedPerson: { first: 'John', lastName: 'Doe', age: 30 }

// Question 22: Can you write a function in JavaScript to find the second-largest element in an array?
const secondLargest = (arr) => [...new Set(arr)].sort((a, b) => b - a)[1];

const array = [5, 2, 8, 9, 2, 4, 7];
const result = secondLargest(array);
// result: 7

// Question 23: Can you write a JavaScript function to group an array of objects by a specified property?
const groupByProperty = (arr, property) =>
  arr.reduce(
    (grouped, obj) => ({
      ...grouped,
      [obj[property]]: [...(grouped[obj[property]] || []), obj],
    }),
    {}
  );

const people = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Alice", age: 28 },
];

const result1 = groupByProperty(people, "name");
// result: { 'Alice': [ { id: 1, name: 'Alice', age: 25 }, { id: 3, name: 'Alice', age: 28 } ],
//           'Bob': [ { id: 2, name: 'Bob', age: 30 } ] }

// Question 24: Can you write a JavaScript function to find the missing number in an array of consecutive integers from 1 to N?
const findMissingNumber = (arr) =>
  ((arr.length + 1) * (arr.length + 2)) / 2 -
  arr.reduce((sum, num) => sum + num, 0);

const arr = [1, 2, 3, 5, 6, 7, 8];
const result2 = findMissingNumber(arr);
// result: 4

// Question 25: Can you write a JavaScript function to reverse the key-value pairs of an object?

const reverseObject = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

const originalObject = { a: 1, b: 2, c: 3 };
const reversedObject = reverseObject(originalObject);
// reversedObject: { '1': 'a', '2': 'b', '3': 'c' }

// Question 26: Can you write a JavaScript function to check if a given string has balanced parentheses?

const isBalancedParentheses = (str) =>
  str
    .split("")
    .reduce(
      (count, char) =>
        count >= 0 ? count + (char === "(" ? 1 : char === ")" ? -1 : 0) : -1,
      0
    ) === 0;

const str = "(a + b) * (c - d)";
const result3 = isBalancedParentheses(str);
// result: true
// Question 27: Can you write a concise function in JavaScript to implement a simple debounce function that delays the execution of a given function until after a specified time interval has passed without additional calls?

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const delayedLog = debounce((text) => console.log(text), 1000);
delayedLog("Hello"); // Logs 'Hello' after 1000 milliseconds
delayedLog("World"); // Cancels the previous timeout and sets a new one for 'World'

// Question 28: Can you write a JavaScript function to truncate a given string to a specified length and append “…” if it exceeds that length?
const truncateString = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength) + "..." : str;

const s = "This is a very long string that needs to be truncated.";
const maxLen = 20;
const result4 = truncateString(s, maxLen);
// result: 'This is a very lon...'

// Question 29: Can you write a throttle function in JavaScript to implement a simple throttle function that limits the execution of a given function to once every specified time interval?
const throttle = (func, delay) => {
  let throttled = false;
  return (...args) => {
    if (!throttled) {
      func(...args);
      throttled = true;
      setTimeout(() => (throttled = false), delay);
    }
  };
};

const throttledLog = throttle((text) => console.log(text), 1000);
throttledLog("Hello"); // Logs 'Hello'
throttledLog("World"); // Does not log 'World' because it's within the 1000ms throttle interval

// Question 30: Can you write a JavaScript function to check if a given string has all unique characters?
const hasUniqueCharacters = (str) => new Set(str).size === str.length;

const s1 = "abcdef";
const result5 = hasUniqueCharacters(s1); // result1: true

const s2 = "hello";
const result6 = hasUniqueCharacters(s2); // result2: false
