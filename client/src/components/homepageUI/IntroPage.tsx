import Image from "next/image"
import pImage from '@/assets/homepage/phone repair.png';

const IntroPage = () => {
    return (
        <div className="mx-5">
            <div className="row">
                <div className="col-5">
                    <Image src={pImage} className="w-100 h-100" alt="Image" />
                </div>
                <div className="col-7">
                    <h2 className="text-bold">WELCOME TO <span className="text-primary">FixYourPhone</span>
                    </h2>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Quos dolo rem consequ untur, natus laudantium commodi earum aliquid in ullam.Lorem ipsum. consectetur adipisi cing elit. Quos dolo rem consequ untur, natus laudantium commodi earum aliquid in ullam dantium commodi earum aliquid in ullam.Lorem ipsum.
                    </p>
                    <p className="form-text ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sunt ut dolorem laboriosam culpa excepturi sed distinctio eius! Ut magnam numquam libero quia vero blanditiis fugit corporis quisquam, debitis quidem laudantium deleniti. libero quia vero blanditiis fugit corporis quisquam, debitis quidem laudantium deleniti
                    </p>

                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-primary p-1 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-time-line text-white" style={{ fontSize: "4rem" }}></i>
                                </div>
                                <div>
                                    <h4>Life Time Warrenty</h4>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-primary p-1 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-price-tag-line text-white" style={{ fontSize: "4rem" }}></i>
                                </div>
                                <div>
                                    <h4>Low Cost Services</h4>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-primary p-1 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-truck-line text-white" style={{ fontSize: "4rem" }}></i>
                                </div>
                                <div>
                                    <h4>Fast Delivery</h4>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-primary p-1 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-customer-service-2-line text-white" style={{ fontSize: "4rem" }}></i>
                                </div>
                                <div>
                                    <h4>24/7 Live Support</h4>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage