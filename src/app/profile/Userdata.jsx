'use client'
import Image from "next/image";
import avator from '../../../public/avator.png'

import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import axios from "axios";
// import {useEffect} from 'react'
// import axios from "axios";


const Userdata =() => {
    const router = useRouter();

    const Myprofile=async ()=>{
      let  user= await axios.get('http://localhost:3000/api/user/me')
    user=user.data.data;
    const {username}=user;
    router.push('/profile/'+username)
  }
   
    const ChangeRoute= async()=>{
        
        try {
          console.log("axios ")
          const data=  await fetch('http://localhost:3000/api/user/logout')
            router.push('/signup')
           }
        
        catch (error) {
            console.log(error);
            
        }
   
  
}

     
    
  return (
    <div>
    
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <Image src={avator}
                      className=" rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-20">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center  mb-10 ">
              <h1 className="text-2xl font-semibold leading-normal  text-blueGray-700 mb-10">
  Wellcome    <span >You have Succussfully <br/> Logged in </span>
</h1>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                  Pakistan
                </div>
                <div className="mb-2 text-blueGray-600 mt-1">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                  Web Developer
                </div>
                <div className="mb-2 text-blueGray-600 ">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                  University of Computer Science
                </div>
                <div className="mb-2 text-blueGray-600 ">
                 <button  className='bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-all duration-300 ease-in-out' onClick={ChangeRoute}>Logout</button>
                 <button onClick={Myprofile} className="bg-orange-500 ml-3 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-all duration-300 ease-in-out">My Profile</button>
                </div>
           
              </div>
            </div>
          </div>
        </div>


      </section>

    </>




  </div>
  )
}

export default Userdata