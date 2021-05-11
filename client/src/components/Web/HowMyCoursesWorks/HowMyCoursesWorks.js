import React from 'react';
import { Card } from "antd";
import { 
        ClockCircleOutlined, 
        KeyOutlined, 
        MessageOutlined, 
        UserOutlined,
        DollarOutlined,
        CheckCircleOutlined
        } 
from "@ant-design/icons";

import "./HowMyCoursesWorks.scss";

export default function HowMyCoursesWorks() {
    const icon = [
        <ClockCircleOutlined/>,
        <KeyOutlined/>,
        <MessageOutlined />,
        <UserOutlined />,
        <DollarOutlined />,
        <CheckCircleOutlined />
    ];

    return (
        <div className="how-my-courses-works">
            <div className="how-my-courses-works__title">
                <h2>Como funcionan mis cursos?</h2>
                <h3>Cada curso cuenta con contenido bajo la web de Udemy, 
                    activo todos los días, a cualquier hora.
                </h3>
            </div>

            <div className="row-cards container">
                <div className="row-cards__card">
                    <CardInfo
                        icon = {icon[0]}
                        title="Cursos y Clases"
                        description="Cursos de entre 10 y 30 horas y cada clase del curso con duración máxima."
                    />
                </div>
                
                <div className="row-cards__card">
                    <CardInfo
                        icon = {icon[1]}
                        title="Acceso 24/7"
                        description="Accede a los cursos en cualquier momento, desde cualquier lugar."
                    />
                </div>

                <div className="row-cards__card">
                    <CardInfo
                        icon = {icon[2]}
                        title="Aprendizaje Colaborativo"
                        description="Aprende de los demás dejando tus dudas para que los profesores y compañeros te ayuden."
                    />
                </div>

                <div className="row-cards__card">
                    <CardInfo
                        icon = {icon[3]}
                        title="Mejora tu perfil"
                        description="Aprende y mejora tu perfil para mantenerte informado de actualizaciones."
                    />
                </div>

                <div className="row-cards__card">
                    <CardInfo
                        icon = {icon[4]}
                        title="Precio bajos"
                        description="Obtén el curso que necesitas por solo 9.99 y ten acceso a el por el tiempo ilimitado."
                    />
                </div>

                <div className="row-cards__card">
                    <CardInfo
                        icon = {icon[5]}
                        title="Certificado de finalización"
                        description="Al completar el curso recibirás una certificación que te expedirá Udemy en PDF."
                    />
                </div>
            </div>
        </div>
    );
}

function CardInfo(props){
    const { title, description, icon } = props;
    const { Meta } = Card;

    // min 1:40 class 150
    
    return (
        <Card className="how-my-courses-works__card">
            {icon}
            <Meta title={title} description={description}/>
        </Card>
    );
}
