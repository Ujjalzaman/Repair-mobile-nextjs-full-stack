"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/homepage/signup.png";
import Image from "next/image";
import FormInput from "@/components/Forms/FormInput";
import { useUserSignUpMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import Form from "../Forms/Form";
import Link from "next/link";
import { useEffect, useState } from "react";

const SignUP = () => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const router = useRouter();
    const [userSignUp, { isError, error, isSuccess }] = useUserSignUpMutation();
    const [isMatch, setIsMatch] = useState<boolean>(true);
    const onSubmit = async (data: any) => {
        message.loading("Signing up ....");
        if (data.password !== data.repassword) {
            setIsMatch(false);
        }else{
            const { repassword, ...signUpData } = data;
            const obj = JSON.stringify(signUpData);
            const formData = new FormData();
            formData.append('data', obj)
            try {
                await userSignUp(formData).unwrap();
            } catch (err) { }
        }
    };

    useEffect(() => {
        if (isError && error) {
            //@ts-ignore
            setErrorMessage(error?.data?.message)
            //@ts-ignore
            message.error(error?.data?.message)
            console.log(error)
        }
        if (isSuccess) {
            message.success("Successfully Account Created.Please Login!");
            router.push('/login')
        }
    }, [isError, error, isSuccess, router])

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh",
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={loginImage} width={500} alt="login image" />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1 style={{ margin: "15px 0px", }}>
                    Sign UP Your Account !!
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="name" type="text" size="large" label="Name" />
                        </div>
                        <div style={{ margin: "15px 0px" }}>
                            <FormInput name="email" type="email" size="large" label="Email" />
                        </div>
                        <div style={{ margin: "15px 0px" }}>
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                            />
                        </div>
                        <div style={{ margin: "15px 0px" }}>
                            <FormInput
                                name="repassword"
                                type="password"
                                size="large"
                                label="Re-Password"
                            />
                        </div>
                        {!isMatch && <p className="form-text text-danger">Password is not Matched</p>}
                        {errorMessage && <p className="form-text text-danger">{errorMessage}</p>}

                        <Button type="primary" htmlType="submit">
                            SignUp
                        </Button>
                        <p className="my-2">Alreay Have Account ? <Link href={'/login'}>Login</Link></p>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default SignUP;