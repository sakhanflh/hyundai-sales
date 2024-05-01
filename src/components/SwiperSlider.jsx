import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export function SwiperSlider() {
    return (
        <div className='pt-16'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="/img/Creta-IIMS.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/IONIQ5_D_Home-Banner-1860-x-720.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/sales-hyundai-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/sales-hyundai-2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/sales-hyundai-3.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}