import React, { ReactElement, useState } from "react";
import styles from "./style.module.scss";

import spinImage from "../../assets/images/spin.svg";
import meals from "../../consts/meals";

import Button from "./spin_button";
import PhotoShown from "./photo_shown";

import { useStore } from "../../hooks/store.hook";

export default function Spin(): ReactElement {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const index: number = useStore((state) => state.index);

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundColor: meals[((index % 5) + 5) % 5].backgroundColor,
        }}
      >
        <img
          src={spinImage}
          className={styles.spinImage}
          alt=""
          loading="lazy"
          style={{ rotate: `${index * 36}deg` }}
        />
      </div>
      <PhotoShown />
      <Button setImageIndex={setImageIndex} imageIndex={imageIndex} />
    </>
  );
}
