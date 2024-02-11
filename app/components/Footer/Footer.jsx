import Styles from "./Footer.module.css"

const Footer = () =>{
    return (
        <footer className={Styles["footer"]}>
            <a href="/" className={Styles["logo"]}>
                <span className={Styles["logo-name"]}>pindie</span>
                <span className={Styles["logo-copy"]}>, XXI век</span>
            </a>
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