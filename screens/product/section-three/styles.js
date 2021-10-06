import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'

export default css`
    .content {
        min-height: 400px;
    }

    .benefit-container {
        width: 100%;
        padding-top: 120px;
        perspective: 1800px;
    }

    .benefit-container.is-loaded {
        position: relative;
        display: block;
    }

    .benefit-group {
        padding: 0;
        display: flex;
        flex-direction: column;
        position: relative;
        transform-style: preserve-3d;
        height: 680px;
    }

    .benefit-group:first-child {
        margin-top: 0;
    }

    .item-odd {
        flex-direction: row-reverse;
    }

    .benefit-text-wrapper {
        position: absolute;
        height: 250px;
        z-index: 4;
        top: 50%;
        left: 15%;
        transform: translate(-15%, -50%);
        transition: all 0.1s linear;
        width: 33.75%;
    }

    .benefit-text {
        color: ${theme.colors['gray']};
        font-size: 18px;
        line-height: 1.33;
        text-align: left;
        opacity: 0;
    }

    .benefit-text h3 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 46px;
        line-height: 1.17;
        color: #f2d051;
        margin: 0;
        padding: 0;
    }

    .benefit-text > div {
        padding-top: 16px;
        width: 86%;
    }

    .item-even .benefit-text-wrapper {
        left: auto;
        right: 15%;
        transform: translate(15%, -50%);
    }

    .animate-text {
        animation: movetop 6s ease-in forwards;
    }

    .animate-benefit-image {
        animation: moveback 8s ease-in forwards;
    }

    @keyframes moveback {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(-50px, 40px);
        }
    }

    @keyframes movetop {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(0, -50px);
        }
    }

    .benefit-image {
        position: absolute;
        height: auto;
        width: 48%;
        z-index: 3;
        top: 0;
        right: 3%;
        opacity: 0;
    }

    .item-even .benefit-image {
        left: 3%;
        right: auto;
    }

    .benefit-image img {
        width: auto;
        height: 100%;
    }

    .is-show {
        display: block;
    }

    .benefit-group.is-visible .benefit-image,
    .benefit-group.is-visible .benefit-text {
        opacity: 1;
    }

    .benefit-group.animate-fadein .benefit-image img {
        opacity: 1;
        animation: fadein 0.5s ease-in forwards,
            moveright 0.5s cubic-bezier(0, 0.64, 0.17, 0.74) forwards;
    }

    .benefit-group.animate-fadein .benefit-text {
        opacity: 1;
        animation: fadein 0.5s ease-in forwards;
    }

    .benefit-group.item-odd.animate-fadein .benefit-image img {
        opacity: 1;
        animation: fadein 0.5s ease-in forwards,
            moveleft 0.5s cubic-bezier(0, 0.64, 0.17, 0.74) forwards;
    }

    .benefit-group.animate-fadeout .benefit-image {
        opacity: 0;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes moveright {
        0% {
            transform: translate(-200px, 100px);
        }
        100% {
            transform: translate(0, 0);
            /* transform: translate(50px, -50px); */
        }
    }

    @keyframes moveleft {
        from {
            transform: translate(100px, 50px);
        }
        to {
            transform: translate(0, 0);
            /* transform: translate(50px, -50px); */
        }
    }

    @media screen and (max-width: 1024px) {
        .benefit-container {
            padding-top: 40%;
        }

        .b-group {
            padding: 0;
            display: block;
            margin-bottom: 100px;
            opacity: 0;
        }

        .b-group.animate-fadein {
            opacity: 1;
            animation: fadein 0.5s ease-in forwards;
        }

        .b-image {
            width: 100%;
        }

        .b-image img {
            width: 100%;
        }

        .b-text {
            color: ${theme.colors['gray']};
            font-size: 36px;
            line-height: 1.2;
            text-align: center;
            padding: 16px 10%;
        }

        .b-text h3 {
            font-family: 'Museo', sans-serif;
            font-weight: 700;
            font-size: 46px;
            line-height: 1.34;
            color: #f2d051;
            margin: 0;
            padding: 0;
        }

        .b-text > div {
            padding-top: 8px;
        }
    }

    @media screen and (max-width: 850px) {
        .b-text {
            font-size: 33px;
            padding: 8px 5%;
        }

        .b-text h3 {
            font-size: 42px;
        }

        .b-text > div {
            padding-top: 8px;
        }
    }

    @media screen and (max-width: 768px) {
        .b-text {
            font-size: 35px;
            line-height: 1.2;
            text-align: center;
            padding: 8px 5%;
        }

        .b-text h3 {
            font-size: 40px;
            line-height: 1.34;
        }

        .b-text > div {
            padding-top: 8px;
        }
    }

    @media screen and (max-width: 640px) {
        .b-text {
            font-size: 35px;
            line-height: 1.2;
            text-align: center;
            padding: 8px 24px;
        }

        .b-text h3 {
            font-size: 40px;
            line-height: 1.34;
        }

        .b-text > div {
            padding-top: 8px;
        }
    }

    @media screen and (max-width: 450px) {
        .b-text {
            font-size: 18px;
            line-height: 1.2;
            text-align: center;
            padding: 8px 24px;
        }

        .b-text h3 {
            font-size: 27px;
            line-height: 1.34;
        }

        .b-text > div {
            padding-top: 8px;
        }
    }
`
