// closures
//lexical scoping

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// lexical scoping means that the variable which is declared in the outer function is accessible from the inner function

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    // console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();



// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

// console.log(sum(1)(2)(3)(4)); // 20


// closures question

let count = 0;

(
  function () {
    if(count == 0){
      let count = 1; // it will shadow the variable becasue it is block scope
    //   console.log(count); // 1
    }
    // console.log(count);//0
  }
)()

// interview question

function createBase(num1){
    return function addSix(num2){
        // console.log(num1+num2)
    }
}



addSix = createBase(6)

addSix(10) // 16
addSix(21) // 27


// optimization using closures


function find(index){

    let temp = []
    for (let i = 0; i < 1000000; i++) {
        
        temp[i] = i*i
    }
    // console.log(temp[index])
}

// console.time('10')
find(10)
// console.timeEnd('10')  //10: 33.644ms

// so the question is how to optmize this code 

// solution

function find1(){
    let temp = []
    for (let i = 0; i < 1000000; i++) {
        
        temp[i] = i*i
    }
    return function(index){
        console.log(temp[index])
    }
}

const find2 = find1()
console.time('10')
find2(10)
console.timeEnd('10')

// tricky question

for (var i = 0; i < 4; i++) {

    setTimeout(() => {
        console.log(i)
    }, 1000)
  
}

// the question is without removing var how can we achive actual output

// solution using closures

for (var i = 0; i < 4; i++) {
  function test(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  test(i);
}

// how would you use closure to create a private counter

function counter(){
  var _counter = 0

  function add(increment){
    _counter += increment
  }

  function get(){
    return "Counter"+ _counter
  }

  return{
    add,
    get
  }

}

let myCounter = counter()

myCounter.add(1)
console.log(myCounter.get())  //so here we are not directly modifiying the _counter variable because it is private variable


// what is module pattern 
// ans  - it is a way to create private and public methods

const myModule = (function () {
    function privateMethod() {
        console.log('private method')
    }
    return {
        publicMethod: function () {
           console.log('public method')
        }
    }
}
)()

myModule.publicMethod() // this will give output 
myModule.privateMethod()// this will give error because its private function


//implement caching and memoize function

function myMemoize(fn,context){
    let cache = {}

    return function(...args){
        if(cache[args]){
            return cache[args]
        }else{
            cache[args] = fn.apply(context||this,args)
            return cache[args]
        }
    }
}

function clumsy(num1, num2) {
  for (let i = 0; i < 10000000; i++) {}
  return num1 * num2
}

const memoizeProduct = myMemoize(clumsy)

console.time("first call")
memoizeProduct(10, 20)

console.timeEnd("first call")


console.time("second call")
memoizeProduct(10, 20)

console.timeEnd("second call")



