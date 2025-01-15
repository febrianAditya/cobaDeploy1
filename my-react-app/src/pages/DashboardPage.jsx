import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rubahNamaStatGlobal, getDataUser } from "../store/action"


export default function DashboardPage() {
    // const [dataUser, setDataUser] = useState("Pak Fattah") // local state
    const globalStateUser = useSelector(state => state.dataUser)
    const dispatch = useDispatch()

    const [inputUser, setInputUser] = useState("")


    const handleOnClick = () => {
        // console.log(dataUserParam, "==> INI DATANYA");
        dispatch(rubahNamaStatGlobal(inputUser))
    }

    const handleInput = (dataInput) => {
        console.log(dataInput, "==> INI APA SIHHH");
        setInputUser(dataInput)
    }

    const handleGetDataUser = () => {
        dispatch(getDataUser())
    }


    return(
        <>
            this is dashboard page {globalStateUser}
            <input type="text" onChange={(e) => handleInput(e.target.value)}/>

            <button onClick={() => handleOnClick()}>Change Name</button>


            <button onClick={handleGetDataUser}>Get All Data user</button>
        </>
    )
}