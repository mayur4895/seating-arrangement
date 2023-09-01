 
import  Dashboard from "../../../components/dashboard_pannel";
import   Table from "../../../components/table";
import {useDispatch, useSelector} from "react-redux";
import { showpannel } from "@/redux/slices/dashboardslice";
 
import { BiDotsVerticalRounded } from "react-icons/bi";
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
 
 {    visible ? <Dashboard/> : <button className="cursor-pointer   py-3 fixed top-3 right-3 " onClick={dispaly}><BiDotsVerticalRounded size={25}></BiDotsVerticalRounded></button> }
    </main>
    </>
  )
}

 