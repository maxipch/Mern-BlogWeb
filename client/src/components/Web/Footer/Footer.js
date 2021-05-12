import React from 'react';
import MyInfo from "./MyInfo";
import NavigationFooter from "./NavigationFooter";
import Newsletter from "../Newsletter";

//Styles
import "./Footer.scss";

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer__cont">
                <div className="footer__col">
                    <MyInfo/>
                </div>
                <div className="footer__col">
                    <NavigationFooter/>
                </div>
                <div className="footer__col">
                    <Newsletter/>
                </div>
            </div>

            <div className="footer-copy">
                <div className="footer-copy__cont">
                    <div className="footer-copy__item">
                        <p>Todos los derechos reservados</p>
                    </div>

                    <div className="footer-copy__item">
                        <p> Maximiliano Gordillo | DESIGN CODE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
