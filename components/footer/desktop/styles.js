import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    footer {
        background-color: ${theme.colors.white};
        padding: 40px 10% 0;
        color: ${theme.colors.gray};
        box-shadow: inset 0px 1px 0px rgba(197, 197, 197, 0.25);
    }

    footer .title {
        font-family: 'Museo', sans-serif;
        font-weight: normal;
        font-size: 14px;
        line-height: 1.43;
        margin-bottom: 16px;
        color: ${theme.colors['vida-black']};
        text-transform: capitalize;
    }

    footer .list {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        margin-bottom: 14px;
        display: block;
        color: ${theme.colors.gray};
        transition: color 0.2s ease-in-out;
    }

    footer .list:hover {
        color: ${theme.colors['vida-green']};
    }

    .flex {
        display: flex;
    }

    .first-column {
        width: 34%;
        padding-right: 65px;
        position: relative;
    }

    .second-column {
        width: 66%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        font-size: 15px;
        line-height: 1.27;
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
        text-align: center;
    }

    .lippo-logo,
    .ojk-logo {
        height: 36px;
        width: auto;
        text-align: left;
    }

    .lippo-logo img,
    .ojk-logo img {
        width: auto;
        height: 100%;
    }

    .third-row {
        line-height: 1;
        padding-top: 34px;
    }

    .social-media-text {
        font-size: 13px;
        line-height: 1.27;
        padding: 0 0 12px 20px;
    }

    .social-media-group {
        display: flex;
        align-items: center;
    }

    .social-media-link {
        width: 40px;
        height: auto;
        margin-right: 10px;
    }

    .download {
        text-align: right;
        padding-top: 30px;
    }

    .download a {
        display: inline-block;
        height: 40px;
        width: auto;
        margin-right: 14px;
        border: 1px solid ${theme.colors['vida-black']};
        border-radius: 6px;
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
        padding: 22px 0;
        margin-top: 26px;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(123, 123, 123, 0.2);
    }

    .left-column {
        display: flex;
        align-items: center;
    }

    .left-column a {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        color: ${theme.colors['vida-gray']};
        margin-right: 36px;
        transition: color 0.2s ease-in-out;
    }

    .left-column a:hover {
        color: ${theme.colors['vida-green']};
    }

    .copyright {
        font-weight: 500;
        font-size: 12px;
        line-height: 1.67;
        text-align: right;
    }

    .footer-version {
        font-size: 8px;
        line-height: 1;
        position: absolute;
        bottom: 0;
    }

    @media screen and (max-width: 1200px) {
        footer {
            padding: 40px 60px;
        }
    }

    @media screen and (max-width: 1023px) {
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
