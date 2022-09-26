import {  } from "react-redux"
import {Outlet, Navigate} from "react-router-dom"

const Protected = () => {
    const token = sessionStorage.getItem("token")


    return (
        <>
           {token ? <Outlet/> : <Navigate to="/"/> }
        </>
    )
}

export default Protected