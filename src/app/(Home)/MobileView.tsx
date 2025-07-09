'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { evolvingData } from './data';
import { Swiper as SwiperClass } from 'swiper/types';

const MobileView = () => {
  const [vehicleType, setVehicleType] = useState<'passenger' | 'commercial'>(
    'passenger'
  );
  const [videoPart, setVideoPart] = useState('completeBody');
  const swiperRef = useRef<{
    swiper: SwiperClass;
  } | null>(null);

  return (
    <Swiper
      ref={swiperRef}
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: true, // this allows scrolling outside when on first/last slide
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper custom-swiper-pagination  md:h-[650px] h-[700px]"
      onSlideChange={(swiper) => {
        // If not on the first slide, set to commercial
        if (swiper.activeIndex !== 0) {
          setVehicleType('commercial');
        } else {
          setVehicleType('passenger');
        }
      }}
    >
      {evolvingData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex flex-col md:flex-row mt-[40px] sm:mt-[100px]">
            {/* Left Side */}
            <div className="w-full md:w-1/3  sm:p-6 space-y-8 overflow-">
              <div className="flex items-center justify-center relative">
                <div className="space-y-6 px-4 sm:pl-[40px] 2xl:pl-[90px]">
                  {item?.leftPart?.map((leftItem, leftIdx) => {
                    return (
                      <div
                        key={leftItem.id}
                        className={`cursor-pointer transition flex flex-col justify-center md:h-[200px] ${
                          vehicleType ===
                          (leftItem?.id === 1 ? 'passenger' : 'commercial')
                            ? 'text-white font-semibold'
                            : 'text-[rgba(255,255,255,0.3)]'
                        }`}
                        onClick={() => {
                          setVehicleType(
                            leftItem?.id === 1 ? 'passenger' : 'commercial'
                          );
                          if (swiperRef.current) {
                            swiperRef?.current?.swiper?.slideTo(leftIdx); // Change slide
                          }
                        }}
                      >
                        <h3 className="font-bold text-[28px] leading-[100%] tracking-[-0.5px]">
                          {leftItem.title}
                        </h3>
                        <p className="text-[18px] leading-[100%] tracking-[-0.5px] mt-[10px] font-normal">
                          {leftItem.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {/* Dynamic Slider */}
                <div className="slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray-600 top-0">
                  <div
                    className="slider-height h-[50%] w-[2px] bg-white rounded-md transition-transform duration-500 ease-in-out"
                    style={{
                      transform:
                        vehicleType === 'passenger'
                          ? 'translateY(0%)'
                          : 'translateY(100%)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center p-4">
              {/* Video: show the first subVideo by default, or map for controls */}
              {(() => {
                const selectedVideo =
                  item.subVideos.find((sub) => sub.type === videoPart) ||
                  item.subVideos[0];
                return (
                  <div>
                    <video
                      key={selectedVideo.id}
                      src={selectedVideo.video}
                      poster={selectedVideo.poster}
                      className="w-full max-w-2xl rounded-lg"
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                );
              })()}
              {/* Bottom Controls: map subVideos */}
              <div className="flex flex-wrap md:gap-[18px] mt-4">
                {item.subVideos.map((sub) => {
                  // Check if the subVideo type matches the current videoPart
                  if (sub.img) {
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setVideoPart(sub.type)}
                        className={`text-sm px-4 py-4 rounded flex justify-center flex-col items-center flex-wrap ${
                          videoPart === sub.type
                            ? 'font-medium text-base text-white shadow-lg'
                            : 'text-[rgba(255,255,255,0.5)] font-normal text-base cursor-pointer'
                        }`}
                      >
                        <Image
                          src={sub.img}
                          alt={sub.part}
                          width={70}
                          height={70}
                          className="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                        />
                        {sub.part}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileView;
