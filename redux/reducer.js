import { createSlice } from "@reduxjs/toolkit";
 


const initialState =   {
   client:{add_studnet:false}
}
export  const  ReducerSlce= createSlice({
   name:"EMS",  
   initialState,
   reducers:{
       toggleChangeAction:(state)=>{
               state.client.add_studnet = !state.client.add_studnet
       }
   }
})

export const {toggleChangeAction} = ReducerSlce.actions;

export  default ReducerSlce.reducer;