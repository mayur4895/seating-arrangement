   
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";  
import { BiAt ,BiFingerprint } from "react-icons/bi";
import { useRouter } from 'next/router' 
import { HiFingerPrint } from "react-icons/hi";
 
import { useMutation  } from 'react-query';
import styles from "./dashboard.module.css"
import  {login_validate}  from "@/lib/validate";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { isError } from 'react-query';
import Error from "@/pages/components/error";
export default function  adminlogin(){ 
  const router = useRouter();

 

  const [text , showtext] = useState(false);

 
   const initialValues = {
       email: '', password: ''
     }
 
    
          
   
     const { values, errors, touched, handleChange, handleSubmit } = useFormik({
       initialValues: initialValues,
      validate:login_validate,
       onSubmit: (values)=>{
        loginmutation.mutate(values);
       } 
 
     })


     const  loginmutation = useMutation({
      mutationFn:  async function loginadmin(values){  
         const status =  await signIn('credentials',{
          redirect:false,
          email:values.email,
          password:values.password,
          callbackUrl:'/admin/dashboard'
        }) 

        if(!status.ok ){
         return  alert("invalid Admin");
        } 
        router.push('/admin/dashboard');
      },
    })
 
 
 
   return( 
       <main className=" w-full   h-screen  bg-blue-500"> 
  
       <div className=" max-w-2xl  mx-auto h-screen flex items-center justify-center" > 
      <div className=" mx-auto w-full py-10 flex">
          <form className=" lg:flex-col sm:flex-col mx-2 bg-slate-50 rounded-md flex-col gap-4 py-10  w-full  shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
               <h1 className="text-2xl font-bold text-center ">
                 Admin Login  
               </h1> 
               <div className="input-type w-full px-10 flex-col flex gap-3 ">  
               <div  className="w-full m-1 relative  ">
                <div>
                <input type="email" name="email" placeholder="Email"  value={values.email} onChange={handleChange} className={styles.input}/>
                <span  className={styles.icon}>  <BiAt size={20} ></BiAt></span>
                </div>
 
             
              
               {errors.email && touched.email ? (<p className="w-62 absolute   translate-x-2 text-xs text-red-400 whitespace-nowrap ">{errors.email}</p>):null}
             </div>
  
             <div className="w-full m-1 relative">
                
                <div>
                <input
                 type={text ?"text":"password"} 
                 name="password" 
                 placeholder="Password"
                 value={values.password} onChange={handleChange} 
                 autoComplete="none" 
                 className={styles.input} />

                 <span className={styles.icon} >  <HiFingerPrint size={20} className=" cursor-pointer" onClick={()=>showtext(!text)} ></HiFingerPrint></span>
                </div>
               {errors.password && touched.password ? (<p className=" w-62 absolute  translate-x-2 text-xs text-red-400 whitespace-nowrap ">{errors.password}</p>):null}
             </div>
               </div>    
               <input type="submit" className={styles.button1} value="Login" />

       </form>
    </div>
    </div>
    </main>
   )
}  