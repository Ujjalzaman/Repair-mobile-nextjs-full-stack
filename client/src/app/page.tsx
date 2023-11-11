import HomePage from "./(homepageLayout)/home/page";
import HomePageLayout from './(homepageLayout)/layout';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FixMyPhone/Home',
  description: 'Welcome to FixMyPhone',
}

export default function Home() {

  return (
      <HomePageLayout>
        <HomePage />
      </HomePageLayout>
  )
}