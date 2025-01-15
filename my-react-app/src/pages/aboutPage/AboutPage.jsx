import React from "react";
import { Link, Outlet } from "react-router-dom"


export default function AboutPage() {


    return(
        <>
            <h1>This is About Page</h1>
            <Link to="about-company"> company profile </Link> || 
            <Link to={"about-me"}> About Me </Link>
            <Outlet/>
        </>
    )
}