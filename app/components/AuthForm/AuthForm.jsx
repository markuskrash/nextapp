"use client"
import Styles from './AuthForm.module.css';
import {useEffect, useState} from "react";
import {authorize, getJWT, getMe, isResponseOk, setJWT} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export const AuthForm = (props) => {
    const [authData, setAuthData] = useState({identifier: "", password: ""});
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState({status: null, text: null});

    const handleInput = (e) => {
        const newAuthData = authData;
        newAuthData[e.target.name] = e.target.value;
        setAuthData(newAuthData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await authorize(endpoints.auth, authData);
        if (isResponseOk(userData)) {
            setUserData(userData);
            setJWT(userData.jwt);
            props.setAuth(true);
            setMessage({status: "success", text: "Вы авторизовались!"});
        } else {
            setMessage({status: "error", text: "Неверные почта или пароль"});
        }
    };

    useEffect(() => {
        let timer;
        if (userData) {
            timer = setTimeout(() => {
                props.close();
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [userData]);

    return (
        <form onSubmit={handleSubmit} className={Styles['form']}>
            <h2 className={Styles['form__title']}>Авторизация</h2>
            <div className={Styles['form__fields']}>
                <label className={Styles['form__field']}>
                    <span className={Styles['form__field-title']}>Email</span>
                    <input onInput={handleInput} className={Styles['form__field-input']} name="identifier" type="email"
                           placeholder="hello@world.com"/>
                </label>
                <label className={Styles['form__field']}>
                    <span className={Styles['form__field-title']}>Пароль</span>
                    <input onInput={handleInput} className={Styles['form__field-input']} name="password" type="password"
                           placeholder='***********'/>
                </label>
            </div>
            {message.status && (
                <p className={Styles["form__message"]}>{message.text}</p>
            )}
            <div className={Styles['form__actions']}>
                <button className={Styles['form__reset']} type="reset">Очистить</button>
                <button className={Styles['form__submit']} type="submit">Войти</button>
            </div>
        </form>
    )
};
