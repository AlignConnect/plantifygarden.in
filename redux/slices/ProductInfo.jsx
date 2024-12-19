import { createSlice } from "@reduxjs/toolkit";

const productInitial = {
  quantity: 1,
  allVariants: [],
  selectProducts: [],
  productsdata: null,
};

export const productSlice = createSlice({
  name: "productInfo",
  initialState: productInitial,
  reducers: {
    getStoreProductInfo: (state, action) => {
      state.productsdata = action.payload?.productsdata;
      state.allVariants = action.payload?.allVariants
      state.selectProducts = action.payload?.selectProducts
    },

    incrementQuantity: (state, action) => {
      state.quantity = action.payload?.quantity < 5 ? action.payload?.quantity + 1 : action.payload?.quantity
    },

    decrementQuantity: (state, action) => {
      state.quantity = action.payload?.quantity > 1 ? action.payload?.quantity - 1 : 1
    },

    changeSelectedProduct: (state, action) => {
      state.selectProducts = action.payload?.selectProducts
    }





  },
});

export const { getStoreProductInfo, incrementQuantity, decrementQuantity,changeSelectedProduct } = productSlice.actions;

export default productSlice;
