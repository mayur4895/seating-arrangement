import React from 'react'
import Link from "next/link";
import { useFormik } from "formik";  
import { BiAt ,BiUser,BiFingerprint ,BiPhone,BiLayer,BiBookOpen,BiDialpadAlt} from "react-icons/bi";
import * as Yup from "yup";  
import styles from "./dashboard.module.css";
 export default function registerform (){
 

  
    const  signupschema = Yup.object({
        name:Yup.string().min(4).max(20).required("please enter name"),
        email:Yup.string().email().required("please enter email").email(),
        phone:Yup.number().min(10).required("please enter phone"),
        course:Yup.string().min(2).max(20).required("please enter course"),
         seat_no:Yup.number().min(1).required("please enter seat_no"),
         class:Yup.string().min(1).max(20).required("please enter class"),
    
      }) 
       
       
        const initialValues = {
          name: '', course: '', seat_no: '', class: '', email: '', phone: ''
        }
      
      
        const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
          initialValues: initialValues,
          validationSchema: signupschema,
          onSubmit: async(values,action) => {
            console.log(values);
            action.resetForm();
             alert("registed Successfuly");
          }
        })
      

  return (
 <div className='container flex justify-center items-center w-3/4 mx-auto'>
      <form className=" w-3/4 lg:flex-col sm:flex-col  flex-col gap-2 py-10    shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
<h1 className="text-2xl font-bold text-center mx-2 ">
 Add Student
</h1>

<div className="lg:grid-cols-2 grid   w-full  ">  
  <div className="w-full px-10 flex flex-col gap-3 ">
    <div className="w-full relative">
    <BiUser size={20} className={styles.icon}></BiUser>
      <input type="text" name="name" placeholder="Name"  value={values.name} onChange={handleChange} className={styles.input} />
      {errors.name && touched.name  ? (<p className="w-62  absolute text-xs   text-red-400 whitespace-nowrap ">{errors.name}</p>) : null}
    </div>
    <div className="w-full relative">
 <BiBookOpen size={20} className={styles.icon}></BiBookOpen>
      <input type="text" name="course" placeholder="course"  value={values.course} onChange={handleChange} className={styles.input} />
      {errors.course && touched.course ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.course}</p>):null}
    </div>

    <div className="w-full relative">
      <BiDialpadAlt size={20} className={styles.icon}></BiDialpadAlt>
      <input type="text" name="seat_no" placeholder="Seat no"  value={values.seat_no} onChange={handleChange}  className={styles.input}/>
      {errors.seat_no && touched.seat_no ?(<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.seat_no}</p>):null}
    </div>

    

  </div>



  <div className="input-type w-full px-10 flex flex-col gap-3">
    <div  className="w-full relative">
<BiAt size={20} className={styles.icon}></BiAt>
      <input type="email" name="email" placeholder="Email"  value={values.email} onChange={handleChange}  className={styles.input} />
      {errors.email && touched.email ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.email}</p>):null}
    </div>


    <div className="w-full relative">
    <BiPhone size={20} className={styles.icon}></BiPhone>
      <input type="text" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange}  className={styles.input} />
      {errors.phone && touched.phone ?(<p className="w-62 absolute  text-xs text-red-400 whitespace-nowrap ">{errors.phone}</p>):null}
    </div>

  <div className="w-full relative">
      <BiLayer size={20} className={styles.icon}></BiLayer>
      <input type="text" name="class" placeholder="Class"  value={values.class} onChange={handleChange}  className={styles.input} />
      {errors.class && touched.class ?(<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.class}</p>):null}
    </div>

  </div>

</div>
<input type="submit" className={styles.button1} value="Add" />



</form>
 </div>
  )
}

