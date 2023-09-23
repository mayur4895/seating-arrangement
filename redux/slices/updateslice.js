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
        
     
    }
 })

 export default updateslice.reducer;
 export const{ updatedata  } = updateslice.actions;