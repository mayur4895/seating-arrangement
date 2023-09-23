 
 import { useState ,useEffect } from "react"
import styles from "./dashboard.module.css"
import Link from "next/link";
import { useFormik } from "formik";   
import { useDispatch } from "react-redux";
import Error from "./error";
import {   updatedata } from "@/redux/slices/updateslice";
 import { useQuery  ,useMutation,  useQueryClient } from "react-query";
import { deleteStudent, getStudents, updateStudent } from "@/lib/helper";
  import { BiTrashAlt ,BiEditAlt } from "react-icons/bi";
 
 
 
export default function table(){ 
    const dispatch = useDispatch(); 
 
    const {isLoading,isError,data,error} =  useQuery('students',getStudents); 
 
  
 
 
    const queryClient = useQueryClient();
   
    const addmutation = useMutation({
        mutationFn:  deleteStudent,
        onError:()=>{
         return router.push('/admin/dashboard/pg/addstudent'); 
        },
        onSuccess: async( ) => {  
            queryClient.prefetchQuery('students',getStudents);  
    
        },
      })
   
   
   
 
 
 
 
    if(isLoading) return <div>Students are Loding...</div> 
    if(isError) return <div>got error {error}</div> 
    if(data.length <= 0)  return    <Error msg={"No Data available"}/> 
  



 
  return (
    <>  
 
<div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg mx-auto m-5">
    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 fixed  pt-3 top-0 w-full ">
        
        <label  htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor"      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>

 
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border mt-12">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
                <th scope="col" className="px-6 py-3">
                    SR No
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                     Email
                </th>
                <th scope="col" className="px-6 py-3">
                     Phone
                </th>
                <th scope="col" className="px-6 py-3">
                      Course
                </th>
                <th scope="col" className="px-6 py-3">
                      Class
                </th>
                <th scope="col" className="px-6 py-3">
                       Seat_no
                </th>
                <th scope="col" colSpan={2} className="px-6 py-3  text-center">
                     Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            
        {  
        
        data.map((obj,index)=>{  
            const {_id,name,email,phone,course,class_,seat_no} = obj;  
           
              return(   
       
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={_id}  >
 
                <td className="px-6 py-4">
                
                {index + 1 }
                 </td>
                <td className="px-6 py-4">
                   {name}
                  </td>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4">
                   {phone}
                </td>
                <td className="px-6 py-4">
                  {course}
                 </td>
                <td className="px-6 py-4">
                     {class_}
                  </td>
                  <td className="px-6 py-4">
                     {seat_no}
                 </td>
                 <td className="px-6 py-4">
                    <Link href="/admin/dashboard/pg/updatestudent" className="text-green-400"  onClick={ ()=> dispatch(updatedata(obj))}><BiEditAlt size={20}/> </Link>
                 </td>
                 <td className="px-6 py-4">
                    <Link href="" className="text-red-500" onClick={()=>{
                        const co =   confirm("you want to delete this Student");
                        if(!co) return
                        addmutation.mutate(_id)}} ><BiTrashAlt size={20}/></Link>
                 </td>     
            </tr>
              )
        })}  
        </tbody>
    </table>
</div>
 
    </>
  )
}
 
 