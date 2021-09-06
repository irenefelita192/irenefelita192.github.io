import css from 'styled-jsx/css'

export default css`
    .hero-img-wrapper {
        overflow-x: auto;
        overflow-y: hidden;
        z-index: 10;
        height: auto;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
    }

    .hero-img {
        display: none;
        opacity: 0;
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }

    .default-hero-img {
        display: block;
    }

    .default-hero-img,
    .hero-img {
        width: auto;
        height: auto;
        max-width: 1280px;
        max-height: 800px;
    }

    .hero-img.is-active,
    .default-hero-img.is-active {
        opacity: 1;
        transform: translateX(0);
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }

    .hero-img.is-active {
        display: block;
    }

    .hero-title {
        position: absolute;
        top: 152px;
        left: 30px;
        font-weight: bold;
        font-size: 58px;
        line-height: 1.07;
        color: #ffffff;
        width: 40%;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
        opacity: 1;
        transition: 0.3s opacity ease, 0.3s left ease-in;
    }
    .bottom-wrapper {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: block;
        height: auto;
    }

    .bottom-wrapper div {
        height: 100%;
    }

    .stats-wrapper {
        width: 100%;
        z-index: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .stats-wrapper .columns {
        width: 90%;
        margin: 0 auto;
    }

    .stats-wrapper .column {
        margin: 0 8px;
        padding: 0;
        position: relative;
        cursor: pointer;
    }

    .stats-top {
        min-width: 264px;
        min-height: 63px;
        background: rgba(0, 0, 0, 0.2);
        font-weight: 600;
        font-size: 16px;
        line-height: 1.25;
        color: #ffffff;
        display: flex;
        align-items: center;
        padding: 0 0 0 24px;
    }

    .stats-top-desc {
        display: none;
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 100px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(50px);
        padding: 24px;
        font-size: 14px;
        line-height: 1.43;
        color: #ffffff;
    }

    .stats-bottom {
        position: relative;
        min-width: 264px;
        min-height: 100px;
        background: rgba(0, 0, 0, 0.3);
        border-top: 2px solid rgba(255, 255, 255, 0.5);
        padding: 15px 24px 24px;
        color: #ffffff;
    }

    .stats-num {
        font-weight: 300;
        font-size: 36px;
        line-height: 1.11;
    }

    .stats-wrapper .column:hover .stats-top {
        visibility: hidden;
    }

    .stats-wrapper .column:hover .stats-top-desc {
        display: block;
        height: auto;
    }

    .stats-wrapper .column:hover .stats-bottom {
        background: #a88836;
    }

    .stats-wrapper .column:hover .stats-bottom i {
        background-image: url(data:image/png;base64,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);
        background-size: contain;
        background-repeat: no-repeat;
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 24px;
    }

    .bottom-wrapper div.footer-wrapper {
        display: block;
        height: 42px;
    }

    .footer {
        height: 42px;
        padding: 0;
        margin: 0;
        font-size: 8px;
        line-height: 1.5;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }

    .footer span {
        z-index: 1;
    }

    .footer img {
        z-index: 1;
        height: 24px;
        padding-left: 8px;
    }

    .background-bottom {
        position: fixed;
        background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.65) 16.13%,
            rgba(0, 0, 0, 0.546) 57.63%,
            rgba(0, 0, 0, 0) 100%
        );
        height: 300px;
        width: 100%;
        bottom: 0;
        z-index: 0;
        pointer-events: none;
    }

    .background-overlay {
        position: fixed;
        background: #5a5a5a;
        height: 100%;
        width: 100%;
        bottom: 0;
        z-index: 0;
        mix-blend-mode: overlay;
        pointer-events: none;
    }

    .default-img-transition-enter {
        opacity: 1;
    }
    .default-img-transition-enter-active {
    }
    .default-img-transition-exit {
        opacity: 1;
    }
    .default-img-transition-exit-active {
        transition: opacity 200ms;
    }
    .default-img-transition-exit-done {
        position: absolute;
        top: 0;
        left: 0;
        height: auto !important;
    }

    .img-transition-enter.is-active {
        display: block;
        opacity: 0;
        transform: translateX(30px);
    }
    .img-transition-enter-active.is-active {
        opacity: 0;
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }
    .img-transition-enter-done.is-active {
        display: block;
        opacity: 1;
        transform: translateX(0);
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }
    .img-transition-exit.is-active {
        opacity: 1;
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }
    .img-transition-exit-active.is-active {
        opacity: 0;
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }

    .title-transition-enter {
        opacity: 0;
        transform: translateX(300px);
    }
    .title-transition-enter-active {
        opacity: 0;
        transform: translateX(0);
        transition: 0.5s opacity ease, 0.2s transform ease-in;
    }
    .title-transition-enter-done {
        opacity: 1;
        transform: translateX(0);
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }
    .title-transition-exit {
        opacity: 1;
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }
    .title-transition-exit-active {
        opacity: 0;
        transition: 0.3s opacity ease, 0.2s transform ease-in;
    }
    @media screen and (max-width: 1024px) {
        .hero-title {
            width: 50%;
        }

        .stats-top,
        .stats-bottom {
            min-width: 200px;
        }

        .stats-top {
            font-size: 14px;
        }

        .stats-num {
            font-size: 34px;
        }

        .stats-desc {
            font-size: 14px;
        }

        .stats-top-desc {
            bottom: 100px;
            width: calc(100% - 16px);
        }

        .stats-wrapper .column {
            padding: 0 8px 0;
        }
    }

    @media screen and (max-width: 768px) {
        .hero-title {
            width: 0;
            font-size: 40px;
        }

        .hero-title.is-active {
            width: 85%;
        }

        .background-bottom {
            position: fixed;
            background: linear-gradient(
                360deg,
                rgb(0 0 0 / 45%) 16.13%,
                rgb(0 0 0 / 35%) 57.63%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }

    @media screen and (max-width: 640px) {
        .hero-title {
            left: 50px;
        }
    }

    @media screen and (min-width: 1200px) {
        .default-hero-img,
        .hero-img {
            width: 100%;
            height: 100%;
            max-width: initial;
            max-height: initial;
        }
    }
`
