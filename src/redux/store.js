import { configureStore } from "@reduxjs/toolkit";
import produktSlice from "./slices/produktSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    produkts: produktSlice,
  },
});
