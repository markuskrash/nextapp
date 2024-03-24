"use client"
import Styles from "./Game.module.css";
import {useContext, useEffect, useState} from "react";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {
    checkIfUserVoted,
    getJWT,
    getMe,
    getNormalizedGameDataById,
    isResponseOk,
    removeJWT,
    vote
} from "@/app/api/api-utils";
import {useStore} from "@/app/store/app-store";
import {GameNotFound} from "@/app/components/GameNotFound/GameNotFound";

export default function GamePage(props) {
    const authContext = useStore();
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

    const [isVoted, setIsVoted] = useState(false);

    useEffect(() => {
        if (authContext.user && game) {
            setIsVoted(checkIfUserVoted(game, authContext.user.id));
        } else {
            setIsVoted(false);
        }
    }, [authContext.user, game]);

    const handleVote = async () => {
        const jwt = getJWT();
        let usersIdArray = game.users.length
            ? game.users.map((user) => user.id)
            : [];
        usersIdArray.push(authContext.user.id);
        const response = await vote(
            `${endpoints.games}/${game.id}`,
            jwt,
            usersIdArray
        );
        if (isResponseOk(response)) {
            setIsVoted(true);
            setGame({
                    ...game,
                    users: [...game.users, authContext.user],
                }
            );
        }
        setIsVoted(true);
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
                            disabled={!authContext.isAuth || isVoted}
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
            <GameNotFound/>
        )

    )
}