import Styles from "./Header.module.css"

const Header = () => {
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
                    <button className={Styles["button"]}>Войти</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;