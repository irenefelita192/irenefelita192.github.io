import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /*banner Section - start*/
    .banner-section {
        background-color: #f3ebe4;
        padding: 80px 18%;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 36px;
        line-height: 1.17;
        text-align: center;
        color: ${theme.colors['vida-white']};
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: contain;
    }

    .banner-section.is-download {
        font-size: 30px;
        line-height: 1.13;
        background-position: bottom left;
    }

    .banner-desc {
        font-size: 16px;
        line-height: 1.37;
        padding-top: 12px;
    }

    a.banner-link {
        display: block;
        background: ${theme.colors['vida-white']};
        color: #015651;
        box-sizing: border-box;
        border-radius: 16px;
        padding: 17px 28px;
        margin-top: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.1;
        text-align: center;
        color: #015651;
    }

    .download-link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 0 0;
    }

    .download-link a {
        display: block;
        width: auto;
        height: 48px;
        padding-right: 20px;
    }

    .download-link a:last-child {
        padding-right: 0;
    }

    .download-link img {
        width: auto;
        height: 100%;
    }

    .banner-section.is-product.is-mobile .banner-link {
        margin-top: 72px;
    }

    @media screen and (max-width: 1200px) {
        .banner-section {
            font-size: 36px;
            line-height: 1.2;
            padding: 56px 10%;
            justify-content: flex-end;
        }

        a.banner-link {
            font-size: 20px;
            padding: 22px 28px;
        }

        a.banner-link {
            width: 100%;
        }
    }

    @media screen and (max-width: 850px) {
        .banner-section {
            font-size: 38px;
            padding: 56px 5%;
        }

        a.banner-link {
            font-size: 33px;
            padding: 4% 28px;
        }
    }

    @media screen and (max-width: 640px) {
        .banner-section {
            font-size: 34px;
        }

        a.banner-link {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 450px) {
        .banner-section {
            font-size: 26px;
        }

        a.banner-link {
            font-size: 18px;
            padding: 17px 28px;
        }
    }

    /*banner Section - end*/
`
