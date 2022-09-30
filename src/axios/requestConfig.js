import axios from "axios"

const baseUrl = "https://interview.intrinsiccloud.net"


export const login = axios.create({
    baseURL: `${baseUrl}/auth/login`,
    method: "post"
})

export const getProfileData = axios.create({
    baseURL: `${baseUrl}/profile`,
    method: "get"
})

export const getProfileImage = axios.create({
        baseURL: `${baseUrl}/profile/profileImage`,
        method: "get",
        responseType: "blob"
    })

export const uploadProfileImage = axios.create({
        baseURL: `${baseUrl}/profile/profileImage`,
        method: "post",
        headers: {
            "content-type": "multipart/form-data"
        }
    })

export const changePassword = axios.create({
        baseURL: `${baseUrl}/profile/changePassword`,
        method: "post",
    })

export const getContacts = axios.create({
        baseURL: `${baseUrl}/contacts`,
        method: "get",
    })

export const addContact = axios.create({
        baseURL: `${baseUrl}/contacts`,
        method: "post",
    })

export const deleteContact = axios.create({
        baseURL: `${baseUrl}/contacts`,
        method: "delete"
    })

export const updateContact = axios.create({
        baseURL: `${baseUrl}/contacts`,
        method: "put",
    })

 
export const getCountryCodes = axios.create({
        baseURL: `${baseUrl}/utility/countries`,
        method: "get"
    })
