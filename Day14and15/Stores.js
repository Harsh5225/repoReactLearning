import { configureStore } from "@reduxjs/toolkit";
import reducerSlicer1 from "./Slicer1"
// reducerslicer1 bhi koi namme ho sakta hai

const  stores=configureStore({
  reducer:{
    slice1:reducerSlicer1,
    // slice2:reducerSlice2
  }
})


export default stores;