 
import { addssinglestudent ,getstudents} from "@/controller/controller";
import connectmongo from "@/database/conn";
 
 


 export default async function handler(req,res){
    connectmongo().catch(err => res.json({error:"Connection faild"}));
const {method} = req;
    switch (method) { 
        case 'POST': addssinglestudent(req,res);
            break; 
          
    }

 }