import Image from "next/image"
import blogImage from '@/assets/homepage/1.jpg';
import Link from "next/link";

const Blog = () => {
    return (
        <div className="mx-5" style={{ marginTop: "8rem", marginBottom: '7rem' }}>
            <h3 style={{ fontWeight: "900" }} className="text-center p-2 mt-2 mb-3 text-uppercase">OUR BLOG</h3>
            <div className="container-full text-center">
                <div className="row align-items-center">

                    <div className="col" >
                        <div className="card shadow text-center border-0 rounded-bottom" style={{ maxWidth: '18rem' }}>
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '8rem', overflow: 'hidden' }}>
                                <Image src={blogImage} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                            </div>
                            <div className="card-body p-0">
                                <div className="p-2">
                                    <h5 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h5>
                                    <div className="d-flex text-start gap-2">
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-user-3-line"></i>

                                            <span className="form-text">Ujjal Zaman</span>
                                        </div>
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-calendar-line"></i>


                                            <span className="form-text">01 January 2023</span>
                                        </div>
                                    </div>
                                    <hr className="my-1 p-0" />
                                </div>
                                <div className="px-2">
                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>
                                </div>
                                <div className="mt-1 mb-3 text-start">
                                    <Link href={'blog/123456'}>
                                        <button className="btn btn-link border-0 text-primary">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="card shadow text-center border-0 rounded-bottom" style={{ maxWidth: '18rem' }}>
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '8rem', overflow: 'hidden' }}>
                                <Image src={blogImage} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                            </div>
                            <div className="card-body p-0">
                                <div className="p-2">
                                    <h5 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h5>
                                    <div className="d-flex text-start gap-2">
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-user-3-line"></i>

                                            <span className="form-text">Ujjal Zaman</span>
                                        </div>
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-calendar-line"></i>


                                            <span className="form-text">01 January 2023</span>
                                        </div>
                                    </div>
                                    <hr className="my-1 p-0" />
                                </div>
                                <div className="px-2">
                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>
                                </div>
                                <div className="mt-1 mb-3 text-start">
                                    <Link href={'blog/123456'}>
                                        <button className="btn btn-link border-0 text-primary">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="card shadow text-center border-0 rounded-bottom" style={{ maxWidth: '18rem' }}>
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '8rem', overflow: 'hidden' }}>
                                <Image src={blogImage} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                            </div>
                            <div className="card-body p-0">
                                <div className="p-2">
                                    <h5 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h5>
                                    <div className="d-flex text-start gap-2">
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-user-3-line"></i>

                                            <span className="form-text">Ujjal Zaman</span>
                                        </div>
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-calendar-line"></i>


                                            <span className="form-text">01 January 2023</span>
                                        </div>
                                    </div>
                                    <hr className="my-1 p-0" />
                                </div>
                                <div className="px-2">
                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>
                                </div>
                                <div className="mt-1 mb-3 text-start">
                                    <Link href={'blog/123456'}>
                                        <button className="btn btn-link border-0 text-primary">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="card shadow text-center border-0 rounded-bottom" style={{ maxWidth: '18rem' }}>
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '8rem', overflow: 'hidden' }}>
                                <Image src={blogImage} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                            </div>
                            <div className="card-body p-0">
                                <div className="p-2">
                                    <h5 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h5>
                                    <div className="d-flex text-start gap-2">
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-user-3-line"></i>

                                            <span className="form-text">Ujjal Zaman</span>
                                        </div>
                                        <div className="d-flex gap-1 text-muted align-items-center justify-content-center">

                                            <i className="ri-calendar-line"></i>


                                            <span className="form-text">01 January 2023</span>
                                        </div>
                                    </div>
                                    <hr className="my-1 p-0" />
                                </div>
                                <div className="px-2">
                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>
                                </div>
                                <div className="mt-1 mb-3 text-start">
                                    <Link href={'blog/123456'}>
                                        <button className="btn btn-link border-0 text-primary">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog