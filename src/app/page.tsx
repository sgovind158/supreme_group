"use client";
// import HeroSection from "./(Home)/HeroSection";
// import Vehicle360 from "./(Home)/Vehicle360";
// import GetInTouch from "./(Home)/GetInTouch";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./(Home)/HeroSection"), { ssr: false });
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
