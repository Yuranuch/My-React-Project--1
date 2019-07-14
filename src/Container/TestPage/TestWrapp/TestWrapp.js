import React, {} from 'react';
import style from './TestWrapp.module.css';
import CarList from "./CarList/CarList";


const TestWrapp = (props) => {

    let newCarText=React.createRef();


    let insertNewCar = ()=> {

        let textCar = newCarText.current.value;
        /*props.insertNewCar(textCar);*/
        let action={type:'INSERT-NEW-CAR', aboutCarMessage: textCar};
        props.dispatch(action);
        newCarText.current.value='';
    };


    return (
        <div>

            <div className={style.testWrapp}>
                <CarList carsData={props.carsData} />
                <div/>
                <div className={style.buttonWrap}>
                <textarea ref={newCarText}></textarea>
                </div>
                <button onClick={insertNewCar}>insertNewCar</button>
            </div>
        </div>
    )
}


export default TestWrapp;