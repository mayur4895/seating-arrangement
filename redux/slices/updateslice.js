 import { createSlice  ,nanoid } from "@reduxjs/toolkit";

 const initialState =   {
   client:{ datapass:{ 
   }},  
}


 const updateslice = createSlice({

    name:'data',
    initialState,
    reducers:{
      updatedata:(state,action)=>{  
            state.client.datapass = action.payload;
        },
        
      emptydata:(state,action)=>{ 
         state.client.datapass.pop();
     }
    }
 })

 export default updateslice.reducer;
 export const{ updatedata ,emptydata } = updateslice.actions;