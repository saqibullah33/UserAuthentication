import { connect } from "@/Dbconfig/dbConfig";
import {User} from '@/model/model'
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect();

export async function POST(request: NextRequest){
   

   try {
    const bodyData= await request.json()
   
    const {email, password} = bodyData;
     
     //check if emal exist
     const user = await User.findOne({email})
     if(!user){
         return NextResponse.json({error: "User doesnt exist"}, {status: 401})
     }
    
        
     const validatepassword= await bcryptjs.compare(password,user.password)

     if(!validatepassword){
        return NextResponse.json({error: "invalid password"}, {status: 401})
     }

     //create token data
     const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
    }

  const  token_uri='nextjsyoutube'

    const token = await jwt.sign(tokenData,token_uri, {expiresIn: "1d"})
    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    })

    response.cookies.set("token", token, {
        httpOnly: true, 
        
    })
    
     return response;
   } catch (error : any) {
    return NextResponse.json({error: error.message}, {status: 500})
   }

}