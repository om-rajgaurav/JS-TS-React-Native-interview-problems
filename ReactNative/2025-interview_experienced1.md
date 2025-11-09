1. What causes performance issues in React Native?

Ans - Performance issues in React Native mainly occur due to unnecessary re-renders, blocking the JS thread with heavy computations, and inefficient list or image handling.
When the bridge between JavaScript and native threads gets overloaded, UI updates lag and animations stutter.
Optimizing renders, using FlatList properly, and offloading heavy tasks to native modules can greatly improve performance.


2. How to optimize applications in React Native?

Ans- I usually optimize React Native apps by reducing unnecessary re-renders using React.memo, useCallback, and PureComponent, and by using FlatList or FlashList for better list performance.
With the latest updates, I enable the Hermes engine and take advantage of the new Fabric architecture and TurboModules for faster communication between JS and native code.
I also compress images, use lazy loading with Suspense, move heavy logic off the JS thread, and track performance with tools like Flipper and the React Profiler.

3. How can you handle the dynamic linking of libraries in a React Native project?

Ans- In modern React Native (0.60+), libraries are linked automatically using autolinking, so most native dependencies don’t need manual linking anymore.
For older projects, I used to link them manually with react-native link or by editing native files directly in Android and iOS folders.
If autolinking fails, I handle it by checking the podfile, running pod install, and verifying proper configurations in Gradle or Xcode settings.

4. What is Memory Leak issue in React Native?

Ans- A memory leak in React Native happens when objects or components remain in memory even after they’re no longer needed.
This usually occurs due to unsubscribed listeners, timers, or async calls that continue running after a component unmounts.
To prevent it, I always clear intervals, remove event listeners, and cancel subscriptions or API calls in the useEffect cleanup function.

5. How can you detect memory leak issues in React Native?

Ans- I usually detect memory leaks using tools like Flipper’s memory and performance plugins or Xcode Instruments to track heap usage and retained objects.
During development, I also turn on the performance monitor to see if memory keeps increasing when switching screens.
If it does, I review my components to make sure I’m cleaning up listeners, intervals, and async calls properly inside the useEffect cleanup.

6. Write an example code to resolve a memory leak issue in React Native.

Ans - I can show a simple example where we fix a memory leak by cleaning up an interval inside useEffect.
Without cleanup, the interval keeps running even after the component unmounts, which causes a memory leak.

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const MemoryLeakFixExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // ✅ Cleanup to prevent memory leak
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default MemoryLeakFixExample;



7. How to store sensitive data in React?


Ans - To store sensitive data securely in React Native, I use encrypted storage solutions like react-native-keychain or react-native-encrypted-storage instead of AsyncStorage.
These libraries store tokens or passwords safely using the device’s Keychain (iOS) or Keystore (Android).
I also avoid hardcoding secrets in the app and use environment variables or secure APIs for sensitive configurations.


8. What is SSL Pinning in React Native?

Ans - SSL Pinning in React Native is a security technique that ensures the app communicates only with trusted servers by validating the server’s SSL certificate.
It prevents man-in-the-middle attacks by comparing the server’s certificate or public key with the one embedded in the app.
In React Native, this can be implemented using libraries like react-native-ssl-pinning or through custom native modules in the networking layer.

9. Discuss the use of ErrorUtils in error handling within a React Native app.

Ans-  ErrorUtils in React Native is a global error handler that catches uncaught JavaScript errors across the app.
It helps prevent the app from crashing unexpectedly by logging or displaying a fallback screen when an error occurs.
I usually override ErrorUtils.setGlobalHandler() to capture errors, report them to services like Sentry or Firebase Crashlytics, and maintain a smoother user experience.

10. What is setNativeProps and how is it used?

Ans - setNativeProps is a React Native method used to directly update native UI elements without going through the full React render cycle.
It’s mainly used for performance optimization when small visual updates, like changing a style or opacity, are needed frequently.
For example, I can get a ref to a component and call ref.current.setNativeProps({ style: { opacity: 0.5 } }) to update it instantly without re-rendering.



