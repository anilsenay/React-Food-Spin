import React, { ReactElement } from "react";
import styles from "./style.module.scss";

import ButtonImage from "../../assets/images/button.svg";

import { useStore } from "../../hooks/store.hook";

export default function Button(): ReactElement {
  const increaseIndex = useStore((state) => state.increaseIndex);
  const decreaseIndex = useStore((state) => state.decreaseIndex);

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonStyle} onClick={decreaseIndex}>
        <img
          src={ButtonImage}
          className={styles.buttonImage}
          alt="button"
          loading="lazy"
        />
      </div>
      <div className={styles.buttonStyle} onClick={increaseIndex}>
        <img
          src={ButtonImage}
          className={styles.buttonImage}
          alt="button"
          loading="lazy"
        />
      </div>
    </div>
  );
}
