import { SignIn } from '@clerk/nextjs'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return (
    <div className='container flex justify-center h-screen items-center'>
      <SignIn />
    </div>
  )
}

export default page
export const metadata: Metadata = {
  title: "Log In to SK'task AI - Manage Your To-Do Lists and Projects"
};