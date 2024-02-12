import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./Reducers/reducer";

const store = configureStore({
 reducer: {
 cars: carReducer,
 },
});

export default store;