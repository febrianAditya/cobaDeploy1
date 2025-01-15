import React, { useState } from "react";
import { useSelector } from "react-redux";


export default function UserPage() {
    const [dataDinamis, setDataDinamis] = useState("Before")
    const dataAllUser = useSelector(state => state.allUser)
    // console.log(dataAllUser);
    const handleOnClick = () => {
        setDataDinamis("After")
    }

    return(
        <>
            <h1>User Page</h1>
            <p>{dataDinamis}</p>
            <button onClick={handleOnClick}>Klik aku</button>
            <p>{JSON.stringify(dataAllUser)}</p>
        </>
    )
}