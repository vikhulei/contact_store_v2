import { login } from "./requestConfig";

const handleError = (error) => {
    switch (error.response.status) {
        case 405:
            error = "Bad request method has been sent to the server"
            break;
        case 401:
            error = "Wrong credentials are used";
            break;
    }
    return error
}


login.interceptors.response.use(
    response => response,
    error => {
        error = handleError(error)
        return Promise.reject(error)
    }
)

export { login }
