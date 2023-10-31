import Image from "next/image";
import dImage from '@/assets/homepage/daignostic.png';
import helloImpage from '@/assets/homepage/hellow.png';
import leptopImage from '@/assets/homepage/leptop.png';

const ServiceHeading = () => {
    return (
        <div className="mb-5 mx-5" style={{ marginTop: "-5rem" }}>
            <div className="row">
                <div className="col">
                    <div className="card shadow text-center">
                        <div>
                            <Image src={dImage} className="" width={220} alt="Fissure in Sandstone" />
                        </div>
                        <div className="card-body bg-secondary">
                            <h5 className="card-title text-white">FREE DIAGNOSTICS.</h5>
                            <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <a href="/" className="btn btn-primary w-50">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow text-center">
                        <div>
                            <Image src={helloImpage} className="" width={220} alt="Fissure in Sandstone" />
                        </div>
                        <div className="card-body bg-secondary">
                            <h5 className="card-title text-white">ONLINE HELP.</h5>
                            <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <a href="/" className="btn btn-primary w-50">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow text-center">
                        <div>
                            <Image src={leptopImage} className="" width={220} alt="Fissure in Sandstone" />
                        </div>
                        <div className="card-body bg-secondary">
                            <h5 className="card-title text-white">PROFESSIONAL REPAIR.</h5>
                            <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <a href="/" className="btn btn-primary w-50">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHeading