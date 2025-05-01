// productsListSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS_LIST } from "@/store/slices/products-list/constants.js";
import api from "@/services/api/axiosInstence.js";

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    `${PRODUCTS_LIST}/fetchProducts`,
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/products");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Fetch failed");
        }
    }
);

const initialState = {
    products: []
};

const productsList = createSlice({
    name: PRODUCTS_LIST,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
    },
});

export default productsList.reducer;
