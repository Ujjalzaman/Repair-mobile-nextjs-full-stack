import Image from "next/image"
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <div className="">
            <footer className="text-center text-lg-start text-white bg-secondary">
                <div className="container p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-2 font-weight-bold">
                                    FixMyPhone
                                </h6>
                                <div className="mb-2">
                                    <Image src={logo} width={100} alt="logo" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur suscipit esse reiciendis saepe expedita quia quae earum corporis quidem doloribus.
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a className="text-white">Contact Us</a>
                                </p>
                                <p>
                                    <a className="text-white">Latest News</a>
                                </p>
                                <p>
                                    <a className="text-white">Discover</a>
                                </p>
                                <p>
                                    <a className="text-white">Resources</a>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="text-white">Account</a>
                                </p>
                                <p>
                                    <a className="text-white">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a className="text-white">Help</a>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2023 Copyright:
                                    <a className="text-white" href="https://ujjalzaman-b6c8a.web.app/"
                                    >UjjalZaman
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                                <a className="btn btn-outline-light btn-floating m-1">
                                    <i className="ri-facebook-fill"></i>
                                </a>

                                <a className="btn btn-outline-light btn-floating m-1" >
                                    <i className="ri-twitter-line"></i>
                                </a>


                                <a className="btn btn-outline-light btn-floating m-1">
                                    <i className="ri-google-line"></i>
                                </a>


                                <a
                                    className="btn btn-outline-light btn-floating m-1">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    )
}
export default Footer