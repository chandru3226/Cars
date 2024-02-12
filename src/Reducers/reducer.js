import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    totalModels : [],
    currentItem : {},
    stringData : '',
    filters : {},
  },
  reducers: {
    addCar: (state, action) => {
        console.log("Payload ::::: ", action)
      state?.totalModels?.push({ id : Date.now(), data : action.payload});
    },
    setCurrentModel: (state, action) => {
        state.currentItem = action?.payload;
      },
    setResultString : (state, action) => {
        state.stringData = JSON.stringify(action?.payload);
    },
    setFilterData : (state, action) => {
      state.filters = action.payload;
    }
  },
});
export const { addCar, setCurrentModel, setResultString, setFilterData } = carSlice.actions;
export default carSlice.reducer;