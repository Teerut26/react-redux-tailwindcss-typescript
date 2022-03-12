import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./slice/number";

const store = configureStore({
  reducer: {
    number: numberSlice.reducer,
  },
});
export default store;
