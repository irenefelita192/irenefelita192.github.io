import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .download-link {
        display: block;
        width: auto;
        height: 62px;
        padding: 8px 0;
        text-align: center;
        border: 1px solid ${theme.colors['vida-black']};
        background: rgba(255, 255, 255, 0.62);
        box-sizing: border-box;
        border-radius: 11px;
    }

    .download-link img {
        width: auto;
        height: 100%;
    }
`
