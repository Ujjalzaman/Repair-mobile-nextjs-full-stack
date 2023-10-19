import Script from "next/script";
import HomePage from "./(homepageLayout)/home/page";
import HomePageLayout from './(homepageLayout)/layout';

export default function Home() {
  
  return (
    <HomePageLayout>
      <HomePage/>
    </HomePageLayout>
  )
}