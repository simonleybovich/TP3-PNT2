import axios from 'axios'

const url = 'https://665d0b6ce88051d604054990.mockapi.io/tp3/Usuarios/'

export const get = async () => {
    try{
    const { data: usuarios } = await axios.get(url)
        return usuarios
    }
    catch(error) {
        console.error("Error Usuarios GET", error)
        return []
    }
}