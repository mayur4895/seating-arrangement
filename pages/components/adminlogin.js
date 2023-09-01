   
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";  
import { BiEnvelope ,BiFingerprint } from "react-icons/bi";
import { useRouter } from 'next/router'
import styles from "./dashboard.module.css"
import { loginvalidate } from "@/lib/validate";
export default function  adminlogin(){ 
 const router = useRouter();
   const initialValues = {
       email: '', password: ''
     }
 
   
     const { values, errors, touched, handleChange, handleSubmit } = useFormik({
       initialValues: initialValues,
      validate:loginvalidate,
       onSubmit: async(values,action) => {
         console.log(values);
         action.resetForm();
          alert("login Successfuly"); 
          router.push('/admin/dashboard');
          
          
       }
     })
   
  console.log(errors);

   return(
       <main className=" max-w-2xl  mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto  w-full  py-10 flex">
          <form className=" lg:flex-col sm:flex-col  flex-col gap-4 py-10  w-full  shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
               <h1 className="text-2xl font-bold text-center ">
                 Admin Login  
               </h1> 
               <div className="input-type w-full px-10 flex-col flex gap-3 ">  
               <div  className="w-full relative  ">
               <BiEnvelope size={20} className=" absolute top-1/3 left-0 text-gray-300"></BiEnvelope>
               <input type="email" name="email" placeholder="Email"  value={values.email} onChange={handleChange} className="border-b w-full bg-transparent relative  h-14 px-8 outline-none  focus:border-b-teal-500" />
               {errors.email && touched.email ? (<p className="w-62 absolute  translate-x-2  text-xs text-red-400 whitespace-nowrap ">{errors.email}</p>):null}
             </div>
  
             <div className="w-full  relative">
             <BiFingerprint size={20} className=" absolute top-1/3 left-0 text-gray-300"></BiFingerprint>
               <input type="password" name="password" placeholder="Password"  value={values.password} onChange={handleChange} autoComplete="none" className="border-b w-full bg-transparent  h-14 px-8 outline-none  focus:border-b-teal-500" />
               {errors.password && touched.password ? (<p className=" w-62 absolute translate-x-2  text-xs text-red-400 whitespace-nowrap ">{errors.password}</p>):null}
             </div>
               </div>    
               <input type="submit" className={styles.button1} value="Login" />

       </form>
    </div>
    </main>
   )
}  