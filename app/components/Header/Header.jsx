"use client"

import Styles from "./Header.module.css"
import {useContext, useEffect, useState} from "react";
import {Overlay} from "./../Overlay/Overlay";
import {Popup} from "./../Popup/Popup";
import {AuthForm} from "./../AuthForm/AuthForm";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useStore} from "@/app/store/app-store";

const Header = () => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);

    const openPopup = () => {
        setPopupIsOpened(true)
    };
    const closePopup = () => {
        setPopupIsOpened(false)
    };

    const pathname = usePathname();

    const authContext = useStore();

    const handleLogout = () => {
        authContext.logout();
    };

    return (
        <header className={Styles["header"]}>
            {pathname === "/" ?
                (<div className={Styles["logo"]}>
                    <img className={Styles["image"]} src="/images/logo.svg" alt="Логотип Pindie"/>
                </div>)
                :
                (<Link href="/" className={Styles["logo"]}>
                    <img className={Styles["image"]} src="/images/logo.svg" alt="Логотип Pindie"/>
                </Link>)
            }
            <nav className={Styles["menu"]}>
                <ul className={Styles["list"]}>
                    <li className={Styles["item"]}>
                        <Link href="/new" className={`${Styles["link"]} ${
                            pathname === "/new" ? Styles["link_active"] : ""
                        }`}>Новинки</Link>
                    </li>
                    <li className={Styles["item"]}>
                        <Link href="/popular" className={`${Styles["link"]} ${
                            pathname === "/popular" ? Styles["link_active"] : ""
                        }`}>Популярные</Link>
                    </li>
                    <li className={Styles["item"]}>
                        <Link href="/shooters" className={`${Styles["link"]} ${
                            pathname === "/shooters" ? Styles["link_active"] : ""
                        }`}>Шутеры</Link>
                    </li>
                    <li className={Styles["item"]}>
                        <Link href="/runners" className={`${Styles["link"]} ${
                            pathname === "/runners" ? Styles["link_active"] : ""
                        }`}>Ранеры</Link>
                    </li>
                    <li className={Styles["item"]}>
                        <Link href="/pixel-games" className={`${Styles["link"]} ${
                            pathname === "/pixel-games" ? Styles["link_active"] : ""
                        }`}>Пиксельные</Link>
                    </li>
                    <li className={Styles["item"]}>
                        <Link href="/tds" className={`${Styles["link"]} ${
                            pathname === "/tds" ? Styles["link_active"] : ""
                        }`}>TDS</Link>
                    </li>
                </ul>
                <div className={Styles["auth"]}>
                    {authContext.isAuth?
                        <button className={Styles["button"]} onClick={handleLogout}>Выйти</button>
                        :
                        <button className={Styles["button"]} onClick={openPopup}>Войти</button>}
                </div>
            </nav>
            <Overlay isOpened={popupIsOpened} close={closePopup}/>
            <Popup isOpened={popupIsOpened} close={closePopup}>
                <AuthForm close={closePopup}/>
            </Popup>
        </header>
    );
}

export default Header;