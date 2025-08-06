# Interview Prep

---

## Question 1: Performance Optimization in Chat App

You are tasked with building a chat app. You want to ensure that the UI is responsive and doesn’t re-render unnecessarily when new messages arrive.  
**How would you optimize the performance of a FlatList of chat messages in React Native?**

### 🔹 A+ Answer (Optimized):

Yes, for a chat app with real-time messages coming from sockets or Firebase, I would use `FlatList` to render messages efficiently.

To optimize performance:

- Memoize the message item component using `React.memo`
- Use `useCallback` for the `renderItem` function to avoid unnecessary re-renders
- Use `keyExtractor` properly to help React identify items uniquely
- Use `extraData={someState}` to tell `FlatList` to re-render only when necessary props (like selected chat or new message) change
- Use `initialNumToRender`, `windowSize`, and `maxToRenderPerBatch` props to fine-tune list virtualization
- Use `inverted={true}` for chat-like UI (messages scroll up)
- Implement pagination or message chunking to avoid loading thousands of messages at once

---

## Question 2: Navigation in React Native

**How does React Navigation work internally in React Native?**  
**What’s the difference between `Stack.Navigator`, `Tab.Navigator`, and `Drawer.Navigator`?**  
**When would you use one over the other?**

### Enhanced A+ Answer (What Top Companies Look For):

React Navigation is a widely used library in React Native that enables smooth screen-to-screen navigation.

Internally, it manages a **navigation state stack** (not a queue), allowing pushing and popping screens similar to browser history.

Navigator Types:

- **`Stack.Navigator`**: For traditional navigation (e.g., Login → Home → Details). Works like a **LIFO** stack — last screen pushed is the first removed.
- **`Tab.Navigator`**: Best for bottom navigation menus like Home, Profile, Settings.
- **`Drawer.Navigator`**: Used for exposing side menus (left/right), often for global settings.

Key methods:

- `navigate(screen, params)`, `push(screen)` — add to stack
- `replace(screen)` — replace current with new
- `goBack()`, `pop()`, `popToTop()` — go back
- `reset()` — reset entire stack (e.g., after logout)

Also supports deep linking, animations, transitions, and header options.

---

## Question 3: TypeScript in React Native

**What are the benefits of using TypeScript in React Native?**  
**How do you define props and state in a functional component using TypeScript?**

### A+ Interview-Ready Answer:

TypeScript provides static typing for JavaScript code, making it easier to catch bugs at compile-time. In React Native, TypeScript improves:

- **Type safety**: Catch issues early (e.g., wrong types in props)
- **Editor tooling**: Autocomplete, hints, and refactoring
- **Readability**: Clearer data contracts
- **Scalability**: Easier to maintain large codebases

Define props using `type` or `interface`:

```
ts


type MessageProps = {
  sender: string;
  content: string;
  timestamp: number;
};

const MessageCard: React.FC<MessageProps> = ({ sender, content }) => {
  return <Text>{sender}: {content}</Text>;
};
```


Define state:

```
ts


const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```


**Bonus**: When using navigation, type route params using `RouteProp` and `NavigationProp` from `@react-navigation/native`.

---

## Question 4: Avoiding Re-renders in Redux or Context

You are given a deeply nested state in Redux or Context. Updating one field is causing the whole component tree to re-render.

**How would you reduce unnecessary re-renders?**

### A+ Solution:

Unnecessary re-renders happen when:

- Too much state is stored in a single atom
- Components subscribe to entire slices of state

### In Redux:

- Use **selectors** with `useSelector` — pick only needed slices
- Use `shallowEqual` to avoid re-renders on unchanged data
- Normalize state shape — flatten deep objects

```
ts


// ❌ Bad: selecting whole state
const state = useSelector((state) => state);

// ✅ Better
const user = useSelector((state) => state.user);

// ✅✅ Best with selector
const isLoggedIn = useSelector(selectIsLoggedIn, shallowEqual);
```


### In Context:

- Don’t store large or frequently changing data in a single context
- Split into smaller providers (e.g., `AuthContext`, `ThemeContext`)
- Use `useMemo` to memoize context values
- Avoid wrapping large trees unless necessary

### General Optimization:

- Use `React.memo` for child components
- Memoize functions with `useCallback` if passed as props

---

