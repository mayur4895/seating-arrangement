 
import { BiAddToQueue } from "react-icons/bi";
import Success from "./components/success";
import Error from "./components/error"; 
import { useReducer } from "react";
import Link from "next/link";
 
 




export default function  SigninForm(){ 
 
 const FormHandle =(state,event)=>{
        return{
            ...state,
            [event.target.name]:event.target.value
        }
 }

    const [SigninData  , setsigninData] = useReducer( FormHandle ,{})


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(SigninData); 
    }



    return(
        <main className="py-14 container mx-auto h-screen flex items-center justify-center"> 
       <div className=" mx-auto max-w-3xl  py-10 flex">
           <form className=" lg:flex-col sm:flex-col  flex-col gap-4 py-10  w-full  shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center ">
                    Login  
                </h1> 
                <div className="input-type w-full px-4">  
                <input type="email"  onChange={setsigninData} name="email" placeholder="Enter Your Email" className="border-b w-full bg-transparent  h-14 px-3 outline-none focus:border-b-teal-500 " /> 
                <input type="password" onChange={setsigninData} name="password" placeholder="Password" className="border-b w-full bg-transparent  h-14 px-3 outline-none  focus:border-b-teal-500" />
                </div>    
                 <button className=" w-80 flex text-md-w-6/3 justify-center bg-teal-500 hover:bg-green-50 hover:text-teal-500 border border-teal-500 gap-2  px-6 py-2 rounded-sm text-white"> Login </button>

                 <p className="">Not have an Account?  <Link href="/RegisterForm" className="text-red-500 cursor-pointer">Create Account</Link></p>
        </form>
     </div>
     </main>
    )
}  