

import { useReducer } from "react";
import { BiAddToQueue } from "react-icons/bi";
import Success from "./components/success";
import Error from "./components/error";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import signupschema from "./components/helper";


export default function RegisterForm() {


  const FormHandle = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value
    }
  }

  const [FormData, setFormData] = useReducer(FormHandle, {});


  //    handleSubmit =(e)=>{
  //       e.preventDefault();
  //       console.log(FormData);
  //  }

  const initialValues = {
    name: '', course: '', seat_no: '', class: '', email: '', phone: '', password: ''
  }


  const { values, errors, touched, handleChange, handleSubmit, } = useFormik({
    initialValues: initialValues,
    validationSchema: signupschema,
    onSubmit: async values => {
      console.log(values);
    }
  })

  return (
    <main className="py-14 container mx-auto h-screen flex items-center justify-center">
      <div className="  mx-auto max-w-3xl  py-10 flex  ">
        <form className=" lg:flex-col sm:flex-col  flex-col gap-4 py-10  w-full  shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center ">
            Create Account
          </h1>

          <div className="lg:grid-cols-2 grid  ">
            <div className="w-full px-10 ">
              <div className="w-full px-10 ">
                <input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-3 outline-none  focus:border-b-teal-500" />
                {errors.name && touched.name && <div className=" text-sm text-red-400 whitespace-nowrap overflow-clip">{errors.name}</div>}
              </div>
              <div className="w-full px-10 ">
                <input type="text" name="course" placeholder="course" value={values.course} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-3 outline-none  focus:border-b-teal-500" />
                {errors.course && touched.course && <div className=" text-sm text-red-400 whitespace-nowrap overflow-clip">{errors.course}</div>}
              </div>

              <div className="w-full px-10 ">
                <input type="text" name="seat_no" placeholder="Seat no" value={values.seat_no} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-3 outline-none focus:border-b-teal-500 " />
                {errors.seat_no && touched.seat_no && <div className=" text-sm text-red-400 whitespace-nowrap overflow-clip">{errors.seat_no}</div>}
              </div>

              <div className="w-full px-10 ">
                <input type="text" name="class" placeholder="Class" value={values.class} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-3 outline-none focus:border-b-teal-500 " />
                {errors.class && touched.class && <div className=" text-sm text-red-400 whitespace-nowrap overflow-clip">{errors.class}</div>}
              </div>

            </div>



            <div className="input-type w-full px-10">
              <div  className="w-full px-10 ">
                <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-3 outline-none  focus:border-b-teal-500" />
                {errors.email && touched.email && <div className=" text-sm text-red-400 whitespace-nowrap overflow-clip">{errors.email}</div>}
              </div>


              <div className="w-full px-10 ">
                <input type="text" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-3 outline-none focus:border-b-teal-500 " />
                {errors.phone && touched.phone && <div className="text-sm text-red-400 whitespace-nowrap overflow-clip">{errors.phone}</div>}
              </div>


              <div className="w-full px-10 ">
                <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} autoComplete="none" className="border-b w-full bg-transparent  h-14 px-3 outline-none  focus:border-b-teal-500" />
                {errors.password && touched.password && <div className=" text-sm text-red-400 whitespace-nowrap  overflow-ellipsis">{errors.password}</div>}
              </div>
  
            </div>

          </div>
          <input type="submit" className="my-5 w-80 flex text-md-w-6/3 justify-center bg-teal-500 hover:bg-green-50 hover:text-teal-500 border border-teal-500 gap-2  px-6 py-2 rounded-sm text-white" value="Register" />





          <p className=""> already have an Account <Link href={'/SigninForm'} className="text-red-500 cursor-pointer"> Signin</Link></p>
        </form>
      </div>
    </main>
  )
}  