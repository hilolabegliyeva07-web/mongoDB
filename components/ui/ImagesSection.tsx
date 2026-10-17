"use client"

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useState } from "react";

const ImagesSection = () => {
    const [activeTab, setActiveTab] = useState<string>("compyuters")
  return (
        <section className="flex flex-col items-center justify-center mx-auto h-125">
        <div className="flex gap-3">
          <Button onClick={() => setActiveTab("compyuters")} className={'p-5 ${activeTab === "compyuters" ? "bg-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}'}
            >Computers</Button>
          <Button onClick={() => setActiveTab("appliances")} className={'p-5 ${activeTab === "appliance" ? "bg-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}'}>Appliances</Button>
          <Button onClick={() => setActiveTab("phones")} className={'p-5 ${activeTab === "phones" ? "bg-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}'}>Smartphones</Button>
        </div>
        <div>
          { activeTab === "compyuters" && <Image width={400} height={400} src="/images/compyuters.avif" alt="compyuter"/>}
          { activeTab === "appliances" && <Image width={400} height={400} src="/images/appliance.jpg" alt="appliance"/>}
          { activeTab === "phones" && <Image width={400} height={400} src="/images/smartphone.webp" alt="smartphone"/>}
        </div>
      </section>
  )
}

export default ImagesSection