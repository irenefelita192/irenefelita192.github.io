import ReactMarkdown from 'react-markdown'
import styles from './styles'
import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function ContactScreen() {
    return (
        <>
            <Hero id="contact" />
            <div className="wrapper">
                <div className="left-wrapper">
                    <div className="title">PT Lippo Life Assurance</div>
                    <ReactMarkdown>
                        {`Berita Satu Plaza, Lantai 2,\n\nJl. Jend. Gatot Subroto
                        Kav. 35-36, Jakarta 12950

                        \n\nTelp. (6221) 522 4460\n\nFax.
                        (6221) 522 4460`}
                    </ReactMarkdown>

                    <div className="subtitle">Help & Customer Support</div>
                    <p>client@lippolife.co.id</p>
                    <div className="subtitle">Sales Inquiry</div>
                    <p>sales@lippolife.co.id</p>
                </div>
                <div className="maps-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.431237158396!2d106.82389170765221!3d-6.234213982476126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f9aaaaaaab%3A0x811bde3b695083eb!2sPT%20Lippo%20Life%20Assurance!5e0!3m2!1sen!2sid!4v1621450378598!5m2!1sen!2sid"
                        // width="610"
                        // height="294"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
