import { React } from "react";
import { Layout, Menu, Button } from 'antd';
import { Link } from "react-router-dom";
import routes from "../../../config/routes";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";

//Styles
import "./MenuSiderHome.scss";

export default function MenuSiderHome(){

    const { Sider } = Layout;

    return (
        <Sider className="home-sider">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to={"/"}>
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to={"/"}>
                        <span className="nav-text">Blog</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to={"/"}>
                        <span className="nav-text">Contact</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
