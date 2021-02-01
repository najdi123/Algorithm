import React from 'react';
import styles from "./stepButtons.module.scss";

const StepButtons = ({activeStep,setActiveStep}) => {
    return (
        <div>
            <div className={styles.stepButtons}>
                <div className={`${styles.step}`}
                     onClick={()=>setActiveStep(1)}
                >
                    <div className={`${styles.stepTitle} ${styles.activeStepTitle}`}>
                        انتخاب صندوق
                    </div>
                    <div className={`${styles.stepButton} ${styles.activeStepButton}`}>

                    </div>
                </div>
                <div className={`${styles.step}`}
                     onClick={()=>setActiveStep(2)}
                >
                    <div className={`${styles.stepTitle} ${activeStep >= 2 ?  styles.activeStepTitle : ""}`}>
                        میزان سرمایه
                    </div>
                    <div className={`${styles.stepButton} ${activeStep >= 2 ? styles.activeStepButton : ""}`}>

                    </div>
                </div>
                <div className={`${styles.step}`}
                     onClick={()=>setActiveStep(3)}
                >
                    <div className={`${styles.stepTitle} ${activeStep >= 3 ?  styles.activeStepTitle : ""}`}>
                        ثبت نهایی
                    </div>
                    <div className={`${styles.stepButton} ${activeStep >= 3 ? styles.activeStepButton : ""}`}>

                    </div>
                </div>

            </div>
            <div className={styles.dottedLine}></div>
        </div>
    );
};

export default StepButtons;