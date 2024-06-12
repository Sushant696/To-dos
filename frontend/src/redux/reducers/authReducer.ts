import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: string | boolean;
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem(`authStatus`) ?? false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      // data from action performed by user like login or logout
      state.isAuthenticated = action.payload;
    },
  },
});

// exporting the action to use in components
export const { setAuth } = authSlice.actions;
// exporting the reducer to use in store.ts
export default authSlice.reducer;
