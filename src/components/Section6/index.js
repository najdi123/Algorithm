import styles from "./section6.module.scss";
import Card from "./card";
import Carousel from 'react-elastic-carousel';

const Index = () => {

    const breakPoints = [
        //from the breakpoint and up it will effect
        {width: 300, itemsToShow: 1},
        // {width: 570, itemsToShow: 2},
        {width: 690, itemsToShow: 2},


    ];

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>روش‌های سرمایه گذاری در الگوریتم</h2>
            <div className={styles.itemsWrapper}>

                <div className={styles.showOnSmallScreen}>
                    <Carousel
                        itemsToShow={1} showArrows={false} isRTL={true}
                        breakPoints={breakPoints}
                    >
                        <Card
                            cardTitle1="صندوق سرمایه‌گذاری دارا الگوریتم"
                            cardTitle2Percentage="26.7%"
                            title2description="بازدهی در سال گذشته"
                            type="صندوق با درآمد ثابت"
                            description1="پرداخت سود ماهانه"
                            description2="سود روزشمار بدون نرخ شکست"
                            description3="افزایش یا کاهش سرمایه‌گذاری در هر زمان"
                            description4="قابل معامله در بازار فرابورس"
                        />
                        <Card
                            cardTitle1="صندوق سرمایه‌گذاری مانا الگوریتم"
                            cardTitle2Percentage="365%"
                            title2description="بازدهی در سال گذشته"
                            type="صندوق در سهام"
                            description1="کارمزد خرید و فروش پایین"
                            description2="سرمایه‌گذاری متمرکز در سهام"
                            description3="امکان خرید و فروش حضوری و آنلاین"
                            description4="نقد شوندگی ۳ تا ۷ روز کاری"
                        />
                        <Card
                            cardTitle1="سبدگردانی اختصاصی"
                            cardTitle2Percentage="315%"
                            title2description="بازدهی در سال گذشته"
                            type="سبدگردانی اختصاصی"
                            description1="ایجاد سبداختصاصی با اهداف سرمایه‌گذار"
                            description2="تعیین سطح ریسک سرمایه‌گذار"
                            description3="گزارش دهی منظم"
                            description4="دریافت کارمزد با توجه به عملکرد"
                        />
                    </Carousel>
                </div>
                <div className={styles.showOnLargeScreen}>
                    <Card
                        cardTitle1="صندوق سرمایه‌گذاری دارا الگوریتم"
                        cardTitle2Percentage="26.7%"
                        title2description="بازدهی در سال گذشته"
                        type="صندوق با درآمد ثابت"
                        description1="پرداخت سود ماهانه"
                        description2="سود روزشمار بدون نرخ شکست"
                        description3="افزایش یا کاهش سرمایه‌گذاری در هر زمان"
                        description4="قابل معامله در بازار فرابورس"
                    />
                    <Card
                        cardTitle1="صندوق سرمایه‌گذاری مانا الگوریتم"
                        cardTitle2Percentage="365%"
                        title2description="بازدهی در سال گذشته"
                        type="صندوق در سهام"
                        description1="کارمزد خرید و فروش پایین"
                        description2="سرمایه‌گذاری متمرکز در سهام"
                        description3="امکان خرید و فروش حضوری و آنلاین"
                        description4="نقد شوندگی ۳ تا ۷ روز کاری"
                    />
                    <Card
                        cardTitle1="سبدگردانی اختصاصی"
                        cardTitle2Percentage="315%"
                        title2description="بازدهی در سال گذشته"
                        type="سبدگردانی اختصاصی"
                        description1="ایجاد سبداختصاصی با اهداف سرمایه‌گذار"
                        description2="تعیین سطح ریسک سرمایه‌گذار"
                        description3="گزارش دهی منظم"
                        description4="دریافت کارمزد با توجه به عملکرد"
                    />
                </div>
            </div>
        </div>
    );
};

export default Index;