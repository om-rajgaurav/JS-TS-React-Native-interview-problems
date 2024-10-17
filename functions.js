

// function expression 

// when you store a function in a variable called a function expression

const myFunc = function (a, b) {
    return a + b;
};

// function declaration

// the function which is created by function keyword is called a function declaration

function myFunc1(a, b) {
    return a + b;
}



// first calss function

// we can pass them inside another function just like a variable we can also return and maupulate them from that function

const square = function (a) {
    return a * a;
}

const displaySquare = function (fn) {
    let a = 2;
    // console.log('square of number is', fn(a));
}

displaySquare(square);


// what if IIFE immentialy invoked function expression

(function square2 (a) {
    return a * a;
})(3);

//reset and spread operator

function apple (...args) { // spread operator are ...args  * we cannot use ...args in mid like (a,...args,b) it will gives us error
    // console.log(args);
}

let a=[1,2,3];

apple(...a); //rest operator


//what is callback function

// a callback is function which is passed as an argument to another function

 function greet(name){
    // console.log('hello',name);
}

 function callGreet(callback){
    const name = "raj"
    callback(name);
 }

 callGreet(greet);

 //arrow function  it dont have argument keyword inside like normal function not this binding

const add = (a,b) => {
    return a + b;
}

// console.log(add(1,2));


// this problem

let name = 'raju';

let user = {
    name: 'sachin',
    displayName: function () {
        // console.log('user1', this.name); //it will print sachin
    },

    displayName2: () => {   
        // console.log('user2', this.name);//it will print undefined
    }
}

user.displayName();
user.displayName2();