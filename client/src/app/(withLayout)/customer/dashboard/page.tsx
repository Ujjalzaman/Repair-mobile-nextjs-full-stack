'use client'

import Image from "next/image";
import demoImg from '@/assets/avatar.jpg';
import { Button, Empty, message } from "antd";
import { useServicesQuery } from "@/redux/api/serviceApi";
import dayjs from 'dayjs';
const DashboarPage = () => {
  const { data, isLoading, isError } = useServicesQuery({});
  const serviceData = data?.services?.data

  let content = null;
  if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
  if (!isLoading && !isError && serviceData?.length === 0) content = <Empty />
  if (!isLoading && !isError && serviceData?.length > 0) content = <>
    {
      serviceData && serviceData.map((item: any, id: number) => (
        <div className="mb-4 p-2 border">
          <div className="card shadow border-0 mt-5">
            <div className="d-flex align-items-center justify-content-between mx-3">
              <div className="d-flex align-items-center justify-content-start">
                <div className="p-2">
                  <Image src={item?.img} height={100} width={300} alt="device image" style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h5>{item?.deviceType}</h5>
                  <p>{item?.deviceIssue}</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-5 rounded" style={{
                "background": "#d7ded6",
                "padding": "31px 120px"
              }}>
                <h5 className="m-0">Status</h5>
                {
                  item?.status === 'ready_for_appointment' && 
                  <Button type="primary" href="/schedule">{item?.status}</Button>
                }
                {
                  item?.status === 'payment_pending' ? 
                  <Button type="primary" href={`/submit-payment/${item?.id}`}>{item?.status}</Button>:
                  <Button type="primary" >{item?.status}</Button>
                }
                
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-around align-items-center mt-5">
            <div className="card shadow border-0 py-3 text-center bg-success text-white" style={{ minWidth: '20rem' }}>
              <p>Is Device Fixed</p>
              <h4>{item?.isFixed === false ? "No" : "Yes"}</h4>
            </div>

            <div className="card shadow border-0 py-3 text-center" style={{ minWidth: '20rem' }}>
              <p>Is Device Ready</p>
              <h4>{item?.isReady === false ? "No" : "Yes"}</h4>
            </div>

            <div className="card shadow border-0 py-3 text-center bg-danger text-white" style={{ minWidth: '20rem' }}>
              <p>Is Device Fixed</p>
              <h4>{item?.isPaid === false ? "No" : "Yes"}</h4>
            </div>
          </div>

          <div className="d-flex justify-content-around align-items-center mt-5">
            <div className="card shadow border-0 py-3 text-center" style={{ minWidth: '20rem' }}>
              <p>Estimated Completion Date</p>
              <h4>{dayjs(item?.estimated_completion_time).format('MMM D, YYYY hh:mm A')}</h4>
            </div>
            <div className="card shadow border-0 py-3 text-center" style={{ minWidth: '20rem' }}>
              <p>Pickup Date</p>
              <h4>{dayjs(item?.pickup_date).format('MMM D, YYYY hh:mm A')}</h4>
            </div>
          </div>
        </div>
      ))
    }
  </>

  return (
    <div>
      {content}
    </div>
  )
}

export default DashboarPage;