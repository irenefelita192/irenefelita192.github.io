import LazyLoad from '../common/lazyload'
import { notFoundImage } from '../../global/asset-global/image-url'
export default function NotFound() {
    const handleClickButton = () => {
        const domain = window.location.origin
        window.location.href = domain
    }
    return (
        <div className="container">
            <div className="content-container">
                <LazyLoad>
                    <img className="not-found-img" src={notFoundImage} />
                </LazyLoad>
                <h2 className="not-found-title">
                    We can't find the page you're looking for.
                </h2>
                <p className="not-found-description">
                    Please check the URL or go back to Home.
                </p>
                <button
                    type="button"
                    className="button"
                    onClick={handleClickButton}
                >
                    Back To Home
                </button>
            </div>
            <style jsx>{`
                .container {
                    height: 99vh;
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
                    font-size: 2.1rem;
                    font-weight: 600;
                    line-height: 1.3;
                    margin: 0;
                    padding: 1.8rem 0 0 0;
                    color: #ffffff;
                    text-align: center;
                }
                .not-found-description {
                    font-size: 1.6rem;
                    line-height: 1.5;
                    color: #c1c2c2;
                    margin: 0;
                    padding: 0.8rem 5rem 0;
                    text-align: center;
                }
                .button {
                    box-sizing: border-box;
                    position: relative;
                    margin: 38.4px 0 25.6px 0;
                    background: #1f93ff;
                    border: 0.1px solid #1f93ff;
                    border-radius: 0.4rem;
                    color: #ffffff;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    text-decoration: none;
                    font-size: 1.6rem;
                    cursor: pointer;
                    /* letter-spacing: 0.191rem; */
                    font-weight: 500;
                    margin-top: 24px !important;
                    height: 5rem;
                    width: auto;
                    padding: 0 2.4rem;
                }
                .button:hover {
                    cursor: pointer;
                    background: #41a4ff;
                    border: 0.1px solid #41a4ff;
                }
            `}</style>
        </div>
    )
}
