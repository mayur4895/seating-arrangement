   
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi"; 
import { useRouter } from "next/router";
import {useDispatch, useSelector} from "react-redux";
import styles from './dashboard.module.css';
import viewstudent from "../admin/dashboard/pg/viewstudent";
import {  hidepannel } from "@/redux/slices/dashboardslice";
 
 

export default function   dashboard_pannel(){ 
   const router = useRouter();
 const dispatch = useDispatch();
      const [showug,setshowug] = useState(true);
      const [showpg,setshowpg] = useState(true); 
      const [addstudent,setaddstudent] = useState(false);
  
     const addStudent=()=>{
      setaddstudent(true);
      dispatch(hidepannel());
     }

     const  viewstudent=()=>{
      dispatch(hidepannel());
     }

    
     
   return(
    

      <div className={styles.pannel}> 
          <ul className=" text-left  my-10 flex flex-col gap-4">  
          <Link href="/admin/dashboard" className="bg-slate-800"   onClick={()=>setaddstudent(false)}>  
          <li className={router.pathname == "/admin/dashboard" ? `${styles.active_link}` :  `${styles._link}`} >  
           dashboard   </li> </Link> 
           
            <li className=" relative bg-slate-800 py-3">
               <Link href="" className="text-white p-4 ">UG </Link>
               <HiChevronDown size={25} onClick={()=>setshowug(!showug)} className="absolute text-white  right-3 top-2 cursor-pointer"></HiChevronDown>

             <ul className={!showug ? `py-3 hidden`:`py-3 `}>

             <Link href="/admin/dashboard/pg/addstudent" onClick={addStudent}  >  
              <li  className={router.pathname == "/admin/dashboard/pg/addstudent" ?  `${styles.active_link}`: `${styles._link}`}>  
              Add Student   </li></Link>

              <Link href="/admin/dashboard/pg/viewstudent" onClick={viewstudent} >  
              <li  className={router.pathname == "/admin/dashboard/pg/viewstudent" ?  `${styles.active_link}`: `${styles._link}`}>  
               View Student   </li></Link>
 
            </ul>
            </li>
            <li className=" relative bg-slate-800 py-3">
               <Link href="" className="text-white p-4  w-full" >PG</Link>
            <HiChevronDown size={25} onClick={()=>setshowpg(!showpg)} className="absolute text-white  right-3 top-2 cursor-pointer"></HiChevronDown>
            <ul className={!showpg ? `py-3 hidden`:`py-3`}>
            <Link href="/admin/dashboard/ug/addstudent"><li  className={router.pathname == "/admin/dashboard/ug/addstudent" ?  `${styles.active_link}`: `${styles._link}`}>Add Student </li></Link>
              </ul></li> 
         
          </ul> 
      </div>
  
   
   )
}  