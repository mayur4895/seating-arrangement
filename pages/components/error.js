import { BiCloset } from "react-icons/bi";
export default function Error({msg}){
    return(
        <div className="succeess container mx-auto">
            <div className="flex gap-2  justify-center mx-auto border border-red-300 bg-red-200 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
            {msg} <BiCloset size={22}></BiCloset> 
            </div>
        </div>
    )
}