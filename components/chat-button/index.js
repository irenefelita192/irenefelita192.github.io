import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getChatButton } from 'services/common'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function ChatButton() {
    const [chatData, setChatData] = useState(false)

    useAsyncEffect(async (isMounted) => {
        const chatDt = await getChatButton()

        if (!isMounted()) return
        setChatData(chatDt)
    }, [])

    if (!chatData) return <></>

    const sendMessage = () => {
        window.open(chatData?.link ?? '')
    }
    let buttonImg = `${assetDomain}${chatData?.image?.url ?? ''}`
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
