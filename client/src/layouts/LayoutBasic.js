import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";

//Styles
import "./LayoutAdmin.css";

export default function LayoutBasic(props){
     const routes = props;

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
            <Footer/>
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