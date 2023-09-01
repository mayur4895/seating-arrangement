 
import  Dashboard from "../../../components/dashboard_pannel";
import Addstudnet from "../../../components/addstudentform";
import { useDispatch ,useSelector} from "react-redux";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { showpannel } from "@/redux/slices/dashboardslice";
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
     {    visible ? <Dashboard/> : <button className="cursor-pointer   py-3 fixed top-3 right-3 " onClick={dispaly}><BiDotsVerticalRounded size={25}></BiDotsVerticalRounded></button> }
      </div>
    </main>
    </>
  )
}  