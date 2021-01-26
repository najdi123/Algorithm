import styles from "./TopHeader.module.css";

const Index = () => {
    return (
        <div className={`${styles.headerWrapper} `}>
           <div className="container">
               <h1 className={styles.topTitle}>
                   حضور کم ریسک و مطمﺌن در بازار سرمایه !
               </h1>
               <h2 className={styles.bottomTitle}>
                   با الگوریتم ، حرفه ای سرمایه گذاری کنید
               </h2>


               <div className={styles.actionWrapper}>
                   <button className={styles.actionButton}>
                       <div>بیشتر بدانید</div>
                   </button>
                   <p  className={styles.description}>به خانواده 5000 نفری الگوریتم بپیوندید</p>
               </div>
           </div>

        </div>
    );
};

export default Index;