'use client';

import { useAppSelector } from "@/redux/hooks"
import Image from "next/image";
import profileImg from '@/assets/avatar.jpg';
import Link from "next/link";
import { useCustomerQuery } from "@/redux/api/customersApi";

const ViewProfile = () => {
    const user = useAppSelector((state) => state.auth.user);
    const data = useCustomerQuery(user?.id).data;
    return (
        <>
            {
                data && data?.id ?
                    <div className="card shadow border-0 mx-auto p-3 text-center" style={{ maxWidth: '400px' }}>
                        <Link href={`/customer/view-profile/edit/${data?.id}`}>
                            <button className="btn btn-primary d-flex align-items-center gap-2 justify-content-end mx-auto">Edit
                                <i className="ri-edit-box-line"></i></button>
                        </Link>
                        <div>
                            {data?.profileImg ?
                                <div className="my-3">
                                    {data?.profileImg && <Image src={data?.profileImg} alt={data?.name} width={100} height={100} style={{ objectFit: 'cover', borderRadius: '50%' }} />}
                                </div>
                                :
                                <div className="bg-white">
                                    <Image src={profileImg} alt={data?.name} width={100} style={{ borderRadius: '50%' }} className="my-2" />
                                </div>
                            }
                            <h4>{data?.name}</h4>
                            <p>{data?.email}</p>
                            <p>{data?.address}</p>
                            <p>{data?.role}</p>
                            <p>{data?.createdAt}</p>
                        </div>
                    </div>
                    : <p>Loading ...</p>
            }
        </>
    )
}

export default ViewProfile