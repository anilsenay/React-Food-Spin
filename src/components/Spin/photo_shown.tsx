import React, { ReactElement } from "react";
import styles from "./style.module.scss";

import { useStore } from "../../hooks/store.hook";

import { images } from "../../assets/images/meals";

interface Props {}

export default function PhotoShown({}: Props): ReactElement {
  const index = useStore((state) => state.index);

  return (
    <>
      {images.map((item, i) => {
        return (
          <img
            src={images[i]}
            className={styles.photoShown}
            alt="spin"
            loading="lazy"
            style={{ opacity: ((index % 5) + 5) % 5 === i ? 1 : 0 }}
          />
        );
      })}
    </>
  );
}
