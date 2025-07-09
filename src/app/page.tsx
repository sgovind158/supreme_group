"use client";

import dynamic from "next/dynamic";
import HeroSection from "./(Home)/HeroSection";
const Vehicle360 = dynamic(() => import("./(Home)/Vehicle360"), { ssr: false });
const GetInTouch = dynamic(() => import("./(Home)/GetInTouch"), { ssr: false });

export default function Home() {
  
  return (
    <div className="">
     <HeroSection/>
     <Vehicle360/>
     <GetInTouch />

    </div>
  );
}
