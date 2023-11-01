'use client';

import CountUp from "react-countup";
import style from './HappyClient.module.css';

const HappyClient = () => {
    const workDetails = [
        { title: 'Happy Clients', number: 542, id: 1, icon: 'ri-emotion-happy-line text-primary' },
        { title: 'Finished Projects', number: 623, id: 2, icon: 'ri-briefcase-4-line text-primary' },
        { title: 'Computer Service', number: 1634, id: 3, icon: 'ri-time-line text-primary' },
        { title: 'Mobile Service', number: 5880, id: 4, icon: 'ri-user-6-line text-primary' }
    ];

    return (
        <section className='bg-secondary' style={{padding:'2rem'}}>
            <div className="row container mx-auto">
                {
                    workDetails?.map((item:any) =>(
                        <div className="col-md-6 col-lg-3" key={item.id}>
                            <div className={style.ourValueDetails}>
                                <span className="valueIcon">
                                <i className={item.icon} style={{fontSize:'5rem'}}></i>
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
