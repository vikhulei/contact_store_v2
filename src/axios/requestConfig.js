import axios from "axios"


const baseUrl = "https://interview.intrinsiccloud.net"
const token = sessionStorage.getItem('token')
const username = sessionStorage.getItem("username")
const user = username.split("@")[0]
const userId = user[user.length-1]

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`


export const login = axios.create({
    baseURL: `${baseUrl}/auth/login`,
    method: "post"
})

export const getProfileData = axios.create({
        baseURL: `${baseUrl}/profile`,
        method: "get",
    })

export const getProfileImage = axios.create({
    baseURL: `${baseUrl}/profile/profileImage/${userId}`,
    method: "get",
    responseType: "blob"
})

export const uploadProfileImage = axios.create({
    baseURL: `${baseUrl}/profile/profileImage`,
    method: "post",
    params: { name: user },
    headers: {
        "content-type": "multipart/form-data"
    }
})

export const changePassword = axios.create({
    
})

export const getContacts = axios.create({
    
})

export const newContact = axios.create({

})

export const updateContact = axios.create({

})


export const deleteContact = axios.create({

})

export const getCountries = axios.create({

})