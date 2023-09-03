import React from 'react'
import Link from "next/link";
import { useFormik } from "formik";  
 import { studentform_validate } from '@/lib/validate';
import { BiAt ,BiUser,BiFingerprint ,BiPhone,BiLayer,BiBookOpen,BiDialpadAlt} from "react-icons/bi";
import * as Yup from "yup";  
import styles from "./dashboard.module.css";
 import Error from "../components/error"
import { useMutation  } from 'react-query';
import { Router, useRouter } from 'next/router';
import { addStudent } from '@/lib/helper';
 export default function registerform (){
 
const router = useRouter();
 
const addmutation = useMutation({
  mutationFn:  addStudent,
  onError:()=>{
   return router.push('/admin/dashboard/pg/addstudent'); 
  },
  onSuccess: () => { 
    router.push('/admin/dashboard/pg/viewstudent');
  },
})
       
        const initialValues = {
          name: '', course: '', seat_no: '', class_: '', email: '', phone: ''
        }
      
      
        const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
          initialValues: initialValues,
       validate: studentform_validate,
         onSubmit:(values,action)=>{
          addmutation.mutate(values);
            action.resetForm();
         }
        })

   if(addmutation.isError) return  alert("student exist");
     if(addmutation.isLoading) return <div>Loding....</div>
   

  return (
 <div className='container flex justify-center items-center    mx-auto'>
      <form className="  w-3/4 lg:flex-col sm:flex-col  flex-col gap-2 py-10    shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
<h1 className="text-2xl font-bold text-center mx-3 ">
 Add Student
</h1>

<div className="lg:grid-cols-2 grid p-5 gap-3 w-full mt-3 ">  
  <div className="w-full   flex flex-col gap-3 ">
    <div className="w-full relative mt-1">
    <div>   
      <input type="text" name="name" placeholder="Name"  value={values.name} onChange={handleChange} className={styles.input} />
      <span className={styles.icon}>    <BiUser size={20} ></BiUser></span>
    </div>
       
      {errors.name && touched.name  ? (<p className="w-62  absolute text-xs   text-red-400 whitespace-nowrap ">{errors.name}</p>) : null}
    </div>
    <div className="w-full relative mt-1">

    <div> 
       <input type="text" name="course" placeholder="course"  value={values.course} onChange={handleChange} className={styles.input} />
     <span className={styles.icon}><BiBookOpen size={20} ></BiBookOpen></span>
      </div>
 
      {errors.course && touched.course ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.course}</p>):null}
    </div>

    <div className="w-full relative mt-1">
    <div> 
      <input type="text" name="seat_no" placeholder="Seat no"  value={values.seat_no} onChange={handleChange}  className={styles.input}/>
      <span className={styles.icon}><BiDialpadAlt size={20} ></BiDialpadAlt></span>
      </div>
     
      {errors.seat_no && touched.seat_no ?(<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.seat_no}</p>):null}
    </div>

    

  </div>



  <div className="input-type w-full   flex flex-col gap-3">
    <div  className="w-full relative mt-1">
      <div>  
      <input type="email" name="email" placeholder="Email"  value={values.email} onChange={handleChange}  className={styles.input} />
      <span className={styles.icon}><BiAt size={20}  ></BiAt></span>
      </div>
       {errors.email && touched.email ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.email}</p>):null}
    </div>


    <div className="w-full relative mt-1">
      <div>  
      <input type="text" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange}  className={styles.input} />
      <span className={styles.icon}><BiPhone size={20}  ></BiPhone> </span> 
      </div>
    
      {errors.phone && touched.phone ?(<p className="w-62 absolute  text-xs text-red-400 whitespace-nowrap ">{errors.phone}</p>):null}
    </div>

  <div className="w-full relative mt-1">
  <div> 
      <input type="text" name="class_" placeholder="Class"  value={values.class_} onChange={handleChange}  className={styles.input} />
      <span className={styles.icon}> <BiLayer size={20}  ></BiLayer></span> 
  </div> 
      {errors.class_ && touched.class_ ?(<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.class_}</p>):null}
    </div>

  </div>

</div>
<input type="submit" className={styles.button1} value="Add" /> 

</form>
 </div>
  )
}

