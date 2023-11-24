import Image from "next/image"
import NotFoundImage from '@/assets/404.gif';
import { Button } from "antd";
import Link from "next/link";
const notFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white position-relative">
      <div className="position-absolute top-0 mt-5">
        <Link href={'/'}>
          <Button type="primary" className="bg-primary">Back To Home</Button>
        </Link>
      </div>
      <Image src={NotFoundImage} alt="not found page" width={1200} height={800} />
    </div>
  )
}

export default notFound;