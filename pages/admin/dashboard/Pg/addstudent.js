 
import  Dashboard from "../../../components/dashboard_pannel";
// import Addstudnet from "../../../components/addstudentform";
import Addstudnetbyxl from "../../../components/addstudentbyfile";
import Addstudnet from "../../../components/addstudentform";
import { useDispatch ,useSelector} from "react-redux";
import styles from "../../../components/dashboard.module.css"
import { BiDotsVerticalRounded ,BiCustomize} from "react-icons/bi";
import { showpannel } from "@/redux/slices/dashboardslice";
import { getSession} from "next-auth/react"
import { useState } from "react";
export default function  addStudent() {


  const [addtoggle ,setaddtoggle] =  useState(false);

  const dispatch = useDispatch();
  const dispaly=()=>{
    dispatch(showpannel());
  }
  const   visible = useSelector((state)=>state.dashboard.client.togglepannel); 
  return (<>    
       <main className="w-full   mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full   ">
 

 
     <div className=" w-full h-full ">
       
<div className="text-center mt-8">
<button className={styles.button1} onClick={()=>setaddtoggle(addtoggle ==!true)}>{ addtoggle ? 'Add students by exelfile':'Add  Single Student'}</button>
</div>


   <div className="  flex align-middle justify-center w-full  h-3/4"> 
 
     { addtoggle ? <Addstudnet/> :  <Addstudnetbyxl/>}
   </div>
     </div>
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