import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '@/app/components/menu/menuSlice';
import loginReducer from '@/app/components/login/loginSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
