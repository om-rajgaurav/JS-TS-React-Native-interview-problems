# New Architecture for React Native

## 1. JSI (JavaScript Interface)
JSI replaces the bridge, allowing JavaScript to directly interact with native iOS and Android components. This results in smoother and faster performance.

## 2. Turbo Modules
Turbo Modules load native modules only when necessary, reducing startup time and memory usage.

## 3. Fabric
Fabric optimizes UI rendering, making animations and gestures smoother, updates faster, and the entire process more efficient.

## 4. Automatic Batching
Batching is when React groups multiple state updates into a single re-render for better performance. Without automatic batching, React only batched updates inside event handlers. Updates inside promises, `setTimeout`, native event handlers, or other events were not batched by default. With automatic batching, these updates are now batched automatically:

### Before: Only React events were batched.
```js
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will render twice, once for each state update (no batching)
}, 1000);
```

### After: Updates inside of timeouts, promises, and other events are batched.
```js
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will only re-render once at the end (that's batching!)
}, 1000);
```

## 5. Transitions
A transition is a new concept in React to distinguish between urgent and non-urgent updates.

- **Urgent updates** reflect direct interaction, like typing, clicking, or pressing.
- **Transition updates** transition the UI from one view to another.

Urgent updates like typing, clicking, or pressing need an immediate response. However, transitions are different because the user doesn’t expect to see every intermediate value on screen.

For example, when selecting a filter in a dropdown:
- The filter button itself should respond immediately.
- The actual results may transition separately, with a small delay that feels natural.
- If the filter is changed again before results are rendered, only the latest results matter.

### Using `startTransition`
React provides the `startTransition` API to distinguish between urgent and non-urgent updates:

```js
import { startTransition } from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Transition: Show the results
startTransition(() => {
  setSearchQuery(input);
});
```

Updates wrapped in `startTransition` are treated as non-urgent and can be interrupted if more urgent updates (like key presses) come in. If a transition is interrupted, React discards unfinished rendering work and processes only the latest update.

### Hooks for Transitions
- **`useTransition`**: A Hook to start transitions and track pending states.
- **`startTransition`**: A method to start transitions when `useTransition` cannot be used.

Transitions enable concurrent rendering, allowing updates to be interrupted. If content re-suspends, React continues displaying current content while rendering transition content in the background.

## 6. New Suspense Features
Suspense lets you declaratively specify a loading state for parts of the component tree that aren't ready to be displayed:

```jsx
<Suspense fallback={<Spinner />}>
  <Comments />
</Suspense>
```

Suspense makes UI loading states a first-class declarative concept in React. Previously, its main use case was code splitting with `React.lazy`, and it wasn't supported on the server.

In React 18, Suspense is supported on the server and leverages concurrent rendering features. It works best when combined with the transition API. If a component suspends during a transition, React prevents already-visible content from being replaced by a fallback. Instead, it delays the render until enough data has loaded to provide a better user experience.

For more details, see the [RFC for Suspense in React 18](https://github.com/reactwg/react-18/discussions/46).

