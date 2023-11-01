import Blog from "@/components/homepageUI/Blog"
import ContactUs from "@/components/homepageUI/ContactUs"
import HappyClient from "@/components/homepageUI/HappyClient"
import HeroSection from "@/components/homepageUI/HeroSection"
import IntroPage from "@/components/homepageUI/IntroPage"
import MembershipPlan from "@/components/homepageUI/MembershipPlan"
import ServiceHeading from "@/components/homepageUI/ServiceHeading"
import Testimonial from "@/components/homepageUI/Testimonial"
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceHeading/>
      <IntroPage/>
      <HappyClient/>
      <MembershipPlan/>
      <Testimonial/>
      <Blog/>
    </div>
  )
}

export default HomePage