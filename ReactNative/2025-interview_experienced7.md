1.Why is my image visible on Android but not on iOS when using react-native-fast-image, and how can I debug and fix it?

Ans:
This issue usually occurs due to incorrect image URLs, missing HTTPS support, or iOS permission/configuration issues.
First, I check the image URL in Safari’s network inspector to confirm it loads.
Then I ensure the link uses HTTPS (iOS blocks HTTP by default) or add NSAppTransportSecurity exceptions in Info.plist.
Finally, I verify caching or resizing props in FastImage aren’t breaking iOS rendering — sometimes setting resizeMode={FastImage.resizeMode.contain} fixes it.

2. Why does the build become slow when Hermes or ProGuard is enabled in React Native?

Ans:
Enabling Hermes or ProGuard adds extra optimization and compilation steps to the build process.
Hermes performs bytecode precompilation and optimizes JS execution, which increases initial build time but improves runtime performance.
ProGuard performs code shrinking, obfuscation, and optimization, which requires analyzing the entire codebase — so it slows down builds but results in a smaller, more secure APK or AAB.

3. Why am I getting a white screen when the app starts in production but not in debug mode, and how can I detect and resolve it?

Ans:
A white screen in production often happens due to JavaScript errors, missing assets, or minification issues that don’t appear in debug mode.
To detect it, I check device logs using adb logcat (Android) or Xcode logs (iOS), and enable global error handling via ErrorUtils or Sentry to capture runtime exceptions.
I also ensure Hermes compatibility, verify release bundle generation (react-native bundle), and disable ProGuard rules temporarily to identify if code obfuscation is breaking something.

4. What is the difference between a Synthetic Event and a Native Event in React Native?

Ans:
A Synthetic Event is React’s cross-platform wrapper around the browser or native event system. It normalizes event properties to work consistently across iOS, Android, and Web.
A Native Event comes directly from the underlying platform (like Android’s or iOS’s event system) and provides raw, platform-specific details.
For performance, React Native often wraps native events as synthetic ones — but we can still access the original native data through event.nativeEvent.
