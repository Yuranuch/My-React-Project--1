import React, {} from 'react';
import style from'./App.module.css';
import Header from "./Header/Header";
import HomePage from "./Container/HomePage/HomePage";
import PortfolioPage from "./Container/PortfolioPage/PortfolioPage";
import Contacts from "./Container/Contacts/Contacts";
import DialogsPage from "./Container/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {



    return (
        <BrowserRouter>
        <div className={style.container}>
            <Header/>
            <div className={style.content}>
                <Route path='/home' component={HomePage}/>
                <Route path='/portfolio' component={PortfolioPage}/>
                <Route path='/dialogs' render={()=> <DialogsPage friendsData={props.friendsData} messageData={props.messageData} />} />
                <Route path='/contact' component={Contacts}/>
            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
