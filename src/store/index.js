import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        search: '',
        modelFilters: {},
        brandFilters: {},
        sortKey: 'old_to_new',
        cart: []
    },
    reducers: {
        add: (state, param) => {
            const { payload } = param;
            state.products = [...payload];
        },
        searchProduct: (state, param) => {
            const { payload } = param;
            state.search = payload;
        },
        filterByModel: (state, param) => {
            const { payload } = param;
            state.modelFilters = { ...state.modelFilters, [payload.model]: payload.selected };
        },
        filterByBrand: (state, param) => {
            const { payload } = param;
            state.brandFilters = { ...state.brandFilters, [payload.brand]: payload.selected };
        },
        sortProducts: (state, param) => {
            const { payload } = param;
            state.sortKey = payload;
        },
        addToCart: (state, param) => {
            const { payload } = param;
            state.cart = [...state.cart, payload];
        },
        removeFromCart: (state, param) => {
            const { payload } = param;
            const index = state.cart.findIndex(item => item.id === payload);
            state.cart.splice(index, 1);
        },
        loadCart: (state, param) => {
            const { payload } = param;
            state.cart = payload;
        }, 
        cleanCart: (state) => {
            state.cart = [];
        }
    }
});
const { actions, reducer } = productsSlice;
export const {
    add,
    searchProduct,
    filterByModel,
    filterByBrand,
    sortProducts,
    addToCart,
    removeFromCart,
    loadCart,
    cleanCart
} = actions;
export default reducer;