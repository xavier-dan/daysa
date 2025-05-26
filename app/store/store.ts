import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '@/app/components/menu/menuSlice';
import loginReducer from '@/app/components/login/loginSlice';
import { artApi } from '@/app/api/artApi';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    login: loginReducer,
    // RTK Query API slice
    [artApi.reducerPath]: artApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
