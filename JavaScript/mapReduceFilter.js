// Question 1: Can you write a polyfill for the map method in JavaScript?

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(cb(this[index], index, this));
  }
  return res;
};

// Test the myMap polyfill
const arr = [1, 2, 3, 4, 5];
let newArr = arr.myMap((item, index) => {
  return item * 2;
});

// Question 2: Can you write a polyfill for the filter method in JavaScript?

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      temp.push(this[index]);
    }
  }
  return temp;
};

// Question 3: Can you write a polyfill for the reduce method in JavaScript?

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator ? cb(accumulator, this[index], index, this) : this[index];
  }
  return accumulator;
};

const res0 = arr.myReduce((acc, item) => {
  return acc + item;
});

console.log('res', res0);

// Question 4: What is the difference between map and forEach in JavaScript?

// map does not modify the original array
// forEach modifies the original array

// map returns a new array
// forEach returns undefined

// map supports chaining e.g., arr.map(a => a * 2).filter(a => a > 1)
// forEach does not support chaining

