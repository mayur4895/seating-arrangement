import connMongo from "@/database/conn";
import {getUsers, postUser } from "@/controller/controller";
 
 
export default async function handler(req, res) {
    connMongo();
    const { method } = req; 
    switch (method) {
        case 'GET':
            getUsers(req,res);
            break;
        case 'POST':
            postUser(req,res);
            break;  
        default:
            res.setHeaders("ALLOW",["GET","POST","PUT","DELETE"])
            res.status(404).end("req not allow")
            break;
    }

}
