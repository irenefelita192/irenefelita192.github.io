import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'
import { constant } from './constant'

export default css`
    /* Hero Header - start */
    .hero-wrapper {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom right;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20%;
        background-color: #00d1c5;
        position: relative;
        min-height: 100vh;
    }

    .hero-image {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .hero-image img {
        width: 100%;
    }

    .hero-icon {
        position: absolute;
        transform: translate(0, 0);
        top: -15%;
        left: 0;
        width: 300px;
        height: 200px;
        transition: transform 0.1s linear;
        opacity: 0;
        z-index: 5;
        will-change: transform;
    }

    .hero-icon--inpatient.animate,
    .hero-icon--outpatient.animate,
    .hero-icon--maternity.animate,
    .hero-icon--dental.animate {
        opacity: 0;
    }

    .hero-icon--inpatient,
    .hero-icon--outpatient,
    .hero-icon--maternity,
    .hero-icon--dental {
        opacity: 1;
    }

    .hero-icon > div {
        transform-origin: center;
        transition: transform 0.3s ease-in;
        will-change: transform;
        text-align: left;
        width: 300px;
        height: 200px;
    }

    .hero-icon--inpatient.animate {
        animation: popout-inpatient 0.4s ease-in forwards;
        transform-origin: left;
    }

    .hero-icon--inpatient > div {
        top: ${constant.ipTop}%;
        left: ${constant.ipLeft}%;
        position: absolute;
        animation: float 10s linear infinite;
    }

    .hero-icon--inpatient.revolve > div {
        animation: 80s revolve-ip 0.5s linear infinite;
    }

    .hero-icon--inpatient.revolve {
        animation: 80s zIndex-ip 0.5s linear infinite;
    }

    .hero-icon--inpatient.revolve img {
        animation: float 10s linear infinite;
    }

    /*maternity*/
    .hero-icon--maternity {
        top: 0;
        left: -44%;
    }

    .hero-icon--maternity.animate {
        animation: 0.4s popout-maternity 0.1s ease-in forwards;
    }

    .hero-icon--maternity > div {
        top: ${constant.mTop}%;
        right: ${constant.mRight}%;
        position: absolute;
        text-align: right;
        animation: float-maternity 10s linear infinite;
    }

    .hero-icon--maternity.revolve > div {
        animation: 80s revolve-maternity 1s linear infinite;
    }

    .hero-icon--maternity.revolve {
        animation: 80s zIndex-maternity 1s linear infinite;
    }

    .hero-icon--maternity.revolve img {
        animation: float-maternity 10s linear infinite;
    }

    /* outpatient */
    .hero-icon--outpatient {
        top: 0;
        left: -44%;
    }

    .hero-icon--outpatient.animate {
        animation: 0.4s popout-outpatient 0.2s ease-in forwards;
    }

    .hero-icon--outpatient > div {
        top: ${constant.opTop}%;
        right: ${constant.opRight}%;
        position: absolute;
        text-align: right;
        animation: float-outpatient 10s linear infinite;
    }

    .hero-icon--outpatient.revolve > div {
        animation: 80s revolve-op 1s linear infinite;
    }

    .hero-icon--outpatient.revolve {
        animation: 80s zIndex-op 1s linear infinite;
    }

    .hero-icon--outpatient.revolve img {
        animation: float-outpatient 10s linear infinite;
    }

    /* dental */
    .hero-icon--dental.animate {
        transform-origin: left;
        animation: 0.4s popout-dental 0.3s ease-in forwards;
    }

    .hero-icon--dental > div {
        left: ${constant.dLeft}%;
        top: ${constant.dTop}%;
        position: absolute;
        animation: float-dental 10s linear infinite;
    }

    .hero-icon--dental.revolve > div {
        animation: 80s revolve-dental 1s linear infinite;
    }

    .hero-icon--dental.revolve {
        animation: 80s zIndex-dental 1s linear infinite;
    }

    .hero-icon--dental.revolve img {
        animation: float-dental 10s linear infinite;
    }

    @keyframes popout-inpatient {
        0% {
            opacity: 0.2;
            transform: translate(0, 2%) scale(0.3);
        }
        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-maternity {
        0% {
            opacity: 0.2;
            transform: translate(0, 0) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-outpatient {
        0% {
            opacity: 0.2;
            transform: translate(0, 5%) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-dental {
        0% {
            opacity: 0.2;
            transform: translate(-5%, 0) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes float {
        0% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        30% {
            transform-origin: left;
            transform: translate(2px, 2px) scale(1.1) rotate(10deg);
        }
        70% {
            transform-origin: left;
            transform: translate(4px, -2px) scale(0.95) rotate(10deg);
        }
        100% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    @keyframes float-maternity {
        0% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        20% {
            transform-origin: right;
            transform: translate(15px, 0) scale(1) rotate(-10deg);
        }
        60% {
            transform-origin: right;
            transform: translate(15px, 0) scale(1) rotate(-10deg);
        }
        100% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    @keyframes float-dental {
        0% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        20% {
            transform-origin: left;
            transform: translate(5px, -15px) scale(0.9) rotate(8deg);
        }
        85% {
            transform-origin: left;
            transform: translate(5px, -10px) scale(1.05) rotate(5deg);
        }
        100% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    @keyframes float-outpatient {
        0% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        50% {
            transform-origin: right;
            transform: translate(0, 0) scale(1.15) rotate(15deg);
        }
        70% {
            transform-origin: right;
            transform: translate(5px, -0) scale(1.08) rotate(5deg);
        }
        100% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    .hero-icon img {
        width: 54px;
        height: auto;
    }

    .hero-text {
        position: absolute;
        top: 25%;
        transform: translate(0, -25%);
        padding: 0 36px;
    }

    .hero-title h1 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 34px;
        line-height: 1.1;
        color: #fcfcfc;
        max-width: 700px;
        margin: 0;
        padding: 0;
    }

    .hero-desc {
        font-size: 22px;
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
        justify-content: end;
        background-color: #f4f1ee;
    }

    .second-wrapper {
        display: block;
        position: relative;
        padding: 0;
        line-height: 0;
        background-color: #f4f1ee;
        min-height: 100vh;
    }

    .second-text {
        position: absolute;
        top: 12%;
        z-index: 8;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0 36px;
    }

    .second-bg {
        width: 100%;
        position: absolute;
        bottom: 40px;
        z-index: 1;
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
        opacity: 0;
        position: absolute;
        width: 66%;
        z-index: 3;
        bottom: 39px;
        left: 66%;
        -webkit-transform: translateX(-54%);
        -ms-transform: translateX(-54%);
        transform: translateX(-65%);
        height: auto;
    }

    @keyframes revolve-ip {
        0% {
            transform: translate(0, 0);
            z-index: 4;
        }

        25% {
            transform: translate(5%, 85%);
        }

        50% {
            transform: translate(85%, 80%);
            z-index: 4;
        }

        75% {
            transform: translate(87%, -5%);
            z-index: 2;
        }

        100% {
            transform: translate(0, 0);
            z-index: 2;
        }
    }

    @keyframes zIndex-ip {
        0% {
            z-index: 4;
        }
        25% {
            z-index: 4;
        }

        50% {
            z-index: 4;
        }

        75% {
            z-index: 2;
        }

        100% {
            z-index: 2;
        }
    }

    @keyframes revolve-maternity {
        0% {
            transform: translate(0, 0);
            z-index: 2;
        }
        25% {
            transform: translate(-75%, 15%);
            z-index: 4;
        }

        50% {
            transform: translate(-80%, 95%);
            z-index: 4;
        }

        75% {
            transform: translate(2%, 80%);
            z-index: 4;
        }

        100% {
            transform: translate(0, 0);
            z-index: 2;
        }
    }

    @keyframes zIndex-maternity {
        0% {
            z-index: 2;
        }
        25% {
            z-index: 4;
        }

        50% {
            z-index: 4;
        }

        75% {
            z-index: 4;
        }

        100% {
            z-index: 2;
        }
    }

    @keyframes revolve-op {
        0% {
            transform: translate(0, 0);
            z-index: 2;
        }
        25% {
            transform: translate(-5%, -85%);
            z-index: 2;
        }

        50% {
            transform: translate(-78%, -85%);
            z-index: 4;
        }

        75% {
            transform: translate(-85%, 5%);
            z-index: 4;
        }

        100% {
            transform: translate(0, 0);
            z-index: 4;
        }
    }

    @keyframes zIndex-op {
        0% {
            z-index: 2;
        }
        25% {
            z-index: 2;
        }

        50% {
            z-index: 4;
        }

        75% {
            z-index: 4;
        }

        100% {
            z-index: 4;
        }
    }

    @keyframes revolve-dental {
        0% {
            transform: translate(0, 0);
            z-index: 4;
        }
        25% {
            transform: translate(85%, -5%);
            z-index: 4;
        }

        50% {
            transform: translate(88%, -90%);
            z-index: 2;
        }

        75% {
            transform: translate(5%, -85%);
            z-index: 2;
        }

        100% {
            transform: translate(0, 0);
            z-index: 4;
        }
    }

    @keyframes zIndex-dental {
        0% {
            z-index: 4;
        }
        25% {
            z-index: 4;
        }

        50% {
            z-index: 2;
        }

        75% {
            z-index: 2;
        }

        100% {
            z-index: 4;
        }
    }

    .second-title {
    }

    .second-title h2 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;

        font-size: 32px;
        line-height: 1.4;

        text-align: center;
        color: ${theme.colors['vida-black']};
    }

    .second-desc {
        max-width: 824px;
        padding: 10px;
        font-weight: normal;
        font-size: 18px;
        line-height: 1.4;
        text-align: center;
        color: ${theme.colors['gray']};
    }

    /* Second Section - end */
    @media screen and (max-height: 812px) {
        .second-title h2 {
            font-size: 28px;
        }
    }
    @media screen and (max-height: 700px) {
        .second-title h2 {
            font-size: 25px;
        }

        .second-desc {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 375px) {
        .second-text {
            top: 8%;
        }
    }
`
