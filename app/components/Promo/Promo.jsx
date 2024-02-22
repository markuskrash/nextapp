"use client"
import Styles from "./Promo.module.css"
import {useState, useEffect} from "react";

const Promo = () => {

    const [codeIsVisible, setCodeIsVisible] = useState(false);

    const handleButtonClick = () => {
        if (codeIsVisible === false) {
            setCodeIsVisible(true);
        }
    }

    useEffect(() => {
        let timeout;
        if (codeIsVisible) {
            timeout = setTimeout(() => {
                setCodeIsVisible(false);
            }, 5000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [codeIsVisible]);

    return (
        <section className={Styles["promo"]}>
            <div className={Styles["description-block"]}>
                <h2 className={Styles["title"]}>Твой промо-код</h2>
                <p className={Styles["description"]}>Скидка на все курсы Яндекс Практикума для пользователей нашего
                    сайта!</p>
                <button className={`button ${Styles["button"]}`} onClick={handleButtonClick}>{codeIsVisible === true ?
                    <span className={Styles["promo-code"]}>WEBTEENS10</span> : "Получить код"}</button>
            </div>
            <img src="/images/promo-illustration.svg" alt="Собака" className={Styles["image"]}/>
        </section>
    )
}

export default Promo