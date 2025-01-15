import React from "react";
import { useParams } from "react-router-dom";
import cars from "../../dataItems";

export default function DetailCar() {

    let params = useParams()
    console.log(params, "==> INI PARAMSNYA DAN KEPANGGIL");
    const dataCars = cars.find(el => {
        return el.id == params.carid
    })

    console.log(dataCars, "==> Tanggung jawab pak fattah dan pak lutfi");
    
    
    return(
        <>
        
            <h1>Hello World</h1>
            <h3>Merk: {dataCars.merk}</h3>
            <h3>Type: {dataCars.tipe}</h3>
        
        </>
    )
}