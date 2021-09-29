import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'

export default css.global`
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo300-Regular-webfont.woff2') format('woff2'),
            url('fonts/Museo300-Regular-webfont.woff') format('woff'),
            url('fonts/Museo300-Regular.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo300-Italic-webfont.woff2') format('woff2'),
            url('fonts/Museo300-Italic-webfont.woff') format('woff'),
            url('fonts/Museo300-Italic.otf') format('opentype');
        font-weight: 300;
        font-style: italic;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo500-Regular-webfont.woff2') format('woff2'),
            url('fonts/Museo500-Regular-webfont.woff') format('woff'),
            url('fonts/Museo500-Regular.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo500-Italic-webfont.woff2') format('woff2'),
            url('fonts/Museo500-Italic-webfont.woff') format('woff'),
            url('fonts/Museo500-Italic.otf') format('opentype');
        font-weight: 500;
        font-style: italic;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo700-Regular-webfont.woff2') format('woff2'),
            url('fonts/Museo700-Regular-webfont.woff') format('woff'),
            url('fonts/Museo700-Regular.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo700-Italic-webfont.woff2') format('woff2'),
            url('fonts/Museo700-Italic-webfont.woff') format('woff'),
            url('fonts/Museo700-Italic.otf') format('opentype');
        font-weight: 700;
        font-style: italic;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo900-Regular-webfont.woff2') format('woff2'),
            url('fonts/Museo900-Regular-webfont.woff') format('woff'),
            url('fonts/Museo900-Regular.otf') format('opentype');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo900-Italic-webfont.woff2') format('woff2'),
            url('fonts/Museo900-Italic-webfont.woff') format('woff'),
            url('fonts/Museo900-Italic.otf') format('opentype');
        font-weight: 900;
        font-style: italic;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo100-Regular-webfont.woff2') format('woff2'),
            url('fonts/Museo100-Regular-webfont.woff') format('woff'),
            url('fonts/Museo100-Regular.otf') format('opentype');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: url('fonts/Museo100-Italic-webfont.woff2') format('woff2'),
            url('fonts/Museo100-Italic-webfont.woff') format('woff'),
            url('fonts/Museo100-Italic.otf') format('opentype');
        font-weight: 100;
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
        margin-top: ${theme.header.height};
    }

    .children-wrapper.is-trans {
        margin-top: 0;
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
