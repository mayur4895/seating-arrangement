import Link from "next/link";
import { useFormik } from "formik"; 
import { BiEnvelope ,BiUser,BiFingerprint ,BiPhone} from "react-icons/bi";
import * as Yup from "yup";  


export default function RegisterForm() {

  
const  signupschema = Yup.object({
  name:Yup.string().min(4).max(20).required("please enter name"),
  email:Yup.string().email().required("please enter email").email(),
  phone:Yup.number().min(10).required("please enter phone"),
  course:Yup.string().min(2).max(20).required("please enter course"),
   seat_no:Yup.number().min(1).required("please enter seat_no"),
   class:Yup.string().min(1).max(20).required("please enter class"),
  password:Yup.string().min(6).required("please enter password"),
}) 
 
 
  const initialValues = {
    name: '', course: '', seat_no: '', class: '', email: '', phone: '', password: ''
  }


  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: signupschema,
    onSubmit: async(values,action) => {
      console.log(values);
      action.resetForm();
       alert("registed Successfuly");
    }
  })

  return (
    <main className="  max-w-5xl mx-auto px-2 h-screen flex items-center justify-center">
      <div className="  mx-auto  w-full  py-10    ">
        <form className=" w-full lg:flex-col sm:flex-col  flex-col gap-2 py-10    shadow-md   border flex justify-center items-center" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mx-2 ">
           Add Student
          </h1>

          <div className="lg:grid-cols-2 grid   w-full  ">  
            <div className="w-full px-10 flex flex-col gap-3 ">
              <div className="w-full relative">
              <BiUser size={20} className=" absolute top-1/3 left-0 text-gray-500"></BiUser>
                <input type="text" name="name" placeholder="Name"  value={values.name} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-8 outline-none  focus:border-b-teal-500" />
                {errors.name && touched.name  ? (<p className="w-62  absolute text-xs   text-red-400 whitespace-nowrap ">{errors.name}</p>) : null}
              </div>
              <div className="w-full relative">
                <input type="text" name="course" placeholder="course"  value={values.course} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-8 outline-none  focus:border-b-teal-500" />
                {errors.course && touched.course ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.course}</p>):null}
              </div>

              <div className="w-full relative">
                <input type="text" name="seat_no" placeholder="Seat no"  value={values.seat_no} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-8 outline-none focus:border-b-teal-500 " />
                {errors.seat_no && touched.seat_no ?(<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.seat_no}</p>):null}
              </div>

              <div className="w-full relative">
                <input type="text" name="class" placeholder="Class"  value={values.class} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-8 outline-none transition focus:border-b-teal-500 " />
                {errors.class && touched.class ?(<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.class}</p>):null}
              </div>

            </div>



            <div className="input-type w-full px-10 flex flex-col gap-3">
              <div  className="w-full relative">
    <BiEnvelope size={20} className=" absolute top-1/3 left-0 text-gray-500"></BiEnvelope>
                <input type="email" name="email" placeholder="Email"  value={values.email} onChange={handleChange} className="border-b  w-full bg-transparent  h-14   px-8 outline-none  focus:border-b-teal-500" />
                {errors.email && touched.email ? (<p className="w-62 absolute   text-xs text-red-400 whitespace-nowrap ">{errors.email}</p>):null}
              </div>


              <div className="w-full relative">
              <BiPhone size={20} className=" absolute top-1/3 left-0 text-gray-500"></BiPhone>
                <input type="text" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} className="border-b w-full bg-transparent  h-14 px-8 outline-none focus:border-b-teal-500 " />
                {errors.phone && touched.phone ?(<p className="w-62 absolute  text-xs text-red-400 whitespace-nowrap ">{errors.phone}</p>):null}
              </div>


              <div className="w-full relative">
              <BiFingerprint size={20} className=" absolute top-1/3 left-0 text-gray-500"></BiFingerprint>
                <input type="password" name="password" placeholder="Password"  value={values.password} onChange={handleChange} autoComplete="none" className="border-b w-full bg-transparent  h-14 px-8 outline-none  focus:border-b-teal-500" />
                {errors.password && touched.password ? (<p className=" w-62 absolute  text-xs text-red-400 whitespace-nowrap ">{errors.password}</p>):null}
              </div>
  
            </div>

          </div>
          <input type="submit" className="my-5 w-80 flex text-md-w-6/3 justify-center bg-teal-500 hover:bg-green-50 hover:text-teal-500 border border-teal-500 gap-2  px-6 py-2 rounded-sm text-white" value="Add" />

  
 
        </form>
      </div>
    </main>
  )
}  