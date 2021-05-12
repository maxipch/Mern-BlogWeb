import React from 'react';
import Logo from "../../../../assets/img/svg/Logo-design.svg";
import SocialLink from "../../SocialLinks";

//Styles
import "./MyInfo.scss";

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={Logo} alt="Logo"/>
            <h4>Disfruta creando proyectos de todo tipo.</h4>
            <SocialLink/>
        </div>

        
    );
}
