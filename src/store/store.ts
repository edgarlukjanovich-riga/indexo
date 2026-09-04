import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '@/store/api/postsApi';

const rootReducer = {
  [postsApi.reducerPath]: postsApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
