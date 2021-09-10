import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? ''

export const getBrochure = async () => {
    const response = await axios
        .get(`${endpoints}/vida-brochure`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
