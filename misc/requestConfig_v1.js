import axios from "axios"
import {useSelector} from "react-redux"
// import store from "../app/store"

const baseUrl = "https://interview.intrinsiccloud.net"


// const token = sessionStorage.getItem('token')
// const usernameStorage = sessionStorage.getItem("username")
// const user = () => {
    // if(username) {
//  const user = usernameStorage.split("@")[0]

// const userId = user[user.length-1]

// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

// const store = useStore()

// const auth = store.getState()

export const login = axios.create({
    baseURL: `${baseUrl}/auth/login`,
    method: "post"
})

login.interceptors.request.use(async auth => {
    console.log("tok")
    return auth
})

export const getProfileData = axios.create({
        baseURL: `${baseUrl}/profile`,
        method: "get",
    })

export const getProfileImage = axios.create({
    baseURL: `${baseUrl}`,
    method: "get",
    responseType: "blob"
})

export const uploadProfileImage = axios.create({
    baseURL: `${baseUrl}/profile/profileImage`,
    method: "post",
    // params: { name: "user3" },
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

export const newContact = axios.create({

})

export const updateContact = axios.create({

})


export const deleteContact = axios.create({

})

export const getCountries = axios.create({

})