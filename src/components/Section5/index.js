import styles from "./section5.module.scss";

const Index = () => {
    return (
        <div className={styles.wrapper}>
           <h2 className={styles.title}> چرا الگوریتم؟</h2>
            <div className={styles.itemsWrapper}>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/section5/money-envelop.svg" alt=""/>
                    <h4 className={styles.itemTitle}>
                        نقد شوندگی بالا
                    </h4>
                    <p className={styles.description}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                        با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/section5/risk-chart.svg" alt=""/>
                    <h4 className={styles.itemTitle}>
                        ریسک مناسب
                    </h4>
                    <p className={styles.description}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                        با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/section5/investment-chart.svg" alt=""/>

                    <h4 className={styles.itemTitle}>
                        سرمایه گذاری آسان
                    </h4>
                    <p className={`${styles.description} ${styles.noBorder}`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                        با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Index;