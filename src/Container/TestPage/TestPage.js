import React, {} from 'react';
import style from './TestPage.module.css';
import TestWrapp from "./TestWrapp/TestWrapp";




const TestPage = (props) => {
    return (
        <div>
            Здесь пробую, тестирую, тренируюсь!
            <TestWrapp carsData={props.carsData} insertNewCar={props.insertNewCar}/>
        </div>
    )
}


export default TestPage;