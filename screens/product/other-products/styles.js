import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .card-wrapper {
        padding: 64px 50px;
        line-height: 1;
    }

    .card-wrapper > div:first-child {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 1.25;
        text-align: center;
        color: ${theme.colors['vida-gray']};
    }

    .card-box-wrapper {
        align-items: center;
        justify-content: center;
        margin: 48px 0 0;
    }

    .card-box {
        position: relative;
        display: block;
        width: 344px;
        height: 232px;
        margin-right: 20px;
        border-radius: 18px;
        padding: 20px;
        text-transform: none;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
        box-shadow: 0px 4px 10px rgb(221 221 221 / 25%);
    }

    .card-image {
        display: flex;
        justify-content: flex-end;
    }

    .card-title {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 1.42;
        padding-top: 4px;
    }

    .card-desc {
        font-size: 16px;
        line-height: 1.37;
        color: ${theme.colors.gray};
        padding-top: 8px;
    }

    .card-box i {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-width: 2px;
        border-style: solid;
        border-radius: 18px;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    .card-box:hover i {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    @media screen and (max-width: 1440px) {
        .card-title {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 1368px) {
        .card-title {
            font-size: 21px;
        }
    }

    @media screen and (max-width: 1024px) {
        .card-wrapper {
            padding: 80px 35px 48px;
        }

        .card-wrapper > div:first-child {
            font-size: 27px;
            line-height: 1.34;
        }

        .card-box {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }

        .card-box:last-child {
            margin-bottom: 0;
        }

        .card-image {
            height: 40px;
        }

        .card-title {
            font-size: 26px;
            line-height: 1.54;
        }

        .card-desc {
            font-size: 16px;
            line-height: 1.37;
            padding-top: 12px;
        }
    }

    @media screen and (max-width: 850px) {
        .card-wrapper {
            padding: 80px 35px 48px;
        }

        .card-wrapper > div:first-child {
            font-size: 40px;
            max-width: 520px;
            margin: 0 auto;
        }

        .card-box-wrapper {
            display: block;
        }

        .card-box {
            padding: 16px 16px 32px 24px;
            max-width: 520px;
            margin: 0 auto 40px;
        }

        .card-image {
            height: 65px;
        }

        .card-title {
            font-size: 30px;
            padding-top: 8px;
        }

        .card-desc {
            font-size: 18px;
            padding-top: 12px;
        }
    }

    @media screen and (max-width: 768px) {
        .card-wrapper > div:first-child {
            font-size: 42px;
            max-width: 500px;
            margin: 0 auto;
        }

        .card-box {
            max-width: 500px;
            margin: 0 auto 40px;
        }

        /* .card-image {
            height: 56px;
        } */

        /* .card-title {
            font-size: 39px;
        }

        .card-desc {
            font-size: 24px;
            padding-top: 12px;
        } */
    }

    @media screen and (max-width: 640px) {
        .card-wrapper > div:first-child {
            font-size: 27px;
            max-width: 380px;
            margin: 0 auto;
        }

        .card-box {
            max-width: 380px;
            margin: 0 auto 40px;
        }

        .card-image {
            height: 56px;
        }

        .card-title {
            font-size: 26px;
        }

        .card-desc {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 450px) {
        .card-wrapper > div:first-child {
            font-size: 27px;
            line-height: 1.34;
        }

        /* .card-box {
            margin-bottom: 20px;
        } */

        /* .card-image {
            height: 40px;
        }

        .card-title {
            font-size: 26px;
        }

        .card-desc {
            font-size: 16px;
        } */
    }
`
