 import { createSlice  ,nanoid } from "@reduxjs/toolkit";

 const initialState ={
    student:[]
 }


 const updateslice = createSlice({

    name:'data',
    initialState,
    reducers:{
        updatedata:(state,action)=>{
         const studata = {
            id:nanoid(),
            Text:action.payload
         }
         state.student.push(studata);
        }
    }
 })

 export default updateslice.reducer;
 export const{ updatedata  } = updateslice.actions;