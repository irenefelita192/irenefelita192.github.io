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
`
