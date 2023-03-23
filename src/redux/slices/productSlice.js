import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

export const fetchProduct = createAsyncThunk(
    'fetch/products',
    async (data, thunkAPI) => {
        try {
           const produkts = await fetch('http://localhost:4000/product')
           return produkts.json()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const produktSlice = createSlice({
    name: 'produkt',
    initialState,
    reducers: {},
    extraReducers: (biulder) => {
        biulder
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export default produktSlice.reducer