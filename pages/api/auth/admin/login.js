import getAdmin from "@/controller/controller";
import connectmongo from "@/database/conn";
 



 export default async function handler(req,res){
    connectmongo().catch(err => res.json({error:err}));
const {method} = req;
    switch (method) {
        case 'GET':
           
            break; 
        case 'POST':
              
            break;
    
            default:
                res.setHeaders("ALLOW",["GET","POST","PUT","DELETE"])
                res.status(404).end("req not allow")
                break;
    }

 }