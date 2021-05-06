import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

//Styles
import "./LayoutAdmin.css";

export default function LayoutBasic(props){
    const routes = props;
    console.log(routes);
    const { Header, Content, Footer } = Layout;
    return(
        <Layout>
            <h2>Menu Sider Basic User</h2>
            <Layout>
                <Header>Header...</Header>
                <Content>
                    <LoadRoutes routes={routes.routes} />
                </Content>
            <Footer>Maximiliano Gordillo</Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({ routes }){
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                />
            ))}
        </Switch>
    );
}