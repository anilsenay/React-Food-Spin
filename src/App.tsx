import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Spin from "./components/Spin";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Spin />
    </div>
  );
}

export default App;
