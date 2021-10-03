import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Third Section - start */
    .third-wrapper {
        position: relative;
    }

    .product-wrapper {
        display: none;
        grid-template-rows: 1fr auto;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: all 1s ease-in-out;
    }

    .product-wrapper.is-active {
        display: grid;
        opacity: 1;
    }

    .product-wrapper > div:last-child {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        color: ${theme.colors['vida-white']};
        padding: 25px 36px;
        position: relative;
        text-align: center;
    }

    .product-wrapper > div:last-child h2 {
        padding: 0;
        margin: 0;
        font-family: 'Museo', sans-serif;
        font-weight: 600;
        font-size: 26px;
        line-height: 1.2;
    }

    .product-wrapper > div:last-child > div:first-child {
        display: flex;
        align-items: flex-end;
        margin-bottom: 8px;
    }

    .product-wrapper > div:last-child > div {
        font-size: 18px;
        line-height: 1.2;
    }

    .product-wrapper .btn-navigation {
        display: flex;
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
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
        opacity: 0;
        transition: opacity 1s;
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

    @media screen and (max-height: 800px) {
        .product-wrapper > div:last-child {
            padding: 20px 24px;
        }

        .product-wrapper .btn-navigation {
            bottom: 25px;
        }

        .product-wrapper > div:last-child > div {
            font-size: 12px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 21px;
        }

        .product-wrapper .btn-prev i,
        .product-wrapper .btn-next i {
            width: 30px;
            height: 30px;
        }

        .product-wrapper .btn-prev {
            margin-right: 16px;
        }
    }

    @media screen and (max-height: 700px) {
        .product-wrapper > div:last-child {
            padding: 18px 24px;
        }

        .product-wrapper .btn-navigation {
            bottom: 18px;
        }

        .product-wrapper > div:last-child > div {
            font-size: 12px;
            margin-bottom: 4px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 19px;
        }
    }

    @media screen and (max-height: 650px) {
        .product-wrapper > div:last-child {
            padding: 15px 20px;
        }

        .product-wrapper .btn-navigation {
            bottom: 15px;
        }

        .product-wrapper > div:last-child > div {
            font-size: 11px;
            margin-bottom: 2px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 19px;
        }
    }

    @media screen and (max-height: 600px) {
        .product-wrapper > div:last-child {
            padding: 10px;
        }

        .product-wrapper .btn-navigation {
            bottom: 10px;
        }

        .product-wrapper > div:last-child > div {
            font-size: 11px;
            margin-bottom: 2px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 16px;
        }

        .product-wrapper .btn-prev i,
        .product-wrapper .btn-next i {
            width: 26px;
            height: 26px;
        }
    }

    @media screen and (min-width: 600px) {
        .product-wrapper > div:first-child > img {
            object-fit: cover;
            object-position: center;
            display: block;
            width: 100%;
            height: 100%;
        }

        .product-wrapper > div:last-child {
            padding: 24px 36px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 35px;
        }

        .product-wrapper > div :last-child > div {
            font-size: 22px;
        }

        .product-wrapper .btn-prev i,
        .product-wrapper .btn-next i {
            width: 45px;
            height: 45px;
        }
    }

    @media screen and (min-height: 1280px) {
        .product-wrapper > div:last-child {
            padding: 28px 36px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 42px;
        }

        .product-wrapper > div :last-child > div {
            font-size: 32px;
        }

        .product-wrapper .btn-prev i,
        .product-wrapper .btn-next i {
            width: 70px;
            height: 70px;
        }
    }

    @media screen and (min-width: 720px) {
        .product-wrapper > div:last-child {
            padding: 28px 36px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 40px;
        }

        .product-wrapper > div :last-child > div {
            font-size: 26px;
        }

        .product-wrapper .btn-prev i,
        .product-wrapper .btn-next i {
            width: 60px;
            height: 60px;
        }
    }

    @media screen and (min-width: 1024px) {
        .product-wrapper > div:last-child {
            padding: 32px 36px;
        }

        .product-wrapper > div:last-child h2 {
            font-size: 50px;
        }

        .product-wrapper > div :last-child > div {
            font-size: 32px;
        }

        .product-wrapper .btn-prev i,
        .product-wrapper .btn-next i {
            width: 90px;
            height: 90px;
        }
    }

    /* Third Section - end */
`
