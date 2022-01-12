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
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InNlY3JldC1pZCIsInR5cCI6IkpXVCJ9.eyJFeHRlbnNpb25zIjpudWxsLCJHcm91cHMiOm51bGwsIklEIjoiQUY5QUEwIiwiTmFtZSI6IiIsImF1ZCI6WyIiXSwiZXhwIjoxNjQxOTU4NzcwLCJpYXQiOjE2NDE5NTUxNzAsIm5iZiI6MTY0MTk1NTE3MCwic3ViIjoiQUY5QUEwIn0.Os_gZQZqoz6dHBFul8UUfHMzeqsHr4eRUq5oGOcYxS8`,
            },
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
    // const response = await fetch(url, { mode: 'no-cors', method: 'get' }).catch(
    //     function (e) {
    //         console.log(e)
    //     }
    // )

    return response ? response.data : null
}
