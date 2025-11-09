21. How can you implement a parallax effect in a React Native app?
 Ans – I use Animated.ScrollView with Animated.event to map scroll position to transform values. This creates a depth illusion where background elements move slower than the foreground.

22. Explain the role of requestAnimationFrame in managing animations.
 Ans – requestAnimationFrame runs animation updates right before the next frame render, ensuring smooth 60fps animations synced with the device’s refresh rate.

23. How can you ensure data consistency and integrity when syncing large datasets in a React Native app?
 Ans – I use chunked syncing, optimistic updates, and timestamps for conflict resolution. Background sync with retry logic ensures reliable and consistent data updates.

24. How is react-native-webview used to embed web content in a React Native app?
 Ans – I use the <WebView /> component to display web pages or HTML content directly inside the app, and handle communication with onMessage for interactive features.

25. How do you handle orientation changes in a React Native app?
 Ans – I listen to dimension changes with useWindowDimensions() or Dimensions.addEventListener, re-render responsive layouts, and lock orientation when required using native settings.

26. Explain the purpose of the ImageBackground component and its benefits.
 Ans – ImageBackground allows content to be rendered over a background image while maintaining proper sizing and caching. It’s ideal for banners, cards, or themed screens.

27. What is ActivityIndicator in a React Native app?
 Ans – ActivityIndicator is a built-in component that shows a loading spinner. It’s used to indicate background tasks or data loading in a clean, native way.

28. How to handle global app state without Redux or Context API?
 Ans – I use lightweight libraries like Zustand or Recoil, or even RxJS for reactive state management. They provide global state with minimal boilerplate and better performance.

29. How is LayoutDebugger used to identify layout issues in a React Native app?
 Ans – I use Flipper’s Layout Inspector or React DevTools to visualize the component tree and view boundaries. It helps spot misalignment and flexbox layout issues quickly.

30. How to use react-native-svg to render vector graphics in a React Native app?
 Ans – With react-native-svg, I can render scalable shapes like <Path>, <Circle>, or <Rect>. It’s perfect for charts, icons, and custom graphics that stay sharp on any screen.

