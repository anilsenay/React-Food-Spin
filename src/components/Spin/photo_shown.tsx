import React, { ReactElement } from "react";
import styles from "./style.module.scss";

import { useStore } from "../../hooks/store.hook";

import { images } from "../../assets/images/meals";

export default function PhotoShown(): ReactElement {
  const index: number = useStore((state) => state.index);

  return (
    <>
      {images.map((item, i) => {
        return (
          <img
            key={i}
            src={images[i]}
            className={`${styles.photoShown} ${
              ((index % 5) + 5) % 5 === i && styles.startAnimation
            }`}
            alt="spin"
            loading="lazy"
            style={{ opacity: ((index % 5) + 5) % 5 === i ? 1 : 0 }}
          />
        );
      })}
    </>
  );
}
