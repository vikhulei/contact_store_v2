import axios from "axios"

const baseUrl = "https://interview.intrinsiccloud.net"


//-------------------

const getAuthorization = () => {
    const token = sessionStorage.getItem("token") 
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

const getUser = () => {
    return sessionStorage.getItem("username").split("@")[0]
}

const getUserId = () => {
    return getUser().match(/\d+/g)[0]
}

//------------------

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

// export const changePassword = (oldPassword, newPassword) => {
//     getAuthorization()
//     return axios({
//         data: {
//             newPassword: newPassword,
//             oldPassword: oldPassword
//         },
//         baseURL: `${baseUrl}/profile/changePassword`,
//         method: "post",
//     })
// }

export const getContacts = () => {
    getAuthorization()
    const user = getUser()
    return axios({
        baseURL: `${baseUrl}/contacts`,
        method: "get",
        params: { name: user }
    })
}

export const addContact = (contact) => {
    getAuthorization()
    const user = getUser()
    return axios({
        data: contact,
        baseURL: `${baseUrl}/contacts`,
        method: "post",
        params: {name: user}
    })
}

export const deleteContact = (contactId) => {
    getAuthorization()
    const user = getUser()
    return axios({
        baseURL: `${baseUrl}/contacts/${contactId}`,
        method: "delete",
        params: {name: user}
    })
}

export const updateContact = (contactId, contact) => {
    getAuthorization()
    const user = getUser()
    return axios({
        baseURL: `${baseUrl}/contacts/${contactId}`,
        data: contact,
        method: "put",
        params: {name: user}
    })
}
 
export const getCountryCodes = axios.create({
        baseURL: `${baseUrl}/utility/countries`,
        method: "get"
    })
