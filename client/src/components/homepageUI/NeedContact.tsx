import bgImg from '@/assets/homepage/4.jpg';
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
                        fontSize:'1.5rem', fontWeight:900
                    }}>+123456789</a>or you can mail to reach us</p>
                    <Link href={'/contact'}>
                        <button className='btn btn-primary'>CONTACT NOW</button>
                    </Link>
                </div>
                <Image src={bgImg} width={1200} height={400} alt='contact image' className='w-100' style={{ objectFit: 'cover', filter: 'brightness(50%)' }} />
            </div>
        </div>
    )
}
export default NeedContact