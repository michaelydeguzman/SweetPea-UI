import { Satellite } from '@mui/icons-material';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuAPI from './menuAPI';

const initialState = {
    loading: false,
    menuGroups: [],
    error: ''
}

export const fetchMenuGroupsAsync = createAsyncThunk(
    'menu/fetchMenuGroupsAsync',
    async (thunkAPI) => {
      try {
        const response = await menuAPI.fetchMenuGroups();
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(fetchMenuGroupsAsync.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchMenuGroupsAsync.fulfilled, (state, action) => {
            state.loading = false
            state.menuGroups = action.payload
            state.error = ''
        })
        builder.addCase(fetchMenuGroupsAsync.rejected, (state, action) => {
            state.loading = false
            state.menuGroups = []
            state.error = action.error.message
        })
    }
})

// export const { getMenuGroups } = menuSlice.actions;

export default menuSlice.reducer