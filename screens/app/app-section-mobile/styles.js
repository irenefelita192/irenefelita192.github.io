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
        font-size: 27px;
        line-height: 1.4;
        text-align: center;
        color: ${theme.colors['vida-green-fresh']};
        margin: 0;
        padding: 75px 25px 35px;
    }

    .animation-wrapper {
        max-width: 670px;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 73% 27%;
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

    /* video#video-2,
    video#video-3 {
        opacity: 0;
    } */

    .steps-wrapper {
        padding: 10px 15%;
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
`
