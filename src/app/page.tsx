import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col overflow-hidden">
      <Header />

      <main className="grow grid grid-cols-1 items-center pt-36  pb-16">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
