import React from 'react';
import { Card, Avatar } from "antd";
import Avatar1 from "../../../assets/img/png/avatar-review.png";
import Avatar2 from "../../../assets/img/jpg/avatar-1.jpg";
import Avatar3 from "../../../assets/img/jpg/avatar-2.gif";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
    return (
        <div className="review-courses container">
            <div className="review-courses__title">
                <h2>Forma parte de los estudiantes que estan aprendiendo todos los días</h2>
            </div>
            <div className="row-cards">
                <div className="row-cards__card">
                    <CardReview
                        name="Agustin Palacios"
                        subtitle="Emprendedor"
                        avatar={Avatar1}
                        review="Un curso excelente de muy buen nivel, aprendí mucho y fue muy buena elección. Tengo ganas de comenzar nuevos cursos y seguir aprendiendo."
                    />
                </div>
                <div className="row-cards__card">
                    <CardReview
                        name="Ezequiel Rodriguez"
                        subtitle="Empleado de Halliburton"
                        avatar={Avatar2}
                        review="La verdad que estuvieron bastante largos, y estaban buenos. La música del Walter tremenda, muy buena personalidad la de ese tipo, y prácticas de locura."
                    />
                </div>
                <div className="row-cards__card">
                    <CardReview
                        name="Franco Urrutia"
                        subtitle="Estudiante de Programación"
                        avatar={Avatar3}
                        review="Un curso excelente de muy buen nivel, aprendí mucho y fue muy buena elección. Tengo ganas de comenzar nuevos cursos y seguir aprendiendo."
                    />
                </div>
            </div>
        </div>
    )
}


function CardReview(props){
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="review-courses__card">
            <p>{review}</p>
                <Meta
                    avatar={<Avatar src={avatar} />}
                    title={name}
                    description={subtitle}
                />
        </Card> 
    );
}