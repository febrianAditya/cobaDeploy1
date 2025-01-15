import React from "react";
import cars from "../../dataItems";
import { useNavigate, Outlet } from "react-router-dom"

export default function CarPage() {
    const navigate = useNavigate()
    // console.log(cars);
    const handleButton = (id) => {
        console.log(id, "==> ini param id");
        navigate(`/car/${id}`)
    }
    
    return(
        <>
            <h1>This is Car Page</h1>

            <ul>
                {
                    cars.map(el => (
                        <div key={el.id}>
                            <li>{el.tipe}</li>
                            <button onClick={() => handleButton(el.id)}>More Information 2</button>
                        </div>
                    ))
                }
            </ul>

            {/* <Outlet/> */}
        </>
    )
}