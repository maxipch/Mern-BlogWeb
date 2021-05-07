import React, {useState, useEffect} from "react";
import { Form, Input, Button, notification } from "antd";
import { LinkOutlined, FontSizeOutlined } from "@ant-design/icons";
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";

import "./EditMenuWebForm.scss";

export default function EditMenuWebForm(props){
    const { setIsVisibleModal, setReloadMenuWeb, menu } = props;
    const [menuWebData, setMenuWebData] = useState(menu);

    useEffect(() => {
        setMenuWebData(menu);
    },[menu]);

    const editingMenu = () => {
        if(!menuWebData.title || !menuWebData.url){
            notification["error"]({
                message: "Todos los campos son obligatorios."
            })
        } else {
            const accessToken = getAccessTokenApi();

            updateMenuApi(accessToken, menuWebData._id, menuWebData)
                .then(response => {
                    notification["success"]({
                        message: response
                    });
                    setIsVisibleModal(false);
                    setReloadMenuWeb(true);
                })
                .catch(() => {
                    notification["error"]({
                        message: "Error del servidor, intentelo mas tarde."
                    });
                });
        }
    };

    return (
        <div className="edit-menu-web-form">
            <EditForm 
                menuWebData={menuWebData} 
                setMenuWebData={setMenuWebData}
                editingMenu={editingMenu}
            />
        </div>
    );
}

function EditForm(props){
    const { menuWebData, setMenuWebData, editingMenu } = props;
    return (
        <Form className="form-edit">
            <Form.Item>
                <Input
                    prefix={<FontSizeOutlined style={{ color: "#a9a9a9"}} />}
                    placeholder="Titulo"
                    value={menuWebData.title}
                    onChange={e => setMenuWebData({...menuWebData, title: e.target.value})}
                />
            </Form.Item>

            <Form.Item>
                <Input
                     prefix={<LinkOutlined style={{ color: "#a9a9a9"}}/>}
                     placeholder="URL"
                     value={menuWebData.url}
                     onChange={e => setMenuWebData({...menuWebData, url: e.target.value})}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" html="submit" className="btn-submit" onClick={editingMenu}>
                    Actualizar menu
                </Button>
            </Form.Item>
        </Form>
    );
}