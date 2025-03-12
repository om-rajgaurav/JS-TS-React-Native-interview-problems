// Objects

// Question 1: How to delete a property in an object in JavaScript?

let user = {
    name: 'sachin',
    age: 23
}

// i want to delete age property

delete user.age

console.log(user)// { name: 'sachin' }

// Question 2: How to delete a property in an object in JavaScript when the property is a variable?

const func = (
    function (a) {
        delete a
        return a
    }
)(5)

console.log(func)// 5 delete do not affect local variable so 5 is printed

// Question 3: How to delete a property in an object in JavaScript when the property is an object?

const a = {}
const b={key:"b"}
const c={key:"c"}

a[b] = 123
a[c] = 456
console.log(a[b]) //456

// becasue 

// when we assign a object 

a["[object,Object]"] = 123 //a[b] = 123
a["[object,Object]"] = 123 //a[b] = 456

// becuse we are assigning a object it not act as key it will like object objet

console.log([..."raj"])  // [ 'r', 'a', 'j' ]

// Question 4: How to create a deep copy of an object in JavaScript?

const value  = {number:10}

function multiply(x={...value}){
    console.log( x.number*=2)
}

multiply()
multiply()
multiply(value)
multiply(value)


// Question 5: How to create a deep copy of an object in JavaScript using JSON.parse(JSON.stringify())?

let users = {
    name: 'sachin',
    age: 23,
    address: {
        city: 'mumbai',
        state: 'maharashtra'
    }
}


let clone = Object.assign({},users) 
clone.name = 'raj'   
console.log(users,clone)

// another way to do this 

let clone1 = JSON.parse(JSON.stringify(users))
clone1.name = 'raj1'
console.log(users,clone1)

// one another way to do this

const clone3 = {...users}
clone3.name = 'raj2'
console.log(users,clone3)

// Question 6: How to create a shallow copy of an object in JavaScript?

let users1 = {
    name: 'sachin', 
    age: 23,
    address: {
        city: 'mumbai',
        state: 'maharashtra'
    }
}


let clone2 = users1
clone2.name = 'rajtest'
console.log(users1,clone2) // it modified the original object

