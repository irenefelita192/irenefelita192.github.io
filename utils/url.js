import queryString from 'query-string'

export const validUrlWithUTM = (url, param, isIos = false) => {
    let finalUrl = url
    if (param) {
        let urlParams = queryString.parse(param)
        let encodedParam = ''
        if (isIos) {
            let itunesUrl = url.replace('apps.apple.com', 'itunes.apple.com'),
                iosUrlParam = `${itunesUrl}${
                    itunesUrl.indexOf('?') > -1 ? '&' : '?'
                }cs=${urlParams.utm_source ?? ''}&cm=${
                    urlParams.utm_medium ?? ''
                }&cn=${urlParams.utm_campaign ?? ''}`
            encodedParam = encodeURIComponent(iosUrlParam)
            finalUrl = `https://click.google-analytics.com/redirect?tid=291712223&url=${encodedParam}`
        } else {
            encodedParam = encodeURIComponent(
                `utm_source=${urlParams.utm_source ?? ''}&utm_medium=${
                    urlParams.utm_medium ?? ''
                }&utm_campaign=${urlParams.utm_campaign ?? ''}`
            )
            finalUrl = `${url}${
                url.indexOf('?') > -1 ? '&' : '?'
            }referrer=${encodedParam}`
        }
    }

    console.log('finalUrl', finalUrl)
    return finalUrl
}
