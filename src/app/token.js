import store from "./store";

export const token = () => {
        const token = store.getState().token
        return token
    }
