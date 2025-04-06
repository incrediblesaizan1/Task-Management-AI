import React from 'react'
import type { PropsWithChildren } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import TaskLisk from './TaskLisk'
import { DialogTitle } from '@radix-ui/react-dialog'


const TaskForm: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className='p-0 border-0 rounded-xl '>
            <TaskLisk />
        </DialogContent>
    </Dialog>
  )
}

export default TaskForm