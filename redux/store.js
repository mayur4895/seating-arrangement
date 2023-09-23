import {configureStore} from "@reduxjs/toolkit";
import  dashboardslice from "./slices/dashboardslice";
import  updatedata  from "./slices/updateslice";
 
 
 


const store = configureStore({
    reducer:{
        dashboard:dashboardslice, 
        editstudent:updatedata,
 
 
    },
  
})

export default store;
 
