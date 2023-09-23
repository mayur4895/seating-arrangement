 
import  Dashboard from "../../../components/dashboard_pannel";
// import Addstudnet from "../../../components/addstudentform";
import Addstudnet from "../../../components/addstudentbyfile";
import { useDispatch ,useSelector} from "react-redux";
import { BiDotsVerticalRounded ,BiCustomize} from "react-icons/bi";
import { showpannel } from "@/redux/slices/dashboardslice";
import { getSession} from "next-auth/react"
export default function  addStudent() {

  const dispatch = useDispatch();
  const dispaly=()=>{
    dispatch(showpannel());
  }
  const   visible = useSelector((state)=>state.dashboard.client.togglepannel); 
  return (<>    
       <main className="w-full   mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full   ">
 

     <Addstudnet/>
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