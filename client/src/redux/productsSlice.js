import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        all: [],
        searchResults: []
    },
    reducers: {
        setProducts: (state, action) => {
     
            state.all = [...action.payload|| [] ];
            state.searchResults = [];
        },
        searchProducts: (state, action) => {
            if (action.payload && action.payload !== ''){
                // console.log(action.payload)
                const r= new RegExp(action.payload.toLowerCase(),'g');
                state.searchResults=[...state.all.filter(p=>p.title.toLowerCase().search(r)!==-1)];
            }else{
                state.searchResults = [];
            }
        },

    }
})

// Action creators are generated for each case reducer function
export const { setProducts, searchProducts } = productsSlice.actions

export default productsSlice.reducer