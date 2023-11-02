import coverImg from '@/assets/cover.jpg';
import Image from 'next/image';
const SubHeader = ({ title }: { title: string }) => {
    return (
        <div className="position-relative">
            <Image width={900} height={300} src={coverImg} alt="blog details" className="w-100 object-fit-cover" style={{ filter: 'brightness(0.5)' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h3 className="text-white">{title}</h3>
            </div>
        </div>
    )
}
export default SubHeader;