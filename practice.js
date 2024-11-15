const arr = [1, 2, 3, 1, 2, 4];

// let arr1 = arr.reduce((acc,value)=>{
//     acc[value] = (acc[value]||0)+1
//     return acc
// },{})

// console.log(arr1)

// let newArr = {}

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     newArr[element] = (newArr[element]||0)+1

// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// console.log(newArr)

const sortedArray = arr.sort((a, b) => a - b);

// Objects

// Object Methods:
// 1. Object.keys(obj) - returns an array of a given object's own enumerable property names
// 2. Object.values(obj) - returns an array of a given object's own enumerable property values
// 3. Object.entries(obj) - returns an array of a given object's own enumerable property [key, value] pairs

// Example:

let user = {
  name: "sachin",
  age: 23,
};

// Object.keys() example
const keys = Object.keys(user);
console.log(keys); // ['name', 'age']

// Object.values() example
const values = Object.values(user);
console.log(values); // ['sachin', 23]

// Object.entries() example
const entries = Object.entries(user);
console.log(entries); // [['name', 'sachin'], ['age', 23]]

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

const a = Promise.resolve(3);
const b = Promise.reject("error");
const c = Promise.resolve(9);
let res = Promise.all([a, b, c]);
let newRes = Promise.allSettled([a, b, c]);
console.log(res);
