import { postProfileImage } from "../features/profileSlice";
import { getAuthorization, getUser, getUserId, handleError } from "./params"
import { login, getProfileData, getProfileImage, uploadProfileImage, changePassword, getContacts, addContact, deleteContact, updateContact, getCountryCodes } from "./requestConfig";


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
    }
)

getProfileData.interceptors.response.use(
    response => response,
    error => {
        error = handleError(error)
        return Promise.reject(error)
    }
)

getProfileImage.interceptors.request.use(
    request => {
        const userId = getUserId()
        request["url"] = `/${userId}`
        return request
    }
)

getProfileImage.interceptors.response.use(
    response => response,
    error => {
        error = handleError(error)
        return Promise.reject(error)
    }
)

uploadProfileImage.interceptors.request.use(
    request => {
        getAuthorization(request)
        const user = getUser()
        request["params"] = { name: user }
        return request
    }
)

uploadProfileImage.interceptors.response.use(
    response => response,
    error => {
        error = handleError(error)
        return Promise.reject(error)
    }
)

changePassword.interceptors.request.use(
    request => {
        getAuthorization(request)
        return request
    },
    error => {
        error = handleError(error)
        return Promise.reject(error)
    })
    
    changePassword.interceptors.response.use(
        response => response,
        error => {
            error = handleError(error)
        return Promise.reject(error)
    }
)

getCountryCodes.interceptors.response.use(
    response => response,
    error => {
        error = handleError(error)
        return Promise.reject(error)
    }
)


export { login, getProfileData, getProfileImage, uploadProfileImage, changePassword, getContacts, addContact, deleteContact, updateContact, getCountryCodes }