## Question 5: Native Modules in React Native

You need to access a native Android or iOS API (e.g., battery health) not exposed via JS.

**How do you bridge a native module into React Native?**

### ✅ A+ Interview-Ready Answer:

React Native’s **bridge architecture** allows JavaScript to communicate with platform-specific APIs.

### 🔹 Android Example (Java):

**Create a Native Module:**

```
java

public class BatteryModule extends ReactContextBaseJavaModule {
  BatteryModule(ReactApplicationContext context) {
    super(context);
  }

  @NonNull
  @Override
  public String getName() {
    return "BatteryModule";
  }

  @ReactMethod
  public void getBatteryLevel(Promise promise) {
    // Logic to get battery info
    promise.resolve(level);
  }
}
```


**Register with RN and Use in JS:**

```
ts


import { NativeModules } from 'react-native';

NativeModules.BatteryModule.getBatteryLevel().then(level => {
  console.log('Battery:', level);
});
```


### 🔹 iOS Example (Swift/Obj-C):

Similar steps using `RCTBridgeModule` protocol.

---

### ✅ Bonus Points:

Mention **TurboModules** and **JSI** (since React Native 0.71+):

- Faster than old bridge
- Enables **synchronous calls**
- Improves performance



## Question 6: useEffect Deep Dive

**Explain how useEffect works in React Native.  
What’s the difference between `useEffect(() => {...}, [])` and `useEffect(() => {...}, [someVar])`?**

---

### ✅ Polished A+ Answer (for Interviews):

`useEffect` is a React hook used to perform side effects in functional components. It replaces lifecycle methods from class components, such as:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

**Hook signature:**  
```js
useEffect(() => { /* side effect */ }, [dependencies])
```

- `useEffect(() => {...}, [])`: Runs only once, after the component mounts.
- `useEffect(() => {...}, [someVar])`: Runs after mount and again every time `someVar` changes.

If you return a function from `useEffect`, that function acts as a cleanup, and is called:
- Before the component unmounts.
- Or before the next effect runs (if dependencies change).

**Example:**
```tsx
useEffect(() => {
  const interval = setInterval(fetchData, 1000);
  return () => clearInterval(interval); // cleanup
}, []);
```

**Common Mistakes:**
- Forgetting to include dependencies in the array (can lead to stale values).
- Including too many dependencies (causes unnecessary re-renders).
- Making async functions directly inside `useEffect` (instead, define an async function and call it inside).
- Not cleaning up subscriptions, event listeners, or intervals.

---

## 🔥 Ready for Question 7 (Testing in React Native)?

**What testing libraries do you use in React Native?  
How do you test components and business logic?  
What’s the difference between unit testing and integration testing in React Native context?**

---

### ✅ Polished Interview-Ready Version of Your Answer:

I've used **Jest**, which is the default test runner in React Native projects. My experience is mostly around unit testing for business logic.

For example, I write `.test.ts` files and use `describe` blocks to group tests and `it()` or `test()` functions to write specific assertions using `expect`.

For testing components, I've used **React Native Testing Library (RNTL)**, which builds on top of `react-test-renderer` and provides APIs like:
- `render()`, `fireEvent()`, and `getByText()` for testing UI behavior.

I'm still improving in this area and haven’t worked much on integration or E2E testing, but I understand the difference:

---

### 🔍 Unit vs Integration Testing (Explain This Clearly):

| Type           | What it Tests                                               | Tool Used           |
|----------------|------------------------------------------------------------|---------------------|
| Unit Test      | Tests isolated logic (e.g., a function, reducer, hook)      | Jest                |
| Integration Test | Tests how components work together (e.g., button click triggers an API call and updates UI) | RNTL + Jest         |
| E2E Test       | Simulates full user journey across screens                  | Detox               |

---

### 🔧 Bonus Example for a Business Logic Test

**mathUtils.ts**
```ts
export const add = (a: number, b: number) => a + b;
```

**mathUtils.test.ts**
```ts
describe('add function', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

---

### ✅ Final Verdict:

**Score:** 6/10  
**What to Improve:**
- Learn at least basics of React Native Testing Library
- Practice writing a test for one small UI component
- Be able to define unit vs integration vs E2E testing
- You don’t need to know Detox right now, but mentioning it earns bonus points


