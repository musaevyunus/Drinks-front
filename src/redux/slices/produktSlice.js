import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    produkts: []
}

export const fetchProdukt = createAsyncThunk(
    'fetch/produkts',
    async (data, thunkAPI) => {
        try {
           const produkts = await fetch('http://localhost:4000/produkt')
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
        .addCase(fetchProdukt.fulfilled, (state, action) => {
            state.produkts = action.payload
        })
    }
})

export default produktSlice.reducer