import SubHeader from '@/components/UI/SubHeader';
import ContactUs from '@/components/homepageUI/ContactUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FixMyPhone/contact',
  description: 'Welcome to FixMyPhone',
}

const ContactPage = () => {
  return (
    <div>
      <SubHeader title='Contact Us' />
      <div className='container'>
        <ContactUs />
      </div>
    </div>
  )
}

export default ContactPage;