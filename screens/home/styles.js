import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'
import { constant } from './constant'

export default css`
    /* Hero Header - start */
    .hero-wrapper {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom right;
        /* min-height: 900px; */
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20%;
        background-color: #00d1c5;
        position: relative;
    }

    .hero-image {
        position: absolute;
        bottom: 0;
        right: 0;
        max-width: 70%;
    }

    .hero-icon-all {
        position: absolute;
        transform: translate(${constant.iconPosX}%, ${constant.iconPosY}%);
        top: 10%;
        left: 0;
        height: auto;
        transition: transform 0.1s ease-in;
        z-index: 4;
        will-change: transform;
        transform-style: preserve-3d;
        width: ${constant.iconWidth}px;
        height: ${constant.iconHeight}px;
    }

    /* .hero-icon-all.revolve, */
    .hero-icon-all.revolve .hero-icon {
        transition: all 0.5s ease-in;
        /* transform: rotateX(-75deg); */
        /* transform-style: preserve-3d; */
        width: ${constant.secondIconWidth}px;
        height: ${constant.secondIconHeight}px;
    }

    .hero-icon-all.revolve {
        /* opacity: 0; */
        /* transform: rotateX(75deg); */
        animation: revolve-parent 10s linear infinite;
    }

    .hero-icon {
        position: absolute;
        transform: translate(0, 0);
        width: ${constant.iconWidth}px;
        height: ${constant.iconHeight}px;
        transition: transform 0.1s ease-in;
        opacity: 0;
        z-index: 10;
        will-change: transform;
        transform-style: preserve-3d;
    }

    .hero-icon--inpatient.animate {
        animation: popout-inpatient 0.5s ease-in forwards;
    }

    .hero-icon--inpatient > div {
        left: 0;
        top: 0;
        position: absolute;
        animation: float 10s linear infinite;
    }

    .hero-icon-all.revolve .hero-icon--inpatient {
        animation: revolve-ip 10s linear infinite;
    }

    /*maternity*/
    .hero-icon--maternity.animate {
        animation: popout-maternity 0.5s ease-in forwards;
    }

    .hero-icon--maternity > div {
        right: ${constant.mRight}%;
        top: ${constant.mTop}%;
        position: absolute;
        animation: float-maternity 10s linear infinite;
    }

    .hero-icon-all.revolve .hero-icon--maternity {
        /* transform: translate(190px, -85px) rotateX(75deg);
        transform-style: preserve-3d; */

        animation: revolve-m 10s linear infinite;
    }

    /* outpatient */

    .hero-icon--outpatient.animate {
        animation: popout-outpatient 0.5s ease-in forwards;
    }

    .hero-icon--outpatient > div {
        right: ${constant.opRight}%;
        bottom: ${constant.opBottom}%;
        position: absolute;
        animation: float-outpatient 10s linear infinite;
    }

    .hero-icon--outpatient.spin {
        transform: translate(190px, -85px) rotateX(75deg);
        transform-style: preserve-3d;
        animation: orbit 10s linear infinite;
    }

    /* dental */
    .hero-icon--dental.animate {
        animation: popout-dental 0.5s ease-in forwards;
    }

    .hero-icon--dental > div {
        left: ${constant.dLeft}%;
        bottom: ${constant.dBottom}%;
        position: absolute;
        animation: float-dental 10s linear infinite;
    }

    .hero-icon--dental.spin {
        transform: translate(190px, -85px) rotateX(75deg);
        transform-style: preserve-3d;
        animation: orbit 10s linear infinite;
    }

    .hero-icon--inpatient,
    .hero-icon--outpatient,
    .hero-icon--maternity,
    .hero-icon--dental {
        opacity: 1;
    }

    .hero-icon--inpatient img,
    .hero-icon--outpatient img,
    .hero-icon--maternity img,
    .hero-icon--dental img {
        height: 100%;
    }

    .hero-icon--inpatient.spin img,
    .hero-icon--maternity.spin img {
        transform: rotateX(-75deg);
    }

    @keyframes orbit {
        /* 0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        } */
        0% {
            transform: rotateZ(0deg) translate(0) rotateZ(0deg);
        }

        100% {
            transform: rotateZ(-360deg) translate(200px) rotateZ(360deg);
        }
    }

    @keyframes spinAround {
        0% {
            transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
        }

        100% {
            transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
        }
    }

    @keyframes popout-inpatient {
        0% {
            opacity: 0.2;
            /* transform: translate(0, -10%) scale(0.5) rotate(0.5turn); */
            transform: translate(-30%, -15%) scale(0.5);
        }

        /* 50% {
            transform: translate(0, -10%) scale(0.8) rotate(0.8);
        } */
        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-maternity {
        0% {
            opacity: 0.2;
            transform: translate(-30%, -15%) scale(0.5);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-outpatient {
        0% {
            opacity: 0.2;
            /* transform: translate(0, -10%) scale(0.5) rotate(0.5turn); */
            transform: translate(-30%, -15%) scale(0.5);
        }

        /* 50% {
            transform: translate(0, -10%) scale(0.8) rotate(0.8);
        } */
        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-dental {
        0% {
            opacity: 0.2;
            transform: translate(-30%, -15%) scale(0.5);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes float {
        0% {
            transform: translate(0, 0) scale(1);
        }
        50% {
            transform: translate(10px, -10px) scale(0.9);
        }
        70% {
            transform: translate(5px, -15px) scale(0.95);
        }
        100% {
            transform: translatey(0, 0) scale(1);
        }
    }

    @keyframes float-maternity {
        0% {
            transform: translate(0, 0) scale(1);
        }
        30% {
            transform: translate(-10px, -15px) scale(1.2);
        }
        60% {
            transform: translate(-10px, -15px) scale(1.1);
        }
        100% {
            transform: translatey(0, 0) scale(1);
        }
    }

    @keyframes float-dental {
        0% {
            transform: translate(0, 0) scale(1);
        }
        25% {
            transform: translate(10px, -20px) scale(0.8);
        }
        75% {
            transform: translate(5px, -10px) scale(0.9);
        }
        100% {
            transform: translatey(0, 0) scale(1);
        }
    }

    @keyframes float-outpatient {
        0% {
            transform: translate(0, 0) scale(1);
        }
        50% {
            transform: translate(-10px, -5px) scale(1.2);
        }
        70% {
            transform: translate(-10px, -15px) scale(1.1);
        }
        100% {
            transform: translatey(0, 0) scale(1);
        }
    }

    /* @keyframes popout-maternity {
        0% {
            opacity: 0.5;
            transform: translate(0, 0) scale(0.5) rotate(0.5turn);
        }

        50% {
            transform: translate(50px, -10px) scale(0.8) rotate(0.8);
        }
        100% {
            opacity: 1;
            transform: translate(190px, -85px) scale(1);
        }
    } */
    /* @keyframes popout-maternity {
        0% {
            opacity: 0.5;
            transform: translate(0, 0) scale(0.5) rotate(0.5turn);
        }

        50% {
            transform: translate(50px, -10px) scale(0.8) rotate(0.8);
        }
        100% {
            opacity: 1;
            transform: translate(190px, -85px) scale(1);
        }
    } */

    /* @keyframes popout-maternity {
        from {
            transform: translate(0, 0) scale(0.5);
        }
        to {
            transform: translate(190px, -85px) scale(1);
        }
    } */

    .hero-icon img {
        width: 100%;
        height: 100%;
    }

    .hero-text {
        position: absolute;
        top: 10%;
    }

    .hero-title h1 {
        font-family: 'Bree Serif', serif;
        font-size: 60px;
        line-height: 1.1;
        color: #fcfcfc;
        max-width: 700px;
        margin: 0;
        padding: 0;
    }

    .hero-desc {
        font-size: 18px;
        line-height: 1.4;
        margin-top: 10px;
        text-align: center;
    }

    .hero-button-text {
        font-weight: 600;
        font-size: 18px;
        line-height: 1;
        padding: 40px 0 12px;
    }

    .hero-button {
        display: flex;
    }

    .hero-button a {
        font-family: 'Bree Serif', serif;
        font-size: 14px;
        line-height: 1.43;
        padding: 13px 28px;
        background-color: #ffffff;
        border: 1px solid #cecece;
        box-sizing: border-box;
        border-radius: 16px;
        color: ${theme.colors['vida-black']};
        margin-right: 12px;
        transition: all 0.2s ease-in-out;
    }

    .hero-button a:hover {
        background: #00a59b;
        border: 1px solid #21837d;
        color: ${theme.colors['vida-brokenwhite']};
    }

    .hero-button a:last-child {
        margin-right: 0;
    }
    /* Hero Header - end */

    /* Second Section - start */
    .second-title-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f4f1ee;
    }

    .second-wrapper {
        display: block;
        position: relative;
        padding: 0;
        line-height: 0;
    }

    .overlay-wrapper {
        top: 0;
        /* transform: translate(0, -102%) rotateX(20deg);
        transform-style: preserve-3d; */
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .overlay-image {
        position: absolute;
        top: 0;
        left: 30%;
        z-index: 3;
        width: 47%;
        height: auto;
    }

    @keyframes revolve-ip {
        0% {
            transform: translate(0, 0) scale(1);
            z-index: 4;
        }
        25% {
            transform: translate(30px, 100%) scale(1.2);
            /* z-index: 1; */
        }

        50% {
            transform: translate(70%, 90%) scale(1.1);
            z-index: 4;
        }

        75% {
            transform: translate(70%, -10%);
            z-index: 1;
        }

        100% {
            transform: translate(0, 0);
            z-index: 1;
        }
    }

    @keyframes revolve-m {
        0% {
            transform: translate(0, 0) scale(1);
            z-index: 4;
        }
        25% {
            transform: translate(30px, 100%) scale(1.2);
            /* z-index: 1; */
        }

        50% {
            transform: translate(70%, 90%) scale(1.1);
            z-index: 4;
        }

        75% {
            transform: translate(70%, -10%);
            z-index: 1;
        }

        100% {
            transform: translate(0, 0);
            z-index: 1;
        }
    }

    @keyframes revolve-parent {
        0% {
            /* transform: rotateX(0); */
            z-index: 4;
        }
        25% {
            /* transform: rotateX(-1deg); */
        }

        50% {
            /* transform: rotateX(1deg); */
            z-index: 4;
        }

        75% {
            /* transform: rotateX(-1deg); */
            z-index: 1;
        }

        100% {
            /* transform: rotateX(1deg); */
            z-index: 1;
        }
    }

    .hero-icon-sc {
        position: absolute;
        /* transform: translate3d(50%, -50%, 0) rotateX(-20deg); */
        animation: revolve 5s linear infinite;
        transform-style: preserve-3d;
        width: 400px;
        height: 450px;
        z-index: 4;
    }

    .hero-icon-sc > div {
        /* transform: rotateX(-93deg); */
        position: absolute;
    }

    .hero-icon-sc--inpatient {
        top: 10%;
        left: 25%;
    }

    .hero-icon-sc--maternity {
        top: 10%;
        right: 0;
    }

    .hero-icon-sc--outpatient {
        bottom: 10%;
        right: 0;
    }

    .hero-icon-sc--dental {
        bottom: 10%;
        left: 0;
    }

    .second-title {
        max-width: 544px;
    }

    .second-title h2 {
        font-weight: 600;
        font-size: 44px;
        line-height: 1.1;
        text-align: center;
        color: #303030;
    }

    .second-desc {
        max-width: 824px;
        padding: 10px;
        font-weight: normal;
        font-size: 18px;
        line-height: 1.4;
        text-align: center;
        color: #7b7b7b;
    }

    /* Second Section - end */

    /*Bottom Section - start*/

    .bottom-section {
        background-color: #f3ebe4;
        height: 266px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Bree Serif', serif;
    }

    .bottom-title {
        font-size: 28px;
        line-height: 1.21;
    }

    .bottom-button a {
        display: block;
        background: ${theme.colors['vida-black']};
        border: 1px solid #000000;
        color: ${theme.colors['vida-brokenwhite']};
        box-sizing: border-box;
        border-radius: 16px;
        font-size: 14px;
        line-height: 1.43;
        padding: 13px 62px;
        margin-top: 16px;
        transition: all 0.2s ease-in-out;
    }

    .bottom-button a:hover {
        background: #00a59b;
        border: 1px solid #21837d;
        color: ${theme.colors['vida-brokenwhite']};
    }

    .hero-single-button {
        font-family: 'Bree Serif', serif;
        font-size: 14px;
        line-height: 1.43;
        padding: 17px 28px;
        background-color: #ffffff;
        border: 1px solid #cecece;
        box-sizing: border-box;
        border-radius: 16px;
        color: ${theme.colors['vida-black']};
        width: 100%;
        margin-top: 32px;
    }

    .hero-single-button a {
        color: ${theme.colors['vida-black']};
    }
    /*Bottom Section - end*/

    @media screen and (max-width: 1024px) {
        .card-item img {
            width: 348px;
        }

        .card-item.card-odd .card-content {
            padding-left: 32px;
        }

        .card-item.card-even .card-content {
            padding-right: 32px;
        }
    }

    @media screen and (max-width: 900px) {
        .card-item.card-odd,
        .card-item.card-even {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px) {
        .content-wrapper {
            padding: 56px 24px;
            position: relative;
        }

        .hero-wrapper {
            justify-content: flex-end;
            padding: 0 18px 56px;
        }

        .hero-title {
            font-size: 56px;
            line-height: 1.04;
        }

        .hero-desc {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.37;
        }

        .card-item img {
            width: 100%;
        }

        .card-item.card-odd .card-content,
        .card-item.card-even .card-content {
            padding-left: 0;
            padding-right: 0;
            text-align: center;
            padding-top: 24px;
        }

        .card-item {
            margin-bottom: 54px;
        }

        .bottom-section {
            background-color: #f3ebe4;
            height: 266px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: 'Bree Serif', serif;
            padding: 0 24px;
            text-align: center;
        }
    }

    @media screen and (max-width: 640px) {
        .hero-desc {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.37;
        }

        .card-title {
            font-size: 32px;
            line-height: 1.12;
        }

        .card-desc {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.37;
            margin-top: 12px;
        }
    }
`
