 
import  Dashboard from "../../../components/dashboard_pannel";
import Viewstudent from "./viewstudent";
import UpdateStudent from "../../../components/updatestudentform";
import { useDispatch ,useSelector} from "react-redux";
import { BiDotsVerticalRounded ,BiCustomize} from "react-icons/bi";
import { showpannel } from "@/redux/slices/dashboardslice";
import { getSession} from "next-auth/react"
import {  useRouter } from 'next/router';
import { useEffect } from "react";
 
export default function   updateStudent() {
 const router = useRouter();
  const dispatch = useDispatch();
  const dispaly=()=>{
    dispatch(showpannel());
  }
  const   visible = useSelector((state)=>state.dashboard.client.togglepannel);  
 
  const   prevdata = useSelector((state)=>state.editstudent.client.datapass);   
 
  const datalen = Object.keys(prevdata).length; 
 

  useEffect(() => {
   
  
    return () => {
       if(datalen == 0){
        router.push('/admin/dashboard/pg/viewstudent');
       }
    }
  }, [])
  
 
  return (<>    

 
       <main className="w-full   mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full   ">
 
     <UpdateStudent />
     {    visible ? <Dashboard/> :<button className="cursor-pointer   py-3 fixed top-3 right-5 " onClick={dispaly}><BiCustomize size={25}/></button> }
      </div>
    </main>
    </>
  )
}  


 
export  async function getServerSideProps(contex){
  const session = await getSession(contex)


  if(!session){
   return{
     redirect:{
       destination:'/admin',
       permanent:false
     }
   }
  }
  return {
   props:{session}
  } 
}