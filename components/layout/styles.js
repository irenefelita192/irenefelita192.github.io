import css from 'styled-jsx/css'

const url = process.env.config?.assetPrefix ?? ''

export default css.global`
    body {
        font-family: 'Roboto', sans-serif;
        color: black;
        scroll-behavior: smooth;
        overflow-x: hidden;
        line-height: 1;
    }

    .children-wrapper {
        margin-top: 0;
    }

    .children-wrapper.with-bg {
        margin-top: 80px;
    }

    .children-wrapper .wrapper {
        min-height: 48vh;
    }

    @media screen and (max-width: 1024px) {
        .children-wrapper .wrapper {
            min-height: 60vh;
        }
    }
`
