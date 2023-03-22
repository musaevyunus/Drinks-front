import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import produktSlice from "./slices/produktSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    produkts: produktSlice,
    cart: cartSlice,
  },
});
