import mongoose from "mongoose";


const adminschema = new mongoose.Schema({
   email:{String},
   password:{String}
})

let  Admin
try {
    Admin = mongoose.model('admin')
} catch (error) {
    Admin = mongoose.model('admin', adminschema)
}
  export default Admin;