import React, { ReactElement } from "react";
import styles from "./style.module.scss";

import ButtonImage from "../../assets/images/button.svg";

interface Props {
  setImageIndex: any;
  imageIndex: number;
}

export default function Button({
  setImageIndex,
  imageIndex,
}: Props): ReactElement {
  return (
    <div className={styles.buttonContainer}>
      <div
        className={styles.buttonStyle}
        onClick={() => setImageIndex(imageIndex - 1)}
      >
        <img
          src={ButtonImage}
          className={styles.buttonImage}
          alt="button"
          loading="lazy"
        />
      </div>
      <div
        className={styles.buttonStyle}
        onClick={() => setImageIndex(imageIndex + 1)}
      >
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
