 
 import { useState } from "react"
import styles from "./dashboard.module.css"
import Link from "next/link";
import { useFormik } from "formik";   
 
export default function table(){

 
 

  return (
    <>  

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto m-5">
    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor"      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            
                <td className="px-6 py-4">
                   1
                  </td>
                <td className="px-6 py-4">
                  Mayur Sanjay shinde   
                  </td>
                <td className="px-6 py-4">
                  Mayur@gmail.com
                </td>
                <td className="px-6 py-4">
                    12456795122
                </td>
                <td className="px-6 py-4">
                     Msc -1
                 </td>
                <td className="px-6 py-4">
                     Smcca
                  </td>
                  <td className="px-6 py-4">
                     53
                 </td>
                 <td className="px-6 py-4">
                    <Link href="" className="text-blue-600">Edit</Link>
                 </td>
                 <td className="px-6 py-4">
                    <Link href="" className="text-blue-600">Delete</Link>
                 </td>
               
               
            </tr>
            
    
        </tbody>
    </table>
</div>

    </>
  )
}

 