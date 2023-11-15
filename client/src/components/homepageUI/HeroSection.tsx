import image2 from '@/assets/img/megnify-glass.webp';
import image4 from '@/assets/img/repair-by-pen.webp';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='text-center position-relative'>
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                            <div className='p-3 rounded' style={{ border: '2px solid #58815775' }}>
                                <div style={{ background: "#58815775" }} className='p-2 rounded shadow'>
                                    <h1 className='text-white' style={{ fontWeight: "900" }}>We Make Your <span className='text-primary'>Phone Workable</span> For <br />you</h1>
                                    <p className='text-white p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellat aliquid ullam, soluta neque vitae accusantium magnam facilis doloremque nesciunt ratione porro voluptatum deserunt.</p>
                                    <Link href={'/get-appointment'}>
                                        <button className="mb-2 btn w-50 text-white bg-primary border-0">Get Appointment</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ maxHeight: '600px', overflow: 'hidden' }}>
                            <Image src={image4} width={900} className="d-block w-100 object-fit-cover" alt="..." style={{ filter: "brightness(40%)" }} />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='text-start position-relative'>
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-77%, -50%)",
                            zIndex: 1
                        }}>
                            <div className=''>
                                <div>
                                    <h1 className='text-white' style={{ fontWeight: "900" }}>We Make Your Phone Workable For you</h1>
                                    <p className='text-white p-3 px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellat aliquid ullam, soluta neque vitae accusantium magnam facilis doloremque nesciunt ratione porro voluptatum deserunt.</p>
                                    <div className='d-flex gap-2'>
                                        <Link href={'/blog'}>
                                            <button className="btn btn-primary">Read More</button>
                                        </Link>
                                        <Link href={'/signup'}>
                                            <button className="btn btn-primary">Register Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ maxHeight: '600px', overflow: 'hidden' }}>
                            <Image src={image2} width={900} className="d-block w-100" alt="..." style={{ objectFit: "cover", filter: "brightness(40%)" }} />
                        </div>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HeroSection