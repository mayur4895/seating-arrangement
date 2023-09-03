import { createSlice } from "@reduxjs/toolkit";
 

const initialState =   {
    client:{togglepannel:true},
  
    
}

const dashboardslice = createSlice({
    name:"pannel",
    initialState,
    reducers:{
       hidepannel(state,action){
                state.client.togglepannel =  false;
        },
        showpannel(state,action){
            state.client.togglepannel = true;
    },
     
    }
 
});

export default dashboardslice.reducer;
  export const{ showpannel ,hidepannel,studentcount } = dashboardslice.actions;