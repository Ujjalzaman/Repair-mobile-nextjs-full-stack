import Image from "next/image"
import contactImg from '@/assets/homepage/contact.png';
import style from './Contact.module.css';
const ContactUs = () => {
    return (
        <section id={style.contact} className="mx-5 mb-5">
            <div className="mx-auto">
                <div className="row">
                    <div className="col-6">

                        <form className={style.contactForm}>
                            <h4 className={style.miniTitle}>CONTACT US</h4>
                            <h5 className={style.sectionTitle}>GET IN TOUCH</h5>
                            <div className="row">
                                <div className="col-6">
                                    <input placeholder="Your Name" type="text" required />
                                </div>
                                <div className="col-6">
                                    <input placeholder="Your Email" type="email" required />
                                </div>
                                <div className="col-12">
                                    <input placeholder="Subject" type="text" required />
                                </div>
                                <div className="col-12">
                                    <textarea placeholder="Your Message..." required></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary w-25" type="submit">Submit Now</button>
                        </form>

                    </div>
                    <div className="col-6">
                        <Image src={contactImg} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs