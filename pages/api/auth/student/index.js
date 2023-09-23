 
import { addstudent ,getstudents} from "@/controller/controller";
import connectmongo from "@/database/conn";
 
 


 export default async function handler(req,res){
    connectmongo().catch(err => res.json({error:"Connection faild"}));
const {method} = req;
    switch (method) {
        case 'GET': getstudents(req,res);
            break; 
        case 'POST': addstudent(req,res);
            break;
    
            default:
                res.setHeaders("ALLOW",["GET","POST","PUT","DELETE"])
                res.status(404).end("req not allow")
                break;
    }

 }