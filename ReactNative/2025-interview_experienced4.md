31. How to integrate React Native with existing native code in an app?
 Ans – I create Native Modules or UI Components in Java/Kotlin or Swift/Obj-C and bridge them to JS. This lets React Native use native functionality or views seamlessly.

32. What is deep linking in a React Native application?
 Ans – Deep linking allows URLs or app links to open specific screens directly inside the app. It’s configured via navigation linking or native URL schemes.

33. Explain the purpose of FlatList and SectionList for efficient data rendering.
 Ans – FlatList efficiently renders long lists using windowing and recycling, while SectionList groups data into sections for categorized display, both boosting performance.

34. What role does Geolocation play in getting the user's current location in a React Native app?
 Ans – Geolocation APIs fetch device latitude and longitude for location-based features. I handle permissions carefully and optimize updates for performance and battery.

35. How can you implement a sliding menu (drawer) navigation in a React Native app?
 Ans – I use DrawerNavigator from @react-navigation/drawer, define screens inside it, and customize drawer content or gestures for smooth slide-in menus.

36. Explain the concept of 'Imperative vs Declarative' animations in React Native.
 Ans – Imperative animations control every frame manually (Animated API), while declarative ones describe the end state (Reanimated 2 or LayoutAnimation). Declarative is smoother and easier to maintain.

37. Discuss the concept of Bridgeless architecture in React Native (Hermes engine).
 Ans – The Bridgeless architecture with Fabric and Hermes removes the old async JS-Native bridge, enabling faster, synchronous communication and smoother UI performance.

38. How do you implement smooth transitions when navigating between screens using react-navigation?
 Ans – I use TransitionPresets, cardStyleInterpolator, or Reanimated-based transitions. Keeping screens lightweight during navigation ensures smooth transitions.

39. How does VirtualizedList improve performance in long lists?
 Ans – VirtualizedList renders only visible items and a small buffer, recycling components to reduce memory usage and keep scrolling fast, even with huge datasets.

40. How does NetInfo manage network connectivity in React Native?
 Ans – NetInfo monitors internet connectivity and type (Wi-Fi, cellular). I use it to show offline banners, cache data, or defer requests until the connection returns.
