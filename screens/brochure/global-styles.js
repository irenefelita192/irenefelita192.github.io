import css from 'styled-jsx/css'

export default css.global`
    * {
        margin: 0;
        padding: 0;
    }

    .pdf-document {
        position: relative;
        z-index: 1;
        padding-top: 56px;
    }

    .pdf-page canvas {
        margin: 0 auto;
    }

    @media screen and (max-width: 640px) {
        .pdf-document {
            padding-top: 120px;
        }
    }
`
