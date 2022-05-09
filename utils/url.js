export const validUrlWithParam = (url, param) => {
    let finalUrl = `${url}${param}`
    if (param && url.indexOf('?') > -1) {
        finalUrl = `${url}&${param.substring(1)}`
    }
    return finalUrl
}
