import { createSlice } from "@reduxjs/toolkit";
 

const initialState =   {
    client:{togglepannel:false}
}

const dashboardslice = createSlice({
    name:"pannel",
    initialState,
    reducers:{
       showpannel(state,action){
                state.client.togglepannel = true;
        },
       hidepannel(state,action){
            state.client.togglepannel = false;
    }
    }
 
});
 console.log(dashboardslice.actions);
export default dashboardslice.reducer;
  export const{ showpannel ,hidepannel } = dashboardslice.actions;