import { getProfileData } from "./requestConfig"
import token from "../app/store"

getProfileData.interceptors.request.use(async auth => {
    // const token = store.getState().token.token
    console.log(token)
    return auth
})


export {getProfileData}