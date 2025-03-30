import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className=" relative isolate min-h-[100vh] flex flex-col overflow-hidden">
      <Header />

      <main className="grow grid grid-cols-1 items-center pt-36  pb-16">
        <HomePage />
      </main>
      <Footer />
      <div className="bg-[#52ced6]/20 absolute top-20 left-0 w-96 h-40 rotate-45 origin-top-left blur-3xl"></div>
      <div className="bg-[#52ced6]/20 absolute top-20 right-0 w-80 h-20 -rotate-45 origin-top-right blur-3xl"></div>
    </div>
  );
}
