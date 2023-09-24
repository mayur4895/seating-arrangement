import {React,useEffect} from 'react'
import { useState } from "react";
 import { useDispatch,useSelector } from 'react-redux';
import Link from "next/link";
import { getStudents } from '@/lib/helper';
import { useQuery } from 'react-query';
import { HiUser } from "react-icons/hi";
export default function dashboard_info(){ 

 
  // const totalstudent = useSelector((state)=>state.stucount);  

  const {isLoading,isError,data,error} =  useQuery('students',getStudents); 
 
  let key, count = 0;

  for (key in data) {
      if (data.hasOwnProperty(key)) 
          count++; 
  }
  
   return(
     
    <div className="  w-3/4  mx-auto  h-screen">
    <div className="sm:grid-flow-row-dense justify-center w-full  grid lg:grid-cols-3 gap-4 mt-4 p-5 bg-slate-200 ">
    <div className=" h-auto  w-full  flex gap-4 items-center bg-slate-50 rounded-md p-3 shadow-md border">
     
      <HiUser size={25} className='text-blue-500'/>
       <h4> Total Ug Student</h4>
        <h3 className=' text-lg'>{count}</h3>
     
    </div>
 
    <div className="   flex gap-4 items-center bg-slate-50 rounded-md p-3 shadow-md border">
     
      <HiUser size={25}/> 
       <h4> Total Pg Student</h4>
       <h3 className=' text-lg'> 400</h3>
    
    </div>
    </div>
    </div>
  
  )
}

 