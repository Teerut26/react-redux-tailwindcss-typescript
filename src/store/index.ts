import { combineReducers, createStore } from "@reduxjs/toolkit";
import countSlice, { initialCountSliceStateInterface } from "./slice/countSlice";

export interface RootState {
  countSlice: initialCountSliceStateInterface;
}

const rootReducer = combineReducers({
  countSlice: countSlice,
});

const store = createStore(rootReducer);

export default store
