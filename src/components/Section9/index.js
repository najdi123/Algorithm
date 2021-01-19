import React,{useState} from 'react';
import styles from "./section9.module.scss";
import {Accordion,Card, Button, Collapse } from "react-bootstrap"
import Question from "./question";

const Index = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>سوالات متداول</h2>
            <Question
                question="لورم ایپسوم با تولید متن ساختگی مورد استفاده طراحان گرافیک است؟"
                answer="لورم ایپسوم با تولید متن ساختگی مورد استفاده طراحان گرافیک است"
                open={open1} setOpen={setOpen1}
            />
            <Question
                question="لورم ایپسوم با تولید متن ساختگی؟"
                answer="لورم ایپسوم با تولید متن ساختگی مورد استفاده طراحان گرافیک است"
                open={open2} setOpen={setOpen2}
            />
            <Question
                question="لورم ایپسوم متن ساختگی است؟"
                answer= "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                open={open3} setOpen={setOpen3}
            />
            <Question
                question="لورم ایپسوم با تولید متن ساختگی مورد استفاده طراحان گرافیک است؟"
                answer= "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                open={open4} setOpen={setOpen4}
            />
            <Question
                question="لورم ایپسوم با تولید متن ساختگی؟"
                answer= "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                open={open5} setOpen={setOpen5}
            />
        </div>
    );
};

export default Index;