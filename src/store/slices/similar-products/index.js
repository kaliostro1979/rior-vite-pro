import {createSlice} from "@reduxjs/toolkit";
import {SIMILAR_PRODUCTS} from "@/store/slices/similar-products/constants.js";

const initialState = {
    similarProducts: [],
    showModal: false,
}

const similarProducts = createSlice({
    name: SIMILAR_PRODUCTS,
    initialState,
    reducers: {
        setSelectedProductSimilarProducts: (state, action) => {
            if (action.payload){
                state.similarProducts = action.payload
            }
        },
        openSimilarProductsModal: (state)=>{
            state.showModal = true
        },
        closeSimilarProductsModal: (state)=>{
            state.similarProducts = []
            console.log(state.similarProducts)
        }
    }
})

export const {
    setSelectedProductSimilarProducts,
    openSimilarProductsModal,
    closeSimilarProductsModal
} = similarProducts.actions;

export default similarProducts.reducer