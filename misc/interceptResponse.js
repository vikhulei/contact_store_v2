import axios from "axios"
import { login, getProfileData } from "../src/axios/requestConfig";

const getAuthorization = (request) => {
    const token = sessionStorage.getItem("token") 
    request.headers["Authorization"] = `Bearer ${token}`
}

const getUser = () => {
    return sessionStorage.getItem("username").split("@")[0]
}

const getUserId = () => {
    return getUser().match(/\d+/g)[0]
}

const handleError = (error) => {
    switch (error.response.status) {
        case 405:
            error = "Bad request method has been sent to the server"
            break;
        case 401:
            error = "Wrong credentials have been used";
            break;
        default:
            error = error.message
    }
    return error
}


login.interceptors.response.use(
    response => response,
    error => {
        error = handleError(error)
        return Promise.reject(error)
    }
)

getProfileData.interceptors.request.use(
    request => {
        getAuthorization(request)
        return request
    },
    error => {
        return Promise.reject(error)
    }
)

getProfileData.interceptors.response.use(
    response => response,
    error => {
        error = handleError(error)
        return Promise.reject(error)
    }
)

export { login, getProfileData }
