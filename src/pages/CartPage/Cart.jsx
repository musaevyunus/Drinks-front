import React from "react";

import styles from "./Cart.module.scss";

const Cart = () => {
  const [needDelivey, setNeedDelivey] = React.useState(false);

  return (
    <div className={styles.cart}>
      <div className={styles.cart_wrapper}>
        <div className={styles.cart_textRow}>
          <div className={styles.cart_bText}>Корзина</div>
          <div className={styles.cart_clear}>Очистить корзину</div>
        </div>
        <div className={styles.cart_items}>
          <div className={styles.cart_item}>
            <div className={styles.itemImg}>
              <img
                width={80}
                height={80}
                src="https://chefrestoran.ru/wp-content/uploads/2018/10/604655519.jpg"
                alt=""
              />
            </div>
            <div className={styles.itemName}>Бургер</div>
            <div className={styles.item_counter}>
              <div className={styles.item_plus} id={styles.item_action}>
                <button>-</button>
              </div>
              <div className={styles.itemCount}>1шт</div>
              <div className={styles.item_minus} id={styles.item_action}>
                <button>+</button>
              </div>
            </div>
            <div className={styles.itemPrice}>150₽</div>
            <div className={styles.itemDelete}>
              <button>x</button>
            </div>
          </div>
          <div className={styles.cart_item}>
            <div className={styles.itemImg}>
              <img
                width={80}
                height={80}
                src="https://chefrestoran.ru/wp-content/uploads/2018/10/604655519.jpg"
                alt=""
              />
            </div>
            <div className={styles.itemName}>Бургер</div>
            <div className={styles.item_counter}>
              <div className={styles.item_plus} id={styles.item_action}>
                <button>-</button>
              </div>
              <div className={styles.itemCount}>1шт</div>
              <div className={styles.item_minus} id={styles.item_action}>
                <button>+</button>
              </div>
            </div>
            <div className={styles.itemPrice}>150₽</div>
            <div className={styles.itemDelete}>
              <button>x</button>
            </div>
          </div>
        </div>
        <div className={styles.cart_checkoutItems}>
          <button>Оформить заказ</button>
        </div>
        <div className={styles.deliveryForm}>
          {needDelivey ? (
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
                <div className={styles.deliveryPrice}>Доставка по тарифу такси!</div>
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
