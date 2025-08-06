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
