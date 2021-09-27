import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Third Section - start */
    .third-wrapper {
        position: relative;
    }

    .product-wrapper {
        display: none;
        grid-template-columns: 1fr 1fr;
        height: 100%;
        opacity: 0;
        transition: all 1s ease-in-out;
    }

    .product-wrapper.is-active {
        display: grid;
        opacity: 1;
    }

    .product-wrapper > div:first-child {
        display: flex;
        align-items: baseline;
        justify-content: center;
        flex-direction: column;
        color: ${theme.colors['vida-white']};
    }

    .product-wrapper > div:first-child h2 {
        padding: 0;
        margin: 0;
        /* font-family: Museo; */
        font-weight: 600;
        font-size: 44px;
        line-height: 1.05;
    }

    .product-wrapper > div:first-child > div:first-child {
        display: flex;
        align-items: flex-end;
        height: 90px;
        margin-bottom: 22px;
    }

    .product-wrapper > div:first-child > div {
        padding: 0 140px;
        font-size: 18px;
        line-height: 1.4;
        height: 78px;
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
            display: grid;
        }
        100% {
            opacity: 0;
            visibility: hidden;
        }
    }

    .product-wrapper.product-transition-enter {
        display: grid;
        opacity: 0.7;
    }
    .product-wrapper.product-transition-enter-active {
        opacity: 0.7;
    }
    .product-wrapper.product-transition-enter-done {
        opacity: 1;
    }

    .product-wrapper.product-transition-exit {
        opacity: 1;
        display: grid;
        position: absolute;
        top: 0;
    }
    .product-wrapper.product-transition-exit-active {
        opacity: 1;
        display: grid;
        position: absolute;
        top: 0;
    }
    .product-wrapper.product-transition-exit-done {
        opacity: 1;
        display: grid;
        position: absolute;
        top: 0;
        animation: fadeout 1s ease-in-out forwards;
    }

    /* Third Section - end */
`
