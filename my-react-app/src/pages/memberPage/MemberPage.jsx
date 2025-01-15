import React from "react";
import { Link, Outlet }from "react-router-dom"

export default function MemberPage() {

    return(
        <>
            <h1>This is Member Page</h1>
            <Link to="jhon"> Jhon </Link> || 
            <Link to="febri"> Febri </Link>
            <Outlet/>
        </>
    )
}