import styles from "./Home.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdukt } from "../../redux/slices/produktSlice";
import { addProductToCart, fetchCart } from "../../redux/slices/cartSlice";
import { fetchUsers } from "../../redux/slices/userSlice";

function Home() {
  const dispatch = useDispatch();
  const produkts = useSelector((state) => state.produkts.produkts);
  const loggedUser = useSelector((state) => state.users.loggedUser?.id);
  const userCart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    dispatch(fetchProdukt());
    dispatch(fetchUsers());
    dispatch(fetchCart(loggedUser));
  }, [dispatch]);
  if (!produkts) {
    return "Error";
  }

  const handleAddProductToCart = (item) => {
    dispatch(addProductToCart({ item, id: userCart?._id }));
  };

  return (
    <div>
      <h1 className={styles.textMenu}>Burger Menu</h1>
      <div className={styles.divCointener}>
        {produkts.map((item, index) => {
          return (
            <div className={styles.divCointenerCard} key={index}>
              <div>
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
                  <h2>{item.price}руб.</h2>{" "}
                  {userCart?.items.find(
                    (items) => items.item._id === item._id
                  ) ? (
                    <button>В корзине</button>
                  ) : (
                    <button onClick={() => handleAddProductToCart(item._id)}>
                      Добавить в корзину
                    </button>
                  )}
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
