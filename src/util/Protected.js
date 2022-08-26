import {Outlet, Navigate} from "react-router-dom"
import { useSelector } from "react-redux"

const Protected = () => {
    const auth = useSelector(state => state.authorization.auth)
    return (
        <>
           {auth ? <Outlet/> : <Navigate to="/"/> }
        </>
    )
}

export default Protected