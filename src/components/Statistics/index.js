import styles from "./Statistics.module.css";
import {useEffect, useState} from "react";

const Index = () => {

    const [investors, setInvestors] = useState(4100);
    const [investments, setInvestments] = useState(23600);

    useEffect(()=>{
        if (investors<=4300){
            setInterval(function(){setInvestors(prevState => prevState+1)}, 18000);
        }
        else{
            setInvestors(4100)
        }

        if (investments<=24600){
            setInterval(function(){setInvestments(prevState => prevState+1)}, 3600);
        }
        else{
            setInvestments(23600)
        }

    },[])
    console.log("investors: ",investors)

    return (
        <div className={styles.statsWrapper}>
            <div className="container">
                <h1 className={styles.title}>الگوریتم، ضامن سرمایه گذاری شما</h1>
                <div className={styles.statItems}>
                    <div className={`${styles.item} ${styles.investments}`}>
                        <img className={styles.icon} src="/images/investment-icon.svg" alt=""/>
                        <div className={styles.text}>
                            <h4 className={styles.statTitle}>
                                {investments.toLocaleString()}
                                میلیارد
                                <span className={styles.detail}>ریال</span>
                            </h4>
                            <p className={styles.description}> خالص ارزش دارایی های تحت مدیریت</p>
                        </div>

                    </div>

                    <div className={`${styles.item} ${styles.investors}`}>
                        <img className={styles.icon} src="/images/investors-icon.svg" alt=""/>
                        <div className={styles.text}>
                            <h4 className={styles.statTitle}>
                                {investors}
                            </h4>
                            <p className={styles.description}>تعداد سرمایه گذاران</p>
                        </div>

                    </div>

                    <div className={`${styles.item} ${styles.advisors}`}>
                        <img className={styles.icon} src="/images/advisors-icon.svg" alt=""/>
                        <div className={styles.text}>
                            <h4 className={styles.statTitle}>
                                12

                            </h4>
                            <p className={styles.description}>تعداد مشاوران</p>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default Index;