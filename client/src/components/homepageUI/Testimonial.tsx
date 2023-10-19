'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Testimonial.module.css';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Testimonial = () => {
    // const reviews = [
    //     {
    //         name: 'some',
    //         id: 1,
    //         address: 'some addd',
    //         description: 'soem descriont'
    //     },
    //     {
    //         name: 'some',
    //         id: 2,
    //         address: 'some addd',
    //         description: 'soem descriont'
    //     }
    // ]

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
                <SwiperSlide>
                    <div className="row mx-2">
                        <div className="col">
                            <div className="mx-auto">
                                <div className={style.review}>
                                    <h5 className={style.testimonialName}>hellow </h5>
                                    <h6 className={style.testimonialAddress}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusantium!</h6>
                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia atque repellat ipsam officiis, suscipit laborum facilis alias voluptatum dicta!</i></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="row mx-2">

                        <div className="col">
                            <div className="mx-auto">
                                <div className={style.review}>
                                    <h5 className={style.testimonialName}>hellow </h5>
                                    <h6 className={style.testimonialAddress}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusantium!</h6>
                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia atque repellat ipsam officiis, suscipit laborum facilis alias voluptatum dicta!</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row mx-2">

                        <div className="col">
                            <div className="mx-auto">
                                <div className={style.review}>
                                    <h5 className={style.testimonialName}>hellow </h5>
                                    <h6 className={style.testimonialAddress}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusantium!</h6>
                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia atque repellat ipsam officiis, suscipit laborum facilis alias voluptatum dicta!</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row mx-2">

                        <div className="col">
                            <div className="mx-auto">
                                <div className={style.review}>
                                    <h5 className={style.testimonialName}>hellow </h5>
                                    <h6 className={style.testimonialAddress}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusantium!</h6>
                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia atque repellat ipsam officiis, suscipit laborum facilis alias voluptatum dicta!</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonial