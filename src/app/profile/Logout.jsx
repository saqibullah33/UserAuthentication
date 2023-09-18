'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter();

    
    return(
        <div>
             <button
                     onClick={ChangrRoute}
                      className="bg-orange-600 mt-4  hover:bg-orange-800 hover:shadow-2xl text-white  py-2 px-6 rounded"
                    >Logout</button>
        </div>
    );
  
}

export default Logout
