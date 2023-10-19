'use client';

// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import SwiperCore, { Autoplay, Pagination } from 'swiper/core'
import style from './Testimonial.module.css';

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

                <div className="col">
                    <div className="mx-auto">
                        <div className={style.review}>
                            <h5 className={style.testimonialName}>hellow </h5>
                            <h6 className={style.testimonialAddress}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusantium!</h6>
                            <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia atque repellat ipsam officiis, suscipit laborum facilis alias voluptatum dicta!</i></p>
                        </div>
                    </div>
                </div>

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

        </section>
    )
}

export default Testimonial