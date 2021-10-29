import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

const timeAnimation = 0.6
export default css`
    .layout {
        width: 100%;
        height: calc(100vh * 3);
        position: relative;
        line-height: 1;
    }

    .layout section {
        width: 100%;
        height: 100vh;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        transform: translateY(100vh);
        transition: all ${timeAnimation}s ease-in-out;

        z-index: 0;
    }

    .layout .section-content {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;
        color: white;
        font-size: 80px;
        font-weight: 600;
    }

    .layout section.last-section {
        display: block;
        overflow-y: auto;
    }

    .layout .full-height {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .layout .value-content {
        color: black;
        width: 100%;
        height: auto;

        /* position: fixed;
        top: 0;
        left: 0;
        right: 0; */

        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        font-size: 80px;
        font-weight: 600;

        z-index: 0;
    }

    .layout .s1 {
        transform: translateY(0);
        z-index: 4;
    }

    .layout .s2 {
        z-index: 3;
    }

    .layout .s3 {
        z-index: 2;
    }

    .layout .s4 {
        z-index: 1;
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

    /************************************* RESPONSIVE ***************************************/

    /* MOBILE */
    @media screen and (max-width: 576px) {
        body::-webkit-scrollbar {
            width: 0px;
            background: transparent;
            -webkit-appearance: none;
        }

        .layout .section-stick {
            right: 20px;
            bottom: 20px;
            transform: scale(0.7);
        }

        .layout section {
            font-size: 40px;
        }

        #author {
            left: 20px;
            bottom: 20px;
            font-size: 18px;
        }

        #author svg {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1024px) {
        /* .card-item img {
            width: 348px;
        } */

        .card-item.card-odd .card-content {
            padding-left: 80px;
        }

        .card-item.card-even .card-content {
            padding-right: 80px;
        }

        .is-mobile .hero-vida-text {
            font-size: 24px;
        }

        .is-mobile .hero-title {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 900px) {
        .card-item.card-odd,
        .card-item.card-even {
            flex-direction: column;
        }

        .is-mobile .hero-vida-text {
            width: 100%;
            font-weight: 400;
            font-size: 24px;
            line-height: 1.43;
            color: #f7f7f7;
            padding: 0;
            text-align: center;
        }

        .is-mobile .hero-title {
            font-size: 32px;
            line-height: 1.23;
            text-align: center;
            margin-top: 16px;
        }
    }

    @media screen and (max-width: 768px) {
        .hero-wrapper {
            background-position: bottom;
        }

        .hero-vida {
            display: block;
        }

        .content-wrapper {
            padding: 56px 30px;
            position: relative;
        }

        .is-mobile .hero-text {
            width: 100%;
            right: auto;
            left: 0;
            top: 0;
            padding: 20% 10% 0;
        }

        .founder-name {
            text-align: left;
            margin-top: 16px;
        }

        .founder-title {
            text-align: left;
        }

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
        .layout .section-content:first-child {
            background-color: #deb196;
        }

        .value-wrapper {
            padding: 140px 20px;
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

        .is-mobile .hero-vida-text {
            font-size: 19px;
        }

        .is-mobile .hero-title {
            font-size: 26px;
        }
    }

    /* @media screen and (max-width: 450px) {
        .card-title {
            font-size: 26px;
            line-height: 1.3;
        }

        .card-desc {
            font-weight: 500;
            font-size: 18px;
            line-height: 1.32;
        }
    } */

    @media screen and (min-width: 400px) and (max-height: 930px) {
        .is-mobile .hero-text {
            padding: 22% 18px 0;
            font-size: 18px;
        }

        .is-mobile .hero-title {
            font-size: 24px;
        }
    }

    @media screen and (max-height: 640px) {
        .hero-wrapper {
            background-position: center 60%;
        }

        .is-mobile .hero-text {
            padding: 80px 18px 0;
            font-size: 14px;
        }

        .is-mobile .hero-title {
            font-size: 22px;
        }
    }

    /* landscape */
    @media screen and (max-width: 1024px) and (max-height: 450px) {
        .hero-wrapper {
            background-position: bottom;
        }

        .hero-vida-text {
            width: 100%;
        }

        .hero-title {
            font-size: 26px;
        }

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
