const TotalCard = () => {
  return (
    <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="border-5 border-primary border-start card shadow border-0 p-2 text-white" style={{background:'#588157'}}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="py-2">EARNINGS (MONTHLY)</h6>
                  <h6>$40,000</h6>
                </div>
                <div>
                  <i className="ri-briefcase-line" style={{ fontSize: '4rem', color: '#d6d6d6' }}></i>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-sm-12">
            <div className="border-5 border-primary border-start card shadow border-0 p-2 text-white" style={{background:'#457b9d'}}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="py-2">EARNINGS (ANNUAL)</h6>
                  <h5>$40,000</h5>
                </div>
                <div>
                  <i className="ri-money-dollar-circle-line" style={{ fontSize: '4rem', color: '#d6d6d6' }}></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="border-5 border-primary border-start text-white card shadow border-0 p-2" style={{background:'#1d3557'}}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="py-2">COMPLETED (MONTHLY)</h6>
                  <h5>260</h5>
                </div>
                <div>
                  <i className="ri-task-line" style={{ fontSize: '4rem', color: '#d6d6d6' }}></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="border-5 border-primary border-start text-white card shadow border-0 p-2" style={{background:'#e63946'}}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="py-2">PENDING (MONTHLY)</h6>
                  <h5>40</h5>
                </div>
                <div>
                  <i className="ri-loader-line" style={{ fontSize: '4rem', color: '#d6d6d6' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TotalCard