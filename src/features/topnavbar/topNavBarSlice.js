import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedTabIndex: null
}

const topNavBarSlice = createSlice({
    name: "topNavBar",
    initialState,
    reducers: {
        selectTab: (state, action) => {
            state.selectedTabIndex = action.payload;
            console.log("tab " + action.payload + " selected!");
        },
    }
})

export const {selectTab} = topNavBarSlice.actions;

export default topNavBarSlice.reducer; 