import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count = state.count + 1;
    },
    Decrement: (state) => {
      state.count -= 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    CustomIncreaser:(state,action)=>{state.count=state.count+action.payload}
  },
});

// actions brings all the functions
console.log(reactSlicer.actions);
// O/P =>  reducer(state, action) {
//   if (!_reducer) _reducer = buildReducer();
//   return _reducer(state, action);
// }

console.log(reactSlicer.reducer);


export const { Increment, Decrement, Reset,CustomIncreaser } = reactSlicer.actions;
export default reactSlicer.reducer;
