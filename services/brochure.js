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

export const getBlob = async (url) => {
    const response = await axios
        .get(url, {
            responseType: 'blob',
        })
        .catch(function (error) {
            console.error(error)
        })
    // return response ? response.data : null
    // const testURL =
    //     'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    // const myInit = {
    //     method: 'GET',
    //     mode: 'no-cors',
    // }
    // const myRequest = new Request(testURL, myInit)
    // const response = await fetcw
    //         console.log(e)
    //     }
    // )

    return response ? response.data : null
}
