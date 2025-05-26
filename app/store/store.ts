import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '@/app/components/menu/menuSlice';
import loginReducer from '@/app/components/login/loginSlice';
import { pexelsApi } from '@/app/api/pexelsApi';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    login: loginReducer,
    [pexelsApi.reducerPath]: pexelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pexelsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
