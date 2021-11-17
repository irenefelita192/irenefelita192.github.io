import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import { getCookie } from 'utils/global-util'
import NotFound from '../screens/not-found'

export default function Custom404() {
    const [locale, setLocale] = useState(false)
    useEffect(() => {
        if (window) {
            const langId = getCookie('lang')
            setLocale(langId)
        }
    }, [])
    const title = locale == 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found'
    const description =
        locale == 'id'
            ? 'Maaf, halaman yang Anda coba kunjungi tidak ada'
            : 'Sorry, the page you were trying to view does not exist'
    return (
        <Layout title={title} description={description} headerWithBg={true}>
            <NotFound locale={locale}></NotFound>
            {/* <style jsx global>
                {jsxGlobalStyle}
            </style> */}
        </Layout>
    )
}
