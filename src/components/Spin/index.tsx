import React, { ReactElement } from "react";
import styles from "./style.module.scss";

import spinImage from "../../assets/images/spin.svg";

import Button from "./spin_button";

interface Props {}

export default function Spin({}: Props): ReactElement {
  return (
    <>
      <div className={styles.container}>
        <img
          src={spinImage}
          className={styles.spinImage}
          alt="spin"
          loading="lazy"
        />
      </div>
      <Button />
    </>
  );
}
