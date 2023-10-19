import HappyClient from "@/components/homepageUI/HappyClient"
import HeroSection from "@/components/homepageUI/HeroSection"
import IntroPage from "@/components/homepageUI/IntroPage"
import ServiceHeading from "@/components/homepageUI/ServiceHeading"
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceHeading/>
      <IntroPage/>
      <HappyClient/>
    </div>
  )
}

export default HomePage