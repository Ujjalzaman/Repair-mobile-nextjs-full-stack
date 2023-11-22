"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/login-image.png";
import Image from "next/image";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { setUserInfo } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import Form from "../Forms/Form";
import Link from "next/link";
import { useEffect, useState } from "react";

type FormValues = {
    id: string;
    password: string;
};

const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const router = useRouter();
    const [userLogin, { isError, isSuccess, error, data }] = useUserLoginMutation();

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        message.success("Signing ...");
        try {
            const res = await userLogin(data).unwrap();
            if (res && res.accessToken) {
                setUserInfo({ accessToken: res.accessToken })
            }
        } catch (err: any) {

        }
    };
    useEffect(() => {
        if (isError && error) {
            //@ts-ignore
            setErrorMessage(error?.data?.message)
            //@ts-ignore
            message.error(error?.data?.message)
        }
        if (isSuccess && data) {
            message.success("Successfully Login");
            const routing = data?.user?.role === 'customer' ? '/customer/dashboard' : '/admin/dashboard'
            router.push(routing)
        }
    }, [isError, error, isSuccess])
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
                <h1
                    style={{
                        margin: "15px 0px",
                    }}
                >
                    First login your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
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
                        <Button className="bg-primary" type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
                {errorMessage && <p className="form-text text-danger">{errorMessage}</p>}
                <p className="my-2">Alreay Have Account ? <Link href={'/signup'}>Signup</Link></p>
            </Col>
        </Row>
    );
};

export default LoginPage;