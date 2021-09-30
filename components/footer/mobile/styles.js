import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    footer {
        background-color: ${theme.colors.white};
        padding: 56px 20px 0;
        color: ${theme.colors['vida-black']};
    }

    footer .title {
        font-family: 'Museo', sans-serif;
        font-size: 14px;
        line-height: 1.43;
        margin-bottom: 16px;
        text-transform: uppercase;
    }

    .first-row {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 24px;
    }

    .first-row .text {
        font-weight: normal;
        font-size: 13px;
        line-height: 1.38;
        margin-top: 24px;
    }

    .vida-logo {
        height: 48px;
        width: auto;
    }

    .vida-logo img {
        height: 100%;
        width: auto;
    }

    .second-row {
        display: flex;
        justify-content: space-between;
    }

    .second-row-wrapper {
        margin-right: 5px;
    }

    .second-row-wrapper:last-child {
        margin-right: 0;
    }

    .second-row-wrapper .text {
        font-weight: 300;
        font-size: 14px;
        line-height: 1.3;
        text-align: center;
    }

    .lippo-logo,
    .ojk-logo {
        height: 44px;
        width: auto;
    }

    .lippo-logo img,
    .ojk-logo img {
        width: auto;
        height: 100%;
    }

    .menu-header {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 1.43;
        font-family: 'Museo', sans-serif;
    }

    .submenu-content {
        color: ${theme.colors['vida-gray']};
        font-weight: 500;
        font-size: 16px;
        line-height: 1.25;
        padding-bottom: 15px;
    }

    .third-row {
        padding: 0 12px;
        margin-top: 34px;
    }

    .third-row :global(.accordion-label) {
        height: 52px;
    }

    .third-row :global(.accordion-content) {
        border-bottom: 1px solid #eaeaea;
    }

    .download {
        margin-top: 44px;
    }

    .download a {
        display: block;
        width: auto;
        height: 62px;
        padding: 8px 0;
        text-align: center;
        border: 1px solid ${theme.colors['vida-black']};
        box-sizing: border-box;
        border-radius: 11px;
    }

    .download img {
        width: auto;
        height: 100%;
    }

    .fifth-row {
        display: flex;
        padding-top: 32px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .fifth-row a {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.25;
        color: ${theme.colors['vida-gray']};
        margin-top: 22px;
    }

    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 22px 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        color: ${theme.colors['vida-gray']};
    }
`
