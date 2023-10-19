'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Testimonial.module.css';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useReviewsQuery } from '@/redux/api/reviewsApi';
import Image from 'next/image';
import avatar from '@/assets/ani/4.jpg'

const Testimonial = () => {
    const { data, isLoading } = useReviewsQuery({});
    return (
        <section id={style.testimonial}>
            <h4 className={style.miniTitle + ' ' + 'text-center'}>TESTIMONIALS</h4>
            <div className="text-center">
                <h3 className={style.sectionTitle}>WHAT OUR CLIENTS SAY’S</h3>
            </div>

            <Swiper
                centeredSlides={true}
                spaceBetween={50}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                //@ts-ignore
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    data &&
                    data?.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <div className="row mx-2">
                                <div className="col">
                                    <div className="mx-auto">
                                        <div className={style.review}>
                                            <Image src={avatar} alt="image"/>
                                            <h5 className={style.testimonialName}>{item.title} </h5>
                                            <h6 className={style.testimonialAddress}>New yourk</h6>
                                            <p><i>{item.description}</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}

export default Testimonial