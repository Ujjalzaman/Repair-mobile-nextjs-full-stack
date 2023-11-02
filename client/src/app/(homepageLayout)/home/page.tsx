import Blog from "@/components/homepageUI/Blog";
import HappyClient from "@/components/homepageUI/HappyClient";
import HeroSection from "@/components/homepageUI/HeroSection";
import IntroPage from "@/components/homepageUI/IntroPage";
import MembershipPlan from "@/components/homepageUI/MembershipPlan";
import NeedContact from "@/components/homepageUI/NeedContact";
import OurService from "@/components/homepageUI/OurService";
import ServiceHeading from "@/components/homepageUI/ServiceHeading";
import Testimonial from "@/components/homepageUI/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FixMyPhone/Home',
  description: 'Welcome to FixMyPhone',
}

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceHeading />
      <OurService/>
      <IntroPage />
      <HappyClient />
      <MembershipPlan />
      <NeedContact />
      <Testimonial />
      <Blog />
    </div>
  )
}

export default HomePage