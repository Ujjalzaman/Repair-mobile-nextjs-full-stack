'use client';
import FBreadCrumb from "@/components/UI/FBreadCrumb"
import SubHeader from "@/components/UI/SubHeader"
import { truncate } from "@/helpers/truncate";
import { useBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";
import dayjs from 'dayjs';

const BlogPage = () => {
    const { data } = useBlogsQuery({ limit: 3 });
    return (
        <div>
            <SubHeader title="Blog" />
            <div className="mx-2 mt-3 ms-3">
                <FBreadCrumb items={[{ label: "blog", link: "/blog", },]} />
            </div>

            <div style={{ maxWidth: '40rem' }} className="mx-auto text-center">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>SEARCH</h5>
                <div>
                    <div className="form-group has-search">
                        <i className="ri-search-line form-control-feedback"></i>
                        <input type="text" className="form-control w-100" placeholder="Search" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row p-5 container container align-items-center justify-content-center rounded" style={{ background: '#d7ded6', marginTop: '5rem', marginBottom: '8rem' }}>
                    {
                        data && data?.map((item: any) => (
                            <div className="col-md-3" style={{ maxWidth: '18rem' }} key={item?.id}>
                                <div className="card shadow text-center border-0 rounded-bottom">
                                    {item?.img &&
                                        <div className="flex-column p-0 border-0 d-flex justify-content-center align-items-center" style={{ height: '11rem', overflow: 'hidden' }}>
                                            <Image src={item?.img} alt="blog Image" width={300} height={300} className="w-100 h-100 rounded-top image-hover object-fit-cover" />
                                        </div>
                                    }
                                    <div className="card-body p-0">
                                        <div className="p-2">
                                            <h6 className="text-black text-start mb-1 text-primary">{truncate(item?.title, 80)}</h6>
                                            <div className="d-flex text-start gap-2">
                                                <div className="d-flex gap-1 text-muted align-items-center justify-content-center">
                                                    <i className="ri-user-3-line"></i>
                                                    <span className="form-text">{item?.user?.name}</span>
                                                </div>
                                                <div className="d-flex gap-1 text-muted align-items-center justify-content-center">
                                                    <i className="ri-calendar-line"></i>
                                                    <span className="form-text">{dayjs(item?.createdAt).format('MMM D, YYYY hh:mm A')}</span>
                                                </div>
                                            </div>
                                            <hr className="my-1 p-0" />
                                        </div>
                                        <div className="px-2">
                                            <p className="form-text text-start">{truncate(item?.description, 180)}</p>
                                        </div>
                                        <div className="mt-1 mb-3 text-start">
                                            <Link href={`blog/${item?.id}`}>
                                                <button className="btn btn-link border-0 text-primary">Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogPage