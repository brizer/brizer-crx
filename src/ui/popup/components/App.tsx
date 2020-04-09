import React, { FunctionComponent } from "react";
import { Link, Route } from "react-router-dom";
import Url from "./url/Url";
import Style from "./style/Style";
import { ExtensionData, ExtensionActions } from "definitions";
import styles from "./App.less";

interface AppProps {
  data:ExtensionData;
  actions:ExtensionActions;
}

interface AppState {}

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  return (
    <div className={styles.app}>
      <div className={styles.nav}>
        <div className={styles.navItem}>
          <Link to="/">主页</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/url">url管理</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/style">样式管理</Link>
        </div>
      </div>

      {/* 路由解析,传递参数 */}
      <Route path="/url" component={()=><Url urls={props.data.settings.urls} actions={props.actions}/>} />
      <Route path="/style" component={()=><Style  actions={props.actions} />} />
    </div>
  );
};

export default App;
