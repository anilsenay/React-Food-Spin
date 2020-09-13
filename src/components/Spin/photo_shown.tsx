import React, { ReactElement } from "react";

import styles from "./style.module.scss";

import { useStore } from "../../hooks/store.hook";

import { images } from "../../assets/images/meals";

interface Props {}

export default function PhotoShown({}: Props): ReactElement {
  const index = useStore((state) => state.index);
  return (
    <img
      src={images[index % 5]}
      className={styles.photoShown}
      alt="spin"
      loading="lazy"
    />
  );
}
