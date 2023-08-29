   
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
 import AddStudent from "./Pg/addstudent";
 import Dashboard_info from "@/pages/components/dashboard_info";

export default function   dashboard(){ 
      const [showug,setshowug] = useState(true);
      const [showpg,setshowpg] = useState(true); 
     const [addstudent,setaddstudent] = useState(false);
     
     const addStudent=()=>{
      setaddstudent(true);
     }
     
   return(
       <main className="w-full   mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full   ">

      <div className="  w-1/4  h-full bg-gray-900    ">
          <ul className="   w-full text-left  my-10 flex flex-col gap-4">
            <li onClick={()=>setaddstudent(false)} className="bg-gray-800 p-3   "><Link href="" className="text-white  ">dashboard</Link></li>
            <li className="bg-gray-800 p-3 relative ">
               <Link href="" className="text-white ">UG </Link>
                   <HiChevronDown size={25} onClick={()=>setshowug(!showug)} className="absolute text-white  right-3 top-2 cursor-pointer"></HiChevronDown>
            <ul className={!showug ? `py-3 hidden     ga`:`py-3`}>
               <li onClick={addStudent} className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent  mb-2 cursor-pointer"><Link href="">Add Student</Link> </li>
               <li  className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent  mb-2 cursor-pointer"><Link href="">View Student</Link> </li>
            </ul>
            </li>
            <li className="bg-gray-800 p-3 relative"><Link href="" className="text-white" >PG</Link>
            <HiChevronDown size={25} onClick={()=>setshowpg(!showpg)} className="absolute text-white  right-3 top-2 cursor-pointer"></HiChevronDown>
            <ul className={!showpg ? `py-3 hidden`:`py-3`}>
            <li  className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent  mb-2 cursor-pointer"><Link href="">Add Student</Link> </li>
               <li  className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent  mb-2 cursor-pointer"><Link href="">View Student</Link> </li>
            </ul></li> 
            <li className="bg-gray-800 p-3   "><Link href="" className="text-white  ">TimeTable</Link></li>
          </ul> 
      </div>
 
 
 
 {addstudent ?<AddStudent/>:<Dashboard_info/>}
      
    </div>
    </main>
   )
}  