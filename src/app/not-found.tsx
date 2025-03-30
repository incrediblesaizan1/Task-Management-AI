import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { pageNotFound } from "@/assets";
import Image from "next/image";

const notFound = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />

      <div className="grow container flex flex-col justify-center items-center pt-32 pb-12">
        <h1 className="text-2xl font-semibold text-center sm:text-4xl">{`Hmmm, that page doesn't exist.`}</h1>
        <p className="text-muted-foreground max-w-[55ch] text-center mt-4 mb-6 sm:text-lg">You can get back on track and manage your tasks with ease.</p>
        <div className="flex gap-2">
          <Button asChild className="bg-[#52ced6]">
            <Link href={"/"}>Return to Home</Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={"/user/inbox"}>View Inbox</Link>
          </Button>
        </div>

        <figure className="mt-10">
          <Image src={pageNotFound} width={560} height={373} alt="" />
        </figure>
      </div>

      <Footer />
    </div>
  );
};

export default notFound;
