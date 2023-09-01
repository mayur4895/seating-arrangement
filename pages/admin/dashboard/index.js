import React from 'react'
import "../../../styles/Home.module.css"
import Dashboard_pannel from '../../components/dashboard_pannel'
import Dashboard_info from '../../components/dashboard_info'



 export default function  dashboard() {
  return (
   <>
 
 <main className="w-full   mx-auto h-screen flex items-center justify-center"> 
      <div className=" mx-auto   h-screen flex w-full   ">
      <Dashboard_pannel/>
       <Dashboard_info/>

      </div>
    </main>
   </>
  )
}

 