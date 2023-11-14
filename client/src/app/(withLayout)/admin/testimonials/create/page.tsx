'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useAddReviewMutation } from "@/redux/api/reviewsApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateCustomerPage = () => {
    const base = 'admin';
    const router = useRouter();
    const [addReview] = useAddReviewMutation();
 
    const handleOnSubmit = async(values: any) =>{
        message.loading("Creating ...")
        try {
            const res = await addReview({ ...values });
            if (res) {
                message.success("Successfully Added Testimonials !");
                router.push('/admin/testimonials')
            }
        } catch (error:any) {
            message.loading(error.message)
        }
    }
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "reviews", link: `/${base}/testimonials` },
                ]}
            />
            <h5 className='my-2'>Create Testimonials</h5>
            <Form submitHandler={handleOnSubmit}>
                <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={24} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="title"
                                type="text"
                                size="large"
                                label="Subject"
                            />
                        </Col>
                        <Col span={24} style={{ margin: "10px 0" }}>
                            <FormTextArea
                                name="description"
                                label="Description"
                                rows={6}
                            />
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary" className="bg-primary">submit</Button>
            </Form>
        </>
    )
}

export default CreateCustomerPage;