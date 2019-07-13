import React, {} from 'react';
import style from './Car.module.css';


const Car = (props) => {
    return (
        <div>

            <div className={style.car}>
                {props.name} <span>{props.color}</span>
            </div>

        </div>
    )
}


export default Car;