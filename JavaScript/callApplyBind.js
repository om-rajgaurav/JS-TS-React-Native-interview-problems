
// Question 1: Can you write a function in JavaScript to add a new property to an object with call() method?

// Question 2: Can you write a function in JavaScript to add a new property to an object with apply() method?

// Question 3: Can you write a function in JavaScript to add a new property to an object with bind() method?

const obj = {   
    name: 'sachin',
}

function sayName(age) {
    return this.name + " my age is " + age
}

 
// so the solution is 
console.log(sayName.call(obj,24)) //sachin;

// what is apply

function sayAge(age) {
    return this.name + " my age is " + age
}

console.log(sayAge.apply(obj,[24]))

// what is bind

const newFn = sayAge.bind(obj)

console.log("newFn",newFn(24))
