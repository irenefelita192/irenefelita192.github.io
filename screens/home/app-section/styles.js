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

    .fourth-wrapper.is-mobile {
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr;
    }

    .fourth-wrapper.is-mobile .clip-wrapper {
        margin-top: 25%;
        width: 330px;
        height: 360px;
        position: relative;
        transform: translate(-50%, 0);
        top: 0;
        left: 50%;
    }

    .fourth-wrapper.is-mobile .clip-wrapper-inner {
        clip-path: ellipse(178px 186px at 51% 44%);
        /* clip-path: path(
            'M 190,397 C 0,80 -125,507 100,495 20,190 0,504.9341 0,400 V 10 H 29 390 Z'
        ); */
        /* clip-path: url(#svgPath); */
    }

    .fourth-wrapper.is-mobile .circle-after {
        top: 0;
    }

    .fourth-wrapper.is-mobile .circle {
        width: 100%;
        height: 100%;
        left: 0;
    }

    .fourth-wrapper.is-mobile .hp-image {
        width: 227px;
    }

    .fourth-wrapper.is-mobile .is-visible .hp-image {
        transform: translate(-50%, -5%);
    }

    .fourth-wrapper.is-mobile .is-visible .circle-after {
        opacity: 1;
        transform: rotate(90deg);
        transition: opacity 0.3s ease-in 0.6s, transform 4s ease-in-out;
        /* animation: 4s rotate 1s ease-in-out forwards; */
    }

    .fourth-wrapper.is-mobile > div:last-child h2 {
        font-size: 27px;
        line-height: 1.4;
        margin-bottom: 8px;
    }

    .fourth-wrapper.is-mobile > div:last-child {
        margin: 18% 24px 0;
        text-align: center;
        justify-content: flex-start;
        font-size: 15px;
    }

    .fourth-wrapper.is-mobile > div:last-child > div {
        margin-right: 0;
    }

    @media screen and (max-height: 812px) {
        .fourth-wrapper.is-mobile > div:last-child {
            font-size: 15px;
        }
        .fourth-wrapper.is-mobile > div:last-child h2 {
            font-size: 25px;
        }
    }

    @media screen and (max-height: 700px) {
        .fourth-wrapper.is-mobile > div:last-child {
            font-size: 12px;
        }
        .fourth-wrapper.is-mobile > div:last-child h2 {
            font-size: 22px;
        }

        //tambah ganti image size kalo screen width 700
    }

    /* Fourth Section - end */
`
