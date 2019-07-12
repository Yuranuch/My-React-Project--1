import React, {} from 'react';
import style from './Messages.module.css';
import MessegeItem from "./MessegesItem/MessegeItem";


const Messages = (props) => {
    let newMessElement=React.createRef();
    let ChangeMessage= ()=> {
        let text=newMessElement.current.value;
        props.updateMessageText(text);

    };
    let AddMessage = ()=> {

        props.addMessage();
        props.updateMessageText('')
    }


    let messageElements = props.messageData.map((i) => {
        return <MessegeItem message={i.message}/>
    });

    return (
        <div className={style.dialogs}>
            {messageElements}
            <div>

                <textarea onChange={ChangeMessage} ref={newMessElement} value={props.newMessageText}/>

            </div>
            <div className={style.buttonWrap}>
                <button onClick={AddMessage}>Send Message</button>
            </div>
                <div className={style.newMessWrap}>

                </div>

        </div>


    )
}


export default Messages;