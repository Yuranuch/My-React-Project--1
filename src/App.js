import React, {} from 'react';
import style from'./App.module.css';
import Header from "./Header/Header";
import HomePage from "./Container/HomePage/HomePage";
import PortfolioPage from "./Container/PortfolioPage/PortfolioPage";
import Contacts from "./Container/Contacts/Contacts";
import DialogsPage from "./Container/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./Redux/state";
import TestPage from "./Container/TestPage/TestPage";

const App = (props) => {



    return (
        <BrowserRouter>
        <div className={style.container}>
            <Header/>
            <div className={style.content}>
                <Route path='/home' component={HomePage}/>
                <Route path='/portfolio' component={PortfolioPage}/>
                <Route path='/dialogs' render={()=> <DialogsPage
                    friendsData={props.state.dialogPage.friendsData}
                    messageData={props.state.dialogPage.messageData}
                    newMessageText={props.state.dialogPage.newMessageText}
                    addMessage={props.addMessage}
                    updateMessageText={props.updateMessageText}
                />} />
                <Route path='/contact' component={Contacts}/>
                <Route path='/test' component={TestPage}/>

            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
