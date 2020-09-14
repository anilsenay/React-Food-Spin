import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/cart.svg";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <a href="#">
        <img src={logo} className={styles.logo} alt="logo" />
      </a>
      <div className={styles.headerItems}>
        <a className={styles.headerItem} href="#">
          Breakfast
        </a>
        <a className={styles.headerItem} href="#">
          Lunch
        </a>
        <a className={styles.headerItem} href="#">
          Dinner
        </a>
      </div>
      <img src={cart} className={styles.cart} alt="cart" />
    </div>
  );
}
