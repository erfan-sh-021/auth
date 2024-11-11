import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cartSlice';
import authReducer from './feature/authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
export default store;