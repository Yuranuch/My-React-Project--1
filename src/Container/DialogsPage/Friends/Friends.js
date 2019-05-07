import React, {} from 'react';
import style from './Friends.module.css';
import FriendDialog from "./FriendDialog/FriendDialog";


const Friends = (props) => {

    let friendsElements = props.friendsData.map ((i)=>{
        return (
            <FriendDialog name = {i.name} id={i.id}/>
        )
    });
    return (
        <div className={style.friends}>
            {friendsElements}
        </div>
    )
};


export default Friends;