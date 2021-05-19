import theme from '../global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    footer {
        background-color: #393e46;
        padding: 60px 168px 24px;
        display: grid;
        color: #ffffff;
        grid-gap: 62px;
    }

    footer .title {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.38;
        color: #ffffff;
        margin-bottom: 21px;
    }

    footer .list {
        font-size: 16px;
        line-height: 1.38;
        color: #c7c7c7;
        margin-bottom: 14px;
        display: block;
    }

    footer .column:nth-child(2),
    footer .column:nth-child(3) {
        flex-grow: 0.5;
    }

    .logo-wrapper img {
        height: 24px;
        width: auto;
    }

    .ojk-wrapper {
        font-size: 13px;
        line-height: 1.6;
        color: #ffffff;
        margin-bottom: 6px;
        text-align: right;
        flex-grow: 1.5;
    }

    .ojk-wrapper img {
        height: 42px;
        width: auto;
    }

    .copyright {
        font-size: 11px;
        line-height: 1.36;
        text-align: right;
        color: #818181;
    }

    @media screen and (max-width: 640px) {
        footer {
            padding: 54px;
            grid-gap: 42px;
        }

        .ojk-wrapper {
            text-align: left;
        }
    }
`
