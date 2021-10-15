import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .banner-section {
        background-color: #f3ebe4;
        padding: 80px 19%;
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
        color: #017d76;
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: contain;
    }

    @media screen and (max-width: 1024px) {
        .banner-section {
            font-size: 36px;
            line-height: 1.2;
            padding: 56px 10%;
            justify-content: flex-end;
        }
    }

    @media screen and (max-width: 850px) {
        .banner-section {
            font-size: 38px;
            padding: 56px 5%;
        }
    }

    @media screen and (max-width: 640px) {
        .banner-section {
            font-size: 34px;
        }
    }

    @media screen and (max-width: 450px) {
        .banner-section {
            font-size: 26px;
        }
    }
`
