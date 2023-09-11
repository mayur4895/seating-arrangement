import Admin from "@/model/admin"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
export default NextAuth({
    session:{
      strategy:"jwt"
    },
providers: [
    CredentialsProvider({ 
    name: 'Credentials',  
    async authorize(credentials, req) { 
        const res = await fetch("http://localhost:3000/api/auth/admin", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const   admin = await res.json();
        if (res.ok && admin) { 
          return  admin  
        }
  
        return null
      }
  })
],secret:"mayur_sanhayshinde"
});
 