import connectMongo from "@/database/conn";
 import { Deletestudent } from "@/controller/controller";
 
export default async function handler(req, res) {
    connectMongo();
    const { method } = req; 
    switch (method) {
        case 'GET':
            getStudent(req,res);
            break;
        case 'PUT':
            putStudent(req,res);
            break;
        case 'DELETE':
            Deletestudent(req,res);
            break;

        default:
            res.setHeader('content-type', 'application/json');
            res.status(404).end("req not allow")
            break;
    }

}
