// what is call 


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