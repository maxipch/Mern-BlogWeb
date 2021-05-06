import React, {useState, useEffect} from "react";
import { Form, Input, Button, notification } from "antd";
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";

import "./EditMenuWebForm.scss";

export default function EditMenuWebForm(props){
    const { setIsVisibleModal, setReloadMenuWeb, menu } = props;

    return (
        <div>
            <h1>Editando Menu {menu.title}</h1>
        </div>
    );
}