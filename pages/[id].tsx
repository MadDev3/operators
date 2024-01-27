import { useRouter } from "next/router";
import styles from "@/app/page.module.css";
import styled from "styled-components";
import Main from "@/app/components/Main";
import Screen from "@/app/components/Screen";
import InputMask from "react-input-mask";
import PayBtn from "@/app/components/PayBtn";
import {useState} from "react";

export default function operator() {

    const router = useRouter();
    const {title} = router.query;
    const [number, setNumber] = useState('');
    const [money, setMoney] = useState('');

    const onChange = (e: {target: {value: string, name: string}}) => {
        if (e.target.name === 'number')
            setNumber(e.target.value);
        else
            setMoney(e.target.value)
    }

    const pay = () => {
        const currentMoney = Number(money.slice(0, -2))
        if (number.length < 18 || currentMoney < 1 || currentMoney > 1000) {
            alert("Check fields. Min 1₽ Max 1000₽ ")
        }
        if (number.length === 18 && currentMoney >= 1 && currentMoney <= 1000) {
            const error = Math.floor(Math.random() * 2);
            if (error === 1) {
                router.push('/')
            }
            else {
                alert('Error!')
            }
        }
    }

    const CurrentOperator = styled.div`
      background-color: #4a58f1;
      border: none;
      outline: none;
      height: 60px;
      border-radius: 15px;
      color: white;
      font-size: 18px;
      padding: 0 15px;
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Roboto Mono", sans-serif;
    `


    return (
        <Main>
            <Screen>
                <CurrentOperator>{title}</CurrentOperator>
                <InputMask name="number" onChange={onChange} value={number} placeholder={'+7'} className={styles.input} maskPlaceholder={null} mask="+7 (999) 999-99-99" />
                <InputMask name="money" onChange={onChange} value={money} alwaysShowMask={true} className={styles.input} mask="9999 ₽" maskPlaceholder=" " />
                <PayBtn onClick={pay}>Оплатить</PayBtn>
            </Screen>
        </Main>
    );
}
