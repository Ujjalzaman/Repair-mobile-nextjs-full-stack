import BarChart from '@/components/UI/BarChart';
import PieChart from '@/components/UI/PieChart';
import TotalCard from '@/components/UI/TotalCard';

const Dashboard = () => {
  return (
    <div style={{marginTop:'2rem', marginBottom:'8rem'}}>
      <h4 className="my-4">Dashboard</h4>
      <div className="container">
        <TotalCard/>
        <div className='row mt-5'>
          <div className="col-md-6">
            <div className="card shadow p-2 border-0">
              <div className="card-header">Earning Overview</div>
              <BarChart />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow p-2 border-0">
              <div className="card-header">Revenu Sources</div>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;