import React, { ReactElement } from "react";
import styles from "./style.module.scss";

import ButtonImage from "../../assets/images/button.svg";

interface Props {}

export default function Button({}: Props): ReactElement {
  return (
    <div className={styles.buttonContainer}>
      <div>
        <img
          src={ButtonImage}
          className={styles.buttonStyle}
          alt="button"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src={ButtonImage}
          className={styles.buttonStyle}
          alt="button"
          loading="lazy"
        />
      </div>
    </div>
  );
}
