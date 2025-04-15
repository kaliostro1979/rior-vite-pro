import {createSlice} from "@reduxjs/toolkit";
import {SIMILAR_PRODUCTS} from "@/store/slices/similar-products/constants.js";

const initialState = {
    similarProducts: [],
    showModal: false,
    parentID: null
}

const similarProducts = createSlice({
    name: SIMILAR_PRODUCTS,
    initialState,
    reducers: {
        setSelectedProductSimilarProducts: (state, action) => {
            if (action.payload){
                state.similarProducts = action.payload.similarProducts
                state.parentID = action.payload.id
            }
        },
        openSimilarProductsModal: (state)=>{
            state.showModal = true
        },
        closeSimilarProductsModal: (state)=>{
            state.similarProducts = []
        }
    }
})

export const {
    setSelectedProductSimilarProducts,
    openSimilarProductsModal,
    closeSimilarProductsModal
} = similarProducts.actions;

export default similarProducts.reducer