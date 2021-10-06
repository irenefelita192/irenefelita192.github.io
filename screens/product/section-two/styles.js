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
        padding: 20px 20% 0;
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

    @media screen and (max-width: 1024px) {
        .highlight-wrapper {
            font-size: 32px;
            line-height: 1.3;
            height: 190px;
        }

        .highlight-wrapper > div {
            padding: 20px 40px 0;
        }

        .hero-wrapper:before {
            clip-path: ellipse(58% 142% at 50% -50%);
            height: 40px;
        }

        .hero-text {
            width: 100%;
            top: 10%;
            left: 0;
            transform: translate(0, -10%);
            padding: 0 10%;
            font-size: 36px;
            line-height: 1.2;
            text-align: center;
        }

        .hero-text h2 {
            font-size: 46px;
            line-height: 1.4;
        }

        .hero-text > div {
            padding-top: 8px;
        }

        .hero-text.with-image {
            bottom: auto;
            top: 10%;
            transform: translate(0, -10%);
        }

        .extra-image {
            bottom: -15%;
            left: 0;
            height: 47%;
            width: 100%;
            right: auto;
        }
    }

    @media screen and (max-width: 850px) {
        .highlight-wrapper {
            font-size: 32px;
            line-height: 1.3;
            height: 220px;
        }

        .highlight-wrapper > div {
            padding: 20px 40px 0;
        }

        .hero-wrapper:before {
            clip-path: ellipse(58% 142% at 50% -50%);
            height: 40px;
        }

        .hero-text {
            top: 7%;
            font-size: 33px;
        }

        .hero-text h2 {
            font-size: 42px;
        }
    }

    @media screen and (max-width: 768px) {
        .highlight-wrapper {
            font-size: 29px;
            line-height: 1.3;
            height: 220px;
        }

        .hero-text {
            top: 7%;
            font-size: 35px;
        }

        .hero-text h2 {
            font-size: 40px;
        }
    }

    @media screen and (max-width: 640px) {
        .highlight-wrapper {
            font-size: 26px;
            line-height: 1.3;
            height: 190px;
        }

        .hero-text {
            top: 7%;
            font-size: 24px;
        }

        .hero-text h2 {
            font-size: 36px;
        }
    }

    @media screen and (max-width: 450px) {
        .highlight-wrapper {
            font-size: 20px;
            line-height: 1.3;
            height: 190px;
        }

        .highlight-wrapper > div {
            padding: 10px 34px 0;
        }

        .hero-text {
            width: 100%;
            top: 10%;
            left: 0;
            transform: translate(0, -10%);
            padding: 0 25px;
            font-size: 18px;
            line-height: 1.2;
            text-align: center;
        }

        .hero-text h2 {
            font-size: 27px;
            line-height: 1.4;
        }

        .hero-text > div {
            padding-top: 8px;
        }

        .hero-text.with-image {
            bottom: auto;
            top: 10%;
            transform: translate(0, -10%);
        }

        .extra-image {
            bottom: -15%;
            left: 0;
            height: 47%;
            width: 100%;
            right: auto;
        }
    }
`
