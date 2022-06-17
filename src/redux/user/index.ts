import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserReducer';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: userSlice,
      },
      serializableCheck: false,
    }),
});
export const setupStore = () => {
  return store;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
