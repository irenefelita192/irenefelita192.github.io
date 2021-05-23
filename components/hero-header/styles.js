import css from 'styled-jsx/css'

export default css`
    .hero-wrapper {
        position: relative;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 300px;
        background-color: black;
    }

    .hero-wrapper.has-image {
        min-height: 0;
    }

    .hero-wrapper span {
        z-index: 1;
        position: absolute;
        font-weight: bold;
        font-size: 56px;
        line-height: 1.07;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }

    .hero-wrapper img {
        z-index: 1;
        width: 100%;
        height: auto;
    }

    .hero-wrapper .background-bottom {
        position: absolute;
        z-index: 1;
        background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.3) 53.17%,
            rgba(0, 0, 0, 0) 100%
        );
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1024px) {
        .hero-wrapper {
            min-height: 210px;
        }
    }

    @media screen and (max-width: 768px) {
        .hero-wrapper {
            min-height: 160px;
        }
    }

    @media screen and (max-width: 640px) {
        .hero-wrapper img {
            min-height: 200px;
            width: auto;
            object-fit: cover;
        }
    }
`
