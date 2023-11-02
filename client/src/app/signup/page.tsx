import SignUP from "@/components/SignUp/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'FixMyPhone/SignUp',
    description: 'Welcome to FixMyPhone',
  }
const SignUpPage = () => {
    return (
        <>
          <SignUP/>
        </>
    )
}

export default SignUpPage;