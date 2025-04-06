import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Separator } from './ui/separator'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import {  CalendarIcon, ChevronDown, Hash, Inbox, SendHorizonal, X } from 'lucide-react'
import { Calendar } from './ui/calendar'
import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from './ui/command'
import { ScrollArea } from './ui/scroll-area'

const TaskLisk = () => {
  return (
    <Card className='focus-within:border-foreground/30'>
        <CardContent className='p-2'> 
    <Textarea className='border-0 ring-0 mb-2 p-1 resize-none ' placeholder='After finishing the project, Take a tour' autoFocus />

    <div className='ring-1 ring-border rounded-md max-w-max'>
        <Popover>
            <PopoverTrigger asChild> 
    <Button type='button' variant={"ghost"} size={"sm"}>
    <CalendarIcon /> Due date
    </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
        <Calendar  mode='single' initialFocus disabled={{before: new Date()}} />
            </PopoverContent>
        </Popover>

    <Tooltip>
        <TooltipTrigger asChild>
    <Button variant={"ghost"} size={"sm"} className='px-2 -ms-2' aria-label='Remove due date'>
    <X />
    </Button>
        </TooltipTrigger>
        <TooltipContent className='bg-zinc-900 rounded-md px-2 py-1'>Remove due date</TooltipContent>
    </Tooltip>

    </div>

        </CardContent>

    <Separator />

    <CardFooter className='grid grid-cols-[minmax(0, 1fr), max-content] gap-2 p-2'>
        <Popover modal>
            <PopoverTrigger asChild>
        <Button variant={"ghost"} role='combobox' aria-expanded={false} className='max-w-max'>
            <Inbox /> Inbox <ChevronDown />
        </Button>
            </PopoverTrigger>

        <PopoverContent className='w-[240px] p-0 ' align='start'>
            <Command>
                <CommandInput placeholder='Search project ...' />
                <CommandList>
                    <ScrollArea>
                        <CommandEmpty>No project found.</CommandEmpty>
                        <CommandGroup>
                            <CommandItem>
                                <Hash /> Project 1
                            </CommandItem>
                            <CommandItem>
                                <Hash /> Project 2
                            </CommandItem>
                            <CommandItem>
                                <Hash /> Project 3
                            </CommandItem>
                            <CommandItem>
                                <Hash /> Project 4
                            </CommandItem>
                         
                        </CommandGroup>
                    </ScrollArea>
                </CommandList>
            </Command>
        </PopoverContent>

        </Popover>

    <div className='flex items-center gap-2'>
    <Button variant={"secondary"}>
        <span className='max-md:hidden'>Cancel</span>
        <X className='md:hidden' />
    </Button>

    <Button>
        <span className='max-md:hidden'>Add task</span>
        <SendHorizonal className='md:hidden ' />
    </Button>
    
    </div>

    </CardFooter>

    </Card>
  )
}

export default TaskLisk