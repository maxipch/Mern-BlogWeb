import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getMenuApi } from "../../../api/menu";
import SocialLinks from "../SocialLinks";
import Logo from "../../../assets/img/svg/Logo-design.svg";

import "./MenuTop.scss";

export default function MenuTop(){
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        getMenuApi().then(response => {
            const arrayMenu = [];
            response.menu.forEach(item => {
                item.active && arrayMenu.push(item);
            })
            setMenuData(arrayMenu);
        })
    }, []); 
    return (
        <Menu className="menu-top-web">
            <Menu.Item className="menu-top-web__logo">
                <Link to={"/"}>
                    <img src={Logo} alt="Logo"/>
                </Link>
            </Menu.Item>

            {menuData.map(item => {
                const external = item.url.indexOf("http") > -1 ? true : false;

                if(external){
                    return (
                            <Menu.Item key={item._id} className="menu-top-web__item">
                                <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                            </Menu.Item>
                    );
                }

                return(
                    <Menu.Item key={item._id} className="menu-top-web__item">
                        <Link to={item.url}>{item.title}</Link>
                    </Menu.Item>  
                );
            })}

        <SocialLinks className="menu-top-web__item"/>
        </Menu>
    );  
}