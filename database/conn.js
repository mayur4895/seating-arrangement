 import mongoose from "mongoose";

 const connectmongo = async()=>{
 try {
    const {connection}= await mongoose.connect("mongodb+srv://kssmsslss330:Mayur2002@cluster0.qjijebh.mongodb.net/?retryWrites=true&w=majority")
    if(connection.readyState == 1){
        console.log("connected");
       }
 } catch (error) {
    return Promise.reject(error);
 }
 }

 export default connectmongo;