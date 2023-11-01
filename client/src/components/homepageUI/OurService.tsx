import Image from "next/image"
import blogImage from '@/assets/homepage/2.jpg';
const OurService = () => {
    return (
        <div style={{ marginBottom: '7rem', marginTop: '7rem' }}>
            <div className="text-center">
                <h3 className="text-black mb-0" style={{ fontWeight: 900 }}>OUR SERVICES</h3>
                <p className="text-muted text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem.</p>
            </div>

            <div className="row container">
                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="card shadow text-center border-0 rounded-bottom">
                        <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden' }}>
                            <Image src={blogImage} alt="blog Image" width={70} height={70} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                        </div>
                        <div className="bg-primary p-0 text-white rounded-bottom">
                            <div className="px-2">
                                <h4 className="py-4 my-2">Mac & PC Repair</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="card shadow text-center border-0 rounded-bottom">
                        <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden' }}>
                            <Image src={blogImage} alt="blog Image" width={70} height={70} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                        </div>
                        <div className="bg-primary p-0 text-white rounded-bottom">
                            <div className="px-2">
                                <h4 className="py-4 my-2">Game Consoles Repair</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="card shadow text-center border-0 rounded-bottom">
                        <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden' }}>
                            <Image src={blogImage} alt="blog Image" width={70} height={70} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                        </div>
                        <div className="bg-primary p-0 text-white rounded-bottom">
                            <div className="px-2">
                                <h4 className="py-4 my-2">Wifi Problems</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="card shadow text-center border-0 rounded-bottom">
                        <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden' }}>
                            <Image src={blogImage} alt="blog Image" width={70} height={70} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                        </div>
                        <div className="bg-primary p-0 text-white rounded-bottom">
                            <div className="px-2">
                                <h4 className="py-4 my-2">Phone Repair</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="card shadow text-center border-0 rounded-bottom">
                        <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden' }}>
                            <Image src={blogImage} alt="blog Image" width={70} height={70} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                        </div>
                        <div className="bg-primary p-0 text-white rounded-bottom">
                            <div className="px-2">
                                <h4 className="py-4 my-2">Tablet Repair</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="card shadow text-center border-0 rounded-bottom">
                        <div className="flex-column card-header p-0 border-0 d-flex justify-content-center align-items-center" style={{ minHeight: '6rem', overflow: 'hidden' }}>
                            <Image src={blogImage} alt="blog Image" width={70} height={70} className="w-100 h-100 rounded-top image-hover" objectFit="cover" />
                        </div>
                        <div className="bg-primary p-0 text-white rounded-bottom">
                            <div className="px-2">
                                <h4 className="py-4 my-2">Iphone Repair</h4>
                            </div>
                        </div>
                    </div>
                </div>

             
            </div>
        </div>
    )
}
export default OurService