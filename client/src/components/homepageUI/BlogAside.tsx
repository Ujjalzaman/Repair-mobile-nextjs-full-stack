import Image from "next/image"
import blogImage from '@/assets/img/repair-by-pen.webp';
import blogImage2 from '@/assets/img/repair-pen.jpg';
import blogImage3 from '@/assets/img/repair-phone.jpg';
import blogImage4 from '@/assets/img/repair-phone.jpg';

const BlogAside = () => {
    return (
        <div>
            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>SEARCH</h5>
                <div className="form-group has-search">
                    <i className="ri-search-line form-control-feedback"></i>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
            </div>
            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>CATEGORIES</h5>
                <ul className="px-0">
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>RECEN POSTS</h5>
                <div className="d-flex gap-2 align-items-center mb-2">
                    <div className="" style={{ minHeight: '4rem', overflow: 'hidden' }}>
                        <Image src={blogImage} alt="blog Image" width={90} height={90} className="w-100 h-100 rounded image-hover object-fit-cover"/>
                    </div>
                    <div className="p-2">
                        <h6 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h6>
                        <div className="d-flex text-start gap-2">
                            <div className="d-flex gap-1 text-muted align-items-center justify-content-center">
                                <i className="ri-calendar-line"></i>
                                <span className="form-text">01 January 2023</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-2 align-items-center mb-2">
                    <div className="" style={{ minHeight: '4rem', overflow: 'hidden' }}>
                        <Image src={blogImage2} alt="blog Image" width={90} height={90} className="w-100 h-100 rounded image-hover object-fit-cover"/>
                    </div>
                    <div className="p-2">
                        <h6 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h6>
                        <div className="d-flex text-start gap-2">
                            <div className="d-flex gap-1 text-muted align-items-center justify-content-center">
                                <i className="ri-calendar-line"></i>
                                <span className="form-text">01 January 2023</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-2 align-items-center mb-2">
                    <div className="" style={{ minHeight: '4rem', overflow: 'hidden' }}>
                        <Image src={blogImage3} alt="blog Image" width={90} height={90} className="w-100 h-100 rounded image-hover object-fit-cover"/>
                    </div>
                    <div className="p-2">
                        <h6 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h6>
                        <div className="d-flex text-start gap-2">
                            <div className="d-flex gap-1 text-muted align-items-center justify-content-center">
                                <i className="ri-calendar-line"></i>
                                <span className="form-text">01 January 2023</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-2 align-items-center mb-2">
                    <div className="" style={{ minHeight: '4rem', overflow: 'hidden' }}>
                        <Image src={blogImage4} alt="blog Image" width={90} height={90} className="w-100 h-100 rounded image-hover object-fit-cover"/>
                    </div>
                    <div className="p-2">
                        <h6 className="text-black text-start mb-1 text-primary"> Unlocking Pin Protected Devices</h6>
                        <div className="d-flex text-start gap-2">
                            <div className="d-flex gap-1 text-muted align-items-center justify-content-center">
                                <i className="ri-calendar-line"></i>
                                <span className="form-text">01 January 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>TAGS</h5>
                <div className="d-flex flex-wrap gap-3">
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Repair</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Dissembing</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Installation</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>SmartPhone</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Data Recovery</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Display</button>
                </div>
            </div>
        </div>
    )
}

export default BlogAside