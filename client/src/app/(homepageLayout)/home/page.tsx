import HappyClient from "@/components/homepageUI/HappyClient"
import HeroSection from "@/components/homepageUI/HeroSection"
import IntroPage from "@/components/homepageUI/IntroPage"
import MembershipPlan from "@/components/homepageUI/MembershipPlan"
import ServiceHeading from "@/components/homepageUI/ServiceHeading"
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceHeading/>
      <IntroPage/>
      <HappyClient/>
      <MembershipPlan/>
    </div>
  )
}

export default HomePage