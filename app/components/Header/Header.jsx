"use client"

import Styles from "./Header.module.css"
import {useState} from "react";
import {Overlay} from "./../Overlay/Overlay";
import {Popup} from "./../Popup/Popup";
import {AuthForm} from "./../AuthForm/AuthForm";

const Header = () => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);

    const openPopup = () => {setPopupIsOpened(true)};
    const closePopup = () => {setPopupIsOpened(false)};
    return (
        <header className={Styles["header"]}>
            <a href="/" className={Styles["logo"]}>
                <img className={Styles["image"]} src="/images/logo.svg" alt="Логотип Pindie"/>
            </a>
            <nav className={Styles["menu"]}>
                <ul className={Styles["list"]}>
                    <li className={Styles["item"]}>
                        <a href="" className={Styles["link"]}>Новинки</a>
                    </li>
                    <li className={Styles["item"]}>
                        <a href="" className={Styles["link"]}>Популярные</a>
                    </li>
                    <li className={Styles["item"]}>
                        <a href="" className={Styles["link"]}>Шутеры</a>
                    </li>
                    <li className={Styles["item"]}>
                        <a href="" className={Styles["link"]}>Ранеры</a>
                    </li>
                    <li className={Styles["item"]}>
                        <a href="" className={Styles["link"]}>Пиксельные</a>
                    </li>
                    <li className={Styles["item"]}>
                        <a href="" className={Styles["link"]}>TDS</a>
                    </li>
                </ul>
                <div className={Styles["auth"]}>
                    <button className={Styles["button"]} onClick={openPopup}>Войти</button>
                </div>
            </nav>
            <Overlay isOpened={popupIsOpened} close={closePopup}/>
            <Popup isOpened={popupIsOpened} close={closePopup}>
                <AuthForm />
            </Popup>
        </header>
    );
}

export default Header;