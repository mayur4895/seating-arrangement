

import * as Yup from "yup"; 

  const  signupschema = Yup.object({
    name:Yup.string().min(4).max(20).required("please enter name"),
    email:Yup.string().email().required("please enter email"),
    phone:Yup.number().min(10).required("please enter phone"),
    course:Yup.string().min(2).max(20).required("please enter course"),
     seat_no:Yup.number().min(1).max(10).required("please enter seat_no"),
     class:Yup.string().min(1).max(20).required("please enter class"),
    password:Yup.string().min(6).required("please enter password"),
  }) 

 export default signupschema;