import {React,useState} from 'react'
 
import * as XLSX from "xlsx";
import Link from "next/link";
import { useFormik } from "formik";  
 import { studentform_validate } from '@/lib/validate';
import { BiAt ,BiUser,BiFingerprint ,BiPhone,BiLayer,BiBookOpen,BiDialpadAlt} from "react-icons/bi";
import * as Yup from "yup";  
import styles from "./dashboard.module.css";
 import Error from "../components/error"
import { useMutation  } from 'react-query';
import { Router, useRouter } from 'next/router';
import { addxldata } from '@/lib/helper';

 export default function  addstudentbyfile (){ 
const router = useRouter();
 
 const [Filename,setFilename] = useState(null)
   
const [items, setItems] = useState([]);
const readExcel = (file) => {
  setFilename(file.name)
    const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => { 
            const bufferArray = e.target.result;
            const wb = XLSX.read(bufferArray, {
                type: "buffer"
            });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws); 
            resolve(data);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
    promise.then((data) => {
        setItems(data);
    });
  };
 
 console.log(Filename);
 

 const addmutation = useMutation({
    mutationFn:  addxldata,
    onError:()=>{
     return router.push('/admin/dashboard/pg/addstudent'); 
    },
    onSuccess: () => { 
      router.push('/admin/dashboard/pg/viewstudent');
    },
  })
 
 
 
 
  return (
 <div className='container flex justify-center items-center   mx-auto'> 
 
 <div className='w-3/6 text-center justify-center items-center'>
 <form className=' w-full flex flex-col gap-3    ' >  
    
    {/* <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
            className=' border px-2 py-3' />  */}

            
<div className="flex items-center justify-center w-full">
    <label  htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-red-300 dark:text-gray-400">Only Excel file accepted</p><br></br>
              <p>{Filename}</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }} />
    </label>
</div> 

 <div>
       
 <input type="submit" className={Filename ?"bg-blue-500 py-2 text-white cursor-pointer px-2 w-24 rounded-sm":"bg-gray-400 py-2 text-white cursor-pointer px-2 w-24 rounded-sm disabled"} value="Add"   onClick={(e)=>{
      e.preventDefault();
      if(!Filename){
 return alert("required file")
      }
      addmutation.mutate(items)}}/> 
 </div>
     </form>
 </div>
 
 </div>
  )
}

