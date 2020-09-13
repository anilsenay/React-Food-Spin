import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Spin from "./components/Spin";
import FoodInfo from "./components/FoodInfo";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Spin />
      <FoodInfo />
    </div>
  );
}

export default App;
