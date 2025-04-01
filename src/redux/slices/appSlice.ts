import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
  isLoggedIn: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  token: string;
  isDarkMode: boolean;
}

const initialState: AppState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  message: '',
  isLoggedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    role: '',
  },
  token: '',
  isDarkMode: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    resetState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.isLoggedIn = false;
      state.user = {
        id: '',
        name: '',
        email: '',
        role: '',
      };
      state.token = '';
      state.isDarkMode = false;
    },
  },
});
export const {
  setLoading,
  setError,
  setSuccess,
  setMessage,
  setLoggedIn,
  setUser,
  setToken,
  setDarkMode,
  resetState,
} = appSlice.actions;

export const selectIsLoading = (state: any) => state.app.isLoading;
export const selectIsError = (state: any) => state.app.isError;
export const selectIsSuccess = (state: any) => state.app.isSuccess;
export const selectMessage = (state: any) => state.app.message;
export const selectIsLoggedIn = (state: any) => state.app.isLoggedIn;
export const selectUser = (state: any) => state.app.user;
export const selectToken = (state: any) => state.app.token;
export const selectIsDarkMode = (state: any) => state.app.isDarkMode;

export default appSlice.reducer;