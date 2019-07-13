import React, {} from 'react';
import style from './CarList.module.css';
import Car from "./Car/Car";


const CarList = () => {

    let carsData= [
        {name: 'Lamborgini', color:'red'},
        {name: 'VolksWagen', color:"white"},
        {name: 'Peugeot', color:"black"},
        {name: 'Audi', color:"yello"}
    ];
    let carsElements =carsData.map((c)=><Car name={c.name} color={c.color}/>)

    return (
        <div>


            <div className="carsList">
                {carsElements}
            </div>


        </div>
    )
};


export default CarList;