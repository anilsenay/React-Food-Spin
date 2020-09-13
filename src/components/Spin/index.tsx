import React, { ReactElement, useState } from "react";
import styles from "./style.module.scss";

import spinImage from "../../assets/images/spin.svg";

import Button from "./spin_button";

interface Props {}

export default function Spin({}: Props): ReactElement {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <div className={styles.container}>
        <img
          src={spinImage}
          className={styles.spinImage}
          alt="spin"
          loading="lazy"
          style={{ rotate: `${imageIndex * 36}deg` }}
        />
      </div>
      <Button setImageIndex={setImageIndex} imageIndex={imageIndex} />
    </>
  );
}
