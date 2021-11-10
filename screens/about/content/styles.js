import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

const timeAnimation = 0.6
export default css`
    .section-content {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;
        color: white;
        font-size: 80px;
        font-weight: 600;
        position: relative;
    }

    .section {
        padding: 0;
    }

    .section-content img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .section-text {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
        font-family: 'Museo', sans-serif;
        font-size: 52px;
        font-weight: 400;
        line-height: 1.2;
        text-align: left;
        width: 42%;
        margin: 0 12%;
        padding: 0;
        padding-top: 60px;
        color: ${theme.colors['vida-white']};
        pointer-events: none;
    }

    .first-section .section-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        font-weight: 700;
        text-align: center;
        width: 100%;
        padding: 0 12%;
        margin: 0;
    }

    .even-section .section-text {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        width: 42%;
        margin: 0 12%;
    }

    .section-text > div:nth-child(2) {
        font-size: 22px;
        line-height: 1.36;
        margin-top: 30px;
    }

    .section-text > div:nth-child(3) {
        font-family: 'Inter', serif;
        font-size: 16px;
        line-height: 1.5;
        margin-top: 2px;
    }

    .is-mobile .section-text {
        font-size: 24px;
        line-height: 1.2;
        padding: 0 16px;
        margin: 0;
        text-align: center;
        top: 100px;
        left: 50%;
        right: auto;
        transform: translate(-50%, 0);
        width: 100%;
    }

    .is-mobile.first-section .section-text {
        font-size: 40px;
        line-height: 1.17;
        padding: 0 16px;
        margin: 0;
        text-align: center;
        top: 50%;
        left: 50%;
        right: auto;
        transform: translate(-50%, -50%);
    }

    .is-mobile .section-text > div:nth-child(3) {
        font-family: 'Inter', serif;
        font-size: 16px;
        line-height: 1.37;
        margin-top: 2px;
    }

    /** Vida Value start **/
    .value-wrapper {
        padding: 140px 22%;
        background-color: #3989d7;
    }

    .value-title {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 41px;
        line-height: 1.3;
        text-align: center;
        color: ${theme.colors.white};
        margin-bottom: 85px;
    }

    .content-cards {
        position: relative;
        z-index: 2;
    }

    .card-item {
        display: flex;
        align-items: center;
        color: ${theme.colors.white};
        margin-bottom: 140px;
    }

    .card-content {
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: left;
    }

    .card-item.card-odd {
        flex-direction: row;
    }

    .card-item.card-odd .card-content {
        padding-left: 80px;
    }

    .card-item.card-even {
        flex-direction: row-reverse;
    }

    .card-item.card-even .card-content {
        padding-right: 80px;
    }

    .card-item:last-child {
        margin-bottom: 0;
    }

    .card-item img {
        max-height: 150px;
        width: auto;
    }

    .card-title {
        font-family: 'Museo', sans-serif;
        font-size: 32px;
        line-height: 1.2;
        font-weight: 700;
    }

    .card-desc {
        font-weight: normal;
        font-size: 16px;
        line-height: 1.4;
        margin-top: 12px;
        color: #aed7ff;
    }

    .card-desc-title {
        font-weight: 600;
        margin-top: 14px;
    }

    .is-mobile .section-text {
        font-size: 36px;
        line-height: 1.2;
        padding: 0 8%;
        margin: 0;
        text-align: center;
        top: 10%;
        left: 50%;
        right: auto;
        transform: translate(-50%, 0);
        width: 100%;
    }

    .is-mobile.first-section .section-text {
        font-size: 60px;
        line-height: 1.17;
        padding: 0 8%;
        margin: 0;
        text-align: center;
        top: 50%;
        left: 50%;
        right: auto;
        transform: translate(-50%, -50%);
    }

    .section-text > div:nth-child(2) {
        font-size: 20px;
        line-height: 1.2;
        margin-top: 30px;
    }

    .is-mobile .section-text > div:nth-child(2) {
        font-size: 30px;
        line-height: 1.2;
    }

    .is-mobile .section-text > div:nth-child(3) {
        font-family: 'Inter', serif;
        font-size: 24px;
        line-height: 1.37;
        margin-top: 2px;
    }

    /* MOBILE */

    @media screen and (max-width: 1024px) {
        .section-text {
            font-size: 42px;
        }

        .first-section .section-text {
            font-size: 42px;
        }

        .card-item.card-odd .card-content {
            padding-left: 80px;
        }

        .card-item.card-even .card-content {
            padding-right: 80px;
        }
    }

    @media screen and (max-width: 900px) {
        .value-wrapper {
            padding: 140px 12%;
        }
        /* .card-item.card-odd,
        .card-item.card-even {
            flex-direction: column;
        } */
    }

    @media screen and (max-width: 768px) {
        .card-item img {
            width: auto;
            height: auto;
            max-height: 200px;
        }

        /* .card-item.card-odd .card-content,
        .card-item.card-even .card-content {
            padding-left: 0;
            padding-right: 0;
            text-align: center;
            padding-top: 24px;
        } */

        .card-item {
            margin-bottom: 88px;
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
        .value-wrapper {
            padding: 140px 20px;
        }

        .card-item.card-odd,
        .card-item.card-even {
            flex-direction: column;
        }

        .card-item.card-odd .card-content,
        .card-item.card-even .card-content {
            padding-left: 0;
            padding-right: 0;
            padding-top: 30px;
            text-align: center;
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

        .card-item img {
            max-height: 100px;
        }

        .value-title {
            font-size: 44px;
            line-height: 1.14;
        }

        .value-desc {
            font-weight: 500;
            font-size: 18px;
            line-height: 1.33;
        }

        .vida-value .card-title {
            font-size: 24px;
            line-height: 1.31;
        }

        .vida-value .card-desc {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.37;
        }
    }

    /* @media screen and (min-width: 400px) and (max-height: 930px) {
        .is-mobile .hero-text {
            padding: 22% 18px 0;
            font-size: 18px;
        }

        .is-mobile .hero-title {
            font-size: 24px;
        }
    } */

    @media screen and (max-width: 450px) {
        .is-mobile .section-text {
            font-size: 24px;
            line-height: 1.2;
            top: 100px;
        }

        .is-mobile.first-section .section-text {
            font-size: 40px;
            line-height: 1.17;
            padding: 0 16px;
        }

        .is-mobile .section-text > div:nth-child(2) {
            font-size: 20px;
        }

        .is-mobile .section-text > div:nth-child(3) {
            font-size: 16px;
        }
    }

    @media screen and (max-height: 550px) {
        .is-mobile .section-text {
            font-size: 20px;
        }

        .is-mobile.first-section .section-text {
            font-size: 24px;
        }

        .is-mobile .section-text > div:nth-child(2) {
            font-size: 16px;
        }

        .is-mobile .section-text > div:nth-child(3) {
            font-size: 14px;
        }
    }

    /* landscape */
    @media screen and (max-width: 1024px) and (max-height: 450px) {
        .card-item img {
            width: auto;
            height: auto;
            max-height: 200px;
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
    }
`
