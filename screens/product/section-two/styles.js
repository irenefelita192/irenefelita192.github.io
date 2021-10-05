import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .highlight-wrapper {
        background-color: ${theme.colors['vida-brokenwhite']};
        height: 285px;
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.24;
        text-align: center;
        color: ${theme.colors['vida-tan-dark']};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .highlight-wrapper > div {
        padding: 0 20%;
    }

    .hero-wrapper {
        position: relative;
    }

    .hero-wrapper:before {
        content: '';
        clip-path: ellipse(56% 138% at 50% -47%);
        width: 100%;
        position: absolute;
        top: -3px;
        height: 40px;
        background-color: #f6f4f1;
    }

    .hero-wrapper > img {
        object-position: center;
        width: 100%;
        object-fit: cover;
    }

    .hero-text {
        position: absolute;
        width: 30.5%;
        top: 50%;
        right: 9%;
        transform: translate(9%, -50%);
        font-size: 18px;
        line-height: 1.4;
        color: ${theme.colors['vida-white']};
    }

    .hero-text h2 {
        font-family: 'Museo', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 46px;
        line-height: 1.17;
    }

    .hero-text > div {
        padding-top: 16px;
    }

    .hero-text.with-image {
        bottom: 65%;
        top: auto;
        transform: translateY(65%);
        /* margin-bottom: 20px; */
    }

    .extra-image {
        position: absolute;
        bottom: -6%;
        right: 11%;
        height: 62%;
        transform: translate(11%, 6%);
    }

    .extra-image img {
        height: 100%;
        width: auto;
    }
`
