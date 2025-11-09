11. How is InteractionManager used for smooth animation?
 Ans – I use InteractionManager.runAfterInteractions() to delay heavy tasks until after animations and gestures finish. This keeps the UI smooth and prevents frame drops during transitions.

12. How to use transitionConfig to create a custom transition animation between screens using react-navigation?
 Ans – In older react-navigation versions, we define transitionConfig with custom specs and interpolators. In modern v5/v6, we use cardStyleInterpolator or TransitionPresets to achieve smooth custom screen transitions.

13. How to set up stack navigator with the desired screens?
 Ans – Wrap everything in a NavigationContainer, create a Stack.Navigator, and add screens using <Stack.Screen name="ScreenName" component={ScreenComponent} />. This defines navigation flow and options clearly.

14. What role does Babel play in React Native development?
 Ans – Babel transpiles modern JavaScript and JSX into code compatible with mobile runtimes. It lets us use latest JS features and syntax safely in React Native apps.

15. How would you implement a custom loading spinner in React Native?
 Ans – I create an Animated.View that loops rotation or scaling using Animated.loop() for a smooth spinner effect, or customize ActivityIndicator for simplicity and consistent theme.

16. How do you handle version updates and migrations in a React Native project?
 Ans – I use the React Native Upgrade Helper, follow migration guides, test in a separate branch, fix breaking changes, and run pod install or Gradle sync before merging to main.

17. What is the importance of code signing in React Native app deployment?
 Ans – Code signing ensures authenticity and integrity of the app build. It verifies the app’s source and prevents tampering during distribution to app stores.

18. Discuss the role of PureComponent in React Native and when to use it.
 Ans – PureComponent automatically implements a shallow comparison of props and state to skip unnecessary re-renders. It’s best for class components with stable, simple props.

19. Explain the purpose of AccessibilityRole and AccessibilityState in React Native.
 Ans – AccessibilityRole tells assistive tools what the component represents, like a button or header. AccessibilityState conveys its status — such as checked, disabled, or selected — improving accessibility.

20. Discuss the benefits of using TypeScript with React Native.
 Ans – TypeScript provides type safety, better IntelliSense, and early bug detection. It helps maintain cleaner, more reliable code in large-scale React Native projects.
