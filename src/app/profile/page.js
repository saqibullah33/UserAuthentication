// 'use client'
// import { useRouter } from "next/navigation"
// import React, { useState,useEffect} from "react";
import Image from "next/image";
import avator from '../../../public/avator.png'
// import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import Logout from './Logout'
import Userdata from './Userdata'






// const to=(message)=>{
//   toast(`Wellcome ${message}.`,
//   {
//     icon: '👏',
//     style: {
//       borderRadius: '10px',
//       background: '#333',
//       color: '#fff',
//     },
//   }
// );
// }



const page =async  () => {
  


  
  // const router = useRouter()
  
    // const router =useRouter()
  
  //  const logout = async () => {
  //       try {
  //         console.log("axios ")
  //           await axios.get('/api/user/logout')
  //          router.push('/')
           
           
  //       }
        
  //       catch (error) {
  //           console.log(error.message);
  //           toast.error(error.message)
  //       }
  //   }
 
  // const [data, setData] = useState("Please wait...")
  
  
  
  // useEffect(async () => {
    

  //   const res= await getUserDetails()
  //   setData(res.data.username)
  //   to(res.data.username)
  
    
  // }, [])
  return (
   
<>
<Userdata/>
</>
  )
}

export default page