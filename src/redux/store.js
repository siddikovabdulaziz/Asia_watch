import { configureStore } from "@reduxjs/toolkit";
import wishiesSlice from "./wishiesSlice";
import cartSlice from "./cartSlice";
import taqqoslashSlice from './taqqoslashSlice';

export const store = configureStore({
  reducer: {
    wishes: wishiesSlice,
    taqqoslash: taqqoslashSlice,
    carts: cartSlice,
  },
});
