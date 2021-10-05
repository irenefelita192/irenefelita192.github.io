import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .card-wrapper {
        padding: 64px 12%;
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
        width: 344px;
        height: 232px;
        margin-right: 20px;
        border-radius: 18px;
        padding: 29px;
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
`
