import Image from "next/image"
import pImage from '@/assets/homepage/phone repair.png';

const IntroPage = () => {
    return (
        <div className="mx-5" style={{ marginTop: '7.5rem', marginBottom: '7rem' }}>
            <div className="row container justify-content-center mx-auto">
                <div className="col-5">
                    <Image src={pImage} className="w-100 h-100" alt="Image" />
                </div>
                <div className="col-7">
                    <h2 className="text-bold mb-3">WELCOME TO <span className="text-secondary">FixYourPhone</span>
                    </h2>
                    <p className="text-black mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Quos dolo rem consequ untur, natus laudantium commodi earum aliquid in ullam.Lorem ipsum. consectetur adipisi cing elit. Quos dolo rem consequ untur, natus laudantium commodi earum aliquid in ullam dantium commodi earum aliquid in ullam.Lorem ipsum.
                    </p>

                    <div className="row container rounded py-4" style={{background:'#d7ded6'}}>
                        <div className="col-6 mb-4">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-time-line text-white" style={{ fontSize: "3.5rem" }}></i>
                                </div>
                                <div>
                                    <h4 className="mb-0">Life Time Warrenty</h4>
                                    <p className="form-text text-black">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-4">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-price-tag-line text-white" style={{ fontSize: "3rem" }}></i>
                                </div>
                                <div>
                                    <h4 className="mb-0">Low Cost Services</h4>
                                    <p className="form-text text-black">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-truck-line text-white" style={{ fontSize: "3.5rem" }}></i>
                                </div>
                                <div>
                                    <h4 className="mb-0">Fast Delivery</h4>
                                    <p className="form-text text-black">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-customer-service-2-line text-white" style={{ fontSize: "3.5rem" }}></i>
                                </div>
                                <div>
                                    <h4>24/7 Live Support</h4>
                                    <p className="form-text text-black">
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