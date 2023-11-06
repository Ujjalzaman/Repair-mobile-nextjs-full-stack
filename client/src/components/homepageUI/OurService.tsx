import Image from "next/image"
import blogImage from '@/assets/img/check-phone.webp';
import blogImage2 from '@/assets/img/pc-with-person.webp';
import blogImage3 from '@/assets/img/megnify-glass.webp';
import blogImage4 from '@/assets/img/repair-by-pen.webp';
import blogImage5 from '@/assets/img/repair-pen.jpg';
import blogImage6 from '@/assets/img/repair-phone.jpg';
const OurService = () => {
    return (
        <div style={{ marginBottom: '7rem', marginTop: '7rem' }}>
            <div className="text-center">
                <h3 className="text-black mb-0" style={{ fontWeight: 900 }}>OUR SERVICES</h3>
                <p className="text-muted text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem.</p>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center mx-5 py-5 rounded" style={{ background: '#5881572e' }}>
                    <div className="col-md-4 col-sm-12 mb-5" style={{ maxWidth: '18rem' }}>
                        <div className="card shadow text-center border-0 rounded-bottom">
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '5.5rem', overflow: 'hidden', maxHeight: '11rem' }}>
                                <Image src={blogImage} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover object-fit-cover"/>
                            </div>
                            <div className="bg-secondary p-0 text-white rounded-bottom">
                                <div className="px-2">
                                    <h5 className="py-2 my-2">Mac & PC Repair</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-5" style={{ maxWidth: '18rem' }}>
                        <div className="card shadow text-center border-0 rounded-bottom">
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '5.5rem', overflow: 'hidden', maxHeight: '11rem' }}>
                                <Image src={blogImage2} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover object-fit-cover"/>
                            </div>
                            <div className="bg-secondary p-0 text-white rounded-bottom">
                                <div className="px-2">
                                    <h5 className="py-2 my-2">Game Consoles Repair</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-5" style={{ maxWidth: '18rem' }}>
                        <div className="card shadow text-center border-0 rounded-bottom">
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '5.5rem', overflow: 'hidden', maxHeight: '11rem' }}>
                                <Image src={blogImage3} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover object-fit-cover"/>
                            </div>
                            <div className="bg-secondary p-0 text-white rounded-bottom">
                                <div className="px-2">
                                    <h5 className="py-2 my-2">Wifi Problems</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4" style={{ maxWidth: '18rem' }}>
                        <div className="card shadow text-center border-0 rounded-bottom">
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '4rem', overflow: 'hidden', maxHeight: '11rem' }}>
                                <Image src={blogImage4} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover object-fit-cover"/>
                            </div>
                            <div className="bg-secondary p-0 text-white rounded-bottom">
                                <div className="px-2">
                                    <h5 className="py-2 my-2">Leptop Repair</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4" style={{ maxWidth: '18rem' }}>
                        <div className="card shadow text-center border-0 rounded-bottom">
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden', maxHeight: '11rem' }}>
                                <Image src={blogImage5} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover object-fit-cover"/>
                            </div>
                            <div className="bg-secondary p-0 text-white rounded-bottom">
                                <div className="px-2">
                                    <h5 className="py-2 my-2">Tablet Repair</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4" style={{ maxWidth: '18rem' }}>
                        <div className="card shadow text-center border-0 rounded-bottom">
                            <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden', maxHeight: '11rem' }}>
                                <Image src={blogImage6} alt="blog Image" width={300} className="w-100 h-100 rounded-top image-hover object-fit-cover"/>
                            </div>
                            <div className="bg-secondary p-0 text-white rounded-bottom">
                                <div className="px-2">
                                    <h5 className="py-2 my-2">Iphone Repair</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default OurService