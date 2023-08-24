import { BiCheck } from "react-icons/bi";
export default function Success({msg}){
    return(
        <div className="succeess container mx-auto">
            <div className="flex gap-2  justify-center mx-auto border border-yellow-300 bg-yellow-100 text-gray-900 text-md my-4 py-2 text-center bg-opacity-6">
            {msg} <BiCheck size={22}></BiCheck> 
            </div>
        </div>
    )
}