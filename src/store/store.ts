import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import companiesSlice from "./slices/companiesSlice";

export const rootReducer = combineReducers({
  companiesSlice,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
