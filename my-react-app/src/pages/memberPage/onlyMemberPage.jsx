

import React from "react";
import {useParams} from "react-router-dom"

export default function OnlyMember() {

    let params = useParams()
    console.log(params);
    
    return(
        <>
            <h1>{params.memberuser}</h1>
        </>
    )
}