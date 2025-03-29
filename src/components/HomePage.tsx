import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

import { heroBannerLg,heroBannerSm } from "@/assets"

const HomePage = () => {
  return (
    <>
   <section>
    <div className="container !px-8 grid grid-cols-1 gap-8 items-center xl:gap-12 xl:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col items-center text-center space-y-4 lg:text-left lg:items-start lg:space-y-6">
            <h1 className="text-4xl font-semibold max-w-[22ch] md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-6xl">
            Simplify Your Work and Life with {" "} <span className="inline-flex bg-gradient-to-t from-[#52ced6]/50 to-[#52ced6]/30 rounded-full px-3 overflow-hidden">AI-Powered</span> Task Management.
            </h1>
            <p className="max-w-[48ch] text-foreground/80 md:text-lg lg:text-xl">Simplify life for both you and your team with the world’s #1 task manager and to-do list app.</p>
            <Button asChild size={"lg"} className="bg-[#52ced6]">
                <Link href={"/register"}>Start for free</Link>
            </Button>
        </div>
        <figure className="bg-secondary rounded-2xl overflow-hidden aspect-square max-md:max-w-[480px] max-md:mx-auto md:aspect-video">
            <Image src={heroBannerSm} width={480} height={480} alt="Tasky AI Website" className="md:hidden" />

            <Image src={heroBannerLg} width={960} height={540} alt="Tasky AI Website" className="max-md:hidden" />
        </figure>
    </div>
   </section>
    </>
  )
}

export default HomePage
