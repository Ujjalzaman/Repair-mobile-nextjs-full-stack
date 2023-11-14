'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useReviewQuery, useUpdateReviewMutation } from "@/redux/api/reviewsApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditReviews = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [updateReview] = useUpdateReviewMutation();
    const { data } = useReviewQuery(id);

    const handleOnSubmit = async (values: any) => {
        message.loading("Updating ...");
        try {
            const res = await updateReview({ id, body: values });
            if (!!res) {
                message.success("Successfully Testimonial Updated !");
                router.push('/customer/testimonials')
            }
        } catch (error: any) {
            message.loading(error.message)
        }
    }

    const defaultValues = {
        title: data?.title || '',
        description: data?.description || '',
    }
    const base = 'customer'
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "reviews", link: `/${base}/testimonials` },
                ]}
            />
            <h5 className='my-2'>Update My Review</h5>
            <Form submitHandler={handleOnSubmit} defaultValues={defaultValues}>
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
                                label="Title"
                            />
                        </Col>
                        
                    </Row>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={24} style={{ margin: "10px 0" }}>
                            <FormTextArea
                                name="description"
                                label="Description"
                                rows={6}
                            />
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary" className="bg-primary">Update</Button>
            </Form>
        </>
    )
}

export default EditReviews;