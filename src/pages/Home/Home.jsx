import styles from "./Home.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdukt } from "../../redux/slices/produktSlice";

function Home() {
  const dispatch = useDispatch();
  const produkts = useSelector((state) => state.produkts.produkts);
  console.log(produkts);

  useEffect(() => {
    dispatch(fetchProdukt());
  }, [dispatch]);

  if (!produkts) {
    return "Error";
  }
  return (
    <div>
      <h1 className={styles.textMenu}>Burger Menu</h1>
      <div className={styles.divCointener}>
        {produkts.map((item) => {
          return (
            <div className={styles.divCointenerCard}>
              <div>
                {" "}
                <img
                  className={styles.img}
                  src={`http://localhost:4000/${item.image}`}
                  alt=""
                />
              </div>
              <div className={styles.divOpisanie}>
                <div><h1>{item.name}</h1></div>
                <div>{item.expo}</div>
                <div>{item.weight}гр.</div>
                <div className={styles.divPriceAndBtn}>
                <h2>{item.price}руб.</h2>{" "}
                <button>Добавить в корзину</button>{" "}
                  </div> 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
