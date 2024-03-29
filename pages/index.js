 
 
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react'; 
 
import { BiUserPlus } from "react-icons/bi";
 
export default function Home() {


const [visible,setvisible] = useState(false);

 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
 
 <div className='w-full flex h-screen justify-center items-center'>
<div className='container flex gap-4  justify-center items-center'>
 
<button className="my-5 w-80 flex text-md-w-6/3 justify-center bg-teal-500 hover:bg-green-50 hover:text-teal-500 border border-teal-500 gap-2  px-6 py-2 rounded-sm text-white" >Student</button>
<Link href={"admin/"}><button className="my-5 w-80 flex text-md-w-6/3 justify-center bg-teal-500 hover:bg-green-50 hover:text-teal-500 border border-teal-500 gap-2  px-6 py-2 rounded-sm text-white" >Admin</button></Link>
</div>
 </div> 
 
    </>
  )
}
