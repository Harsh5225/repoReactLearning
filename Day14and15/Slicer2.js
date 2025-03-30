import { createSlice } from "@reduxjs/toolkit";
const reactSlice2=createSlice({
  name:"slice2",
  initialState:{count:0},
  reducers:{
    Add:(state)=>{state.count=state.count+1},
    Remove:(state)=>{state.count=state.count-1}
  }
})

console.log(reactSlice2.actions)
console.log(reactSlice2.reducer)
export  const {Add,Remove}=reactSlice2.actions;
export default reactSlice2.reducer;
