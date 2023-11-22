'use client';

import Form from "@/components/Forms/Form";
import SubHeader from "@/components/UI/SubHeader";
import { useGetOrderByServiceQuery, useUpdateOrderMutation } from "@/redux/api/orderApi";
import { useAddPaymentMutation } from "@/redux/api/payment";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { isLoggedIn } from "@/service/auth.service";
import { Button, Col, Input, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PaymentPage = ({ params }: { params: any }) => {
    const { id } = params;
    const { data } = useGetOrderByServiceQuery(id);
    const { data: service } = useServiceQuery(id)
    const router = useRouter();
    
    if (typeof window !== 'undefined') {
        const isUserLoggedIn = isLoggedIn();
    
        if (!isUserLoggedIn) {
          router.push('/login');
        }
      }
    const [addPayment] = useAddPaymentMutation();

    const PlaceOrder = async (values: any) => {
        message.loading("Creating ...");
        const obj = ({
            price: data?.totalAmount,
            name: service?.deviceIssue,
            description: service?.issueDescription,
            images: service?.img
        })
        if (obj.price) {
            const result = await addPayment({ ...obj }).unwrap();
            router.replace(result.url)
        }
    }
    return (
        <div>
            <SubHeader title='Place Payment' />
            <div className="container-full mx-4" style={{ marginTop: '7rem', marginBottom: '8rem' }}>
                <div className="row">
                    <div className="col-md-9">
                        <div className='container'>
                            <div>
                                <Form submitHandler={PlaceOrder}>
                                    <div
                                        style={{
                                            border: "1px solid #d9d9d9",
                                            borderRadius: "5px",
                                            padding: "15px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
                                            Proceed to Place Payment
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="card shadow p-3 border-0" style={{ maxWidth: '25rem' }}>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <p>Hardware Bill - {data?.hardware}</p>
                                                            <p>Software Bill - {data?.hardware}</p>
                                                            <p>Parts - </p>
                                                            <p>Techincian Bill - {data?.technician_bill}</p>
                                                            <p>Tex (including 15%) - </p>
                                                            <hr />
                                                            <p><b>Total Bill</b> -</p>
                                                        </div>

                                                        <div>
                                                            <p>{data?.hardware} $</p>
                                                            <p>{data?.software} $</p>
                                                            <p>{data?.parts} $</p>
                                                            <p>{data?.technician_bill} $</p>
                                                            <p>{data?.tax} $</p>
                                                            <hr />
                                                            <p><b>{data?.totalAmount} $</b></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="card shadow p-3 border-0 mb-2">
                                                    <div>
                                                        <h5>Technician Oversrbation</h5>
                                                        <p className="form-text">
                                                            {data?.oversarbation}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card shadow p-3 border-0">
                                                    <div>
                                                        <h6>{service?.deviceType}</h6>
                                                        <p>{service?.deviceIssue}</p>
                                                        {service?.img && <Image src={service?.img} alt="device" height={100} width={100} />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                                            <Col span={12} style={{ margin: "10px 0" }}>
                                                <label>Service Request Number</label>
                                                <Input
                                                    name="serviceNumber"
                                                    type="text"
                                                    size="large"
                                                    defaultValue={id}
                                                    disabled
                                                />
                                            </Col>
                                            <Col span={12} style={{ margin: "10px 0" }}>
                                                <label>Total Amount</label>
                                                <Input
                                                    name="amount"
                                                    type="text"
                                                    size="large"
                                                    value={data?.totalAmount}
                                                    disabled
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <Button htmlType="submit" type="primary" className="bg-primary">submit</Button>
                                </Form>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-map-pin-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Address</h3>
                            <p>123 Amsterdem, Tronto, Canda</p>
                        </div>

                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-phone-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Phone Number</h3>
                            <p>+8801751040425</p>
                        </div>

                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-time-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Openning Hours</h3>
                            <p>All Day : 9AM to 6PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentPage