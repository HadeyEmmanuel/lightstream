import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Play } from "lucide-react";
import { EffectCoverflow, Mousewheel } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
const Slider = ({ slides }) => {
  return (
    <div className=' flex items-center justify-center overflow-hidden'>
   <Swiper

      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={'coverflow'}
      direction={'horizontal'}
      mousewheel={true}
   grabCursor={true}
   centeredSlides={true}
   initialSlide={4}
   speed={600}
   preventClicks={true}
   coverflowEffect={{
     rotate: 0,
     stretch: 80,
     depth: 350,
     modifier: 1,
     slideShadows: true,   
   }}
   modules={[EffectCoverflow, Mousewheel]}
   className='swiper'
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.img} className='swiper-slider'>
          <img src={slide.img} alt="" />
        </SwiperSlide>
      ))}
      <Play className='size-24 play'/>
      
    </Swiper>
    </div>
  )
}

export default Slider