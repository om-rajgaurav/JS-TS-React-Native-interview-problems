// create a currying function which is flexible according to n numbers of call

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)(3)(4)()); // Outputs: 10

// difference between curying and partial application

// partial application
function partial(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(partial(1)(2, 3)); //so if we pass more than parameter inside any functionin curry it converted into partial application

// important question

// convert this add(a,b,c) to add(a)(b)(c)

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args); 
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));

