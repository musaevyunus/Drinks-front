import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./Registration.module.scss";
import { registration } from "../../redux/slices/userSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegistration = () => {
    dispatch(registration({ username, password }));
    setUsername("");
    setPassword("");
  };

  return (
    <div className={styles.registration}>
      <div className={styles.registration_wrapper}>
        <div className={styles.registration_form}>
          <div className={styles.registration_bText}>Регистрация</div>
          <div className={styles.registration_login}>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите email"
            />
          </div>
          <div className={styles.registration_password}>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          <div className={styles.registrationButton}>
            <button onClick={handleRegistration}>Зарегистрироваться</button>
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
