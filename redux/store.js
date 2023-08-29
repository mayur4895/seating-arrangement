
import Reducer  from  "./reducer"
import {configureStore}  from "@reduxjs/toolkit"

export const store =  configureStore({
   reducer:{
    app:Reducer
   }
})
