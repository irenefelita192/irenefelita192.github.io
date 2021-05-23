import theme from '../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: grid;
        padding: 84px ${theme.offset.container};
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 42px;
        color: ${theme.colors.black};
    }

    .hero-wrapper {
        position: relative;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
    }

    .hero-content {
        z-index: 1;
        position: absolute;
        left: 164px;
    }

    .hero-title {
        max-width: 60%;
        font-weight: bold;
        font-size: 48px;
        line-height: 1.25;
        letter-spacing: -0.015em;
        color: #ffffff;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
        padding-bottom: 24px;
    }

    .hero-date {
        z-index: 1;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.1;
        color: #ffffff;
        padding-bottom: 36px;
    }

    .hero-link {
        background: #cbb886;
        border-radius: 60px;
        border: 0;
        width: auto;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        cursor: pointer;
    }

    .hero-wrapper img {
        z-index: 1;
        width: 100%;
        height: auto;
    }

    .hero-wrapper .background-bottom {
        position: absolute;
        z-index: 1;
        background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.3) 53.17%,
            rgba(0, 0, 0, 0) 100%
        );
        width: 100%;
        height: 100%;
    }

    .date {
        font-size: 12px;
        line-height: 1.33;
        color: ${theme.colors.gray};
        padding: 14px 0 8px;
        margin: 0;
    }

    .title {
        font-weight: 600;
        font-size: 22px;
        line-height: 1.27;
        color: ${theme.colors.black};
        padding: 0;
        margin: 0;
    }

    .hero-link {
        width: 130px;
        height: 36px;
    }

    @media screen and (max-width: 1024px) {
        .hero-title {
            font-size: 30px;
            padding-bottom: 12px;
        }

        .hero-date {
            padding-bottom: 12px;
        }
    }

    @media screen and (max-width: 768px) {
        .wrapper {
            padding: 42px 72px;
            min-height: 0;
        }

        .hero-content {
            left: 72px;
        }

        .hero-wrapper img {
            height: 200px;
            width: auto;
            object-fit: cover;
        }
    }

    @media screen and (max-width: 640px) {
        .wrapper {
            display: block;
        }

        .hero-content {
            left: 66px;
        }

        .hero-title {
            font-size: 24px;
            max-width: 85%;
        }

        .grid-column {
            margin-bottom: 42px;
            display: block;
        }
    }
`
