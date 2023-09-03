import CredentialsProvider from "next-auth/providers/credentials"
import connectmongo from "@/database/conn"
 import Admin from "@/model/admin";
 import NextAuth from "next-auth/next";
import { compare } from "bcrypt";
export default NextAuth({
   
    session:{ },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req){
                connectmongo().catch(error => {error:"connection faild"});

                const result = await Admin.findOne({email:credentials.email})  
                
                if(!result){
                    throw new Error("Invalid Admin");
                } 
                if(credentials.password != result.password || credentials.email  != result.email){
              
                    throw new Error("Invalid Admin");
                  
                }  
                return result

            }
        })
    ]
})


 
  