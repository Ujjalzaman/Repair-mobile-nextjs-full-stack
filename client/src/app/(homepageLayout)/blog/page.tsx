'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import SubHeader from "@/components/UI/SubHeader"
import { truncate } from "@/helpers/truncate";
import { useBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";
import dayjs from 'dayjs';
import BlogSkeleton from "@/components/UI/BlogSkeleton";
import { Empty, message } from "antd";
import BlogAside from "@/components/homepageUI/BlogAside";
import { useState } from 'react';
import { useDebounced } from "@/redux/hooks";
import { Pagination } from 'antd';
const BlogPage = () => {
    const query: Record<string, any> = {};
    const [size, setSize] = useState<number>(10);
    const [searchTerm, setSearchTerm] = useState<string>("");


    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600
    })

    if (!!debouncedTerm) {
        query['searchTerm'] = debouncedTerm
    }
    const { data, isError, isLoading } = useBlogsQuery({ ...query });
    const blogData = data?.blogs?.data;
    const meta = data?.meta

    let content = null;
    if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
    if (!isLoading && !isError && blogData?.length === 0) content = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) content =
        <>
            {
                blogData && blogData?.map((item: any, index: number) => (
                    <div className="col-md-4 mb-3" style={{ maxWidth: '25rem' }} key={item?.id + index}>
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
        </>

    if (isLoading) content =
        <>
            {Array.from({ length: 6 }).map((_, index) => (
                <div className="col-4 mb-3" style={{ maxWidth: '25rem' }} key={index + 1}>
                    <BlogSkeleton />
                </div>
            ))}
        </>
    return (
        <div>
            <SubHeader title="Blog" />
            <div className="mx-2 mt-3 ms-3">
                <FBreadCrumb items={[{ label: "blog", link: "/blog", },]} />
            </div>
            <div className="container-full mx-2">
                <div className="row">
                    <div className="col-md-9">
                        <div className="container">
                            <div className="row p-5 container container align-items-center justify-content-center rounded" style={{ background: '#d7ded6', marginTop: '5rem', marginBottom: '8rem' }}>
                                {content}
                                <div className="text-center mt-5">
                                    <Pagination
                                        defaultCurrent={size}
                                        total={meta?.total}
                                        showSizeChanger={true}
                                        showPrevNextJumpers={true}
                                        pageSize={size}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <BlogAside setSearchTerm={setSearchTerm} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage