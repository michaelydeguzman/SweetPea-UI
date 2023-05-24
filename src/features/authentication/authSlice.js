import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './authAPI';

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await login(email, password);
      return {data: response.data};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const authActions = authSlice.actions;

export const selectUser = state => state.auth.user;
export const selectLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;

export default authSlice.reducer