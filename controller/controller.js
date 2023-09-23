import Admin from "@/model/admin";
 import Student from "@/model/student";
 
 
 
export async function  login(req,res){ 
     
if(!req.body) return res.status(404).json({error:"Dont have form data"}); 
 const {email , password} = req.body;
const emailexist = await Admin.findOne({email});
if(emailexist){
 const passwordcheck = await Admin.findOne({password});
 if(passwordcheck){
    res.status(200).json({message:"Login Successfully"})
 }else{
  res.status(400).json({error:"Invalid"})
 }

}else{
  res.status(400).json({error:"Invalid"})
}
}
 

// export async function addstudent(req,res){ 
 
//    try { 
      // const {name ,email,phone,course,class_,seat_no}  = req.body;

      //   if(!name || !email || !phone || !course || !class_ || !seat_no){
      //   return  res.status(400).json({Error:"all inputes are required"});
      //   } 

//         const studentexist =  await  Student.findOne({seat_no}) ;
//         if(studentexist){
//           return res.status(402).json({error:"student or Student_id alerday exist"});
//         } 
    //     const  student = new  Student({
    //      name,email,phone,course,class_,seat_no
    //  })
    //  const  addstudent = await  student.save();
    //  if(addstudent){
    //   res.status(200).json({message:"student added"});
    //  } 
//       }catch (error) {
//         return res.status(404).json({error:"not provided"});
//    } 
//  }
 
 
  
export async function addstudent(req,res){ 
try {
 
const    source = req.body;
var arrayToInsert = [];
for (var i = 0; i < source.length; i++) {
 
  var singleRow = {
    name: source[i]["Name"],
    email: source[i]["Email"],
      phone: source[i]["Phone"],
      class_: source[i]["Class"],
      course: source[i]["Course"],
      seat_no: source[i]["Seat_No"],
  };
  arrayToInsert.push(singleRow);
}
console.log(arrayToInsert);
 Student.insertMany(arrayToInsert).then(function () {
  console.log("Successfully saved defult items to DB");
}).catch(function (err) {
  console.log(err);
});
  res.send({status:200,success:true,msg:"uploded"});
  return res;
} catch (error) {
  res.send({status:400,success:false,msg:error.message});
}
 
}


 
export async function  getstudents(req,res){ 
 
  try {  
    
    const   students = await  Student.find();
    if(!students){ 
      res.status(404).json({error:"no data"});
     
    } 
        res.json(students)
   
     }catch (error) {
    res.status(404).json(error)
  } 
}


export async function  getstudent(req,res){  
  try {  
    const  {stuid} = req.query;
 if(stuid){
  const student = await Student.findByID({stuid});
  return res.status(200).json(student);
   
 }
 return res.status(404).json({error:"not provided"});
     }catch (error) {
      res.status(404).json(error);
     return
  } 
}
 

export async function  putStudent(req,res){  
  try { 
    const formData = req.body;  
    const  {studentid} = req.query;  
       if(studentid && formData) {  
          await  Student.findByIdAndUpdate(studentid,formData);   
          return    res.status(200).json(formData);
           
            }
      return res.status(404).json({error:"not provided"});
  } catch (error) {
 res.status(404).json(error)
     return
  } 
}


export async function  Deletestudent(req,res){  
  try { 
  
    const  {studentid} = req.query;  
       if(studentid) {  
          await  Student.findByIdAndDelete(studentid);   
           return res.status(200).json("deleted");
            }
      return res.status(404).json({error:"not provided"});
  } catch (error) {
   return res.status(404).json(error)
  } 
}