import Link from "next/link";
import { useFormik } from "formik"; 
import { BiEnvelope ,BiUser,BiFingerprint ,BiPhone} from "react-icons/bi";
import * as Yup from "yup";  
import  Dashboard from "../../../components/dashboard_pannel";
import Addstudnet from "../../../components/addstudentform";


export default function  addStudent() {


  return (<>    
       <main className="w-full   mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full   ">
      <Dashboard/>  
     <Addstudnet/>

      </div>
    </main>
    </>
  )
}  