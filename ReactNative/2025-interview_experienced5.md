41. How to implement GraphQL with a React Native app?
 Ans – I use Apollo Client for queries, mutations, and caching. It simplifies data management and works great for real-time updates with subscriptions.

42. How does PanResponder handle touch gestures?
 Ans – PanResponder gives fine-grained control over gesture events like drag or swipe. I use it when I need custom touch behavior beyond standard gesture libraries.

43. How to use CodePush for over-the-air updates in React Native?
 Ans – I integrate CodePush from Microsoft App Center to deliver JS and asset updates instantly, without resubmitting to app stores. It’s great for quick bug fixes.

44. How would you implement biometric authentication in a React Native app?
 Ans – I use react-native-keychain or react-native-biometrics to enable fingerprint or Face ID login securely, falling back to PIN or password when needed.

45. What is the purpose of InteractionManager module in React Native?
 Ans – InteractionManager defers heavy JS tasks until animations or gestures complete, ensuring the UI stays fluid and responsive during transitions.

46. Discuss the concept of React Native Fabric and its advantages.
 Ans – Fabric is the new rendering engine built for concurrency, better threading, and faster UI rendering. It improves responsiveness and reduces JS-Native lag.

47. How can you implement real-time synchronization in a React Native app?
 Ans – I use WebSockets, Socket.IO, or Firebase Realtime Database. These enable instant updates between users, with optimistic UI for seamless real-time experience.

48. Explain the purpose of BackHandler in handling Android back button events.
 Ans – BackHandler listens for Android’s hardware back button presses. I use it to confirm exits or control custom navigation behavior in screens.

49. What role do Error Boundaries play in React Native?
 Ans – Error Boundaries catch JS errors during rendering and display fallback UI instead of crashing the app. It helps maintain a stable user experience.

50. How do you handle dynamic data rendering using FlatList and SectionList?
 Ans – I provide unique keys, memoize renderItem, and use props like initialNumToRender or getItemLayout to ensure smooth, efficient list rendering.

