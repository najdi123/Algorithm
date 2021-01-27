import React from 'react';
import styles from "./step.module.scss";

const Step2 = ({selectStep}) => {
    return (
        <div className={styles.step}>
            <h3 className={styles.question}>
                در کدام صندوق قصد سرمایه گذاری دارید؟
            </h3>
            <div className={styles.options}>
                <div className={styles.optionWrapper}>
                    <div
                        className={styles.option}
                        onClick={() => selectStep("بالای 1 میلیارد تومان")}
                    >
                        <img className={styles.logo2} src="/images/section7/high.svg" alt=""/>
                        <div className={styles.flexOnLarge}>
                            <h4 className={styles.mutualFund}>
                                بالای 1 میلیارد تومان
                            </h4>
                        </div>
                    </div>
                    <div className={styles.bottomStyle}></div>
                </div>
                <div className={styles.optionWrapper}>
                    <div className={styles.option}
                         onClick={() => selectStep("بین 200 میلیون تا 1 میلیارد تومان")}
                    >
                        <img className={styles.logo2} src="/images/section7/medium.svg" alt=""/>
                        <div className={styles.flexOnLarge}>
                            <h4 className={styles.mutualFund}>
                                بین 200 میلیون تا 1 میلیارد تومان
                            </h4></div>
                    </div>
                    <div className={styles.bottomStyle}></div>
                </div>
                <div className={styles.optionWrapper}>
                    <div
                        className={styles.option}
                        onClick={() => selectStep("زیر 200 میلیون تومان")}
                    >
                        <img className={styles.logo2} src="/images/section7/low.svg" alt=""/>
                        <div className={styles.flexOnLarge}>
                            <h4 className={styles.mutualFund}>
                                زیر 200 میلیون تومان
                            </h4>
                        </div>
                    </div>
                    <div className={styles.bottomStyle}></div>
                </div>
            </div>
        </div>
    );
};

export default Step2;