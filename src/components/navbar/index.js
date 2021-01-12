import styles from "./navbar.module.css";

const Index = () => {
    return (
        <div className={styles.navbarWrapper}>

            <div className={styles.leftBox}>
                <button className={styles.actionButton}>
                    شروع سرمایه گذاری
                </button>
                <div className={`${styles.phoneNumber} `}>
                    <i className="icon-contact-phone"></i>
                    <img className={styles.phoneIcon} src="/images/blue-phone.svg" alt=""/>
                    02166972655
                </div>
            </div>
            <div className={styles.navLogo}>
                سبدگردانی الگوریتم
            </div>
        </div>
    );
};

export default Index;