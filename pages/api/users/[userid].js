 import connectMongo from "@/database/conn";
import {getUser,putUser,DeleteUser} from "@/controller/controller";
 
export default async function handler(req, res) {
    connectMongo();
    const { method } = req; 
    switch (method) {
        case 'GET':
            getUser(req,res);
            break;
        case 'PUT':
            putUser(req,res);
            break;
        case 'DELETE':
            DeleteUser(req,res);
            break;

        default:
            res.setHeader('content-type', 'application/json');
            res.status(404).end("req not allow")
            break;
    }

}
