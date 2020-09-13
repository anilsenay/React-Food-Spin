import React, { ReactElement } from "react";
import styles from "./style.module.scss";

interface Props {}

export default function FoodInfo({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <span className={styles.price}>$35</span>
      <span className={styles.foodName}>Asian Cucumber Salad</span>
      <p className={styles.foodInfo}>
        Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine
        vinegar, and a few secret ingredients!
      </p>
      <div className={styles.orderBtn} onClick={() => {}}>
        <span className={styles.orderText}>Order Now</span>
      </div>
    </div>
  );
}
