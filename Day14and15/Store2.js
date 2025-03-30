import { configureStore } from "@reduxjs/toolkit";
import reducerSlice2 from "./Slicer2";
 const store2=configureStore({
   reducer:{
    slice2:reducerSlice2
   }
})

export default store2;