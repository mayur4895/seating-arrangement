   
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";



export default function   dashboard(){ 

  

   const [showug,setshowug] = useState(true);
   const [showpg,setshowpg] = useState(true);
   return(
       <main className="w-full   mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full bg bg-red-200">
      <div className=" w-1/4 h-full bg-gray-900">
          <ul className="   w-full text-left  my-10 flex flex-col gap-4">
            <li className="bg-gray-800 p-3   "><Link href="" className="text-white  ">dashboard</Link></li>
            <li className="bg-gray-800 p-3 relative ">
               <Link href="" className="text-white ">UG </Link>
                   <HiChevronDown size={25} onClick={()=>setshowug(!showug)} className="absolute text-white  right-3 top-2 cursor-pointer"></HiChevronDown>
            <ul className={!showug ? `py-3 hidden     ga`:`py-3`}>
               <li className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent  mb-2 cursor-pointer"><Link href="">Student</Link> </li>
               <li className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent mb-2 cursor-pointer"><Link href="">Student</Link> </li>  
               <li className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent mb-2 cursor-pointer"><Link href="">Student</Link> </li>
            </ul>
            </li>
            <li className="bg-gray-800 p-3 relative"><Link href="" className="text-white" >PG</Link>
            <HiChevronDown size={25} onClick={()=>setshowpg(!showpg)} className="absolute text-white  right-3 top-2 cursor-pointer"></HiChevronDown>
            <ul className={!showpg ? `py-3 hidden`:`py-3`}>
            <li className="text-white py-2  hover:bg-slate-500 px-4  hover:border-l-yellow-500 border-l-2 border-l-transparent mb-2 cursor-pointer"><Link href="">Student</Link> </li>
            </ul></li> 
            <li className="bg-gray-800 p-3   "><Link href="" className="text-white  ">TimeTable</Link></li>
          </ul>
        
      </div>
      <div className="  w-3/4 bg-blue-400">
      <div className="container justify-center w-full h-full grid grid-cols-3 gap-4 mt-4 p-5">
      <div className="  h-24  bg-yellow-400 rounded-md p-3">
            <h4>Total Student</h4>
            <span>400</span>
      </div>
      <div className="   h-24  bg-yellow-400 rounded-md p-3">
            <h4>Total Student</h4>
            <span>400</span>
      </div>
      <div className="   h-24  bg-yellow-400 rounded-md p-3">
            <h4>Total Student</h4>
            <span>400</span>
      </div>
      </div>
      </div>
    </div>
    </main>
   )
}  