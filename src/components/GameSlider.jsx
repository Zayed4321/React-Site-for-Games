// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../src/index.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Importing the slide Images
import pic1 from '../assets/GTA_V.jpg';
import pic2 from '../assets/CyberPunk.jpg';
import pic3 from '../assets/ForzaH.jpg';
import pic4 from '../assets/Minecraft.jpg';
import pic5 from '../assets/TruckSim.jpg';
import pic6 from '../assets/COD.jpg';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={true}
        
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}