import React, {useState} from "react";
// eslint-disable-next-line no-unused-vars
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

//Functions, constants or components.js
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

//Styles
import "./LoginForm.scss";

export default function LoginForm(){

    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async e => {  //para poder visualizar el contenido de la promesa es
                                //necesario incluir el "async" y "e", si no otra manera
                                //puede ser console.log(result.then);
        const result = await signInApi(inputs);

        if(result.message){
            notification["error"]({
                message: result.message
            });
        }else{
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);

            notification["success"]({
                message: "Login correcto"
            });

            window.location.href = "/admin";
        }

        console.log(result);
    }

    return (
        <Form className="login-form" onChange={changeForm} onFinish={login}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "#a9a9a9"}}/> }
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "#a9a9a9"}}/>}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    );
}

