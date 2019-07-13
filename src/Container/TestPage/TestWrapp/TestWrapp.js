import React, {} from 'react';
import style from './TestWrapp.module.css';
import CarList from "./CarList/CarList";


const TestWrapp = () => {
    return (
        <div>

            <div className={style.testWrapp}>
                <CarList />

            </div>
        </div>
    )
}


export default TestWrapp;