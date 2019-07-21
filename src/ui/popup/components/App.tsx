import React, { FunctionComponent } from "react";
import { Link, Route } from "react-router-dom";
import Url from "./url/Url";
import styles from './App.css';

interface AppProps {}

interface AppState {}

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  return (
    <div className={styles.nav}>
      <div className={styles.navItem}>
        <Link to="/">主页</Link>
        <Link to="/url">url管理</Link>
      </div>
      {/* 路由解析 */}
      <Route path="/url" component={Url}></Route>
    </div>
  );
};

export default App;
