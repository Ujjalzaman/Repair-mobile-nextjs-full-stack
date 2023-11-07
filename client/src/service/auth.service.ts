import { authKey } from "@/constants/storageKey"
import { decodeToken } from "@/utils/jwt";
import { getFromLocalStorage, setLocalStorage } from "@/utils/local-storage"

export const setUserInfo = ({ accessToken }: { accessToken: string }) => {
    return setLocalStorage(authKey, accessToken as string);
}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        const decodedToken = decodeToken(authToken);
        return decodedToken
    } else {
        return null
    }
}
export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    return !!authToken;
}
export const loggedOut = (key: string) => {
    return localStorage.removeItem(key)
}