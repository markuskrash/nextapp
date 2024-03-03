"use client"
import Styles from "./Game.module.css";
import {getGameById} from "../../data/data-utils";
import {useState} from "react";
import {Overlay} from "@/app/components/Overlay/Overlay";
import {Popup} from "@/app/components/Popup/Popup";
import {AuthForm} from "@/app/components/AuthForm/AuthForm";

export default function GamePage(props) {
    const game = getGameById(props.params.id);
    const [popupIsOpened, setPopupIsOpened] = useState(false);

    const openPopup = () => {
        setPopupIsOpened(true)
    };
    const closePopup = () => {
        setPopupIsOpened(false)
    };
    return (
            game ? (
                <>
                    <section className={Styles['game']}>
                        <iframe className={Styles['game__iframe']} src={game.link}></iframe>
                    </section>
                    <section className={Styles['about']}>
                        <h2 className={Styles['about__title']}>{game.title}</h2>
                        <div className={Styles['about__content']}>
                            <p className={Styles["about__description"]}>{game.description}</p>
                            <div className={Styles["about__author"]}>
                                <p>Автор: <span className={Styles["about__accent"]}>{game.developer}</span></p>
                            </div>
                        </div>
                        <div className={Styles["about__vote"]}>
                            <p className={Styles["about__vote-amount"]}>За игру уже проголосовали: <span
                                className={Styles["about__accent"]}>{game.users.length}</span></p>
                            <button onClick={openPopup} className={`button ${Styles["about__vote-button"]}`}>Голосовать
                            </button>
                        </div>
                    </section>
                    <Overlay isOpened={popupIsOpened} close={closePopup}/>
                    <Popup isOpened={popupIsOpened} close={closePopup}>
                        <AuthForm/>
                    </Popup>
                </>
            ) : (
                <section className={Styles['game']}>
                    <p>Такой игры не существует 😢</p>
                </section>
            )

    )
}