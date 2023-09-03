import React from 'react'
import { useState } from "react";
 
import Link from "next/link";
export default function dashboard_info(){ 

 
     
   return(
     
    <div className="  w-3/4  mx-auto  h-screen">
    <div className="  justify-center w-full  grid grid-cols-3 gap-4 mt-4 p-5 ">
    <div className="  h-24  bg-red-400 rounded-md p-3">
          <h4>Total Student</h4>
          <span>400</span>
    </div>
    <div className="   h-24  bg-yellow-400 rounded-md p-3">
          <h4>Total Student</h4>
          <span>400</span>
    </div>
    <div className="   h-24  bg-yellow-400 rounded-md p-3">
          <h4>Total Student</h4>
          <span>400</span>
    </div>
    </div>
    </div>
  
  )
}

 