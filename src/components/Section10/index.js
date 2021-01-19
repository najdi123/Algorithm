import React from 'react';
import styles from "./section10.module.scss";

const Index = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                همین حالا از کارشناسان ما مشاوره بگیرید.
            </h2>
            <button className={styles.actionButton}>
                درخواست مشاوره رایگان
            </button>
            <div className={styles.info}>
                <div className={styles.email}>
                    <img src="/images/section10/email-icon.svg" alt=""/>
                    <p className={styles.emailAddress}>
                        info@algocm.com
                    </p>

                </div>
                <div className={styles.phone}>
                    <img src="/images/section10/phone.svg" alt=""/>
                    <p className={styles.phoneNumber}>021 - 66972655</p>

                </div>
            </div>

        </div>
    );
};

export default Index;