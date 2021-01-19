import React from 'react';
import styles from "./section9.module.scss";
import {Collapse} from "react-bootstrap";

const Question = ({open,setOpen, question, answer}) => {
    return (
        <div className={`${styles.cardHeader} ${open ? styles.borderRight : ""}`}>
            <div className={styles.question}>
                <p> {question}</p>
                <div
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}

                >
                    <img className={styles.dropDownButton}
                        src={open ? "/images/section9/close-drop-down-arrow.svg" : "/images/section9/drop-down-arrow.svg"} alt=""/>
                </div>
            </div>
            <Collapse in={open}>
                <div className={styles.answer}
                     id="example-collapse-text">
                    {answer}
                </div>
            </Collapse>
        </div>
    );
};

export default Question;