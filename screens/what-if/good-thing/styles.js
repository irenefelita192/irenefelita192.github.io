import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'

export default css`
    .bottom-section {
        background: linear-gradient(180deg, #ffffff 0%, #cfb287 174.32%);
        padding: 10% 20%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: ${theme.colors['vida-black']};
    }

    .gt-title {
        font-size: 32px;
        line-height: 1.7;
        text-align: center;
    }

    .gt-desc {
        font-family: 'Bree Serif', serif;
        font-size: 48px;
        line-height: 1.12;
        text-align: center;
        margin-top: 8px;
        max-width: 830px;
    }

    .gt-link {
        margin-top: 40px;
    }

    .gt-link a {
        display: block;
        background: ${theme.colors['vida-black']};
        box-sizing: border-box;
        border-radius: 16px;
        border: 1px solid #000000;
        color: ${theme.colors['vida-brokenwhite']};
        font-size: 20px;
        line-height: 1;
        text-align: center;
        color: #ffffff;
        padding: 17px 65px;
        transition: all 0.2s ease-in-out;
    }

    .gt-link a:hover {
        background: #00a59b;
        border: 1px solid #21837d;
        color: ${theme.colors['vida-brokenwhite']};
    }

    @media screen and (max-width: 640px) {
        .bottom-section {
            padding: 64px 24px;
        }

        .gt-title {
            font-size: 18px;
            line-height: 1.89;
        }

        .gt-desc {
            font-size: 28px;
            line-height: 1.21;
        }

        .gt-link {
            margin-top: 40px;
            width: 100%;
        }

        .gt-link a {
            font-size: 18px;
            line-height: 1.33;
        }
    }
`
