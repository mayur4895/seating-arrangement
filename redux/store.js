import {configureStore} from "@reduxjs/toolkit";
import  dashboardslice from "./slices/dashboardslice";
import { senddata } from "./slices/updateslice";
 
 
 


const store = configureStore({
    reducer:{
        dashboard:dashboardslice, 
 
    },
  
})

export default store;
 
