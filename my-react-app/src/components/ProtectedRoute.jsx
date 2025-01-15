import { useLocation, Navigate } from "react-router-dom"


export default function ProtectecRoute({ children }) {
    let location = useLocation()

    console.log(location, "==> INI YAA");
    

    if (!localStorage.getItem("token")) {
        return <Navigate to="/home" state={{ from: location }}/>
    }
    return children
}