import styles from "./section7.module.scss";
import React,{useState} from "react";
import StepButtons from "./StepButtons";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Index = () => {
    const [activeStep,setActiveStep] = useState(1)
    const [step1,setStep1] = useState("")
    const [step2,setStep2] = useState("")
    const [step3,setStep3] = useState("")
    const selectStep =(value)=>{
        setStep1(value)
        setActiveStep(prevState => prevState+1)
    }
    const selectStep2 =(value)=>{
        setStep2(value)
        setActiveStep(prevState => prevState+1)
    }
    const selectStep3 =(value)=>{
        setStep3(value)
        setActiveStep(prevState => prevState+1)
    }
    console.log("step1: ",step1);
    console.log("step2: ",step2);
    console.log("step3: ",step3);
    return (
        <div className={styles.wrapper}>
           <StepButtons activeStep={activeStep}/>
            {   activeStep===1 &&
                <Step1 selectStep={selectStep}/>}
            {   activeStep===2 &&
                <Step2 selectStep={selectStep2}/>}
            {   activeStep >=3 &&
                <Step3 selectStep={selectStep3}
                       activeStep={activeStep}
                />}


        </div>
    );
};

export default Index;