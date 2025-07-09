'use client';
import clsx from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-[#00000099] py-[150px] lg:py-[300px] px-4 sm:px-20 flex items-center justify-center ">
      <div className="text-white text-[22px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          Performance in motion
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={clsx(
            'font-manrope font-semibold text-[48px] leading-[58px] tracking-[-0.5px] text-center'
          )}
        >
          Soft Trims and NVH Solutions <br />
          <span className="font-light">for seamless rides</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
