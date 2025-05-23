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
                state.similarProducts = action.payload.related_products
                state.parentID = action.payload.id                
            }
        },
        openSimilarProductsModal: (state)=>{
            state.showModal = !!state.similarProducts?.length;
        },
        closeSimilarProductsModal: (state)=>{
            state.showModal = false
        },
        clearSimilarProducts: (state)=>{
            state.similarProducts = []
        }
    }
})

export const {
    setSelectedProductSimilarProducts,
    openSimilarProductsModal,
    closeSimilarProductsModal,
    clearSimilarProducts
} = similarProducts.actions;

export default similarProducts.reducer