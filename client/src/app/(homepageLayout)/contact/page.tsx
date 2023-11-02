import ContactUs from '@/components/homepageUI/ContactUs';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'FixMyPhone/contact',
  description: 'Welcome to FixMyPhone',
}
const ContactPage = () => {
  return (
    <div>
        <ContactUs/>
    </div>
  )
}

export default ContactPage;