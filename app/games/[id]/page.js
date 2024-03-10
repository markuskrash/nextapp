"use client"
import Styles from "./Game.module.css";
import {useEffect, useState} from "react";
import {Overlay} from "@/app/components/Overlay/Overlay";
import {Popup} from "@/app/components/Popup/Popup";
import {AuthForm} from "@/app/components/AuthForm/AuthForm";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {
    authorize,
    checkIfUserVoted,
    getJWT,
    getMe,
    getNormalizedGameDataById,
    isResponseOk,
    removeJWT,
    vote
} from "@/app/api/api-utils";

export default function GamePage(props) {
    const [game, setGame] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const gameData = await getNormalizedGameDataById(endpoints.games, props.params.id);
            isResponseOk(gameData) ? setGame(gameData) : setGame(null);
            setPreloaderVisible(false);
        }

        fetchData();
    }, []);


    const [preloaderVisible, setPreloaderVisible] = useState(true);

    const [isAuthorized, setIsAuthorized] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const [isVoted, setIsVoted] = useState(false);

    useEffect(() => {
        if (currentUser && game) {
            setIsVoted(checkIfUserVoted(game, currentUser.id));
        } else {
            setIsVoted(false);
        }
    }, [currentUser, game]);

    useEffect(() => {
        const jwt = getJWT();
        if (jwt) {
            getMe(endpoints.me, jwt).then(
                (userData) => {
                    if (isResponseOk(userData)) {
                        setIsAuthorized(true);
                        setCurrentUser(userData);
                    } else {
                        setIsAuthorized(false);
                        removeJWT();
                    }
                }
            )

        }
    }, []);

    const handleVote = async () => {
        const jwt = getJWT();
        let usersIdArray = game.users.length
            ? game.users.map((user) => user.id)
            : [];
        usersIdArray.push(currentUser.id);
        const response = await vote(
            `${endpoints.games}/${game.id}`,
            jwt,
            usersIdArray
        );
        if (isResponseOk(response)) {
            setIsVoted(true);
            setGame({
                    ...game,
                    users: [...game.users, currentUser],
                }
            );
        }
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
                        <button
                            disabled={!isAuthorized || isVoted}
                            className={`button ${Styles["about__vote-button"]}`}
                            onClick={handleVote}
                        >
                            {isVoted ? "Голос учтён" : "Голосовать"}
                        </button>
                    </div>
                </section>
            </>
        ) : preloaderVisible ? (
            <Preloader/>
        ) : (
            <section className={Styles['game']}>
                <p>Такой игры не существует 😢</p>
            </section>
        )

    )
}