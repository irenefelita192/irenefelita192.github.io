import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getContact } from '../../services/contact'
import { getCookie } from '../../util/global-util'
import styles from './styles'
import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function ContactScreen() {
    const [contactData, setContactData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const contactDt = await getContact(langId ? langId : 'id')

        if (!isMounted()) return

        setContactData(contactDt)
    }, [])

    return (
        <>
            <Hero id="contact" />
            <div className="wrapper">
                {contactData && (
                    <div className="left-wrapper">
                        <div className="title">{contactData.title}</div>
                        <ReactMarkdown>
                            {contactData.contactDetail}
                        </ReactMarkdown>
                        <div className="subtitle">
                            {contactData.customerSupportTitle}
                        </div>
                        <p>
                            <a
                                href={`mailto:${contactData.customerSupportEmail}`}
                            >
                                {contactData.customerSupportEmail}
                            </a>
                        </p>
                        <div className="subtitle">{contactData.salesTitle}</div>
                        <p>
                            {' '}
                            <a href={`mailto:${contactData.salesEmail}`}>
                                {contactData.salesEmail}
                            </a>
                        </p>
                    </div>
                )}
                <div className="maps-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.431237158396!2d106.82389170765221!3d-6.234213982476126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f9aaaaaaab%3A0x811bde3b695083eb!2sPT%20Lippo%20Life%20Assurance!5e0!3m2!1sen!2sid!4v1621450378598!5m2!1sen!2sid"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .left-wrapper p {
                        padding-bottom: 20px;
                    }
                `}
            </style>
        </>
    )
}
