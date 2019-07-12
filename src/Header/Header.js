import React, {} from 'react';
import style from './Header.module.css';
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={style.HeaderWrap}>
            <div className={style.header}>
                <Logo />
                <div className={`${style.navItem} ${style.active}`}>
                    <NavLink to="/home" activeClassName={style.active}>home</NavLink>
                </div>
                <div className={style.navItem}>
                    <NavLink to="/portfolio" activeClassName={style.active} >portfolio</NavLink>
                </div>
                <div className={style.navItem}>
                    <NavLink to="/dialogs" activeClassName={style.active}>dialogs</NavLink>
                </div>
                <div className={style.navItem}>
                    <NavLink to="/contact" activeClassName={style.active}>contacts</NavLink>
                </div>
                <div className={style.navItem}>
                    <NavLink to="/test" activeClassName={style.active}>test</NavLink>
                </div>

            </div>
        </div>
    )
}


export default Header;