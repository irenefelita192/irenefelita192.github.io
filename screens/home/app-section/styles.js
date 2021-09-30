import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Fourth Section - start */
    .fourth-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        line-height: 1;
        background-color: ${theme.colors['vida-brokenwhite']};
        position: relative;
    }

    .fourth-wrapper > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .fourth-wrapper > div:last-child {
        font-size: 18px;
        line-height: 1.33;
        color: ${theme.colors['vida-gray']};
        margin: 0 20% 0 10%;
    }

    .fourth-wrapper > div:last-child h2 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 44px;
        line-height: 1.05;
        padding: 0;
        margin: 0;
        margin-bottom: 20px;
        color: ${theme.colors['vida-black']};
    }

    .fourth-wrapper > div:last-child > div {
        margin-right: 25%;
    }

    .fourth-wrapper > div:first-child {
    }

    .bg-app-before,
    .bg-app-after,
    .app-image {
        display: block;
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translate(-25%, -50%);
        width: 38%;
    }

    .bg-app-before img,
    .bg-app-after img,
    .app-image img {
        width: 100%;
    }

    .clip-wrapper {
        border-radius: 50%;
        height: 550px;
        -webkit-tap-highlight-color: transparent;
        width: 550px;
        position: absolute;
        top: 60%;
        left: 20%;
        transform: translate(-20%, -60%);
    }

    .clip-wrapper-inner {
        clip-path: path(
            'M 560,400 C 500,10 810,574 262,550 85,524 0,372.931 10,360 V -300 H 300 590 Z'
        );
        /* clip-path: path(
            'M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z'
        ); */
        position: relative;
        transform-origin: 50%;
    }

    .circle {
        border-radius: 50%;
        cursor: pointer;
        height: 550px;
        left: 10px;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 550px;
        opacity: 1;
    }

    .circle-after {
        opacity: 0;
        top: 8px;
    }

    .hp-image {
        pointer-events: none;
        position: relative;
        transform-origin: 50% bottom;
        left: 50%;
        top: 0;
        width: 400px;
        transform: translate(-50%, 60px);
        transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .is-visible .hp-image {
        transform: translate(-50%, -11%);
    }

    .is-visible .circle-before {
        opacity: 0;
        transition: opacity 0.3s ease-in 1s;
    }

    .is-visible .circle-after {
        opacity: 1;
        transform: rotate(120deg);
        transition: opacity 0.3s ease-in 0.8s, transform 4s ease-in-out;
        /* animation: 4s rotate 1s ease-in-out forwards; */
    }

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(90deg);
        }
    }

    @media screen and (max-width: 1366px) {
        .clip-wrapper {
            height: 500px;
            width: 500px;
        }

        .clip-wrapper-inner {
            clip-path: path(
                'M 560,400 C 500,10 710,574 336,495 87,524 0,364.931 10,200 V -300 H 300 590 Z'
            );
        }

        .circle {
            height: 500px;
            width: 500px;
        }

        .hp-image {
            width: 360px;
        }
    }

    /* Fourth Section - end */
`
