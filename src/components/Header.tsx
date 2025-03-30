"use client";
import Link from "next/link";
import { IoIosFlower } from "react-icons/io";
import { Button } from "./ui/button";
const Header = () => {

  return (
    <header className="fixed top-0 left-0 w-full p-4">
      <div className="container h-16 border backdrop-blur-3xl rounded-xl flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-1 font-semibold text-xl md:text-lg">
            <IoIosFlower className="text-[#52ced6] text-3xl md:text-5xl" />
            {`SK'task`}
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Button  variant={"ghost"}>
            <Link href={"/login"}>Sign in</Link>
          </Button>

           <Button  className="bg-[#52ced6]">
             <Link href={"/register"}>Start for free </Link> 
           </Button>  
        </div>
      </div>
    </header>
  );
};

export default Header;
