import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .hero-wrapper {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top right;
        position: relative;
    }

    .hero-text {
        position: absolute;
        font-family: Inter;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.4;
        color: ${theme.colors['vida-white']};
        top: calc(50% - 80px);
        left: 154px;
        width: 100%;
    }

    .hero-text h1 {
        margin: 0;
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 60px;
        line-height: 1.1;
        width: 42%;
    }

    .hero-text > div:last-child {
        width: 38%;
        padding-top: 12px;
    }

    .hero-wrapper.is-mobile {
        background-position: bottom;
    }

    @media screen and (max-width: 1024px) {
        .hero-text {
            position: relative;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 15% 8% 0 8%;
            font-size: 31px;
            line-height: 1.4;
        }

        .hero-text h1 {
            font-size: 50px;
            width: 100%;
        }

        .hero-text > div:last-child {
            width: 100%;
        }

        .hero-wrapper:not(.is-mobile) .hero-text {
            position: absolute;
            font-family: Inter;
            font-weight: 500;
            font-size: 18px;
            line-height: 1.4;
            color: ${theme.colors['vida-white']};
            top: calc(50% - 80px);
            left: 100px;
            width: 100%;
            padding: 0;
            display: block;
            text-align: left;
        }

        .hero-wrapper:not(.is-mobile) .hero-text h1 {
            font-size: 50px;
            line-height: 1.1;
            width: 42%;
        }

        .hero-wrapper:not(.is-mobile) .hero-text > div:last-child {
            width: 38%;
        }
    }

    @media screen and (max-width: 850px) {
        .hero-text {
            padding: 25% 16px 0 16px;
            font-size: 31px;
            line-height: 1.4;
        }

        .hero-text h1 {
            font-size: 50px;
            width: 100%;
        }

        .hero-text > div:last-child {
            width: 100%;
        }

        .hero-wrapper:not(.is-mobile) .hero-text {
            left: 50px;
        }

        .hero-wrapper:not(.is-mobile) .hero-text h1 {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 640px) {
        .hero-text {
            padding: 25% 16px 0 16px;
            font-size: 25px;
            line-height: 1.4;
        }

        .hero-text h1 {
            font-size: 40px;
            width: 100%;
        }

        .hero-text > div:last-child {
            width: 100%;
        }
    }

    @media screen and (max-width: 450px) {
        .hero-text {
            padding: 30% 16px 0 16px;
            font-size: 22px;
            line-height: 1.4;
        }

        .hero-text h1 {
            font-size: 34px;
            line-height: 1.1;
            width: 100%;
        }

        .hero-text > div:last-child {
            width: 100%;
            padding-top: 8px;
        }
    }

    @media screen and (max-width: 375px) {
        .hero-text {
            font-size: 18px;
        }

        .hero-text h1 {
            font-size: 30px;
        }
    }

    @media screen and (min-width: 640px) and (max-width: 850px) and (max-height: 1080px) {
        .hero-text {
            padding: 15% 32px 0 32px;
            font-size: 25px;
        }

        .hero-text h1 {
            font-size: 40px;
            width: 100%;
        }

        .hero-text > div:last-child {
            padding-top: 8px;
        }
    }

    @media screen and (max-height: 640px) and (min-width: 400px) {
        .hero-wrapper.is-mobile {
            background-position: center 70%;
        }

        .hero-text {
            padding: 22% 16px 0 16px;
        }
    }
`
