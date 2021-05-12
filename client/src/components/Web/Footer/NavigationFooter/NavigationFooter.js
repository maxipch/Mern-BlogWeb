import React from 'react';
import {
    BookOutlined,
    CodeOutlined,
    DatabaseOutlined,
    RightOutlined,
    HddOutlined,
    AppstoreOutlined,
    UserOutlined
} 
from "@ant-design/icons";
//Styles
import "./NavigationFooter.scss";

export default function NavigationFooter() {
    return (
        <div className="navigation-footer">
            <div className="navigation-footer__cont">
                <div className="navigation-footer__item">
                    <h3>Navegación</h3>
                </div>

                <div className="navigation-footer__items">
                    <div className="navigation-footer__items-list">
                        <RenderListLeft/>
                    </div>
                    <div className="navigation-footer__items-list">
                        <RenderListRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RenderListLeft(){
    return(
        <ul>
            <li>
                <a href="#" >
                    <BookOutlined /> Cursos Online
                </a>
            </li>
            <li>
                <a href="#" >
                    <CodeOutlined /> Desarrollo Web
                </a>
            </li>
            <li>
                <a href="#" >
                    <DatabaseOutlined /> Base de datos
                </a>
            </li>
            <li>
                <a href="#" >
                    <RightOutlined /> Politica de Privacidad
                </a>
            </li>
        </ul>
    );
}

function RenderListRight(){
    return(
        <ul>
            <li>
                <a href="#" >
                    <HddOutlined /> Sistemas / Servidores
                </a>
            </li>
            <li>
                <a href="#" >
                    <AppstoreOutlined /> CMS
                </a>
            </li>
            <li>
                <a href="#" >
                    <UserOutlined /> Porfolio
                </a>
            </li>
            <li>
                <a href="#" >
                    <RightOutlined /> Politica de Cookies
                </a>
            </li>
        </ul>
    );
}