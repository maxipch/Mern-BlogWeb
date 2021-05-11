import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner(){
    return (
        <div className="main-banner">
            <div className="main-banner__dark"/>
                <Row className="container">
                    <Col>
                        <h2>Aprender nuevas tecnologias web y movil</h2>
                        <h3>Cursos practicos, creados con años de experencia.</h3>
                    </Col>
                </Row>
        </div>
    );
}