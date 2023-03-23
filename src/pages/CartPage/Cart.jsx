import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearCart,
  deleteItemFromCart,
  fetchCart,
  itemMinus,
  itemPlus,
} from "../../redux/slices/cartSlice";
import { fetchUsers } from "../../redux/slices/userSlice";

import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const [needDelivey, setNeedDelivey] = React.useState(false);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchCart(id));
  }, dispatch);

  const cart = useSelector((state) => state.cart.cart);
  if (!cart) {
    return "Loading...";
  }
  const { items } = cart;

  if (!items) {
    return "Loading...";
  }

  const handleDeleteItemFromBasket = (itemId) => {
    dispatch(deleteItemFromCart({ id, itemId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart(id));
  };

  const handleItemPlus = (itemId, price) => {
    dispatch(itemPlus({ id, itemId, price }));
  };

  const handleItemMinus = (itemId, price, count) => {
    if (count > 1) {
      dispatch(itemMinus({ id, itemId, price }));
    }
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cart_wrapper}>
        <div className={styles.cart_textRow}>
          <div className={styles.cart_bText}>Корзина</div>
          <div className={styles.cart_clear} onClick={handleClearCart}>
            Очистить корзину
          </div>
        </div>
        {items.length ? (
          <div className={styles.cart_items}>
            {items.map((item, index) => {
              return (
                <div className={styles.cart_item} key={index}>
                  <div className={styles.itemImg}>
                    <img
                      width={80}
                      height={80}
                      src={`http://localhost:4000/${item.item.image}`}
                      alt=""
                    />
                  </div>
                  <div className={styles.itemName}>{item.item.name}</div>
                  <div className={styles.item_counter}>
                    <div className={styles.item_plus} id={styles.item_action}>
                      <button
                        onClick={() =>
                          handleItemMinus(item._id, item.item.price, item.count)
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className={styles.itemCount}>{item.count}шт</div>
                    <div className={styles.item_minus} id={styles.item_action}>
                      <button
                        onClick={() =>
                          handleItemPlus(item._id, item.item.price)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.itemPrice}>{item.item.price}₽</div>
                  <div className={styles.itemPrice}>
                    {item.item.price * item.count}₽
                  </div>
                  <div className={styles.itemDelete}>
                    <button
                      onClick={() => handleDeleteItemFromBasket(item._id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.cartEmptyText}>Корзина пуста</div>
        )}
        <div className={styles.totalPrice}>Итого: {cart.totalPrice}₽</div>
        <div className={styles.cart_checkoutItems}>
          <button>Оформить заказ</button>
        </div>
        <div className={styles.deliveryForm}>
          {needDelivey && items.length ? (
            <>
              <div
                className={styles.needDeliveyText}
                onClick={() => setNeedDelivey(!needDelivey)}
              >
                Мне не нужна доставка
              </div>
              <div className={styles.cart_address}>
                <div className={styles.adress_bText}>Введите адрес:</div>
                <div className={styles.addressInput}>
                  <input type="text" />
                  <span>г. Грозный ул. Трошева, 7</span>
                </div>
                <div className={styles.deliveryPrice}>
                  Доставка по тарифу такси!
                </div>
              </div>
            </>
          ) : (
            <div
              className={styles.needDeliveyText}
              id={styles.needDeliverySText}
              onClick={() => setNeedDelivey(!needDelivey)}
            >
              Мне нужна доставка
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
