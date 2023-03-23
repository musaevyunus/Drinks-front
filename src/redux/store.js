import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import produktSlice from "./slices/produktSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
    produkts: produktSlice,
    cart: cartSlice,
  },
});
