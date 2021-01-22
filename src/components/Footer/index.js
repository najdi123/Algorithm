import React from 'react';
import styles from "./footer.module.scss";

const Index = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topSection}>
                <h3 className={styles.title}>
                    همکاران الگوریتم
                </h3>
                <div className={styles.logosWrapper}>
                    <div className={styles.topLogos}>
                        <img className={styles.logo1} src="/images/footer/kharazmi-logo.svg" alt=""/>
                        <img className={styles.logo2} src="/images/footer/koosha-logo.svg" alt=""/>
                        <img className={styles.logo3} src="/images/footer/dara-logo.svg" alt=""/>
                    </div>
                    <div className={styles.bottomLogos}>
                        <img className={styles.logo4} src="/images/footer/sarmaye-logo.svg" alt=""/>
                        <img className={styles.logo5} src="/images/footer/kharazmi2-logo.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.intro}>
                    <img src="/images/footer/algorithm-icon.svg" alt=""/>
                    <div>
                        <h3>
                            سبدگردان الگوریتم
                        </h3>
                        <h4>
                            همپای هم رشد میکنیم
                        </h4>
                    </div>
                </div>
                <div className={styles.contactUs}>
                    <div className={styles.topTitle}>
                        <div className={styles.border}></div>
                        <h4 className={styles.contactUsTitle}>
                            ارتباط با ما
                        </h4>
                        <div className={styles.border}></div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.phoneWrapper}>
                            <img src="/images/footer/phone-icon.svg" alt=""/>
                            <p className={styles.phone}>021 - 66972655</p>

                        </div>
                        <div className={styles.emailWrapper}>
                            <img src="/images/footer/email-icon.svg" alt=""/>
                            <p className={styles.email}>info@algocm.com</p>

                        </div>


                    </div>
                    <div className={styles.addressWrapper}>
                        <img src="/images/footer/location.svg" alt=""/>
                        <p className={styles.address}> خیابان ولیعصر، خیابان بزرگمهر، پلاک 16 طبقه چهارم، واحد 411</p>
                    </div>


                </div>
                <div className={styles.last}>
                    <div className={styles.bottomTitle}>
                        <div className={styles.border}></div>
                        <h4 className={styles.contactUsTitle}>
                            همیشه کنار شما
                        </h4>
                        <div className={styles.border}></div>
                    </div>
                    <div className={styles.socialMediaLinks}>
                        <img src="/images/footer/aparat-logo.svg" alt=""/>
                        <img src="/images/footer/telegram-logo.svg" alt=""/>
                        <img src="/images/footer/linkedin-logo.svg" alt=""/>
                        <img src="/images/footer/instagram-logo.svg" alt=""/>
                    </div>
                </div>
            </div>

            <div className={styles.designedByHarmony}>
                <p>
                    طراحی و اجرا توسط آژانس دیجیتال مارکتینگ
                    <span> هارمونی</span>
                </p>
            </div>
        </div>
    );
};

export default Index;