import React, {} from 'react';
import style from './Messages.module.css';
import MessegeItem from "./Messeges/MessegeItem";


const Messages = (props) => {

    let messageElements = props.messageData.map ((i)=> {
        return  <MessegeItem message={i.message}/>
    });

    return (
        <div className={style.dialogs}>
            {messageElements}
            <textarea/>
            <div>
                New post
            </div>
        </div>


    )
}


export default Messages;