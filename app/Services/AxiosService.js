

export const poke_api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 3000
})

export const sandbox_api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/joe',
    timeout: 3000
})