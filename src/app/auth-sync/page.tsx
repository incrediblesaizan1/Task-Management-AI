"use client"
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'


const page = () => {
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
            router.push("/app/today")
        }

    }, [userId, isSignedIn, isLoaded])
    

  return (
    <></>
  )
}

export default page