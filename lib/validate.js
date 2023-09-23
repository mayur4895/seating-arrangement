 
 
 export async function login_validate(values){
      const errors={};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    const specialschars  =/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g

    if(!values.password){
        errors.password = "password is required..!";
    }else if(values.password.includes(" ")){
       errors.password = "Invalid password..!"; 
    }
    else if(values.password.length < 4){
        errors.password = "password must be  greater than 4 charcter..!";
    }else if(!specialschars.test(values.password)){
        errors.password = "password must be contain any special charcter..!";
    }
    return errors;
 

 }



 export async function  studentform_validate(values){
  const errors={};

  if(!values.name){
    errors.name = "name is required..!";
} 

if (!values.email) {
  errors.email = 'Email is Required';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  errors.email = 'Invalid email address';
}

if(!values.phone){
  errors.phone = "phone is required..!";
}else if(values.phone.includes(" ")){
 errors.phone = "Invalid phone..!"; 
}

if(!values.seat_no){
  errors.seat_no = "seat_no is required..!";
}else if(values.seat_no.includes(" ")){
 errors.seat_no = "Invalid seat_no..!"; 
}

if(!values.course){
  errors.course = "course is required..!";
}else if(values.course.includes(" ")){
 errors.course = "Invalid course..!"; 
}


if(!values.class_){
  errors.class_ = "class is required..!";
}else if(values.class_.includes(" ")){
 errors.class_ = "Invalid class..!"; 
}


return errors;


}

 


export async function  studentupdate_validate(values){
  
  const errors={};

 

if (!values.email) {
  errors.email = 'Email is Required';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  errors.email = 'Invalid email address';
}

if(!values.phone){
  errors.phone = "phone is required..!";
}else if(values.phone.includes(" ")){
 errors.phone = "Invalid phone..!"; 
}

if(!values.seat_no){
  errors.seat_no = "seat_no is required..!";
}else if(values.seat_no.includes(" ")){
 errors.seat_no = "Invalid seat_no..!"; 
}

if(!values.course){
  errors.course = "course is required..!";
}else if(values.course.includes(" ")){
 errors.course = "Invalid course..!"; 
}


if(!values.class_){
  errors.class_ = "class is required..!";
}else if(values.class_.includes(" ")){
 errors.class_ = "Invalid class..!"; 
}


return errors;


}



  export async function  filevalidate(values){
    const errors={};
    if(!values.file){
      errors.file = " file is required..!";
    }
  }

 



 