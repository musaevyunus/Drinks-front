import React from "react";
import { Link } from "react-router-dom";

import styles from "./Registration.module.scss";

const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.registration_wrapper}>
        <div className={styles.registration_form}>
          <div className={styles.registration_bText}>Регистрация</div>
          <div className={styles.registration_login}>
            <input type="email" placeholder="Введите email" />
          </div>
          <div className={styles.registration_password}>
            <input type="text" placeholder="Введите пароль" />
          </div>
          <div className={styles.registrationButton}>
            <button>Зарегистрироваться</button>
          </div>
          <div className={styles.hasAccauntText}>
            <Link to={"/authorization"}>У меня есть аккаунт</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
