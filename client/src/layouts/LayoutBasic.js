import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";

//Styles
import "./LayoutAdmin.css";

export default function LayoutBasic(props){
    const routes = props;
    const { Footer } = Layout;

    return (
        <Row>
            <Col md={4}/>
            <Col md={16}>
                <MenuTop/>
                <LoadRoutes routes={routes.routes} />
                <Footer>Maximiliano Gordillo</Footer>
            </Col>
            <Col md={4}/>
        </Row>
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