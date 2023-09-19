import {configureStore} from "@reduxjs/toolkit";
import  dashboardslice from "./slices/dashboardslice";
import  updatedata  from "./slices/updateslice";
 import  emptydata  from "./slices/updateslice";
 
 


const store = configureStore({
    reducer:{
        dashboard:dashboardslice, 
        editstudent:updatedata,
        empty:emptydata
 
    },
  
})

export default store;
 
