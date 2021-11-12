import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top right;
        position: relative;
    }

    .wrapper h2 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 1.4;
        text-align: center;
        color: ${theme.colors['vida-green-fresh']};
        margin: 0;
        padding: 55px 25px 35px;
    }

    .animation-wrapper {
        max-width: 670px;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 70% 30%;
    }

    .device-wrapper {
        position: relative;
        display: block;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
    }

    .device-wrapper video {
        position: absolute;
        top: 0;
        left: 0;
        padding: 23% 5%;
    }

    .video-play {
        width: 40px;
        height: 40px;
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    /* video#video-2,
    video#video-3 {
        opacity: 0;
    } */

    .steps-wrapper {
        padding: 30px 15% 10px;
        text-align: left;
    }

    /* .steps-info {
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        justify-content: center;
    } */

    .steps-title {
        font-family: 'Museo', sans-serif;
        font-size: 20px;
        line-height: 1.2;
        color: ${theme.colors['vida-tan']};
        margin-top: 16px;
    }

    .is-active .steps-title {
        color: ${theme.colors['vida-green-fresh']};
    }

    .steps-desc {
        font-size: 14px;
        line-height: 1.4;
        padding: 8px 0 40px;
    }

    .steps-wrapper:last-child .steps-desc {
        padding-bottom: 0;
    }

    .progress-bar {
        background: #f4f1ee;
        border-radius: 40px;
        height: 4px;
    }

    .progress-bar > span {
        display: block;
        background: ${theme.colors['vida-green-fresh']};
        border-radius: 40px;
        height: 4px;
        width: 0;
        transition: width 0.3s linear;
    }

    @media screen and (max-width: 850px) {
        .wrapper h2 {
            font-size: 36px;
        }

        .wrapper:not(.is-mobile) h2 {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 450px) {
        .wrapper h2 {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 375px) {
        .wrapper h2 {
            font-size: 22px;
        }

        .steps-title {
            font-size: 16px;
        }

        .steps-desc {
            font-size: 12px;
        }
    }

    @media screen and (min-width: 640px) and (max-width: 850px) and (max-height: 1080px) {
        .wrapper h2 {
            font-size: 36px;
        }
    }

    @media screen and (min-height: 1024px) {
        .wrapper h2 {
            font-size: 36px;
        }

        .wrapper:not(.is-mobile) h2 {
            font-size: 36px;
        }

        .steps-title {
            font-size: 28px;
        }

        .steps-desc {
            font-size: 20px;
        }

        .steps-wrapper {
            padding: 10% 15% 10px;
        }
    }

    @media screen and (max-height: 670px) {
        .wrapper h2 {
            padding: 35px 25px;
            font-size: 20px;
        }

        .steps-title {
            font-size: 16px;
        }

        .steps-desc {
            font-size: 12px;
        }
    }
`
