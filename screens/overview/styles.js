import theme from '../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .hero-wrapper {
        height: 300px;
        background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.3) 53.17%,
            rgba(0, 0, 0, 0) 100%
        );
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 56px;
        line-height: 1.07;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }
    .wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 155px;
        padding: 57px ${theme.offset.container};
    }

    .content-title {
        margin: 0 0 70px;
        font-weight: 300;
        font-size: 42px;
        line-height: 1.19;
        color: ${theme.colors.black};
    }

    .content-description p {
        margin-bottom: 20px;
    }
`
