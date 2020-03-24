import React, { FunctionComponent } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
import "antd/dist/antd.css";
import styles from "./App.less";
import { INavs } from "../data/nav";
import Info from "./Info";
import Open from "./Open";
import Url from "./Url";
import Banner from "../components/Banner";
import Editor from "./Editor";
import Comparsion from "./Comparsion";

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
          <Header className={styles.header} >
            <Banner />
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className={styles.body}>
              {/* 路由解析对接组件 */}
              <Route exact path="/" component={()=><Url />} />
              <Route exact path="/info" component={()=><Info />} />
              <Route exact path="/open" component={()=><Open />} />
              <Route exact path="/editor" component={()=><Editor />} />
              <Route exact path="/comparsion" component={()=><Comparsion />} />
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
