import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload; // data from action performed by user like login or logout
    },
  },
});

export const { setAuth } = authSlice.actions; // exporting the action to use in components
export default authSlice.reducer; // exporting the reducer to use in store.ts
