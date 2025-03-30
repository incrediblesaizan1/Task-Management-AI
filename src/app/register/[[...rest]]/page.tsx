import { SignUp } from '@clerk/nextjs';
import { Metadata } from 'next';
import React from 'react'

const page = () => {
    
  return (
    <div className='container overflow-hidden flex justify-center h-screen items-center'>
      <SignUp signInUrl='/login' />
      <div className="bg-[#52ced6]/20 absolute top-20 left-0 w-96 h-40 rotate-45 origin-top-left blur-3xl"></div>
      <div className="bg-[#52ced6]/20 absolute top-20 right-16 w-80 h-20 -rotate-45 origin-top-right blur-3xl"></div>
    </div>
  )
}

export default page
export const metadata: Metadata = {
    title: "Create an Account - AI-Powered To-Do List & Project Management App "
  };