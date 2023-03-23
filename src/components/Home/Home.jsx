import styles from "./Home.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slices/productSlice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (!products) {
    return "Error";
  }
  return (
    <div>
      <h1 className={styles.textMenu}>Burger Menu</h1>
      <div className={styles.divCointener}>
        {products.map((item) => {
          if (item.category.name === "Бургеры")
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
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                  <div>{item.expo}</div>
                  <div>{item.weight}гр.</div>
                  <div className={styles.divPriceAndBtn}>
                    <h2>{item.price}₽</h2> <button>Добавить в корзину</button>{" "}
                  </div>
                </div>
              </div>
            );
        })}
        <div className={styles.divCointenerKombo}>
          {products.map((item) => {
            if (item.category.name === "Комбо") {
              return (
                <div className={styles.hover_text_one}>
                  <figure className={styles.effect_text_three}>
                    <img
                      className={styles.imgKombo}
                      src={`http://localhost:4000/${item.image}`}
                      alt=""
                    />
                    <figcaption>
                      <h3>
                        {item.name} <h4>{item.price}₽</h4>
                      </h3>
                      <p className={styles.expo}>{item.expo}</p>
                      <p>
                        <button className={styles.btn}>
                          Добавить в корзину
                        </button>
                      </p>
                    </figcaption>
                  </figure>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
