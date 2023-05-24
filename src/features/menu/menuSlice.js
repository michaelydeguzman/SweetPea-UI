import { Satellite } from '@mui/icons-material';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuAPI from './menuAPI';

const initialState = {
    loading: false,
    menuGroup: [],
    error: ''
}

export const fetchMenuGroupsAsync = createAsyncThunk(
    'menu/fetchMenuGroups',
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
    name: 'menuGroup',
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(fetchMenuGroupsAsync.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchMenuGroupsAsync.fulfilled, (state, action) => {
            state.loading = false
            state.menuGroup = action.payload
            state.error = ''
        })
        builder.addCase(fetchMenuGroupsAsync.rejected, (state, action) => {
            state.loading = false
            state.menuGroup = []
            state.error = action.error.message
        })
    }
})

// export const { getMenuGroups } = menuSlice.actions;

export default menuSlice.reducer