import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import { Navigation, Pagination } from "swiper/modules";

export default function CustomSwiper({children, navigation}) {

  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        pagination={{
          clickable: true,
          enabled: true,
          bulletClass: 'bullet',
          bulletActiveClass: 'bulletActive',
        }}
        navigation={navigation}
        modules={[Pagination, Navigation]}
        breakpoints={{
            960: {
              slidesPerView: 3,
              allowTouchMove: true,
              resistanceRatio: 0,
            }
          }}
      >
      {children}
      </Swiper>
    </>
  );
}

