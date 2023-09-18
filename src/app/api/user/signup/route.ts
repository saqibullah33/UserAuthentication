import { connect } from "@/Dbconfig/dbConfig";
import {User} from '@/model/model'
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();

export async function POST(request: NextRequest){
    

    const bodyData= await request.json()
   
    const {username, email, password} = bodyData;

    //check if user exist
    const user = await User.findOne({email})
    if(user){
       
        return NextResponse.json({error: "User already exists"}, {status: 400})

    }
    else{
  
         //hashing
    const salt = await bcryptjs.genSalt(10);
    const hashpassword= await bcryptjs.hash(password,salt)
    const newUser=new User({
        username,
        email,
        password:hashpassword
    })
   const NewUser= await newUser.save()
   return NextResponse.json({error: "User created ", data: NewUser}, {status: 200})
   

    }

   
}