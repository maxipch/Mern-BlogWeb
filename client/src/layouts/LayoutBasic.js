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
     <>
         <Row>
             <Col/>
                <Col className="layout-basic__menu">
                    <MenuTop/>
                </Col>
             <Col/>
         </Row>
            <LoadRoutes routes={routes.routes} />
            <Footer>Maximiliano Gordillo</Footer>
     </>

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