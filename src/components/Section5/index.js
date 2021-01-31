import styles from "./section5.module.scss";

const Index = () => {
    return (
        <div className={styles.wrapper}>
           <div className={`container `}>
               <div className={styles.container}>
                   <h2 className={styles.title}> چرا الگوریتم؟</h2>
                   <div className={styles.itemsWrapper}>
                       <div className={styles.item}>
                           <img className={styles.icon} src="/images/section5/money-envelop.svg" alt=""/>
                           <h4 className={styles.itemTitle}>
                               نقد شوندگی بالا
                           </h4>
                           <p className={styles.description}>
                               صنـــدوق مانا الگوریـــتم دارای
                               ضمــانت نقدشوندگی است و در صورت ابطال واحد توسط
                               سرمایه‌گذار، مبلغ مورد درخواست در مــــــدت 3 تا 7
                               روز کـــــاری به حســــاب سرمایه‌گذاران واریز می‌شود.
                           </p>
                       </div>
                       <div className={styles.item}>
                           <img className={styles.icon} src="/images/section5/risk-chart.svg" alt=""/>
                           <h4 className={styles.itemTitle}>
                               ریسک مناسب
                           </h4>
                           <p className={styles.description}>
                               به علت پخش شدن هزینه‌های مدیریتی و اجــرایی
                               بین تمام ســرمایه‌گذاران، هــزینه سرمایه‌گذاری در صندوق‌ها
                               نسبت به خرید و فروش سهام به طور مستقـــیم پایین‌تر است.
                           </p>
                       </div>
                       <div className={styles.item}>
                           <img className={styles.icon} src="/images/section5/investment-chart.svg" alt=""/>

                           <h4 className={styles.itemTitle}>
                               سرمایه گذاری آسان
                           </h4>
                           <p className={`${styles.description} ${styles.noBorder}`}>
                               در صورت احراز هویت در سامانه سجام، ثبت‌نام به صورت اینترنتی و
                               غیرحضوری امکان پذیر است، همچنین صدور و ابطال واحدها
                               از طریق حساب کاربری، به صورت غیر حضوری انجام می گردد.


                           </p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Index;