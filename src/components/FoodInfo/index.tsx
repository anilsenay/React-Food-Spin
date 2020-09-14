import React, { ReactElement } from "react";
import styles from "./style.module.scss";

import meals from "../../consts/meals";

import { useStore } from "../../hooks/store.hook";

interface Props {}

export default function FoodInfo({}: Props): ReactElement {
  const index = useStore((state) => state.index);
  const indexModule = ((index % 5) + 5) % 5;

  return (
    <div className={styles.container}>
      <span
        className={styles.price}
        style={{
          color:
            meals[indexModule].textColor || meals[indexModule].backgroundColor,
        }}
      >
        ${meals[indexModule].price}
      </span>
      <span className={styles.foodName}>{meals[indexModule].name}</span>
      <p className={styles.foodInfo}>{meals[indexModule].information}</p>
      <div
        className={styles.orderBtn}
        style={{
          backgroundColor: meals[indexModule].textColor,
          boxShadow: `0px 4px 14px 1px ${meals[indexModule].textColor}`,
          MozBoxShadow: `0px 4px 14px 1px ${meals[indexModule].textColor}`,
          WebkitBoxShadow: `0px 4px 14px 1px ${meals[indexModule].textColor}`,
        }}
        onClick={() => {}}
      >
        <span className={styles.orderText}>Order Now</span>
      </div>
    </div>
  );
}
