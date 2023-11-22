'use client'

import Image from "next/image";
import { Button, Empty, message } from "antd";
import { useServicesQuery } from "@/redux/api/serviceApi";
import dayjs from 'dayjs';
import { truncate } from "@/helpers/truncate";
const DashboarPage = () => {
  const { data, isLoading, isError } = useServicesQuery({});
  const serviceData = data?.services?.data

  let content = null;
  if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
  if (!isLoading && !isError && serviceData?.length === 0) content = <Empty />
  if (!isLoading && !isError && serviceData?.length > 0) content = <>
    {
      serviceData && serviceData.map((item: any, id: number) => (
        <div className="container card shadow border pb-4" key={id + 100}>
          <div className="d-flex justify-content-between align-items-center border-primary border-bottom">
            <div className="py-2">
              <h5>{truncate(item?.deviceType, 60)}</h5>
              <p>{truncate(item?.deviceIssue, 80)}</p>
              <div className="mt-1">
                <h6>Estimated Completion Date : {item?.estimated_completion_time ? dayjs(item?.estimated_completion_time).format('MMM D, YYYY hh:mm A') : '-'}</h6>
                <h6>Pickup Date : {item?.pickup_date ? dayjs(item?.pickup_date).format('MMM D, YYYY hh:mm A') : '-'}</h6>
              </div>
            </div>
            <div>
              <Image src={item?.img} height={100} width={300} alt="device image" style={{ objectFit: 'contain', maxWidth: '6rem' }} />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-4">
              <div className="card shadow bg-primary text-white text-center border-0">
                <div className="card-header border-0">
                  Is Device Fixed
                </div>
                <div className="card-body p-3">
                  {item?.isFixed === false ? "No" : "Yes"}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow bg-secondary text-white text-center border-0">
                <div className="card-header border-0">
                  Is Device Ready
                </div>
                <div className="card-body p-3">
                  {item?.isReady === false ? "No" : "Yes"}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow text-white text-center border-0" style={{ background: '#c1121f' }}>
                <div className="card-header border-0">
                  Is Paid
                </div>
                <div className="card-body p-3">
                  {item?.isPaid === false ? "No" : "Yes"}
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <h5 className="p-2">Current Status - </h5>
            <h4 className="text-capitalize">{item?.status}</h4>
          </div>

          {
            item?.status === 'scheduled' &&
            <Button type="primary" href="/schedule">{item?.status}</Button>
          }
          {
            item?.status === 'payment_pending' ?
              <Button type="primary" href={`/submit-payment/${item?.id}`}>{item?.status}</Button> :
              <Button type="primary" >{item?.status}</Button>
          }
        </div>
      ))
    }
  </>

  return (
    <div style={{ marginTop: '2rem', marginBottom: '7rem' }}>
      <h4>Dashboard</h4>
      {content}
    </div>
  )
}

export default DashboarPage;



