import React from "react";
import { Link } from "react-router-dom";

import styles from "./Authorization.module.scss";

const Authorization = () => {
  return (
    <div className={styles.authorization}>
      <div className={styles.authorization_wrapper}>
        <div className={styles.authorization_form}>
          <div className={styles.authorization_bText}>Авторизация</div>
          <div className={styles.authorization_login}>
            <input type="email" placeholder="Введите email" />
          </div>
          <div className={styles.authorization_password}>
            <input type="text" placeholder="Введите пароль" />
          </div>
          <div className={styles.authorization_button}>
            <button>Войти в аккаунт</button>
          </div>
          <div className={styles.dontHaveAccauntText}><Link to={'/registration'}>У меня нет аккаунта</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
