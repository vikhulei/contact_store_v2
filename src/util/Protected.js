import {Outlet, Navigate} from "react-router-dom"
import { useSelector } from "react-redux"

const Protected = () => {
    const token = sessionStorage.getItem("token")
    return (
        <>
           {token ? <Outlet/> : <Navigate to="/"/> }
        </>
    )
}

export default Protected