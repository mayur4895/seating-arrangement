const BASE_URL = "http://localhost:3000" 
 
export  const  getStudents = async()=>{

    const  res = await   fetch( `http://localhost:3000/api/auth/student`);
    const json = await res.json(); 
    return json;
    
}



 
export  const  getStudent = async(studentid)=>{

    const  res = await fetch(`${BASE_URL}/api/Students/${studentid}`);
    const json = await res.json(); 
    if(json) return json;
    return {}
    
}


export async function addStudent(formData){ 
    try{
        
        const Options ={
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(formData)
        }
        const res = await fetch(`http://localhost:3000/api/auth/student`,Options)
     
        if(res.status == 402){
          return  alert("student alerday exist");
        }
        return res.json();
     
    } catch (error) {
        return json(error);
    }
}

 
 

export async function addxldata(formData){ 
    try{
        console.log(formData);
        const Options ={
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(formData)
        }
        const res = await fetch(`http://localhost:3000/api/auth/student`,Options)
     
        if(res.status == 402){
          return  alert("students not inserted");
        }
        return res.json();
     
    } catch (error) {
        return json(error);
    }
}

export async function updateStudent(formData){
    try{
        const Options ={
           method:'PUT',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(formData.values)
        }
        console.log(formData); 
        const res = await fetch(`http://localhost:3000/api/auth/student/${formData._id}`, Options)

        const json = await res.json();
        return json;
    } catch (error){
        return error;
    }
}



export async function deleteStudent(studentid){
    try{
        const Options ={
           method:'DELETE',
           headers:{'Content-Type':'application/json'}, 
        }
        const res = await fetch(`http://localhost:3000/api/auth/student/${studentid}`,Options)
        const json = await res.json(); 
        return json; 
    } catch (error){
        return error;
    }
}