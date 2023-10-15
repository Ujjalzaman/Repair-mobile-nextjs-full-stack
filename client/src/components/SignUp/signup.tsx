"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/login-image.svg";
import Image from "next/image";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserSignUpMutation } from "@/redux/api/authApi";

import { useRouter } from "next/navigation";
import Form from "../Forms/Form";
import UploadImage from "../Forms/uploadImage";

const SignUP = () => {
    const router = useRouter();
    const [userSignUp] = useUserSignUpMutation()
    const onSubmit = async (data: any) => {
        try {
            message.loading("Signing up ....")
            const res = await userSignUp(data).unwrap();
            if(!!res){
                message.success("Successfully Signup");
                    router.push('/login')
            }
        } catch (err) { }
    };
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
                    First login your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="name" type="text" size="large" label="Name" />
                        </div>
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
                        <div>
                            <FormInput name="address" type="text" size="large" label="Adress" />
                        </div>

                        <div>
                            <UploadImage name="file" />
                        </div>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default SignUP;