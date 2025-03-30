"use client"
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { HashLoader } from "react-spinners";


const AuthSyncPage = () => {
    const router = useRouter()
    const {isSignedIn, isLoaded, userId} = useAuth()

    useEffect(() => {
        if(!isLoaded) return

        if(!isSignedIn){
        if(localStorage.getItem("clerkUserId")){
            localStorage.removeItem("clerkUserId")
        }
        }

        if(isSignedIn){
            localStorage.setItem("clerkUserId", userId)
            router.push("/user/today")
        }

    }, [userId, isSignedIn, isLoaded, router])
    

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-gray-800/50 z-100">
      <HashLoader color="#0080d8" size={140} />
    </div>
  )
}

export default AuthSyncPage