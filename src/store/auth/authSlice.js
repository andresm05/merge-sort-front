import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    status: "not-authenticated",
    error: undefined,
  },
  reducers: {
    onChecking: (state) => {
      (state.status = "checking"), (state.error = undefined);
      state.user = {};
    },
    onLogin: (state, {payload}) => {
      state.user = payload;
      state.status = "authenticated";
      state.error = undefined;
    },
    onLogout: (state, {payload}) => {
      state.user = {};
      state.status = "not-authenticated";
      state.error = payload;
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearError } = authSlice.actions;