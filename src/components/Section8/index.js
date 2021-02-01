import React, {useEffect, useState} from 'react';
import styles from "./section8.module.scss";
import Slider from "react-slick";

const Index = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     centerMode: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    const settings = {
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "22%",
        responsive: [
            {
                breakpoint: 6500,
                settings: {
                    // centerPadding: "22%",

                    slidesToShow: 4,
                    centerPadding: "0%",
                    centerMode: true,
                },
            },
            {
                breakpoint: 2500,
                settings: {
                    // centerPadding: "22%",

                    slidesToShow: 4,
                    centerPadding: "0%",
                    centerMode: true,
                },
            },
            {
                breakpoint: 1800,
                settings: {
                    // centerPadding: "22%",

                    slidesToShow: 4,
                    centerPadding: "0%",
                    centerMode: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "8%",
                    centerMode: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "12%",
                    centerMode: true,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "8%",
                    centerMode: true,
                },
            },
            ,
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "5%",
                    centerMode: true,
                },
            },
            {
                breakpoint: 610,
                settings: {

                    centerPadding: "20%",
                    centerMode: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "15%",
                },
            },
            {
                breakpoint: 415,
                settings: {
                    centerPadding: "13%",
                },
            },
            {
                breakpoint: 390,
                settings: {
                    centerPadding: "11%",
                },
            },
            {
                breakpoint: 365,
                settings: {
                    centerPadding: "8%",
                },
            },
        ],
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
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
                                <img className={styles.advisorImage} src="/images/section8/BahmanEsmaeeli.svg" alt=""/>
                                <h2 className={styles.name}>
                                    بهمن اسماعیلی
                                </h2>
                                <h3 className={styles.title}>
                                    مدیر سرمایه‌گذاری
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
                                <img className={styles.advisorImage} src="/images/section8/NajibeKhoshroo.svg" alt=""/>
                                <h2 className={styles.name}>
                                    نجیبه خوشرو
                                </h2>
                                <h3 className={styles.title}>
                                    مدیرگروه مشاور سرمایه‌گذاری
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
        </div>
    );
};

export default Index;