import { useState, useEffect } from 'react'
import styles from './styles'

const assetPrefix = process.env.config?.assetPrefix ?? '',
    csWaNumber = process.env.config?.csWaNumber ?? ''
export default function ChatButton() {
    // const [isIos, setIsIos] = useState(false)

    useEffect(() => {
        // if (process.browser && data.isDownload) {
        //     const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
        //     setIsIos(ios)
        // }
    }, [])

    const sendMessage = () => {
        window.open(`https://api.whatsapp.com/send?phone=${csWaNumber}`)
    }
    let buttonImg = `${assetPrefix}/images/chat/chat-button.png`
    return (
        <a
            onClick={sendMessage}
            className={'wrapper'}
            style={{ backgroundImage: `url(${buttonImg})` }}
        >
            <style jsx>{styles}</style>
        </a>
    )
}
