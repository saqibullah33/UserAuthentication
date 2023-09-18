import mongoose from "mongoose"
export const connect=async ()=>{
    try{
       await  mongoose.connect('mongodb+srv://admin:admin@cluster0.nmf2pt2.mongodb.net/Nextjs?retryWrites=true&w=majority')
        console.log("connected")
    }
    catch(error){
        console.log("error -> " + error)
    }
  

}

