// pollyfills of map``

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(cb(this[index], index, this));
  }
  return res;
};



// test its working or not
const arr = [1, 2, 3, 4, 5];

let newArr = arr.myMap((item, index) => {
  return item * 2;
});



// filter pollyfill

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      temp.push(this[index]);
    }
  }
  return temp;
};

// reduce pollyfill

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(accumulator,this[index],index,this) : this[index];
    }
    return accumulator
}


const res0 = arr.myReduce((acc, item) => {
  return acc + item;
});

console.log('res',res0);


// differenec between map and forEach

// map do not modify the original array
// forEach modify the original array

// map return new array
// forEach return undefined

// map support chaining   arr.map(a=>a*2).filter(a=>a>1) like this 
// forEach not support chaining