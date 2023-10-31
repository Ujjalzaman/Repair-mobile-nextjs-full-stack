'use client';

import CountUp from "react-countup";
import style from './HappyClient.module.css';

const HappyClient = () => {
    const workDetails = [
        { title: 'Happy Clients', number: 542, id: 1 },
        { title: 'Projects', number: 623, id: 2 },
        { title: 'Hours of Support', number: 1634, id: 3 },
        { title: 'Hard Workers', number: 31, id: 4 }
    ];

    return (
        <section className='bg-primary' style={{padding:'2rem'}}>
            <div className="row container mx-auto">
                {
                    workDetails?.map((item:any) =>(
                        <div className="col-md-6 col-lg-3" key={item.id}>
                            <div className={style.ourValueDetails}>
                                <span className={`valueIcon valueIcon${item.id}`}>
                                <i className="ri-emotion-happy-line text-secondary" style={{fontSize:'5rem'}}></i>
                                </span>
                                <div>
                                    <p className={style.ourValueTitle}>{item.title}</p>
                                    <h4 className={style.ourValueNumber}>
                                        <CountUp
                                            end={item.number}
                                            start={0}
                                            duration={9}
                                        />
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default HappyClient;
