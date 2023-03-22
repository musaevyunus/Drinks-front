import React from "react";
import "./header.css";
import logo from "../../assets/img/logo.jpg"
import insta from "../../assets/img/insta.png"
import whatsapp from "../../assets/img/whatsapp.png"
import telegram from "../../assets/img/telegram.png"
import mail from "../../assets/img/mail.png"
import login from "../../assets/img/login.svg"

export default function Header() {
    return (
        <>
        <div className="header">
            <div className="tabs">
            <div className="home"><a className="home_href" href="">Домой</a></div>
            <div className="menu"><a className="menu_href" href="">Меню</a></div>
            <div className="dostavka"><a className="dostavka_href" href="">Доставка</a></div>
            <div className="o_nas"><a className="o_nas_href" href="">О нас</a></div>
            </div>
            <div className="logo"><img src={logo} alt="err" /></div>
            <div className="svyaz">
            <div className="socseti">
                <img className="inst" src={insta} alt="" />
                <img className="whatsapp" src={whatsapp} alt="" />
                <img className="telegram" src={telegram} alt="" />
                <img className="mail" src={mail} alt="" />
            </div>
            <div className="telefon">+7(988) 908-88-45</div>
            <div className="butimg">
            <button className="vhod">Войти</button>
            <img className="login" src={login} alt="" />
            </div>
            </div>
        </div>
        </>
    )
}