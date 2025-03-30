import { SignUp } from '@clerk/nextjs';
import { Metadata } from 'next';
import React from 'react'

const page = () => {
    
  return (
    <div className='container flex justify-center h-screen items-center'>
      <SignUp signInUrl='/login' />
    </div>
  )
}

export default page
export const metadata: Metadata = {
    title: "Create an Account - AI-Powered To-Do List & Project Management App "
  };