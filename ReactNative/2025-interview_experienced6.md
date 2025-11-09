51. How are DeviceEventEmitter and NativeEventEmitter used in event handling?
 Ans – Both listen to native events. DeviceEventEmitter is Android-specific, while NativeEventEmitter is cross-platform for communicating between JS and native modules.

52. How would you implement a custom animated transition between screens?
 Ans – I use Reanimated and react-navigation’s cardStyleInterpolator to interpolate opacity, scale, or translate values — creating smooth, interactive transitions.

53. How do the props in TextInput work in React Native?
 Ans – Props like value, onChangeText, keyboardType, and secureTextEntry control user input behavior. They make TextInput highly customizable for forms and search bars.

54. Discuss the role of useMemo and useCallback hooks in React Native.
 Ans – useMemo caches computed values, and useCallback memoizes functions to prevent unnecessary re-renders. They help optimize performance in complex components.

55. How would you implement background tasks in a React Native app?
 Ans – I use react-native-background-fetch or Headless JS for Android to run periodic or event-based tasks in the background without affecting UI performance.

56. Discuss the role of NavigationContainer and its significance.
 Ans – NavigationContainer wraps the entire navigation tree, manages navigation state, and links it with the native environment. It’s the core provider for react-navigation to function.

