import React from 'react';
import styles from "./MutualFunds.module.css";

const Index = () => {
    return (
        <div className={styles.wrapper}>
           <div className={styles.topOrLeft}>
               <h3 className={`${styles.title} ${styles.displayOnSmall}`}>چرا صندوق های سرمایه گذاری؟</h3>
               <div className={styles.laptopBackground}>
                   <div className={styles.video}>

                   </div>
               </div>
           </div>
            <div className={styles.bottomOrRight}>
                <h3 className={`${styles.title} ${styles.displayOnLarge}`}>چرا صندوق های سرمایه گذاری؟</h3>

                <p className={styles.description}>
                     صندوق‌های سرمایه‌گذاری از بهترین
                    گزینه‌ها برای افرادی است که تمایل به حضور در بازار سرمایه دارند.از جمله
                    مزایای اصلی صندوق‌های سرمایه‌گذاری
                    <span className={styles.lightBlue}> ریسک کمتر </span>
                    نسبت به سرمایه‌گذاری مستقیم
                    ،
                    <span className={styles.darkBlue}>قابلیت نقد شوندگی بالاتر </span>
                    ،
                    <span className={styles.darkBlue}> صرفه جویی در وقت </span>
                    و
                    <span className={styles.darkBlue}> عدم نیاز به دانش تخصصی </span>
                    اشاره کرد.با صندوق‌های سرمایه‌گذاری از خرید و فروش هیجانی
                    دوری کرده و با
                    <span className={styles.lightBlue}> ریسک معقول</span>
                    ، در انتظار کسب سود مناسب باشید.
                </p>
            </div>
        </div>
    );
};

export default Index;