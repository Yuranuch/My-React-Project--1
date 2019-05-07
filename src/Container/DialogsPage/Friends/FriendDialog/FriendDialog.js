import React, {} from 'react';
import style from './FriendDialog.module.css';
import {NavLink} from "react-router-dom";


const FriendDialog = (props) => {
    let path= "/dialogs/" + props.id;
    return (
                <div className={style.friend}>

                    <NavLink to={path}>{props.name}</NavLink>
                </div>
    )
}


export default FriendDialog;