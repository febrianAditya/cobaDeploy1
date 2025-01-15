import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage({ dataUser }) {

    const [dataTitle, setDataTitle] = useState("")

    let location = useLocation()
    let {state} = location
    console.log(state, "==> ini apa yaa???");
    
    return(
        <>
            <h1>This is {dataUser}</h1>

        </>
    )
}