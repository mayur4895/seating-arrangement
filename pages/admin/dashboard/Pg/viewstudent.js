 
import  Dashboard from "../../../components/dashboard_pannel";
import { useEffect } from "react";
import   Table from "../../../components/table";
import {useDispatch, useSelector} from "react-redux";
import { showpannel } from "@/redux/slices/dashboardslice";
import { getSession} from "next-auth/react"
import { BiDotsVerticalRounded ,BiCustomize} from "react-icons/bi";
import { isError } from "react-query";
import Error from "@/pages/components/error";
import { emptydata } from "@/redux/slices/updateslice";

 
export default function viewstudent(){ 
 
 const dispatch = useDispatch();
  const dispaly=()=>{
    dispatch(showpannel());
  }
 
 
   

 

  const   visible = useSelector((state)=>state.dashboard.client.togglepannel); 

 
  return (
    <> 
      
    <main className=" w-4/5   mx-auto  flex gap-3">  
 
   <Table/> 
 
 {    visible ? <Dashboard/> : <button className="cursor-pointer   py-3 fixed top-3 right-5 " onClick={dispaly}><BiCustomize size={25}/></button> }
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
 

 
 
 

