import bgImg from '@/assets/img/repair-phone.jpg';
import Image from 'next/image';
import Link from 'next/link';

const NeedContact = () => {
    return (
        <div>
            <div className='position-relative' style={{ maxHeight: '20rem', overflow: 'hidden' }}>

                <div className='position-absolute text-white text-center' style={{
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    zIndex: '10'
                }}>
                    <h4>DO YOU NEED A MOBILE PHONE REPAIR?</h4>
                    <p>We work on almost all of the more popular. brands Call at <a href='tel:123-456-789' className='text-primary me-2' style={{
                        fontSize:'1.5rem', fontWeight:900, textDecoration:'none'
                    }}>+123456789</a>or you can Schedule Appintment</p>
                    <Link href={'/contact'}>
                        <button className='btn btn-primary'>GET APPOINTMENT</button>
                    </Link>
                </div>
                <Image src={bgImg} width={900} height={400} alt='contact image' className='w-100' style={{ objectFit: 'cover', filter: "brightness(40%)" }} />
            </div>
        </div>
    )
}
export default NeedContact