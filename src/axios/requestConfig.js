import axios from "axios"

const baseUrl = "https://interview.intrinsiccloud.net"
const token = sessionStorage.getItem('token')

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`


export const login = axios.create({
    baseURL: `${baseUrl}/auth/login`,
    method: "post"
})

export const profileData = axios.create({
        baseURL: `${baseUrl}/profile`,
        method: "get",
    })


export const profileImage = axios.create({

})




// export const profileData = () => {
//     const axiosInstance = axios.create({
//         baseURL: `${baseUrl}/profile`,
//         method: "get",
//     })

//     axiosInstance.interceptors.request.use((config) => {
//         config.headers["Authorization"] = `Bearer ${token}` 
//         return config
//     })
//     return axiosInstance
// }



// export const authorization = { "Authorization": `Bearer ${token}` }