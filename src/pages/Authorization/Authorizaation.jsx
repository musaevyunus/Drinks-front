import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Authorization.module.scss";
import { authorization, fetchUsers } from "../../redux/slices/userSlice";

const Authorization = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAuthorization = () => {
    dispatch(authorization({ username, password }));
    setUsername("");
    setPassword("");
  };

  return (
    <div className={styles.authorization}>
      <div className={styles.authorization_wrapper}>
        <div className={styles.authorization_form}>
          <div className={styles.authorization_bText}>Авторизация</div>
          <div className={styles.authorization_login}>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите email"
            />
          </div>
          <div className={styles.authorization_password}>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          <div className={styles.authorization_button}>
            <button onClick={handleAuthorization}>Войти в аккаунт</button>
          </div>
          <div className={styles.dontHaveAccauntText}>
            <Link to={"/registration"}>У меня нет аккаунта</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
