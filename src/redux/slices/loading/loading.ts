import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
}

export const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState:initialState,
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading;
                }
    }

})

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;