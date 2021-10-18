import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Hero Header - start */
    .hero-wrapper {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center left;
        min-height: 620px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
    }

    .hero-vida {
        display: flex;
    }

    .hero-vida-logo {
        height: 48px;
        width: auto;
    }

    .hero-vida-logo img {
        width: auto;
        height: 100%;
    }

    .hero-text {
        position: absolute;
        right: 10%;
        width: 43%;
        line-height: 1.2;
        text-align: left;
    }

    .hero-vida-text {
        width: 68%;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        color: #f7f7f7;
    }

    .hero-title {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.31;
        margin-top: 16px;
    }

    .is-mobile .hero-text {
        width: 100%;
        right: auto;
        left: 0;
        top: 0;
        padding: 25% 18px 0;
        text-align: center;
    }

    .is-mobile .hero-vida-text {
        margin: 0 auto;
        font-size: 18px;
        line-height: 1.4;
    }

    .is-mobile .hero-title {
        font-size: 24px;
        line-height: 1.25;
    }

    .founder-name {
        text-align: left;
        font-weight: 500;
        margin-top: 16px;
    }

    .founder-title {
        font-weight: 300;
        text-align: left;
    }

    .portrait-founder {
        position: absolute;
        bottom: 24px;
        line-height: 1.2;
    }

    .portrait-founder .founder-name,
    .portrait-founder .founder-title {
        text-align: center;
    }
    /* Hero Header - end */

    /* content vision mission -start*/
    .content-wrapper {
        padding: 0 22%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 1.4;
        color: ${theme.colors['vida-white']};
        font-size: 24px;
        text-align: center;
        background-position: bottom;
        background-size: cover;
    }

    .content-wrapper > div:first-child {
        letter-spacing: 0.4em;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    /*vida value start*/
    .value-wrapper {
        padding: 140px 22%;
        background-color: ${theme.colors['light-sand']};
    }

    .value-title {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 1.3;
        text-align: center;
        color: ${theme.colors['vida-tan-dark']};
        margin-bottom: 85px;
    }

    .content-cards {
        position: relative;
        z-index: 2;
    }

    .card-item {
        display: flex;
        align-items: center;
        color: ${theme.colors['black30']};
        margin-bottom: 140px;
    }

    .card-content {
        padding: 0;
        margin: 0;
        width: 100%;
    }

    .card-item.card-odd {
        flex-direction: row;
    }

    .card-item.card-odd .card-content {
        padding-left: 112px;
    }

    .card-item.card-even {
        flex-direction: row-reverse;
    }

    .card-item.card-even .card-content {
        padding-right: 112px;
    }

    .card-item:last-child {
        margin-bottom: 0;
    }

    .card-item img {
        width: 44%;
        height: auto;
        border-radius: 24px;
    }

    .card-title {
        font-family: 'Museo', sans-serif;
        font-size: 28px;
        line-height: 1.2;
    }

    .card-desc {
        font-size: 18px;
        line-height: 1.33;
        margin-top: 8px;
        color: ${theme.colors.gray};
    }

    .card-desc-title {
        font-weight: 600;
        margin-top: 14px;
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
        color: ${theme.colors['vida-brokenwhite']};
        box-sizing: border-box;
        border-radius: 16px;
        font-size: 14px;
        line-height: 1.43;
        padding: 13px 62px;
        margin-top: 16px;
    }

    /*Bottom Section - end*/

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
        .value-wrapper {
            padding: 140px 14%;
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

    @media screen and (max-width: 450px) {
        .card-title {
            font-size: 26px;
            line-height: 1.3;
        }

        .card-desc {
            font-weight: 500;
            font-size: 18px;
            line-height: 1.32;
        }
    }

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

    @media screen and (max-width: 800px) and (max-height: 450px) {
        .hero-wrapper {
            background-position: -100px bottom;
        }

        .hero-vida-text {
            width: 100%;
        }

        .hero-title {
            font-size: 26px;
        }
    }
`
