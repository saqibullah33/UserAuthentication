import React from 'react'
import { } from 'react'
import Link from 'next/link'
const page = ({params}) => {
  return (
    <div style={{width:'100%',height:'100%',display:'flex' ,justifyContent:'center' ,alignItems:'center',flexDirection:'column',gap:'50px' }}>

      
        
      

        <h1 className='mt-20 text-center text-6xl'>Hello <span className='bg-yellow-400 px-2 py-1'>{params.id}</span></h1>
       
     <Link href='/' className='text-center text-white px-3 py-2 rounded-full bg-orange-400'>    Goto Home</Link>
   
    </div>

  )
}

export default page