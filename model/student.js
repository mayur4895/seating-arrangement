import mongoose from "mongoose";


const Studentschema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    class_:String,
    course:String, 
    seat_no:String,
})

  
let Student
try {
   Student = mongoose.model('students')
} catch (error) {
   Student = mongoose.model('students', Studentschema)
}
  export default Student;