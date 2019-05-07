import React, {} from 'react';
import style from './DialogsPage.module.css';
import Friends from "./Friends/Friends";
import Messages from "./Messages/Messages";



const DialogsPage = (props) => {


    return (
        <div>
            <div>
                <span className={style.title}>My friends</span>
            </div>
        <div className={style.aboutPageWrap}>

            <Friends friendsData={props.friendsData}/>
            <Messages messageData={props.messageData}/>

        </div>
        </div>
    )
}


export default DialogsPage;