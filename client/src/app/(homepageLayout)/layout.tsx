import Footer from "@/components/UI/Footer";
import HomepageHeader from "@/components/UI/HomepageHeader";
import React from "react";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HomepageHeader />
            {children}
            <Footer />
        </>
    )
}

export default HomePageLayout;