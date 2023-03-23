import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  token: null,
};

function parseJwt(token) {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

export const fetchUsers = createAsyncThunk(
  "fetch/users",
  async (_, thunkAPI) => {
    try {
      const users = await fetch("http://localhost:4000/user");
      return users.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const registration = createAsyncThunk(
  "registration/users",
  async ({ username, password }, thunkAPI) => {
    try {
      const registration = await fetch("http://localhost:4000/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      return registration.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const authorization = createAsyncThunk(
  "authorization/users",
  async ({ username, password }, thunkAPI) => {
    try {
      const authorization = await fetch("http://localhost:4000/authorization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const token = await authorization.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      return token;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(authorization.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload);
        state.token = action.payload
      });
  },
});

export default userSlice.reducer;
