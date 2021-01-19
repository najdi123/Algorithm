import React from 'react';
import styles from "./section6.module.scss";

const Card = ({cardTitle1,cardTitle2Percentage,title2description,type,
                  description1,description2,description3,description4}) => {
    return (
        <div className={styles.item}>
            <img className={styles.cardIcon} src="/images/section6/card-icon.svg" alt=""/>
            <h3 className={styles.cardTitle1}>
                {cardTitle1}
            </h3>
            <div className={styles.cardTitle2}>
                <span className={styles.percentage}>
                    {cardTitle2Percentage}
                </span>
                <div className={styles.title2description}>
                    {title2description}
                </div>
            </div>
            <div className={styles.type}>
                {type}
            </div>
            <div className={styles.description}>
                <p>
                    <img className={styles.checkMark} src="/images/section6/check-mark.svg" alt=""/>
                    {description1}
                </p>
                <p>
                    <img className={styles.checkMark} src="/images/section6/check-mark.svg" alt=""/>
                    {description2}
                </p>
                <p>
                    <img className={styles.checkMark} src="/images/section6/check-mark.svg" alt=""/>
                    {description3}
                </p>
                <p>
                    <img className={styles.checkMark} src="/images/section6/check-mark.svg" alt=""/>
                    {description4}
                </p>
            </div>

            <button className={styles.moreInfo}>
                اطلاعات بیشتر
            </button>
        </div>
    );
};

export default Card;