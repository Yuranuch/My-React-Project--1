import React, {} from 'react';
import style from './CarList.module.css';
import Car from "./Car/Car";


const CarList = (props) => {

    let carsElements =props.carsData.map((c)=><Car name={c.name} color={c.color}/>)

    return (
        <div>


            <div className="carsList">
                {carsElements}
            </div>


        </div>
    )
};


export default CarList;