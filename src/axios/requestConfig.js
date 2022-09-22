import axios from "axios"

const baseUrl = "https://interview.intrinsiccloud.net"

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

// export const login = ({username, password}) => {
//     return axios({
//         data: {
//             password: password,
//             username: username
//         },
//         baseURL: `${baseUrl}/auth/login`,
//         method: "post"
//     })
// }


export const login = axios.create({
    baseURL: `${baseUrl}/auth/login`,
    method: "post"
})


export const getProfileData = () => {
    getAuthorization()
   return axios({
        baseURL: `${baseUrl}/profile`,
        method: "get",
    })
}



export const getProfileImage = () => {
    const userId = getUserId()
    return axios({
        baseURL: `${baseUrl}/profile/profileImage/${userId}`,
        method: "get",
        responseType: "blob"
    })
}

export const uploadProfileImage = (formData) => {
    getAuthorization()
    const user = getUser()
    return axios({
        data: formData,
        baseURL: `${baseUrl}/profile/profileImage`,
        method: "post",
        params: { name: user },
        headers: {
            "content-type": "multipart/form-data"
        }
    })
}

export const changePassword = (oldPassword, newPassword) => {
    getAuthorization()
    return axios({
        data: {
            newPassword: newPassword,
            oldPassword: oldPassword
        },
        baseURL: `${baseUrl}/profile/changePassword`,
        method: "post",
    })
}

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

export const getCountryCodes = () => {
    return axios({
        baseURL: `${baseUrl}/utility/countries`,
        method: "get"
    })
}
