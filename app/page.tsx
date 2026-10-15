import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ImagesSection from "@/components/ImagesSection";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen">
      <header className="w-full bg-gray-50 flex justify-around py-5">
        <h1 className="font-bold text-xl text-blue-500">Appliances</h1>
        <div className="bg-white w-125 h-11">
          <input className="w-full py-2 px-2 bg-linear-135 from-blue-200 to-purple-200" type="text" placeholder="Search here..." />
        </div>
        <div className="text-black flex gap-3 items-center">
          <Link href="/sign-in">
          <Button variant="outline">Log In</Button>
          </Link>
          <Link href="/sign-up">
          <Button variant="destructive" className="px-5 py-3">Get Started <ArrowRight className="gray-hover:translate-x-1 
          transition-transform duration-300">
            </ArrowRight> </Button>
          </Link>
        </div>
      </header>
      <main className="h-[70vh] bg-linear-135 from-blue-200 to-purple-200 flex flex-col justify-center">
        <div className="w-125 mx-auto items-center flex justify-center flex-col gap-4">
          <h1 className="font-bold text-6xl font-sans">
            Best Appliances for your home
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum, deleniti eius saepe totam exercitationem perspiciatis
            voluptate impedit maxime adipisci ea?
          </p>
           <Link href="/sign-up">
          <Button className="p-5 hover:scale-105 group">Get Started</Button>
          </Link>
        </div>
      </main>
      <ImagesSection></ImagesSection>
    </div>
  );
}
