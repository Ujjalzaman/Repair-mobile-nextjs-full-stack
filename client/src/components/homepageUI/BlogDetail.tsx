import Image from "next/image"
import blogImage from '@/assets/homepage/1.jpg';
import Link from "next/link";
import BlogAside from "./BlogAside";
import BlogComments from "./BlogComments";
import FBreadCrumb from "../UI/FBreadCrumb";

const BlogDetail = () => {
    return (
        <div className="container-full">
            <div >
                <div className="bg-secondary text-white py-5 text-center">
                    <h3>Blog Details Page</h3>
                </div>
                <div className="mx-2 mt-3">
                <FBreadCrumb items={[{label: "blog",link: "/blog",},]}/>
                </div>
                <div className="row mx-2" style={{marginTop:'4rem',marginBottom: '8rem' }}>
                    <div className="col-md-9">
                        <div className="card shadow text-center border-0 rounded-bottom">
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ overflow: 'hidden' }}>
                                <Image src={blogImage} alt="blog Image" width={600} height={400} className="w-100 rounded-top object-fit-cover" objectFit="cover" />
                            </div>
                            <div className="card-body p-0">
                                <div className="p-2 my-2">
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
                                <div className="px-3 my-3">
                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>


                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>

                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet. eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>

                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet. eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>

                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet. eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>

                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet. eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>

                                    <p className="form-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat. Et itaque deserunt incidunt, eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet. eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.eaque consequatur ad architecto impedit soluta labore quas iste ex provident deleniti nulla rem eveniet amet.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2 ms-2">
                                <span className="">Tags:</span>
                                <div className="text-dark d-flex gap-2" style={{ fontWeight: '900' }}>
                                    <p>#Assembling</p>
                                    <p>#blog</p>
                                    <p>#Sport</p>
                                    <p>#Others</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <BlogComments />
                    </div>
                    <div className="col-md-3">
                        <BlogAside />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail