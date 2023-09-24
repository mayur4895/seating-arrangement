import {React,useEffect,useState} from 'react'
import Link from "next/link";
import Router from "next/router";
import { useFormik } from "formik";  
import Viewstudent from '../admin/dashboard/pg/viewstudent';
 import { studentupdate_validate } from '@/lib/validate';
import { BiAt ,BiUser,BiFingerprint ,BiPhone,BiLayer,BiBookOpen,BiDialpadAlt} from "react-icons/bi";
import * as Yup from "yup";  
import styles from "./dashboard.module.css";
 import Error from "./error"
import { useMutation, useQuery  } from 'react-query';
import {useDispatch, useSelector} from "react-redux";
import {   emptydata, updatedata } from '@/redux/slices/updateslice';
import {  useRouter } from 'next/router';
import {  updateStudent } from '@/lib/helper';
import { getstudent } from '@/controller/controller';

 export default function  updatestudentform(){ 
  
const router = useRouter();
 
   const     obj = useSelector((state)=>state.editstudent.client.datapass);  
    const stuid = obj._id; 


const  updatemutaion = useMutation({
  mutationFn: updateStudent,
  onError:()=>{
   return router.push('/admin/dashboard/pg/updateStudent'); 
  },
  onSuccess: () => { 
    router.push('/admin/dashboard/pg/viewstudent');
  },
})


                const initialValues = {
                  name: '', course: '', seat_no: '', class_: '', email: '', phone: ''
                }
              
              
                const  {handleChange, values,handleSubmit,errors,touched} = useFormik({
               initialValues: initialValues,
                validate: studentupdate_validate,
                 onSubmit 
                })


                async function onSubmit(values){ 
                       const formdata = {
                        _id:stuid,
                         values
                       }
                  updatemutaion.mutate(formdata);
                   }
              
 
 
 
  return (
 <div className='container flex justify-center items-center    mx-auto'>
      <form className="  w-3/4 lg:flex-col sm:flex-col  flex-col gap-2 py-10    shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
<h1 className="text-2xl font-bold text-center mx-3 ">
  Update Student
</h1>

<div className="lg:grid-cols-2 grid p-5 gap-3 w-full mt-3 ">  
  <div className="w-full   flex flex-col gap-3 ">
    <div className="w-full relative mt-1">
    <div>   
      <input type="text" name="name" placeholder="Name" onChange={handleChange} value={values.name  }       className={styles.input} />
      <span className={styles.icon}>    <BiUser size={20} ></BiUser></span>
    </div>
       
      {errors.name  ? (<p className="w-62  absolute text-xs   text-red-400 whitespace-nowrap ">{errors.name}</p>) : null}
    </div>
    <div className="w-full relative mt-1">

    <div> 
       <input type="text" name="course" placeholder="course"   onChange={handleChange} value={values.course}  className={styles.input} />
     <span className={styles.icon}><BiBookOpen size={20} ></BiBookOpen></span>
      </div>
 
      {errors.course   ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.course}</p>):null}
    </div>

    <div className="w-full relative mt-1">
    <div> 
      <input type="text" name="seat_no" placeholder="Seat no"    onChange={handleChange} value={values.seat_no}   className={styles.input}/>
      <span className={styles.icon}><BiDialpadAlt size={20} ></BiDialpadAlt></span>
      </div>
     
      {errors.seat_no   ?(<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.seat_no}</p>):null}
    </div>

    

  </div>



  <div className="input-type w-full   flex flex-col gap-3">
    <div  className="w-full relative mt-1">
      <div>  
      <input type="email" name="email" placeholder="Email"   onChange={handleChange} value={values.email}   className={styles.input} />
      <span className={styles.icon}><BiAt size={20}  ></BiAt></span>
      </div>
       {errors.email   ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.email}</p>):null}
    </div>


    <div className="w-full relative mt-1">
      <div>  
      <input type="text" name="phone" placeholder="Phone"  onChange={handleChange} value={values.phone}  className={styles.input} />
      <span className={styles.icon}><BiPhone size={20}  ></BiPhone> </span> 
      </div>
    
      {errors.phone   ?(<p className="w-62 absolute  text-xs text-red-400 whitespace-nowrap ">{errors.phone}</p>):null}
    </div>

  <div className="w-full relative mt-1">
  <div> 
      <input type="text" name="class_" placeholder="Class"    onChange={handleChange} value={values.class_}   className={styles.input} />
      <span className={styles.icon}> <BiLayer size={20}  ></BiLayer></span> 
  </div> 
      {errors.class_   ?(<p className="w-62 absolute  text-xs text-red-400 whitespace-nowrap ">{errors.class_}</p>):null}
    </div>

  </div>

</div>
<input type="submit"    className={styles.button1} value="Update" /> 

</form>
 </div>
  )
}

