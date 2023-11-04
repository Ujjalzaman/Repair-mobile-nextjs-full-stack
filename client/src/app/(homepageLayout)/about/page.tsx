import SubHeader from '@/components/UI/SubHeader';
import { Metadata } from 'next';
import image1 from '@/assets/img/pc-with-person.webp';
import image2 from '@/assets/img/repair-pen.jpg';
import image3 from '@/assets/img/check-phone.webp';
import image4 from '@/assets/img/megnify-glass.webp';
import image5 from '@/assets/img/repair-by-pen.webp';
import image6 from '@/assets/img/repair-phone.jpg';

import Image from 'next/image';
import Blog from '@/components/homepageUI/Blog';
export const metadata: Metadata = {
    title: 'FixMyPhone/about',
    description: 'Welcome to FixMyPhone',
}

const AboutUs = () => {
    return (
        <>
            <SubHeader title='About Us' />
            <div className='container p-5 rounded' style={{ background: '#5881572e', marginTop: '7rem', marginBottom: '8rem' }}>
                <h3 className=''>WHO ARE WE !</h3>

                <div className='d-flex justify-content-center gap-3'>
                    <div className='px-2'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora libero sed officia possimus porro iusto omnis cupiditate reprehenderit quaerat. Numquam vel facilis enim, fugit doloribus nostrum dignissimos quos nisi recusandae quam, similique nemo ducimus magni, quisquam obcaecati dolorum autem temporibus. Veniam repellat, ducimus corrupti perferendis non ab natus saepe.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora libero sed officia possimus porro iusto omnis cupiditate reprehenderit quaerat. Numquam vel facilis enim, fugit doloribus nostrum dignissimos quos nisi recusandae quam, similique nemo ducimus magni, quisquam obcaecati dolorum autem temporibus. Veniam repellat, ducimus corrupti perferendis non ab natus saepe.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora libero sed officia possimus porro iusto omnis cupiditate reprehenderit quaerat. Numquam vel facilis enim, fugit doloribus nostrum dignissimos quos nisi recusandae quam, similique nemo ducimus magni, quisquam obcaecati dolorum autem temporibus. Veniam repellat, ducimus corrupti perferendis non ab natus saepe.
                        </p>
                    </div>
                    <div style={{ maxHeight: '400px' }}>
                        <Image src={image1} width={600} alt='about-us' className='rounded' />
                    </div>
                </div>

                <div className='d-flex justify-content-center gap-3 mt-5'>
                    <div style={{ maxHeight: '400px' }}>
                        <Image src={image2} width={600} alt='about-us' className='rounded' />
                    </div>
                    <div className='px-2'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora libero sed officia possimus porro iusto omnis cupiditate reprehenderit quaerat. Numquam vel facilis enim, fugit doloribus nostrum dignissimos quos nisi recusandae quam, similique nemo ducimus magni, quisquam obcaecati dolorum autem temporibus. Veniam repellat, ducimus corrupti perferendis non ab natus saepe.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora libero sed officia possimus porro iusto omnis cupiditate reprehenderit quaerat. Numquam vel facilis enim, fugit doloribus nostrum dignissimos quos nisi recusandae quam, similique nemo ducimus magni, quisquam obcaecati dolorum autem temporibus. Veniam repellat, ducimus corrupti perferendis non ab natus saepe.
                        </p>

                    </div>

                </div>

            </div>
            <div style={{ marginTop: '7rem' }}>
                <Blog />
            </div>
            <div style={{marginTop: '7rem', marginBottom: '8rem' }}>
            <h3 className='my-3 mx-auto text-center' style={{fontWeight:900}}>Gallery</h3>
            <div className='d-flex flex-wrap justify-content-center rounded py-5' style={{ background: '#5881572e'}}>
                <div style={{maxWidth:'14rem'}}>
                    <Image src={image1} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>

                <div style={{maxWidth:'14rem'}}>
                    <Image src={image2} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>
                <div style={{maxWidth:'14rem'}}>
                    <Image src={image3} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>

                <div style={{maxWidth:'14rem'}}>
                    <Image src={image4} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>
                <div style={{maxWidth:'14rem'}}>
                    <Image src={image5} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>

                <div style={{maxWidth:'14rem'}}>
                    <Image src={image6} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>
                <div style={{maxWidth:'14rem'}}>
                    <Image src={image1} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>

                <div style={{maxWidth:'14rem'}}>
                    <Image src={image2} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>
                <div style={{maxWidth:'14rem'}}>
                    <Image src={image3} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>

                <div style={{maxWidth:'14rem'}}>
                    <Image src={image4} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>
                <div style={{maxWidth:'14rem'}}>
                    <Image src={image5} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>

                <div style={{maxWidth:'14rem'}}>
                    <Image src={image6} width={200} height={200} alt='image' className='object-fit-cover image-hover'/>
                </div>
            </div>
            </div>
        </>

    )
}

export default AboutUs;