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
 
 
   
const [items, setItems] = useState([]);
const readExcel = (file) => {
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
 
 <form className='flex flex-col gap-3' > 

    
<input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
        className=' border px-2' />
<br></br>
 
<input type="submit" className={styles.button1} value="Add"   onClick={(e)=>{
  e.preventDefault();
  addmutation.mutate(items)}}/> 
 </form>
 
 </div>
  )
}

