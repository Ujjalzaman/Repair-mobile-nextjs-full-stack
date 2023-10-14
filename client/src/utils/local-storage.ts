export const setLocalStorage = (key: string, token: string) => {
    if (!key || typeof window === 'undefined') {
        return ''
    }
    return localStorage.setItem(key, token);
}

export const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ''
    }
    return localStorage.getItem(key);
}