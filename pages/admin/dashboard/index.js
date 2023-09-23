import {React,useEffect} from 'react'
import "../../../styles/Home.module.css"
import { BiDotsVerticalRounded ,BiCustomize} from "react-icons/bi";
import Dashboard from '../../components/dashboard_pannel'
import Dashboard_info from '../../components/dashboard_info'
import { useDispatch ,useSelector } from 'react-redux'
import { showpannel } from '@/redux/slices/dashboardslice';
 
import { getSession} from "next-auth/react"
 
 
 
 
 export default function  dashboard() {

  
 
  const dispatch = useDispatch();
  const dispaly=()=>{
    dispatch(showpannel());
  }
  const   visible = useSelector((state)=>state.dashboard.client.togglepannel); 


 
  
  return (
   <>
 
 <main className="w-full mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full   ">
 
       <Dashboard_info/> 
       {    visible ? <Dashboard/> : <button className="cursor-pointer   py-3 fixed top-3 right-5 " onClick={dispaly}><BiCustomize size={25}/> </button> }
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
 