import React from 'react';
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import LogoDesign from '../../../assets/img/svg/Logo-design.svg';
import { getAccessTokenApi } from "../../../api/auth";

//Pages
import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from "../../../components/Admin/LoginForm";

//Styles
import './SignIn.scss';

export default function SingIn(){
    const { Content } = Layout;
    const { TabPane } = Tabs;

    if(getAccessTokenApi()){    //si devuelve algo significa que el usuario esta logeado
        return <Redirect to="/admin"/>
    }
    return  (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                    <img className="sign-in__content-logo" src={LogoDesign} alt="Logo"/>
                <div className="sing-in__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            <LoginForm/>
                        </TabPane>

                        <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                            <RegisterForm/>
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    );
}