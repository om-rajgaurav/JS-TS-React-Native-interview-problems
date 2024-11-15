// Question 31: Can you write a function in JavaScript to convert each string in an array of strings to uppercase?

const convertToUppercase = (arr) => arr.map((str) => str.toUpperCase());

const arr = ["apple", "banana", "cherry"];
const result = convertToUppercase(arr);
// result: ['APPLE', 'BANANA', 'CHERRY']

// Question 32: Can you write a JavaScript function to find the first non-repeated character in a given string?
const firstNonRepeatedChar = (str) =>
  str.split("").find((char) => str.indexOf(char) === str.lastIndexOf(char));

const s1 = "programming";
const r1 = firstNonRepeatedChar(s1); // r1: 'o'

const s2 = "hello";
const r2 = firstNonRepeatedChar(s2); // r2: 'h'

// Question 33: Can you write a JavaScript function to find the longest word in a sentence?

const s = "The quick brown fox jumps over the lazy dog";
const r3 = longestWord(s);
console.log(r); // r: 'quick'

// Question 34: Can you write a JavaScript function to flatten a nested object?

const flattenObject = (obj) =>
  Object.assign(
    {},
    ...(function flattenObj(o) {
      return [].concat(
        ...Object.keys(o).map((k) =>
          typeof o[k] === "object" ? flattenObj({ [k]: o[k] }) : { [k]: o[k] }
        )
      );
    })(obj)
  );

const o = { a: 1, b: { c: 2, d: { e: 3 } } };
const r5 = flattenObject(o);
// r: { a: 1, 'b.c': 2, 'b.d.e': 3 }

// Question 35: Can you write a JavaScript function to rotate the elements of an array to the right by a specified number of positions?
const rotateArray = (arr, positions) =>
  arr.slice(-positions).concat(arr.slice(0, -positions));

const arr1 = [1, 2, 3, 4, 5];
const pos = 2;
const result1 = rotateArray(arr, pos);
// result: [4, 5, 1, 2, 3]

// Question 36: Can you write a JavaScript function to convert a given number of minutes into hours and minutes?

const convertToHoursAndMinutes = (minutes) =>
  `${Math.floor(minutes / 60)}h ${minutes % 60}m`;

const t = 125;
const r4 = convertToHoursAndMinutes(t);
// r: '2h 5m'

// Question 37: Can you write a JavaScript function to generate a random password of a specified length?

const generateRandomPassword = (length) =>
  Array.from({ length }, () =>
    String.fromCharCode(Math.floor(Math.random() * 94) + 33)
  ).join("");

const len = 12;
const pass = generateRandomPassword(len);
// pass: '$2#XrGp^@L9'

// Question 38: Can you write a JavaScript function to convert an RGB color to its hexadecimal representation?

const rgbToHex = (r, g, b) =>
  `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;

const r = 255;
const g = 127;
const b = 63;
const color = rgbToHex(r, g, b);
// color: '#ff7f3f'

// Question 39: Can you write a JavaScript function to check if a given string has balanced brackets?

const areBracketsBalanced = (str) =>
  !str
    .split("")
    .reduce(
      (count, char) =>
        char === "(" || char === "[" || char === "{"
          ? ++count
          : char === ")" || char === "]" || char === "}"
          ? --count
          : count,
      0
    );

const s3 = "({[]})";
const r6 = areBracketsBalanced(s3); // r6: true

const s4 = "({[})";
const r7 = areBracketsBalanced(s4); // r7: false

// Question 40: Can you write a JavaScript function to generate a unique identifier?

const generateUniqueId = () => Math.random().toString(36).substr(2, 9);

const uniqueId = generateUniqueId();
// uniqueId: 'abc123xyz'
