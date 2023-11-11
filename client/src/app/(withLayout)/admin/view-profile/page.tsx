'use client';

import { useAppSelector } from "@/redux/hooks"
import Image from "next/image";
import profileImg from '@/assets/avatar.jpg';
import Link from "next/link";

const ViewProfile = () => {
    const user = useAppSelector((state) => state.auth.user);
    return (
        <div>
            {
                user && user.id ?
                    <div className="card shadow border-0 mx-auto p-3 text-center" style={{ maxWidth: '400px' }}>
                        <Link href={`/${user?.role}/view-profile/edit/${user?.id}`}>
                            <button className="btn btn-primary d-flex align-items-center gap-2 justify-content-end mx-auto">Edit
                                <i className="ri-edit-box-line"></i></button>
                        </Link>
                        <div>
                            {user.profileImg ?
                                <Image src={user.profileImg} alt={user.name} /> :
                                <div className="bg-white">
                                    <Image src={profileImg} alt={user.name} width={100} style={{ borderRadius: '50%' }} className="my-2" />
                                </div>
                            }
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                            <p>{user.address}</p>
                            <p>{user.role}</p>
                            <p>{user.createdAt}</p>
                        </div>
                    </div>
                    : <p>Loading ...</p>
            }

        </div>
    )
}

export default ViewProfile