import React,{useState} from 'react';
import styles from "./step.module.scss";

const Step2 = ({selectStep,activeStep}) => {
    const [input, setInput] = useState({
        username:"",
        phone:"",
        email:""

    })
    const handleChange = ({target: {name, value}}) => {
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    console.log(input)
    return (
        <div className={styles.step3}>
            <h3 className={styles.text1}>
                {activeStep==3 ? "مشاوران ما درخدمت شما" : "ما با شما تماس خواهیم گرفت."}

            </h3>
            <p className={styles.text2}>
                برای دریافت مشاوره برای سرمایه‌گذاری اطلاعات خود را ثبت کنید.
            </p>

            <form className={styles.form}>
                <input type="text"
                       className={styles.input}
                       id="user-icon"
                       placeholder="نام و نام‌خانوادگی"
                       onChange={handleChange}
                       value={input.username}
                       name="username"
                />
                <input type="text"
                       className={styles.input}
                       id="phone-icon"
                       placeholder="شماره تماس"
                       onChange={handleChange}
                       value={input.phone}
                       name="phone"
                />
                <input type="text"
                       className={styles.input}
                       id="email-icon"
                       placeholder="ایمیل( اختیاری)"
                       onChange={handleChange}
                       value={input.email}
                       name="email"
                />


            </form>
            <button
                className={styles.askButton2}
                onClick={()=>selectStep(input)}
            >
                درخواست مشاوره
            </button>


        </div>
    );
};

export default Step2;