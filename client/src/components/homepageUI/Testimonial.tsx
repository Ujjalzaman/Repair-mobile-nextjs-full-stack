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
import BlogSkeleton from '../UI/BlogSkeleton';
import { Empty, message } from 'antd';
import { truncate } from '@/helpers/truncate';
import avatar from '@/assets/avatar.jpg';

const Testimonial = () => {
    const { data, isError, isLoading } = useReviewsQuery({limit:10});
    const reviewData = data?.review?.data;
    let content = null;
    if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
    if (!isLoading && !isError && reviewData?.length === 0) content = <Empty />
    if (!isLoading && !isError && reviewData?.length > 0) content =
        <>
            {
                reviewData &&
                reviewData?.map((item: any) => (
                    <SwiperSlide key={item.id}>
                        <div className="row mx-2">
                            <div className="col">
                                <div className="mx-auto">
                                    <div className={style.review}>
                                       {item?.user?.profileImg && <Image style={{objectFit:'cover'}} src={item.user.profileImg ? item?.user?.profileImg : avatar} alt="image" width={100} height={100}/>}
                                        <h6 className={style.testimonialName}>{truncate(item?.title, 50)} </h6>
                                        <h6 className={style.testimonialAddress}>{item?.user?.address}</h6>
                                        <p style={{maxHeight:'200px', minHeight: '200px', overflow:'hidden'}}><i>{truncate(item?.description, 300)}</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </>

    if (isLoading) content =
        <div className='container'>
            <div className='row justify-content-center'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div className="col-4" style={{ maxWidth: '18rem' }} key={index + 12}>
                        <BlogSkeleton />
                    </div>
                ))}
            </div>
        </div>

    return (
        <section style={{ marginTop: '8rem', marginBottom: '8rem' }}>
            <div className="text-center">
                <h3 className="text-black mb-0" style={{ fontWeight: 900 }}>WHAT OUR CLIENTS SAY’S</h3>
                <p className="text-muted text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem.</p>
            </div>
            <div className='container rounded p-5' style={{ background: '#5881572e' }}>
                <Swiper
                    centeredSlides={true}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    //@ts-ignore
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={3}
                >
                    {content}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial