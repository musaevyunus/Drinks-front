import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
};

export const fetchCart = createAsyncThunk(
  "fetch/cart",
  async (userId, thunkAPI) => {
    try {
      const cart = await fetch(`http://localhost:4000/cart/${userId}`);
      return cart.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteItemFromCart = createAsyncThunk(
  "deleteItem/cart",
  async ({ id, itemId }, thunkAPI) => {
    try {
      await fetch(`http://localhost:4000/cart/deleteFromBasket/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId,
        }),
      });
      return itemId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const clearCart = createAsyncThunk(
  "clear/cart",
  async (id, thunkAPI) => {
    try {
      await fetch(`http://localhost:4000/cart/clear/${id}`, {
        method: "PATCH",
      });
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const itemPlus = createAsyncThunk(
  "plus/cart",
  async ({ id, itemId, price }, thunkAPI) => {
    try {
      await fetch(`http://localhost:4000/cart/more/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId,
        }),
      });
      return { itemId, price };
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const itemMinus = createAsyncThunk(
  "minus/cart",
  async ({ id, itemId, price }, thunkAPI) => {
    try {
      await fetch(`http://localhost:4000/cart/less/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId,
        }),
      });
      return { itemId, price };
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(deleteItemFromCart.fulfilled, (state, action) => {
        const deletedProduct = state.cart.items.find(
          (item) => item._id === action.payload
        );
        state.cart.totalPrice -=
          deletedProduct.count * deletedProduct.item.price;
        state.cart.items = state.cart.items.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.cart = { items: [] };
      })
      .addCase(itemPlus.fulfilled, (state, action) => {
        state.cart.items = state.cart.items.map((item) => {
          if (item._id === action.payload.itemId) {
            item.count += 1;
            state.cart.totalPrice += action.payload.price;
          }
          return item;
        });
      })
      .addCase(itemMinus.fulfilled, (state, action) => {
        state.cart.items = state.cart.items.map((item) => {
          if (item._id === action.payload.itemId) {
            item.count -= 1;
            state.cart.totalPrice -= action.payload.price;
          }
          return item;
        });
      });
  },
});

export default cartSlice.reducer;
