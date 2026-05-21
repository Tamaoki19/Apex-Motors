import { Swiper, SwiperSlide } from "swiper/react"; 

import {
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y, 
  Autoplay, 
  EffectFade, 
} from "swiper/modules";

import "swiper/css"; 
import "swiper/css/effect-fade"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "./Slider.css"; 

// 1. Alterado aqui para receber 'data' em vez de 'children'
const Slider = ({ settings, data }) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectFade,
      ]} 
      effect={"fade"} 
      fadeEffect={{ crossFade: true }} 
      speed={1000} 
      loop={true} 
      centeredSlides={true} 
      grabCursor={true} 
      navigation={true} 
      pagination={{
        clickable: true, 
        dynamicBullets: true, 
      }}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      {...settings} 
    >
      {/* 2. O mapeamento agora acontece diretamente aqui dentro */}
      {data && data.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <img src={slide.banner} alt={slide.title} />
            <div
              className="slide-overlay"
              style={{ borderBottom: `8px solid ${slide.color}` }}
            >
              <span>{slide.title}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;