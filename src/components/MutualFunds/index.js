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
                    صندوق های سرمایه گذاری از بهترین گزینه ها برای افرادی است
                    که تمایل به حضور در بازار سرمایه دارند. از جمله مزایای اصلی
                    صندوق سرمایه گذاری ریسک کمتر نسبت به سرمایه گذاری مستقیم ، قابلیت نقد شوندگی بالاتر،
                    صرفه جویی در وقت و عدم نیاز به دانش تخصصی اشاره کرد.
                    با صندوق های سرمایه گذاری از خرید و فروش هیجانی
                    دوری کرده و با ریسک معقول، در انتظار کسب سود مناسب باشید.
                </p>
            </div>
        </div>
    );
};

export default Index;