import React, { FunctionComponent } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
import "antd/dist/antd.css";
import styles from "./App.less";
import { INavs } from "../data/nav";
import Home from "./Home";
import Url from "./Url";

interface AppProps {
  navs: INavs;
}

const App: FunctionComponent<any> = (props: AppProps) => {
  return (
    <div className={styles.app}>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            {/* navs in left */}
            {Object.keys(props.navs).map((k, i) => (
              <Menu.Item key={i}>
                <Link to={props.navs[k].route}>
                  <span className="nav-text">{props.navs[k].title}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header className={styles.header} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className={styles.body}>
              {/* 路由解析对接组件 */}
              <Route exact path="/" component={()=><Url />} />
              <Route exact path="/url" component={()=><Home />} />
            </div>
          </Content>
          <Footer className={styles.ftc}>
            Brizer's chrome extension.
          </Footer>
        </Layout>
      </Layout>
      );
    </div>
  );
};

export default App;
