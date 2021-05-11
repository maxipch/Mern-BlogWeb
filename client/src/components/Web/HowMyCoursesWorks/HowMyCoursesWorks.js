import React from 'react';
import { Row, Card, Col } from "antd";

import "./HowMyCoursesWorks.scss";

export default function HowMyCoursesWorks() {
    return (
        <div className="how-my-courses-works">
            <div className="how-my-courses-works__title">
                <h2>Como funcionan mis cursos?</h2>
                <h3>Cada curso cuenta con contenido bajo la web de Udemy, 
                    activo todos los días, a cualquier hora.
                </h3>
            </div>

            <div className="row-cards">
                <div className="row-cards__card">
                    <CardInfo
                        title="Cursos y Clases"
                        description="Cursos de entre 10 y 30 horas y cada clase del curso con duración máxima"
                    />
                </div>
            </div>
        </div>
    );
}

function CardInfo(props){
    const { title, description } = props;
    const { Meta } = Card;

    // min 1:40 class 150
    
    return (
        <Card className="how-my-courses-works__card">
            {/* icono */}
            <Meta title={title} description={description}/>
        </Card>
    );
}
