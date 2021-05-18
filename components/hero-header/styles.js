import css from 'styled-jsx/css'
import theme from '../../components/global-styles/theme'
export default css`
    .hero-wrapper {
        position: relative;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero-wrapper span {
        z-index: 1;
        position: absolute;
        font-weight: bold;
        font-size: 56px;
        line-height: 1.07;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }

    .hero-wrapper img {
        z-index: 1;
        width: 100%;
        height: auto;
    }

    .hero-wrapper .background-bottom {
        position: absolute;
        z-index: 1;
        background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.3) 53.17%,
            rgba(0, 0, 0, 0) 100%
        );
        width: 100%;
        height: 100%;
    }
`
