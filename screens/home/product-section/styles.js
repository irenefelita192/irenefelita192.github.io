import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Third Section - start */
    .third-wrapper {
        /* height: 100vh; */
    }

    .product-wrapper {
        display: none;
        grid-template-columns: 1fr 1fr;
        height: 100%;
        opacity: 0;
    }

    .product-wrapper.is-active {
        display: grid;
        opacity: 1;
        animation: fadein 0.5s ease-in-out;
    }

    .product-wrapper > div:first-child {
        display: flex;
        align-items: baseline;
        justify-content: center;
        flex-direction: column;
        color: ${theme.colors['vida-white']};
    }

    .product-wrapper > div:first-child > h2 {
        padding: 0 168px 20px 168px;
        margin: 0;
        /* font-family: Museo; */
        font-weight: 600;
        font-size: 44px;
        line-height: 1.05;
    }

    .product-wrapper > div:first-child > div {
        padding: 0 168px;
        font-size: 18px;
        line-height: 1.4;
    }

    .product-wrapper > div:first-child > div:last-child {
        display: flex;
        margin-top: 24px;
    }

    .product-wrapper .btn-prev,
    .product-wrapper .btn-next {
        cursor: pointer;
    }

    .product-wrapper .btn-prev i,
    .product-wrapper .btn-next i {
        display: block;
        width: 44px;
        height: 44px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .product-wrapper .btn-prev {
        margin-right: 26px;
    }

    .product-wrapper .btn-navigation .disabled {
        cursor: default;
        opacity: 0.5;
    }

    .product-wrapper.is-active {
        opacity: 1;
    }

    @keyframes fadein {
        0% {
            opacity: 0.2;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.2;
        }
    } /* Third Section - end */
`
