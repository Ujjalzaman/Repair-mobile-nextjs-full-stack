import FBreadCrumb from "@/components/UI/FBreadCrumb"
import SubHeader from "@/components/UI/SubHeader"
import { Button } from "antd"
import Link from "next/link"

const InterviewPage = () => {
  return (
    <div>
      <SubHeader title="Meeting Schedule" />
      <div className="mx-2 mt-3 ms-3">
        <FBreadCrumb items={[{ label: "Dashboard", link: "/customer/dashboard", },]} />
      </div>

      <div style={{ marginTop: '5rem', marginBottom: '7rem' }}>
      
      <div className="gap-5 text-center d-flex justify-content-center gap-2" >
        <div className="card p-5 border-0 shadow-sm m-2 text-start">
          <div className="py-2 d-flex justify-content-start align-items-center">
            <h6>Me <span className="badge text-bg-warning">Ujjal Zaman</span></h6>
            <div>
              <p className="px-2 mt-2">Meeting With</p>
            </div>
            <h6 className="px-2">FixMyPhone Technician (<span className="badge text-bg-warning">Alyx</span>)</h6>
          </div>

          <div>
            <p><b>Interview Date</b> : 02 February 2003</p>
          </div>
          <div>
            <p><b>Time</b> :20:09PM</p>
          </div>
          <div>
            <p><b>Meeting Type</b> : Online</p>
          </div>

          <div>
            <p><b>Meeting Link</b> : <a style={{ color: "blue" }} href="https://meet.google.com/fiz-offb-juz">https://meet.google.com/fiz-offb-juz</a></p>
          </div>
        </div>
        <div className="card shadow border-0 p-3 m-2 text-start">
          <h5>Office Address : 02 Track Avenus, 23 street. New York.</h5>
          <p>Lift 6 , Shop No: 32</p>
          <p>Phone : +8814646436156464654 <br /> Email: help@fixMyphone.com</p>
          <p>Please Before You send your phone follow our <Link href="/" style={{ color: "blue" }}>guideLine</Link></p>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-2 my-5">
        <Link href={'/'}>
          <Button type="primary" className="bg-primary">Back To Home Page</Button>
        </Link>
        <Link href={'/customer/dashboard'}>
          <Button type="primary" className="bg-primary">Back To Console</Button>
        </Link>
      </div>

    </div>

    </div>

  )
}

export default InterviewPage