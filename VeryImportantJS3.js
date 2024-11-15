// Question 41: Can you write a JavaScript function that returns a promise which resolves after a specified delay?

const delayPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const delay = 2000;
delayPromise(delay).then(() => console.log("Promise resolved after delay"));

// Question 42: Can you write a JavaScript function to convert an object to a query string?

const objectToQueryString = (obj) =>
  Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

const o = { name: "John Doe", age: 30, city: "Example City" };
const qs = objectToQueryString(o);
// qs: 'name=John%20Doe&age=30&city=Example%20City'

// Question 43: Can you write a JavaScript function to check if two objects have the same properties (regardless of order)?

const haveSameProperties = (obj1, obj2) =>
  JSON.stringify(Object.keys(obj1).sort()) ===
  JSON.stringify(Object.keys(obj2).sort());

const o1 = { name: "John", age: 30, city: "Example City" };
const o2 = { age: 30, name: "John", city: "Example City" };

const r = haveSameProperties(o1, o2);
// r: true
// Question 44: Can you write a JavaScript function to count the occurrences of each word in a given sentence?

const countWordOccurrences = (sentence) =>
  sentence
    .split(" ")
    .reduce(
      (countMap, word) => ({ ...countMap, [word]: (countMap[word] || 0) + 1 }),
      {}
    );

const s = "the quick brown fox jumps over the lazy dog jumps over the fence";
const r1 = countWordOccurrences(s);
console.log(r);

/*
r:
{
  'the': 3,
  'quick': 1,
  'brown': 1,
  'fox': 1,
  'jumps': 2,
  'over': 2,
  'lazy': 1,
  'dog': 1,
  'fence': 1
}
*/
// Question 45: Can you write a JavaScript function to generate a random color in hexadecimal format?

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const color = randomColor();
// color: '#1a2b3c'

// Question 46: Can you write a JavaScript function to implement a simple caching function that stores the result of a function for a given input and returns the cached result if the same input is provided again?

const createCache = (func) => {
  const cache = new Map();
  return (...args) =>
    cache.has(JSON.stringify(args))
      ? cache.get(JSON.stringify(args))
      : (cache.set(JSON.stringify(args), func(...args)),
        cache.get(JSON.stringify(args)));
};

const add = (a, b) => a + b;
const cachedAdd = createCache(add);

cachedAdd(2, 3); // Output: 5 (calculated and cached)
cachedAdd(2, 3); // Output: 5 (returned from cache)

// Question 47: Can you write a JavaScript function to generate an array of specified length filled with random numbers?

const generateRandomArray = (length) =>
  Array.from({ length }, () => Math.floor(Math.random() * 100));

const arr = generateRandomArray(5);
// arr: [42, 18, 75, 3, 91]

// Question 48: Can you write a simple event emitter in JavaScript?

const createEventEmitter = () => {
  const listeners = new Map();
  return {
    on: (event, listener) =>
      listeners.has(event)
        ? listeners.get(event).push(listener)
        : listeners.set(event, [listener]),
    emit: (event, ...args) =>
      listeners.get(event)?.forEach((listener) => listener(...args)),
    off: (event, listener) =>
      listeners.set(
        event,
        listeners.get(event)?.filter((l) => l !== listener)
      ),
  };
};

const eventEmitter = createEventEmitter();

const greetListener = (name) => console.log(`Hello, ${name}!`);
eventEmitter.on("greet", greetListener);

eventEmitter.emit("greet", "Alice"); // Output: 'Hello, Alice!'
eventEmitter.off("greet", greetListener);

eventEmitter.emit("greet", "Bob"); // No output (listener removed)

// Question 49: Can you write a JavaScript function to implement a basic queue using arrays with enqueue and dequeue operations?

const createQueue = () => ({
  items: [],
  enqueue: (item) => items.push(item),
  dequeue: () => items.shift(),
});

const queue = createQueue();
queue.enqueue("item1");
queue.enqueue("item2");
queue.dequeue(); // Output: 'item1'
queue.dequeue(); // Output: 'item2'

// Question 50: Can you write a JavaScript function to implement a basic stack using arrays with push and pop operations?

const createStack = () => ({
  items: [],
  push: (item) => items.push(item),
  pop: () => items.pop(),
});

const stack = createStack();
stack.push("item1");
stack.push("item2");
stack.pop(); // Output: 'item2'
stack.pop(); // Output: 'item1'
