"use client"
import Styles from "./Footer.module.css"
import {usePathname} from "next/navigation";
import Link from "next/link";

const Footer = () =>{
    const pathname = usePathname()
    return (
        <footer className={Styles["footer"]}>
            {pathname === "/"?
                <div className={Styles["logo"]}>
                    <span className={Styles["logo-name"]}>pindie</span>
                    <span className={Styles["logo-copy"]}>, XXI век</span>
                </div>
                :
                <a href="/" className={Styles["logo"]}>
                    <span className={Styles["logo-name"]}>pindie</span>
                    <span className={Styles["logo-copy"]}>, XXI век</span>
                </a>
            }
            <ul className={Styles["social-list"]}>
                <li className={Styles["item"]}>
                    <a href="" className={`button ${Styles["link"]}`}>YT</a>
                </li>
                <li className={Styles["item"]}>
                    <a href="" className={`button ${Styles["link"]}`}>ВК</a>
                </li>
                <li className={Styles["item"]}>
                    <a href="" className={`button ${Styles["link"]}`}>TG</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;