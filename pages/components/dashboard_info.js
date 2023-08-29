import React from 'react'
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";
export default function dashboard(){ 

 
     
   return(
     
    <div className="  w-3/4  ">
    <div className="container justify-center w-full h-full grid grid-cols-3 gap-4 mt-4 p-5">
    <div className="  h-24  bg-yellow-400 rounded-md p-3">
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

 