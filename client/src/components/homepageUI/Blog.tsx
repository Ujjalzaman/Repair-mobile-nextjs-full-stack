'use client';

import Image from "next/image"
import Link from "next/link";
import { useBlogsQuery } from "@/redux/api/blogApi";
import dayjs from 'dayjs';
import { truncate } from "@/helpers/truncate";
import { Empty, message } from 'antd';
import BlogSkeleton from "../UI/BlogSkeleton";

const Blog = () => {
    const { data, isError, isLoading } = useBlogsQuery({ limit: 3 });
    const blogData = data?.blogs?.data;
    let content = null;
    if (!isLoading && isError) content = <div>{message.error('something went Wrong!')}</div>
    if (!isLoading && !isError && blogData?.length === 0) content = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) content =
        <>
            {
                blogData?.map((item: any) => (
                    <div className="col-md-4 col-sm-12 mb-3" style={{ maxWidth: '18rem' }} key={item?.id}>
                        <div className="card shadow text-center border-0 rounded-bottom">
                            {item?.img &&
                                <div className="flex-column p-0 border-0 d-flex justify-content-center align-items-center" style={{ height: '11rem', overflow: 'hidden' }}>
                                    <Image src={item?.img} alt="blog Image" width={300} height={300} className="w-100 h-100 rounded-top image-hover object-fit-cover" />
                                </div>
                            }
                            <div className="card-body p-0">
                                <div className="p-2">
                                    <Link href={`/blog/${item?.id}`}>
                                    <h6 className="text-black text-start mb-1 text-primary">{truncate(item?.title, 80)}</h6>
                                    </Link>
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
        </>

    if (isLoading) content =
        <>
            {Array.from({ length: 3 }).map((_, index) => (
                <div className="col-4" style={{ maxWidth: '18rem' }} key={index + 55}>
                    <BlogSkeleton />
                </div>
            ))}
        </>
    return (
        <div className="mx-5" style={{ marginTop: "8.5rem", marginBottom: '7rem' }}>
            <div className="mb-5 text-center">
                <h3 style={{ fontWeight: "900" }} className="text-center text-uppercase p-0">OUR BLOG</h3>
                <p className="form-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, mollitia!</p>
            </div>
            <div className="container">
                <div className="row p-5 align-items-center justify-content-center rounded" style={{ background: '#d7ded6' }}>
                    {content}
                </div>
            </div>
        </div>
    )
}
export default Blog