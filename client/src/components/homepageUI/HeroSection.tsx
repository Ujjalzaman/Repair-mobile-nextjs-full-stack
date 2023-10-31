import image2 from '@/assets/homepage/2.jpg';
import image4 from '@/assets/homepage/4.jpg';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">

                    <div className='text-center position-relative'>
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }}>
                            <div className='p-3' style={{border:'1px solid #457b9d'}}>
                                <div style={{ background: "#457b9d" }} className='p-2'>
                                    <h1 className='text-white' style={{ fontWeight: "900" }}>We Make Your <span className='text-black'>Phone Workable</span> For <br />you</h1>
                                    <p className='text-white p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellat aliquid ullam, soluta neque vitae accusantium magnam facilis doloremque nesciunt ratione porro voluptatum deserunt.</p>
                                    <button className="btn w-50 text-white bg-secondary border-0">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={image4} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='text-start position-relative'>
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-77%, -50%)"
                        }}>
                            <div className=''>
                                <div>
                                    <h1 className='text-white' style={{ fontWeight: "900" }}>We Make Your Phone Workable For you</h1>
                                    <p className='text-white p-3 px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellat aliquid ullam, soluta neque vitae accusantium magnam facilis doloremque nesciunt ratione porro voluptatum deserunt.</p>
                                    <div className='d-flex gap-2'>
                                        <button className="btn btn-primary">Read More</button>
                                        <button className="btn btn-primary">Register Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={image2} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
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