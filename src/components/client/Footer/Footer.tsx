import Image from 'next/image'
import React from 'react'
import { footerLinks } from './data'

const Footer = () => {
  return (
     <footer className="bg-white border-t border-gray-200 py-10 lg:py-[120px] py-[60px]  relative px-4 sm:px-6 lg:px-8 xl:px-[80px] 2xl:px-[134px]">
      <div className="2xl:max-w-[988px] mt-[40px] mx-auto px-0">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
                    <Image
                      src="/assests/navbar/logo.png"
                      alt="Supreme Group"
                      width={226}
                      height={63}
                    />
                  </div>
        

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8  md:text-left text-gray-700 text-sm mt-[80px]">
           {footerLinks?.map((section) => (
            <div key={section?.title}>
              <h3 className="font-bold mb-5 text-black">{section?.title}</h3>
              <ul className="space-y-5">
                {section?.links?.map((link) => (
                  <li key={link?.label}>
                    <a href={link?.href} className="hover:text-blue-600 text-sm font-medium text-[#000000B2]">{link?.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between text-sm font-medium text-[#000000B2] mt-20">
          <p className='text-center'>©2023. All Rights Reserved.</p>
          <p className='text-center'>Supreme house: 110, 16th Road,Chembur, Mumbai – 400071.</p>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 '>
        <Image
          src="/assests/footer/footer_img.png"
          alt="Supreme Group"
          width={400}
          height={400}
        />
      </div>
    </footer>
  )
}

export default Footer