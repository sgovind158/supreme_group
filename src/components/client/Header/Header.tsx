"use client";
import Image from 'next/image';
import React from 'react'
import { useState } from "react";
import LinkedinLogo from '../svg/LinkedinLogo';
import TranslateLogo from '../svg/TranslateLogo';
import { CvaButton } from '../Button/CvaButton';
import Link from 'next/link';
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("ENG");

  const handleContact = ()=>{
    console.log("Contact Us button clicked");
  }

  const handleLanguage = () => {
    setLanguage((prev) => (prev === "ENG" ? "हिंदी" : "ENG"));
  };
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[80px] 2xl:px-[134px] py-5">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/assests/navbar/logo.png"
              alt="Supreme Group"
              width={146}
              height={40}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            
            <CvaButton
          type="button"
          onClick={() => {
            handleContact();
          }}
          intent={"primary"}
          className=" "
        >
          Contact Us
        </CvaButton>

            <Link href="https://www.linkedin.com/in/govind-sahu-4618881b2/" target='_blank' className="">
              <LinkedinLogo/>
            </Link>
              <CvaButton
          type="button"
          onClick={() => {
            handleLanguage();
          }}
          intent="langageBtn"
          className=" "
        >
          <TranslateLogo/> {language}
        </CvaButton>
            
            
           
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
{isOpen ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 sm:px-6 ">
<div className='flex justify-between items-center gap-4 w-full '>
  <Link href="https://www.linkedin.com/in/govind-sahu-4618881b2/" target='_blank' className="">
              <LinkedinLogo/>
            </Link>
              <CvaButton
          type="button"
          onClick={() => {
            handleLanguage();
          }}
          intent="langageBtn"
          className=" "
        >
          <TranslateLogo/> {language}
        </CvaButton>

           <CvaButton
          type="button"
          onClick={() => {
            handleContact();
          }}
          intent={"primary"}
          className=" "
        >
          Contact Us
        </CvaButton>

</div>
          

            
           
        </div>
      )}
    </nav>
  )
}

export default Header