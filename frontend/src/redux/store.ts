import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";


// let's configure a store with initial value of user being null
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootsState = ReturnType<typeof store.getState>;
// this will be used in useSelector hooks to get the state
// export type AppDispatch = typeof store.dispatch;
// this will be used in useDispatch hooks to dispatch actions

export default store;
