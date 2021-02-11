const TOKEN_KEY = '';
const Hostal = '';

export const setToken = (token) =>{
    localStorage.setItem(TOKEN_KEY,token)
}

export const getToken = () =>{
    return localStorage.getItem(TOKEN_KEY)
}

export const setHostal = (hostal) =>{
    localStorage.setItem(Hostal, hostal)
}

export const getHostal = () => {
    return localStorage.getItem(Hostal)
}


export const deleteHostal = () =>{
    localStorage.removeItem(Hostal)
    window.location = "/"
}

export const deleteToken = () =>{
    localStorage.removeItem(TOKEN_KEY)
    window.location = '/'
}