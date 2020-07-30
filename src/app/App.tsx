import React from 'react';
import {Link, Route, Switch, useLocation} from 'react-router-dom';
import {Layout, Menu} from 'antd';

import './App.css';
import logo from './logo.png';

import ArticleFeed from "../features/articles/ArticleFeed";
import SignIn from "../features/user/SignIn";
import SignUp from "../features/user/SignUp";
import NotFound from "../features/NotFound";

const {Header, Content, Footer} = Layout;

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <Link to="/"><img className="logo" src={logo} alt="Plogger logo"/></Link>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']}
                          selectedKeys={[location.pathname]}>
                        <Menu.Item key="/">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="/signin">
                            <Link to="/signin">Sign in</Link>
                        </Menu.Item>
                        <Menu.Item key="/signup">
                            <Link to="/signup">Sign up</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64, minHeight: '85vh'}}>
                    <Switch>
                        <Route exact path="/">
                            <ArticleFeed/>
                        </Route>
                        <Route path="/signin">
                            <SignIn/>
                        </Route>
                        <Route path="/signup">
                            <SignUp/>
                        </Route>
                        <Route component={NotFound}/>
                    </Switch>
                </Content>
                <Footer style={{textAlign: 'center'}}>Plogger &copy; 2020 nvanmeurs</Footer>
            </Layout>
        </div>
    );
}

export default App;
