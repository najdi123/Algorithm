import styles from "./Statistics.module.css";

const Index = () => {
    return (
        <div className={styles.statsWrapper}>
            <div className="container">
                <h1 className={styles.title}>الگوریتم، ضامن سرمایه گذاری شما</h1>
                <div className={styles.statItems}>
                    <div className={`${styles.item} ${styles.investments}`}>
                        <img className={styles.icon} src="/images/investment-icon.svg" alt=""/>
                        <div className={styles.text}>
                            <h4 className={styles.statTitle}>
                                23,679 میلیارد
                                <span className={styles.detail}>ریال</span>
                            </h4>
                            <p className={styles.description}> خالص ارزش دارایی های تحت مدیریت</p>
                        </div>

                    </div>

                    <div className={`${styles.item} ${styles.investors}`}>
                        <img className={styles.icon} src="/images/investors-icon.svg" alt=""/>
                        <div className={styles.text}>
                            <h4 className={styles.statTitle}>
                                4125
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