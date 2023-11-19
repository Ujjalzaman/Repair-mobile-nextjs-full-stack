'use client';

import { useUpdateOrderMutation } from '@/redux/api/orderApi';
import { useGetPaymentInfoQuery } from '@/redux/api/payment';
import { Button, Result, message } from 'antd';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SuccessPage = () => {
    const router = useRouter();
    const query = useSearchParams()
    const sessionId = query.get('session_id');
    const { data } = useGetPaymentInfoQuery(sessionId);
    const [updateOrder] = useUpdateOrderMutation();

    useEffect(() => {
        const fetchData = async () => {
            if (data) {
                const obj = ({
                    isPaid: data.payment_status,
                    invoiceNumber: data.id,
                    email: data.customer_details.email
                })
                try {
                    const res = await updateOrder({ data: obj });
                    if (res) {
                        message.success("Successfully Placed Order !");
                    }
                } catch (error: any) {
                    message.error(error.message)
                }
            }
        }
        setTimeout(() => {
            router.push('/dashboard')
        }, 3000);
        fetchData();
    }, [data])

    


    return (
        <div style={{ height: '60vh' }}>
            <div className='mt-5'>
                <Result
                    status="success"
                    title="Successfully Placeed Payment!"
                    subTitle={`Order number: ${data?.id}, please wait.`}
                    extra={[
                        <Button type="primary" key="console" href='/dashboard'>
                            Go Console
                        </Button>
                    ]}
                />
            </div>
        </div>
    )
}

export default SuccessPage