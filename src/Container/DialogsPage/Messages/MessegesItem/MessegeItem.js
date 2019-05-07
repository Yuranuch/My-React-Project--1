import React, {} from 'react';
import style from './MessegeItem.module.css';



const messegeItem = (props) => {
    return (
        <div>
            <div className={style.message}>{props.message}</div>
        </div>
    )
}

export default messegeItem;