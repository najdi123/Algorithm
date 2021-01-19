import React from 'react';
import styles from "./section8.module.scss";
import Slider from "react-slick";

const Index = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title1}>
                همپای هم رشد میکنیم
            </h2>
            <h3 className={styles.title2}>
                تیم همپای شما در الگوریتم
            </h3>
            <div >
                <Slider {...settings}>
                    <div className={styles.carouselWrapper}>
                        <div className={styles.carousel}>
                            <img className={styles.advisorImage} src="/images/section8/ArashGholizade.svg" alt=""/>
                            <h2 className={styles.name}>
                                آرش قلی زاده
                            </h2>
                            <h3 className={styles.title}>
                                عضو هیئت مدیره و مدیرعامل
                            </h3>
                            <div className={styles.border}></div>
                            <p className={styles.description}>
                                آرش آقاقلیزاده دانش آموخته MBA است و سطح
                                دو CFA را گذرانده است. وی در سمت مدیرعامل، هدایت شرکت را
                                عهده دار است. تجارب حرفه‌ای و فعالیتهای علمی آرش آقاقلیزاده
                                در حوزه سرمایه‌گذاری، در کنار ذهن فعال و پر انرژی وی، باعث
                            </p>
                        </div>
                    </div>
                    <div className={styles.carouselWrapper}>
                        <div className={styles.carousel}>
                            <img className={styles.advisorImage} src="/images/section8/AmirVafaee.svg" alt=""/>
                            <h2 className={styles.name}>
                                امیر وفائی
                            </h2>
                            <h3 className={styles.title}>
                                نائب رئیس هیئت مدیره
                            </h3>
                            <div className={styles.border}></div>
                            <p className={styles.description}>
                                 آرش آقاقلیزاده دانش آموخته MBA
                                است و سطح دو CFA را گذرانده است. وی در
                                سمت مدیرعامل، هدایت شرکت را عهده دار
                                است. تجارب حرفه‌ای و فعالیتهای علمی
                                آرش آقاقلیزاده در حوزه سرمایه‌گذاری،
                                در کنار ذهن فعال و پر انرژی وی، باعث
                            </p>
                        </div>
                    </div>
                    <div className={styles.carouselWrapper}>
                        <div className={styles.carousel}>
                            <img className={styles.advisorImage} src="/images/section8/ArashGholizade.svg" alt=""/>
                            <h2 className={styles.name}>
                                آرش قلی زاده
                            </h2>
                            <h3 className={styles.title}>
                                عضو هیئت مدیره و مدیرعامل
                            </h3>
                            <div className={styles.border}></div>
                            <p className={styles.description}>
                                آرش آقاقلیزاده دانش آموخته MBA است و سطح
                                دو CFA را گذرانده است. وی در سمت مدیرعامل، هدایت شرکت را
                                عهده دار است. تجارب حرفه‌ای و فعالیتهای علمی آرش آقاقلیزاده
                                در حوزه سرمایه‌گذاری، در کنار ذهن فعال و پر انرژی وی، باعث
                            </p>
                        </div>
                    </div>

                </Slider>

            </div>
        </div>
    );
};

export default Index;