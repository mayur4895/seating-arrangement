import {configureStore} from "@reduxjs/toolkit";
import  dashboardslice from "./slices/dashboardslice";


const store = configureStore({
    reducer:{
        dashboard:dashboardslice
    }
})

export default store;