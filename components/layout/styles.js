import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'
const url = process.env.config?.assetPrefix ?? ''

export default css.global`
    @font-face {
        font-family: 'Museo';
        src: url('${url}/fonts/Museo300-Regular-webfont.woff2') format('woff2'),
            url('${url}/fonts/Museo300-Regular-webfont.woff') format('woff'),
            url('${url}/fonts/Museo300-Regular.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('${url}/fonts/Museo300-Italic-webfont.woff2') format('woff2'),
            url('${url}/fonts/Museo300-Italic-webfont.woff') format('woff'),
            url('${url}/fonts/Museo300-Italic.otf') format('opentype');
        font-weight: 300;
        font-style: italic;
    }
    @font-face {
        font-family: 'Museo';
        src: url('${url}/fonts/Museo500-Regular-webfont.woff2') format('woff2'),
            url('${url}/fonts/Museo500-Regular-webfont.woff') format('woff'),
            url('${url}/fonts/Museo500-Regular.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('${url}/fonts/Museo500-Italic-webfont.woff2') format('woff2'),
            url('${url}/fonts/Museo500-Italic-webfont.woff') format('woff'),
            url('${url}/fonts/Museo500-Italic.otf') format('opentype');
        font-weight: 500;
        font-style: italic;
    }
    @font-face {
        font-family: 'Museo';
        src: url('${url}/fonts/Museo700-Regular-webfont.woff2') format('woff2'),
            url('${url}/fonts/Museo700-Regular-webfont.woff') format('woff'),
            url('${url}/fonts/Museo700-Regular.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('${url}/fonts/Museo700-Italic-webfont.woff2') format('woff2'),
            url('${url}/fonts/Museo700-Italic-webfont.woff') format('woff'),
            url('${url}/fonts/Museo700-Italic.otf') format('opentype');
        font-weight: 700;
        font-style: italic;
    }

    body {
        font-family: 'Inter', sans-serif;
        color: ${theme.colors.black};
        scroll-behavior: smooth;
        overflow-x: hidden;
        line-height: 0;
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
