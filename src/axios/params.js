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
            error = "Bad request to server (400)";
            break;
        case 401:
            error = "Wrong credentials (401)";
            break;
        case 403:
            error = "Request not correct (403)";
            break;
        case 404:
            error = "Resource not found (404)";
            break;
        case 405:
            error = "Error in request method (405)"
            break;
        case 500:
            error = "Server error (500)"
            break;
        case 502:
            error = "Bad gateway (502)"
            break;
        case 503:
            error = "Server overload (503)"
            break;
        case 504:
            error = "Gateway Time-Out (504)"
            break;
        default:
            error = error.message
    }
    return error
}