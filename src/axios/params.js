export const getAuthorization = (request) => {
    const token = sessionStorage.getItem("token") 
    request.headers["Authorization"] = `Bearer ${token}`
}

export const getUser = () => {
    return sessionStorage.getItem("username").split("@")[0]
}

export const getUserId = () => {
    return getUser().match(/\d+/g)[0]
}

export const handleError = (error) => {
    switch (error.response.status) {
        case 400:
            error = "Bad request to server";
            break;
        case 401:
            error = "Wrong credentials";
            break;
        case 403:
            error = "Request not correct";
            break;
        case 405:
            error = "Error in request method"
            break;
        default:
            error = error.message
    }
    return error
}