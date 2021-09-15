import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Hero Header - start */
    .hero-wrapper {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        min-height: 540px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20%;
    }

    .hero-title {
        font-family: 'Bree Serif', serif;
        font-size: 48px;
        line-height: 1.12;
    }

    .hero-desc {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.37;
        padding-top: 20px;
        max-width: 530px;
        text-align: center;
    }

    .hero-button-text {
        font-weight: 600;
        font-size: 18px;
        line-height: 1;
        padding: 40px 0 12px;
    }

    .hero-button {
        display: flex;
    }

    .hero-button a {
        font-family: 'Bree Serif', serif;
        font-size: 14px;
        line-height: 1.43;
        padding: 13px 28px;
        background-color: #ffffff;
        border: 1px solid #cecece;
        box-sizing: border-box;
        border-radius: 16px;
        color: ${theme.colors['vida-black']};
        margin-right: 12px;
        transition: all 0.2s ease-in-out;
    }

    .hero-button a:hover {
        background: #00a59b;
        border: 1px solid #21837d;
        color: ${theme.colors['vida-brokenwhite']};
    }

    .hero-button a:last-child {
        margin-right: 0;
    }
    /* Hero Header - end */

    .content-wrapper {
        padding: 149px 16% 137px;
        position: relative;
    }

    .content-title {
        margin: 0 0 70px;
        font-weight: 300;
        font-size: 42px;
        line-height: 1.19;
        color: ${theme.colors.black};
    }

    .static-blob {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 64px;
    }

    .content-cards {
        position: relative;
        z-index: 2;
    }

    .card-item {
        display: flex;
        align-items: center;
        color: ${theme.colors.black};
        margin-bottom: 140px;
    }

    .card-content {
        padding: 0;
        margin: 0;
    }

    .card-item.card-odd {
        flex-direction: row;
    }

    .card-item.card-odd .card-content {
        padding-left: 48px;
    }

    .card-item.card-even {
        flex-direction: row-reverse;
    }

    .card-item.card-even .card-content {
        padding-right: 48px;
    }

    .card-item:last-child {
        margin-bottom: 0;
    }

    .card-item img {
        width: 485px;
        height: auto;
        border-radius: 24px;
    }

    .card-title {
        font-family: 'Bree Serif', serif;
        font-size: 44px;
        line-height: 1.09;
    }

    .card-desc {
        font-weight: 500;
        font-size: 18px;
        line-height: 1.33;
        margin-top: 16px;
    }

    .card-link {
        font-family: 'Bree Serif', serif;
        font-size: 16px;
        line-height: 1.25;
        margin-top: 16px;
        display: block;
        color: ${theme.colors.black};
        text-decoration: underline;
    }

    /*Bottom Section - start*/

    .bottom-section {
        background-color: #f3ebe4;
        height: 266px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Bree Serif', serif;
    }

    .bottom-title {
        font-size: 28px;
        line-height: 1.21;
    }

    .bottom-button a {
        display: block;
        background: ${theme.colors['vida-black']};
        border: 1px solid #000000;
        color: ${theme.colors['vida-brokenwhite']};
        box-sizing: border-box;
        border-radius: 16px;
        font-size: 14px;
        line-height: 1.43;
        padding: 13px 62px;
        margin-top: 16px;
        transition: all 0.2s ease-in-out;
    }

    .bottom-button a:hover {
        background: #00a59b;
        border: 1px solid #21837d;
        color: ${theme.colors['vida-brokenwhite']};
    }

    .hero-single-button {
        font-family: 'Bree Serif', serif;
        font-size: 14px;
        line-height: 1.43;
        padding: 17px 28px;
        background-color: #ffffff;
        border: 1px solid #cecece;
        box-sizing: border-box;
        border-radius: 16px;
        color: ${theme.colors['vida-black']};
        width: 100%;
        margin-top: 32px;
    }

    .hero-single-button a {
        color: ${theme.colors['vida-black']};
    }
    /*Bottom Section - end*/

    @media screen and (max-width: 1024px) {
        .card-item img {
            width: 348px;
        }

        .card-item.card-odd .card-content {
            padding-left: 32px;
        }

        .card-item.card-even .card-content {
            padding-right: 32px;
        }
    }

    @media screen and (max-width: 900px) {
        .card-item.card-odd,
        .card-item.card-even {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px) {
        .content-wrapper {
            padding: 56px 24px;
            position: relative;
        }

        .hero-wrapper {
            justify-content: flex-end;
            padding: 0 18px 56px;
        }

        .hero-title {
            font-size: 56px;
            line-height: 1.04;
        }

        .hero-desc {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.37;
        }

        .card-item img {
            width: 100%;
        }

        .card-item.card-odd .card-content,
        .card-item.card-even .card-content {
            padding-left: 0;
            padding-right: 0;
            text-align: center;
            padding-top: 24px;
        }

        .card-item {
            margin-bottom: 54px;
        }

        .bottom-section {
            background-color: #f3ebe4;
            height: 266px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: 'Bree Serif', serif;
            padding: 0 24px;
            text-align: center;
        }
    }

    @media screen and (max-width: 640px) {
        .hero-desc {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.37;
        }

        .card-title {
            font-size: 32px;
            line-height: 1.12;
        }

        .card-desc {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.37;
            margin-top: 12px;
        }
    }
`
