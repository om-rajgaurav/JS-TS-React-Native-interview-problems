
# 🔷 System Design Round: Mobile Architecture

## 🔹 Question 8: High-Level System Design

Suppose you're building a scalable React Native app like **Zomato** or **Swiggy**:

- Multiple screens (home, cart, login, profile, search)
- Deep linking support
- Offline support for cart/orders
- Remote config
- Fast launch time

❓ **How would you architect this app? Walk me through:**

- Folder structure
- State management
- API layer
- Navigation
- Offline handling
- Code splitting or lazy loading



## 🔧 Enhancements for a 10/10 Answer

Structure and expand your answer for top-tier performance:

### ✅ 1. Folder Structure

```
src/
  components/        # Reusable UI components
  screens/           # Screen-based views
  navigation/        # React Navigation setup
  store/             # Redux slices, RTK queries
  services/          # API layer (Axios, etc.)
  hooks/             # Custom hooks (useDebounce, useAuth)
  constants/         # Strings, endpoints, themes
  utils/             # Utility helpers (formatters, validators)
  assets/            # Images, fonts, SVGs
```
*Why this matters:* Interviewers want to see modularity and scalability from the start.

### ✅ 2. State Management

- Use **Redux Toolkit** with `createSlice` and `createAsyncThunk`.
- For API calls + cache, use **RTK Query**.
- Split into feature-based folders (`authSlice`, `cartSlice`, etc.).
- Use `useSelector` + `shallowEqual` to avoid re-renders.

> **Bonus:** Mention using Zustand for lightweight global state or Jotai for atomic state if not using Redux.

### ✅ 3. Navigation

- Stack for auth flow
- Tab Navigator for main sections
- Drawer for settings/help
- Deep linking via:

```ts
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'user/:id',
    },
  },
};
```

### ✅ 4. API Layer

- Create a `services/api.ts` file with Axios instance + interceptors
- Add:
  - Logging
  - Retry logic
  - Token refresh
  - Error normalization

### ✅ 5. Offline & Performance

- Use MMKV or SQLite for caching cart/orders
- Use React Query or RTK Query with `persistReducer`
- Enable offline queueing if needed
- Lazy load screens using `React.lazy` or `Suspense` (with fallback)

### ✅ 6. Remote Config / Feature Flags

- Use **Firebase Remote Config**
- Wrap features in:
  ```js
  if (remoteConfig.getBoolean("new_feature")) { ... }
  ```
- Add fallback defaults and sync on app start

