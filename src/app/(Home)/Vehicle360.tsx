'use client';
import React from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const Vehicle360 = () => {
  return (
    <section className=" bg-black text-white px-[16px] sm:px-[40px] xl:px-[50px] 2xl:px-[90px] py-[70px]">
      <h2 className="text-2xl sm:text-[48px] font-light text-center max-w-[778px] mx-auto leading-[100%] tracking-[-0.5px]">
        Evolving the drive with{' '}
        <span className="font-semibold">360-degree</span> comprehensive
        solutions
      </h2>

      {/* desktop view */}
      <div className="hidden md:block">
        <DesktopView />
      </div>

      {/* mobile view */}
      <div>
        <div className="block md:hidden">
          <MobileView />
        </div>
      </div>
    </section>
  );
};

export default Vehicle360;
