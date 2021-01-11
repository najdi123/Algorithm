import styles from "./navbar.module.css";

const Index = () => {
    return (
        <div className={styles.navbarWrapper}>

            <div>
                <button className={styles.actionButton}>
                    شروع سرمایه گذاری
                </button>
            </div>
            <div className={styles.navLogo}>
                سبدگردانی الگوریتم
            </div>
        </div>
    );
};

export default Index;