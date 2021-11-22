import theme from 'components/global-styles/theme'
import Footer from 'components/footer'

export default function NotFoundScreen({ locale }) {
    let title = 'Sorry, the page you were trying to view does not exist',
        description = 'Please check the URL or go back to Home.',
        button = 'Back to Home'
    if (locale == 'id') {
        title = 'Maaf, halaman yang Anda coba kunjungi tidak ada'
        description = 'Silakan periksa URL atau kembali ke Beranda.'
        button = 'Kembali ke Beranda'
    }
    const handleClickButton = () => {
        const domain = window.location.origin
        window.location.href = domain
    }
    return (
        <>
            <div className="container">
                <div className="content-container">
                    <h2 className="not-found-title">{title}</h2>
                    <p className="not-found-description">{description}</p>
                    <button
                        type="button"
                        className="button"
                        onClick={handleClickButton}
                    >
                        {button}
                    </button>
                </div>
            </div>

            <style jsx>{`
                .container {
                    height: calc(100vh - ${theme.header.height});
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .header-wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .content-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .not-found-img {
                    width: 100%;
                    max-width: 200px;
                }
                .not-found-title {
                    font-size: 32px;
                    font-weight: 600;
                    line-height: 1.3;
                    margin: 0;
                    padding: 18px 0 0 0;
                    color: ${theme.colors.black};
                    text-align: center;
                    font-family: 'Museo', sans-serif;
                }
                .not-found-description {
                    font-size: 18px;
                    line-height: 1.3;
                    color: ${theme.colors.gray};
                    margin: 0;
                    padding: 10px;
                    text-align: center;
                }
                .button {
                    font-family: 'Museo', sans-serif;
                    box-sizing: border-box;
                    position: relative;
                    margin: 38.4px 0 25.6px 0;
                    border: 1px solid ${theme.colors['vida-green']};
                    border-radius: 16px;
                    color: ${theme.colors['vida-green']};
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    text-decoration: none;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 500;
                    margin-top: 24px !important;
                    height: 50px;
                    width: auto;
                    padding: 0 2.4rem;
                }
                .button:hover {
                    cursor: pointer;
                }

                @media screen and (max-width: 1024px) {
                    .container {
                        padding: 0 120px;
                    }
                }

                @media screen and (max-width: 450px) {
                    .container {
                        padding: 0 16px;
                    }

                    .not-found-title {
                        font-size: 30px;
                    }

                    .not-found-description {
                        font-size: 16px;
                    }
                }
            `}</style>
            <Footer />
        </>
    )
}
