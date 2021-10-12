import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top right;
        position: relative;
    }

    h2 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 36px;
        line-height: 1.2;
        text-align: center;
        color: ${theme.colors['vida-green-fresh']};
        margin: 120px 0 65px;
    }

    .animation-wrapper {
        max-width: 640px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .device-wrapper {
        display: block;
        width: 280px;
        height: 581px;
        /* width: 308px;
        height: 640px; */
        background-size: contain;
        background-repeat: no-repeat;
    }

    .device-wrapper video {
        position: absolute;
        padding: 72px 19px;
        width: 280px;
    }

    video#video-2,
    video#video-3 {
        opacity: 0;
    }

    .steps-wrapper {
        margin-left: 68px;
        cursor: pointer;
    }

    .steps-info {
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

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

    @media screen and (max-height: 640px) {
        h2 {
            margin: 100px 0 80px;
        }
        .wrapper {
            margin-bottom: 100px;
        }
    }
`
