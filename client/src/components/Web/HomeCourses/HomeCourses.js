import React from 'react'
import { Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import wordpress from "../../../assets/img/jpg/wordpress.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
    return (
        <div className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
                    <div className="row-courses container">
                        <div className="cols-courses">
                            <CardCourse 
                                image={reactJsHooks}
                                title="React JS Hooks"
                                subtitle="Intermedio - React/JavaScript"
                                link="google.com"
                            />
                        </div>

                        <div className="cols-courses">
                            <CardCourse 
                                image={reactNative}
                                title="React Native Expo"
                                subtitle="React/JavaScript"
                                link="google.com"
                            />
                        </div>

                        <div className="cols-courses">
                            <CardCourse 
                                image={javaScript}
                                title="JavaScript ES6"
                                subtitle="JavaScript"
                                link="google.com"
                            />
                        </div>

                        <div className="cols-courses">
                            <CardCourse 
                                image={wordpress}
                                title="WordPress"
                                subtitle="Basico - WordPress"
                                link="google.com"
                            />
                        </div>
                    

                    <div className="cols-courses">
                            <CardCourse 
                                image={prestaShop}
                                title="PrestaShop 1.7"
                                subtitle="Basico - PrestaShop"
                                link="google.com"
                            />
                    </div>
                    
                    <div className="cols-courses">
                        <CardCourse 
                            image={cssGrid}
                            title="CSS Grid"
                            subtitle="Intermedio - CSS"
                            link="google.com"
                        />
                    </div>
            </div>
                    
                    <div className="home-courses__more">
                        <Link to="/courses">
                            <Button>Ver más</Button>
                        </Link>
                    </div>
        </div>
    );
}

function CardCourse(props){
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title}/>}
                actions={[<Button>INGRESAR</Button>]}
            >   
                <Meta title={title} description={subtitle}/>
            </Card>
        </a>
    );
}