import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export function SwiperSlider() {
    return (
        <div className='pt-16 w-full'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                // navigation
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide><img src="/img/Creta-IIMS.webp" alt="" className='w-full h-full object-cover'/></SwiperSlide>
                <SwiperSlide><img src="/img/IONIQ5_D_Home-Banner-1860-x-720.jpg" alt="" className='w-full h-full object-cover'/></SwiperSlide>
                <SwiperSlide><img src="/img/sales-hyundai-1.jpg" alt="" className='w-full h-full object-cover'/></SwiperSlide>
                <SwiperSlide><img src="/img/sales-hyundai-2.jpg" alt="" className='w-full h-full object-cover'/></SwiperSlide>
                <SwiperSlide><img src="/img/sales-hyundai-3.jpg" alt="" className='w-full h-full object-cover'/></SwiperSlide>
            </Swiper>
        </div>
    )
}