import React from 'react';
import styles from "./step.module.scss";

const Step1 = ({selectStep}) => {
    return (
        <div className={styles.step}>
            <h3 className={styles.question}>
                در کدام صندوق قصد سرمایه گذاری دارید؟
            </h3>
            <div className={styles.options}>
                <div className={styles.optionWrapper}>
                    <div
                        className={styles.option}
                        onClick={() => selectStep("مانا الگوریتم")}
                    >
                        <img className={styles.logo} src="/images/section7/dara-logo.svg" alt=""/>
                        <div className={styles.flexOnLarge}>
                            <h4 className={styles.mutualFund}>
                                مانا الگوریتم
                            </h4>
                            <p className={styles.detail}>
                                صندوق در سهام
                            </p>
                        </div>

                    </div>
                    <div className={styles.bottomStyle}></div>
                </div>
                <div className={styles.optionWrapper}>
                    <div className={styles.option}
                         onClick={() => selectStep("دارا الگوریتم")}
                    >
                        <img className={styles.logo} src="/images/section7/mana-logo.svg" alt=""/>
                        <div className={styles.flexOnLarge}>
                            <h4 className={styles.mutualFund}>
                                دارا الگوریتم
                            </h4>
                            <p className={styles.detail}>
                                صندوق با درآمد ثابت
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottomStyle}></div>
                </div>
                <div className={styles.optionWrapper}>
                    <div
                        className={styles.option}
                        onClick={() => selectStep("سبدگردانی اختصاصی")}
                    >
                        <img className={styles.logo} src="/images/section7/algorithm-logo.svg" alt=""/>
                        <div className={styles.flexOnLarge}>
                            <h4 className={styles.mutualFund}>
                                سبدگردانی اختصاصی
                            </h4>
                            <p className={styles.detail}>
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottomStyle}></div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.text}>
                    اگر نمیدانید کدام نوع سرمایه‌گذاری مناسب شماست، از ما کمک بگیرید.
                </p>
                <button className={styles.askButton}>
                    درخواست مشاوره رایگان
                </button>
            </div>
        </div>
    );
};

export default Step1;