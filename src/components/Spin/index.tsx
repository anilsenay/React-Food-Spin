import React, { ReactElement, useState } from "react";
import styles from "./style.module.scss";

import spinImage from "../../assets/images/spin.svg";

import Button from "./spin_button";

import { useStore } from "../../hooks/store.hook";
import PhotoShown from "./photo_shown";

interface Props {}

export default function Spin({}: Props): ReactElement {
  const [imageIndex, setImageIndex] = useState(0);
  const index = useStore((state) => state.index);
  return (
    <>
      <div className={styles.container}>
        <img
          src={spinImage}
          className={styles.spinImage}
          alt="spin"
          loading="lazy"
          style={{ rotate: `${index * 36}deg` }}
        />
      </div>
      <PhotoShown />
      <Button setImageIndex={setImageIndex} imageIndex={imageIndex} />
    </>
  );
}
