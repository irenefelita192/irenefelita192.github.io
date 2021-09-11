import theme from '../global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    footer {
        background-color: #f1efeb;
        padding: 40px 10%;
        color: ${theme.colors['vida-black']};
        /* display: grid;
        grid-gap: 62px; */
    }

    footer .title {
        font-weight: 500;
        font-family: 'Bree Serif', serif;
        font-size: 14px;
        line-height: 1.43;
        margin-bottom: 16px;
        text-transform: uppercase;
    }

    footer .list {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        margin-bottom: 14px;
        display: block;
        color: ${theme.colors['vida-black']};
    }

    .flex {
        display: flex;
    }

    .first-column {
        width: 34%;
        padding-right: 65px;
    }

    .second-column {
        width: 66%;
        display: flex;
        flex-direction: column;
    }

    .footer-menu {
        display: flex;
    }

    .footer-submenu {
        flex-basis: 100%;
    }

    .vida-logo {
        height: 56px;
        width: auto;
    }

    .vida-logo img {
        width: auto;
        height: 100%;
    }

    .first-row .text {
        font-size: 13px;
        line-height: 1.38;
        padding-top: 12px;
    }

    .second-row {
        display: flex;
        padding-top: 44px;
    }

    .second-row-wrapper {
        margin-right: 40px;
    }

    .second-row-wrapper:last-child {
        margin-right: 0;
    }

    .second-row-wrapper .text {
        font-weight: 300;
        font-size: 12px;
        line-height: 1.5;
    }

    .lippo-logo,
    .ojk-logo {
        height: 36px;
        width: auto;
    }

    .lippo-logo img,
    .ojk-logo img {
        width: auto;
        height: 100%;
    }

    .download {
        text-align: right;
        padding-top: 30px;
    }

    .download a {
        display: inline-block;
        height: 40px;
        width: auto;
        padding-right: 14px;
    }

    .download a:last-child {
        padding-right: 0;
    }

    .download a img {
        width: auto;
        height: 100%;
    }

    .footer-bottom {
        display: flex;
        padding-top: 32px;
        justify-content: space-between;
        align-items: center;
    }

    .left-column {
        display: flex;
        align-items: center;
    }

    .left-column a {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        color: ${theme.colors['vida-black']};
    }

    .left-column span {
        margin: 0 30px;
        height: 31px;
        border-right: 1px solid rgba(95, 95, 95, 0.15);
    }

    .copyright {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        text-align: right;
    }

    @media screen and (max-width: 1024px) {
        footer {
            padding: 72px;
            grid-gap: 42px;
        }
    }

    @media screen and (max-width: 768px) {
        footer {
            padding: 72px;
            grid-gap: 20px;
        }

        .footer-columns {
            display: flex;
        }
    }

    @media screen and (max-width: 640px) {
        footer {
            padding: 54px;
            grid-gap: 42px;
        }

        .footer-columns {
            display: block;
        }

        .ojk-wrapper {
            text-align: left;
        }
    }
`
